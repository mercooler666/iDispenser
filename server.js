const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const chokidar = require('chokidar');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const os = require('os');
const QRCode = require('qrcode');
const { startTunnel, stopTunnel, getTunnelState } = require('./tunnel');

const PORT = 5050;
const SHARED_DIR = path.join(__dirname, 'shared');
const DISABLED_FILES_PATH = path.join(__dirname, 'disabled_files.json');
const PROMOTED_ADMINS_PATH = path.join(__dirname, 'promoted_admins.json');

const TEMP_UPLOADS_DIR = path.join(__dirname, '.temp_uploads');

if (!fs.existsSync(SHARED_DIR)) {
  fs.mkdirSync(SHARED_DIR, { recursive: true });
}
if (!fs.existsSync(TEMP_UPLOADS_DIR)) {
  fs.mkdirSync(TEMP_UPLOADS_DIR, { recursive: true });
}

// Cleanup incomplete temp upload parts older than 2 hours
function cleanupTempUploads() {
  try {
    if (!fs.existsSync(TEMP_UPLOADS_DIR)) return;
    const now = Date.now();
    for (const f of fs.readdirSync(TEMP_UPLOADS_DIR)) {
      const p = path.join(TEMP_UPLOADS_DIR, f);
      const stat = fs.statSync(p);
      if (now - stat.mtimeMs > 2 * 3600 * 1000) {
        fs.unlinkSync(p);
      }
    }
  } catch (e) {}
}
cleanupTempUploads();
setInterval(cleanupTempUploads, 3600 * 1000);

const uploadSessions = new Map();

// Load distribution blacklist
let disabledFiles = new Set();
try {
  if (fs.existsSync(DISABLED_FILES_PATH)) {
    const list = JSON.parse(fs.readFileSync(DISABLED_FILES_PATH, 'utf8'));
    disabledFiles = new Set(list);
  }
} catch (e) {}

function saveDisabledFiles() {
  try {
    fs.writeFileSync(DISABLED_FILES_PATH, JSON.stringify(Array.from(disabledFiles), null, 2));
  } catch (e) {}
}

// Load appointed administrators
let promotedAdmins = new Set();
try {
  if (fs.existsSync(PROMOTED_ADMINS_PATH)) {
    const list = JSON.parse(fs.readFileSync(PROMOTED_ADMINS_PATH, 'utf8'));
    promotedAdmins = new Set(list);
  }
} catch (e) {}

function savePromotedAdmins() {
  try {
    fs.writeFileSync(PROMOTED_ADMINS_PATH, JSON.stringify(Array.from(promotedAdmins), null, 2));
  } catch (e) {}
}

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());

// Detect primary local network IPv4 address
function getLocalIp() {
  const interfaces = os.networkInterfaces();
  const allIps = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        allIps.push({ name, address: iface.address });
      }
    }
  }

  const lanIp = allIps.find((i) => i.address.startsWith('192.168.'));
  if (lanIp) return lanIp.address;

  const tenIp = allIps.find((i) => i.address.startsWith('10.'));
  if (tenIp) return tenIp.address;

  const bClassIp = allIps.find((i) => /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(i.address));
  if (bClassIp) return bClassIp.address;

  return allIps.length > 0 ? allIps[0].address : 'localhost';
}

const LOCAL_IP = getLocalIp();
const LOCAL_URL = `http://${LOCAL_IP}:${PORT}`;
let localQrCode = '';

QRCode.toDataURL(LOCAL_URL, { margin: 1 })
  .then((url) => { localQrCode = url; })
  .catch(() => {});

// Emoji flag generator from ISO country code
function getCountryFlag(countryCode) {
  if (!countryCode || countryCode === 'LAN') return '🏠';
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

// User-Agent parser for device, OS and browser detection
function parseUserAgent(ua) {
  if (!ua) return { device: 'Computer', os: 'Unknown OS', browser: 'Browser' };

  let osName = 'Unknown OS';
  let device = 'PC';
  let browser = 'Browser';

  if (/windows phone/i.test(ua)) { osName = 'Windows Phone'; device = 'Smartphone'; }
  else if (/win/i.test(ua)) { osName = 'Windows'; device = 'PC'; }
  else if (/ipad/i.test(ua)) { osName = 'iPadOS'; device = 'Tablet (iPad)'; }
  else if (/iphone/i.test(ua)) { osName = 'iOS'; device = 'Smartphone (iPhone)'; }
  else if (/macintosh|mac os x/i.test(ua)) { osName = 'macOS'; device = 'Mac'; }
  else if (/android/i.test(ua)) { osName = 'Android'; device = 'Smartphone (Android)'; }
  else if (/linux/i.test(ua)) { osName = 'Linux'; device = 'PC (Linux)'; }

  if (/edg/i.test(ua)) { browser = 'Edge'; }
  else if (/chrome|crios/i.test(ua) && !/opr|opera/i.test(ua)) { browser = 'Chrome'; }
  else if (/firefox|fxios/i.test(ua)) { browser = 'Firefox'; }
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) { browser = 'Safari'; }
  else if (/opr|opera/i.test(ua)) { browser = 'Opera'; }

  return { device, os: osName, browser };
}

// Extract real client IP address
function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    const parts = forwarded.split(',');
    return parts[0].trim();
  }
  if (req.headers['cf-connecting-ip']) {
    return req.headers['cf-connecting-ip'].trim();
  }
  let ip = req.socket?.remoteAddress || req.connection?.remoteAddress || '127.0.0.1';
  if (ip.startsWith('::ffff:')) {
    ip = ip.replace('::ffff:', '');
  }
  return ip;
}

// Geolocation service
const geoCache = new Map();
let homeGeo = { country: 'Ukraine', countryCode: 'UA', city: 'Host Server (PC)', lat: 50.45, lon: 30.52, flag: '🏠' };

function resolveHomeGeo() {
  http.get('http://ip-api.com/json/', (res) => {
    let raw = '';
    res.on('data', (c) => raw += c);
    res.on('end', () => {
      try {
        const data = JSON.parse(raw);
        if (data.status === 'success') {
          homeGeo = {
            country: data.country,
            countryCode: data.countryCode,
            city: data.city,
            lat: data.lat,
            lon: data.lon,
            flag: getCountryFlag(data.countryCode)
          };
          broadcastAdminStats();
        }
      } catch (e) {}
    });
  }).on('error', () => {});
}
resolveHomeGeo();

function resolveIpGeo(ip) {
  if (!ip || ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return Promise.resolve({
      country: 'Local Network',
      countryCode: homeGeo.countryCode || 'LAN',
      city: 'Local Wi-Fi (Home)',
      lat: homeGeo.lat,
      lon: homeGeo.lon,
      flag: '🏠',
      isLocal: true
    });
  }

  if (geoCache.has(ip)) {
    return Promise.resolve(geoCache.get(ip));
  }

  return new Promise((resolve) => {
    http.get(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,city,lat,lon,isp`, (res) => {
      let raw = '';
      res.on('data', (c) => raw += c);
      res.on('end', () => {
        try {
          const data = JSON.parse(raw);
          if (data.status === 'success') {
            const geo = {
              country: data.country,
              countryCode: data.countryCode,
              city: data.city,
              lat: data.lat,
              lon: data.lon,
              isp: data.isp,
              flag: getCountryFlag(data.countryCode),
              isLocal: false
            };
            geoCache.set(ip, geo);
            return resolve(geo);
          }
        } catch (e) {}
        const fallback = { country: 'Internet', countryCode: '', city: 'Unknown', lat: 0, lon: 0, flag: '🌐', isLocal: false };
        geoCache.set(ip, fallback);
        resolve(fallback);
      });
    }).on('error', () => {
      resolve({ country: 'Internet', countryCode: '', city: 'Unknown', lat: 0, lon: 0, flag: '🌐', isLocal: false });
    });
  });
}

// Format bytes to human readable string
function formatBytes(bytes, decimals = 1) {
  if (!+bytes) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

// Active connected client sessions
const activeSessions = new Map();

// Throttled admin stats broadcaster to prevent WebSocket flood during high-speed streams
let adminBroadcastDebounce = null;
function scheduleAdminBroadcast(delay = 400) {
  if (adminBroadcastDebounce) return;
  adminBroadcastDebounce = setTimeout(() => {
    adminBroadcastDebounce = null;
    broadcastAdminStats();
  }, delay);
}

function getOrCreateSession(sid, req = null) {
  let session = activeSessions.get(sid);
  if (!session) {
    const isLocal = req ? isLocalNetwork(req) : false;
    const clientIp = req ? getClientIp(req) : '127.0.0.1';
    const ua = req ? parseUserAgent(req.headers['user-agent']) : { device: 'Unknown', os: 'Unknown', browser: 'Unknown' };
    const admin = req ? isAdmin(req) : isLocal;
    session = {
      sessionId: sid,
      ip: clientIp,
      device: ua.device,
      os: ua.os,
      browser: ua.browser,
      geo: { country: 'Internet', countryCode: '', city: 'Unknown', flag: '🌐', isLocal },
      role: admin ? 'admin' : 'user',
      isLocal,
      connectedAt: Date.now(),
      lastSeen: Date.now(),
      transfers: new Map()
    };
    activeSessions.set(sid, session);
  }
  if (!session.transfers) {
    session.transfers = new Map();
  }
  return session;
}

function updateTransfer(sid, transferId, data, req = null) {
  const session = getOrCreateSession(sid, req);
  let tr = session.transfers.get(transferId);
  const now = Date.now();
  if (!tr) {
    tr = {
      id: transferId,
      type: data.type || 'upload',
      fileName: data.fileName || 'file',
      totalBytes: data.totalBytes || 0,
      bytesTransferred: 0,
      percent: 0,
      speed: 0,
      speedFormatted: '0 B/s',
      startedAt: now,
      lastTime: now,
      lastBytes: 0
    };
    session.transfers.set(transferId, tr);
  }

  if (typeof data.bytesTransferred === 'number') {
    tr.bytesTransferred = data.bytesTransferred;
  }
  if (typeof data.percent === 'number') {
    tr.percent = data.percent;
  }
  if (data.totalBytes) {
    tr.totalBytes = data.totalBytes;
  }
  if (data.fileName) {
    tr.fileName = data.fileName;
  }

  const timeElapsed = (now - tr.lastTime) / 1000;
  if (timeElapsed >= 0.4) {
    const bytesDiff = tr.bytesTransferred - tr.lastBytes;
    const speed = Math.max(0, bytesDiff / timeElapsed);
    tr.speed = speed;
    tr.speedFormatted = `${formatBytes(speed)}/s`;
    tr.lastTime = now;
    tr.lastBytes = tr.bytesTransferred;
  }

  session.lastSeen = now;
  scheduleAdminBroadcast();
}

function removeTransfer(sid, transferId) {
  const session = activeSessions.get(sid);
  if (session && session.transfers) {
    session.transfers.delete(transferId);
    scheduleAdminBroadcast(100);
  }
}

function broadcastAdminStats() {
  const userList = Array.from(activeSessions.values()).map((s) => ({
    sessionId: s.sessionId,
    ip: s.ip,
    device: s.device,
    os: s.os,
    browser: s.browser,
    geo: s.geo,
    role: s.role,
    isLocal: s.isLocal,
    connectedAt: s.connectedAt,
    lastSeen: s.lastSeen,
    ping: typeof s.ping === 'number' ? s.ping : null,
    transfers: s.transfers ? Array.from(s.transfers.values()) : []
  }));

  const payload = JSON.stringify({
    type: 'admin_stats',
    data: {
      users: userList,
      homeGeo,
      disabledFiles: Array.from(disabledFiles)
    }
  });

  // Strictly broadcast to administrators only!
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client.isAdmin) {
      client.send(payload);
    }
  });
}

// Resolve path safely within SHARED_DIR, preventing path traversal
function resolveSafePath(subPath = '') {
  if (!subPath) return SHARED_DIR;
  const safeSub = path.normalize(subPath)
    .replace(/^(\.\.[\/\\])+/, '')
    .replace(/^[\\\/]+/, '');
  const resolved = path.resolve(SHARED_DIR, safeSub);
  if (!resolved.startsWith(SHARED_DIR)) {
    return SHARED_DIR;
  }
  return resolved;
}

// Calculate directory size and file count
function getDirStats(dirPath) {
  let size = 0;
  let fileCount = 0;
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dirPath, entry.name);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          const sub = getDirStats(full);
          size += sub.size;
          fileCount += sub.fileCount;
        } else {
          size += stat.size;
          fileCount++;
        }
      } catch (e) {}
    }
  } catch (e) {}
  return { size, fileCount };
}

// Retrieve folder contents with role-based visibility and breadcrumbs
function getFolderContents(subPath = '', isAdminView = false) {
  try {
    const targetDir = resolveSafePath(subPath);
    if (!fs.existsSync(targetDir) || !fs.statSync(targetDir).isDirectory()) {
      return { currentFolder: '', breadcrumbs: [{ name: 'Shared', path: '' }], items: [], totalSize: '0 B' };
    }

    const relativeFolder = path.relative(SHARED_DIR, targetDir).replace(/\\/g, '/');
    const entries = fs.readdirSync(targetDir, { withFileTypes: true });

    let totalBytes = 0;
    const items = entries.map((entry) => {
      if (entry.name.startsWith('.')) return null; // Hide system / temp files
      const fullEntryPath = path.join(targetDir, entry.name);
      try {
        const stats = fs.statSync(fullEntryPath);
        const isDir = stats.isDirectory();
        const relPath = path.relative(SHARED_DIR, fullEntryPath).replace(/\\/g, '/');
        const isDistributed = !disabledFiles.has(relPath) && !disabledFiles.has(entry.name);

        if (!isAdminView && !isDistributed) return null;

        let size = stats.size;
        let itemCount = 0;
        if (isDir) {
          const dirStats = getDirStats(fullEntryPath);
          size = dirStats.size;
          itemCount = dirStats.fileCount;
        }

        totalBytes += size;

        return {
          name: entry.name,
          relPath,
          isDir,
          itemCount,
          size,
          sizeFormatted: formatBytes(size),
          mtime: stats.mtime,
          ext: isDir ? 'folder' : (path.extname(entry.name).toLowerCase().replace('.', '') || 'file'),
          isDistributed
        };
      } catch (e) {
        return null;
      }
    }).filter(Boolean);

    // Sort: directories first (alphabetical), then files (by date descending)
    items.sort((a, b) => {
      if (a.isDir && !b.isDir) return -1;
      if (!a.isDir && b.isDir) return 1;
      if (a.isDir && b.isDir) return a.name.localeCompare(b.name);
      return b.mtime - a.mtime;
    });

    // Build breadcrumbs
    const breadcrumbs = [{ name: 'Shared', path: '' }];
    if (relativeFolder) {
      const parts = relativeFolder.split('/');
      let accum = '';
      parts.forEach((part) => {
        accum = accum ? `${accum}/${part}` : part;
        breadcrumbs.push({ name: part, path: accum });
      });
    }

    return {
      currentFolder: relativeFolder,
      breadcrumbs,
      items,
      totalSize: formatBytes(totalBytes)
    };
  } catch (e) {
    return { currentFolder: '', breadcrumbs: [{ name: 'Shared', path: '' }], items: [], totalSize: '0 B' };
  }
}

// Broadcast file list update signal
function broadcastFiles() {
  const payload = JSON.stringify({
    type: 'files_updated'
  });

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client.isAuthed) {
      client.send(payload);
    }
  });
}

function broadcastStatus() {
  const payload = JSON.stringify({
    type: 'status_updated',
    data: {
      localUrl: LOCAL_URL,
      localQr: localQrCode,
      tunnel: getTunnelState()
    }
  });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

// Chokidar: watch shared folder and subfolders
let watchDebounce = null;
const fileWatcher = chokidar.watch(SHARED_DIR, {
  ignoreInitial: true,
  depth: 10,
  ignored: /(^|[\/\\])\../,
  usePolling: true,
  interval: 1000
}).on('all', () => {
  clearTimeout(watchDebounce);
  watchDebounce = setTimeout(() => {
    broadcastFiles();
  }, 200);
});

function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;
  cookieHeader.split(';').forEach((cookie) => {
    let [name, ...rest] = cookie.split('=');
    name = name?.trim();
    if (!name) return;
    list[name] = decodeURIComponent(rest.join('=').trim());
  });
  return list;
}

function getQueryPin(req) {
  if (req && req.query && req.query.pin) {
    return req.query.pin;
  }
  if (req && req.url && req.url.includes('?')) {
    try {
      const parsed = new URL(req.url, 'http://localhost');
      return parsed.searchParams.get('pin');
    } catch (e) {}
  }
  return null;
}

function getSessionId(req, res) {
  const cookies = parseCookies(req.headers ? req.headers.cookie : '');
  let sid = cookies['dispenser_sid'];
  if (!sid) {
    sid = 'sid_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
    if (res && res.setHeader) {
      res.setHeader('Set-Cookie', `dispenser_sid=${sid}; Path=/; Max-Age=31536000; SameSite=Lax`);
    }
  }
  return sid;
}

// Rule: Local network clients = Administrators
function isLocalNetwork(req) {
  const host = (req.headers && req.headers.host) || '';
  if (
    host.includes('trycloudflare.com') ||
    host.includes('serveousercontent.com') ||
    host.includes('loca.lt') ||
    host.includes('lhr.life')
  ) {
    return false;
  }
  const ip = getClientIp(req);
  return (
    ip === '127.0.0.1' ||
    ip === '::1' ||
    ip === 'localhost' ||
    ip.startsWith('192.168.') ||
    ip.startsWith('10.') ||
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(ip)
  );
}

// Admin check
function isAdmin(req) {
  if (isLocalNetwork(req)) return true;
  const cookies = parseCookies(req.headers ? req.headers.cookie : '');
  const sid = cookies['dispenser_sid'];
  return !!(sid && promotedAdmins.has(sid));
}

// File access authorization check
function isAuthorized(req) {
  try {
    const tunnel = getTunnelState();
    const isLocal = isLocalNetwork(req);

    if (isLocal || !tunnel.active || !tunnel.pin) {
      return true;
    }

    const headers = req.headers || {};
    const cookies = parseCookies(headers.cookie || '');
    const userPin = headers['x-dispenser-pin'] || getQueryPin(req) || cookies['dispenser_pin'];
    return userPin === tunnel.pin;
  } catch (err) {
    return false;
  }
}

// Middleware
app.use((req, res, next) => {
  getSessionId(req, res);

  if (!req.path.startsWith('/api/')) {
    return next();
  }

  if (req.path === '/api/verify-pin' || req.path === '/api/status') {
    return next();
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'PIN code required' });
  }

  next();
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, SHARED_DIR),
  filename: (req, file, cb) => {
    const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8');
    cb(null, originalName);
  }
});
const upload = multer({ storage });

// API Endpoints
app.get('/api/status', async (req, res) => {
  const sid = getSessionId(req, res);
  const tunnel = getTunnelState();
  const isExternal = !isLocalNetwork(req);
  const authed = isAuthorized(req);
  const admin = isAdmin(req);
  const clientIp = getClientIp(req);
  let clientCountryCode = homeGeo.countryCode;
  try {
    const clientGeo = await resolveIpGeo(clientIp);
    if (clientGeo && clientGeo.countryCode) {
      clientCountryCode = clientGeo.countryCode;
    }
  } catch (e) {}

  res.json({
    sessionId: sid,
    localUrl: LOCAL_URL,
    localIp: LOCAL_IP,
    port: PORT,
    localQr: localQrCode,
    isExternal,
    isAdmin: admin,
    countryCode: homeGeo.countryCode,
    clientCountryCode,
    requiresPin: isExternal && tunnel.active && !authed,
    tunnel: isExternal && !admin
      ? { active: tunnel.active, connecting: tunnel.connecting, provider: tunnel.provider }
      : tunnel
  });
});

app.get('/api/files', (req, res) => {
  const admin = isAdmin(req);
  const folder = req.query.folder || '';
  const data = getFolderContents(folder, admin);
  res.json({
    ...data,
    isAdmin: admin
  });
});

// Download any file in any folder with real-time speed & progress tracking
app.get('/api/download/*', (req, res) => {
  const subPath = req.params[0];
  if (!subPath) return res.status(400).send('File path required');
  const fullPath = resolveSafePath(subPath);
  if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
    return res.status(404).send('File not found');
  }
  const relPath = path.relative(SHARED_DIR, fullPath).replace(/\\/g, '/');
  if (disabledFiles.has(relPath) && !isAdmin(req)) {
    return res.status(403).send('File temporarily hidden from distribution by administrator');
  }

  const sid = getSessionId(req, res);
  const transferId = 'dl_' + Math.random().toString(36).substring(2, 8);
  const fileName = path.basename(fullPath);
  let fileSize = 0;
  try {
    fileSize = fs.statSync(fullPath).size;
  } catch (e) {}

  updateTransfer(sid, transferId, {
    type: 'download',
    fileName,
    totalBytes: fileSize,
    bytesTransferred: 0,
    percent: 0
  }, req);

  const origWrite = res.write;
  let downloadedBytes = 0;
  res.write = function (chunk, ...args) {
    if (chunk && chunk.length) {
      downloadedBytes += chunk.length;
      const pct = fileSize > 0 ? Math.min(100, Math.round((downloadedBytes / fileSize) * 100)) : 0;
      updateTransfer(sid, transferId, {
        type: 'download',
        fileName,
        totalBytes: fileSize,
        bytesTransferred: downloadedBytes,
        percent: pct
      }, req);
    }
    return origWrite.apply(res, [chunk, ...args]);
  };

  const cleanup = () => {
    removeTransfer(sid, transferId);
  };

  res.on('finish', cleanup);
  res.on('close', cleanup);

  res.download(fullPath);
});

// Create new shared folder (Available to all users in 1 click!)
app.post('/api/folders/create', (req, res) => {
  const { parentFolder, folderName } = req.body || {};
  if (!folderName || typeof folderName !== 'string') {
    return res.status(400).json({ error: 'Folder name is required' });
  }
  const safeName = folderName.replace(/[<>:"/\\|?*\x00-\x1F]/g, '').trim();
  if (!safeName) {
    return res.status(400).json({ error: 'Invalid folder name' });
  }
  const parentDir = resolveSafePath(parentFolder || '');
  const targetPath = path.join(parentDir, safeName);
  if (fs.existsSync(targetPath)) {
    return res.status(400).json({ error: 'A folder with this name already exists' });
  }
  fs.mkdirSync(targetPath, { recursive: true });
  broadcastFiles();
  broadcastAdminStats();
  const relPath = path.relative(SHARED_DIR, targetPath).replace(/\\/g, '/');
  res.json({ success: true, folderName: safeName, relPath });
});

// Rename file or folder
app.post('/api/items/rename', (req, res) => {
  const { oldRelPath, newName } = req.body || {};
  if (!oldRelPath || !newName) {
    return res.status(400).json({ error: 'Missing parameters' });
  }
  const safeNewName = newName.replace(/[<>:"/\\|?*\x00-\x1F]/g, '').trim();
  if (!safeNewName) {
    return res.status(400).json({ error: 'Invalid name' });
  }
  const oldFullPath = resolveSafePath(oldRelPath);
  if (!fs.existsSync(oldFullPath) || oldFullPath === SHARED_DIR) {
    return res.status(404).json({ error: 'Item not found' });
  }
  const parentDir = path.dirname(oldFullPath);
  const newFullPath = path.join(parentDir, safeNewName);
  if (fs.existsSync(newFullPath)) {
    return res.status(400).json({ error: 'An item with this name already exists' });
  }
  fs.renameSync(oldFullPath, newFullPath);

  if (disabledFiles.has(oldRelPath)) {
    disabledFiles.delete(oldRelPath);
    const newRelPath = path.relative(SHARED_DIR, newFullPath).replace(/\\/g, '/');
    disabledFiles.add(newRelPath);
    saveDisabledFiles();
  }

  broadcastFiles();
  broadcastAdminStats();
  res.json({ success: true });
});

// Delete file or folder (Admin only)
app.delete('/api/items', (req, res) => {
  if (!isAdmin(req)) {
    return res.status(403).json({ error: 'Deleting is restricted to administrators' });
  }
  const itemPath = req.query.path || (req.body && req.body.path);
  if (!itemPath) return res.status(400).json({ error: 'Missing path' });

  const fullPath = resolveSafePath(itemPath);
  if (!fs.existsSync(fullPath) || fullPath === SHARED_DIR) {
    return res.status(404).json({ error: 'Item not found' });
  }

  try {
    if (fileWatcher) {
      fileWatcher.unwatch(fullPath);
    }
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 });
    } else {
      fs.unlinkSync(fullPath);
    }
  } catch (err) {
    console.error('[DELETE ERROR]:', err.message);
    return res.status(500).json({ error: 'Failed to delete: ' + err.message });
  }

  disabledFiles.delete(itemPath);
  saveDisabledFiles();

  broadcastFiles();
  broadcastAdminStats();
  res.json({ success: true });
});

// Toggle distribution for any file or folder (Admin only)
app.post('/api/files/toggle-distribution', (req, res) => {
  if (!isAdmin(req)) {
    return res.status(403).json({ error: 'Administrator access required' });
  }
  const itemPath = req.body.path;
  if (!itemPath) return res.status(400).json({ error: 'Missing path' });

  if (disabledFiles.has(itemPath)) {
    disabledFiles.delete(itemPath);
  } else {
    disabledFiles.add(itemPath);
  }
  saveDisabledFiles();
  broadcastFiles();
  broadcastAdminStats();
  res.json({ success: true, isDistributed: !disabledFiles.has(itemPath) });
});

const chunkMulter = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 30 * 1024 * 1024 }
});

app.post('/api/upload', upload.array('files'), (req, res) => {
  broadcastFiles();
  res.json({ success: true, count: req.files ? req.files.length : 0 });
});

// Chunked upload endpoint with folder destination support
app.post('/api/upload-chunk', chunkMulter.single('chunk'), (req, res) => {
  if (!req.file || !req.file.buffer) {
    return res.status(400).json({ error: 'No chunk data received' });
  }

  const uploadId = (req.body.uploadId || '').replace(/[^a-zA-Z0-9_-]/g, '');
  if (!uploadId) {
    return res.status(400).json({ error: 'Invalid uploadId' });
  }

  const chunkIndex = parseInt(req.body.chunkIndex, 10);
  const totalChunks = parseInt(req.body.totalChunks, 10);
  const chunkSize = parseInt(req.body.chunkSize, 10) || (5 * 1024 * 1024);

  if (isNaN(chunkIndex) || isNaN(totalChunks)) {
    return res.status(400).json({ error: 'Invalid chunk index or total' });
  }

  const tempFilePath = path.join(TEMP_UPLOADS_DIR, `${uploadId}.part`);

  try {
    const offset = chunkIndex * chunkSize;
    const exists = fs.existsSync(tempFilePath);
    const fd = fs.openSync(tempFilePath, exists ? 'r+' : 'w');
    fs.writeSync(fd, req.file.buffer, 0, req.file.buffer.length, offset);
    fs.closeSync(fd);

    let session = uploadSessions.get(uploadId);
    if (!session) {
      session = {
        received: new Set(),
        totalChunks,
        fileName: req.body.fileName,
        totalSize: parseInt(req.body.totalSize, 10) || 0
      };
      uploadSessions.set(uploadId, session);
    }
    session.received.add(chunkIndex);

    // Track active upload transfer in real-time per user session
    const sid = getSessionId(req, res);
    let rawName = session.fileName || req.body.fileName || `file_${Date.now()}`;
    try {
      rawName = Buffer.from(rawName, 'latin1').toString('utf8');
    } catch (e) {}
    const safeName = path.basename(rawName);

    const loadedBytes = session.received.size * chunkSize;
    const clampedBytes = Math.min(session.totalSize || loadedBytes, loadedBytes);
    const percent = totalChunks > 0 ? Math.min(99, Math.round((session.received.size / totalChunks) * 100)) : 0;

    updateTransfer(sid, uploadId, {
      type: 'upload',
      fileName: safeName,
      totalBytes: session.totalSize,
      bytesTransferred: clampedBytes,
      percent
    }, req);

    // If all chunks received, assemble and place into destination folder
    if (session.received.size >= totalChunks) {
      const targetFolder = resolveSafePath(req.body.folder || '');
      const finalPath = path.join(targetFolder, safeName);

      if (fs.existsSync(finalPath)) {
        fs.unlinkSync(finalPath);
      }
      fs.renameSync(tempFilePath, finalPath);
      uploadSessions.delete(uploadId);
      removeTransfer(sid, uploadId);

      broadcastFiles();
      broadcastAdminStats();
      return res.json({ success: true, done: true, fileName: safeName });
    }

    return res.json({ success: true, done: false, chunkIndex });
  } catch (err) {
    console.error('[CHUNK UPLOAD ERROR]:', err.message);
    return res.status(500).json({ error: 'Chunk write error: ' + err.message });
  }
});

// Ping endpoint
app.get('/api/ping', (req, res) => {
  res.json({ pong: Date.now() });
});

// Promote / Demote user role (Admin only)
app.post('/api/admin/promote-user', (req, res) => {
  if (!isAdmin(req)) {
    return res.status(403).json({ error: 'Administrator access required' });
  }
  const { sessionId, role } = req.body;
  if (!sessionId) {
    return res.status(400).json({ error: 'Missing sessionId' });
  }

  if (role === 'admin') {
    promotedAdmins.add(sessionId);
  } else {
    promotedAdmins.delete(sessionId);
  }
  savePromotedAdmins();

  const session = activeSessions.get(sessionId);
  if (session) {
    session.role = (session.isLocal || promotedAdmins.has(sessionId)) ? 'admin' : 'user';
  }

  // Notify target socket about role change
  wss.clients.forEach((client) => {
    if (client.sessionId === sessionId) {
      client.isAdmin = promotedAdmins.has(sessionId);
      client.send(JSON.stringify({
        type: 'role_changed',
        data: { role: client.isAdmin ? 'admin' : 'user' }
      }));
    }
  });

  broadcastFiles();
  broadcastAdminStats();
  res.json({ success: true });
});

app.post('/api/tunnel/toggle', (req, res) => {
  if (!isAdmin(req)) {
    return res.status(403).json({ error: 'Tunnel control is restricted to administrators' });
  }
  const { provider } = req.body || {};
  const state = getTunnelState();
  if (state.active || state.connecting) {
    stopTunnel(broadcastStatus);
  } else {
    startTunnel(PORT, provider || 'serveo', broadcastStatus);
  }
  res.json({ success: true });
});

app.post('/api/verify-pin', (req, res) => {
  const { pin } = req.body;
  const tunnel = getTunnelState();
  if (tunnel.active && tunnel.pin === pin) {
    res.setHeader('Set-Cookie', `dispenser_pin=${pin}; Path=/; Max-Age=86400; SameSite=Lax`);
    return res.json({ valid: true });
  }
  res.status(400).json({ valid: false, error: 'Invalid PIN code' });
});

app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection handling
wss.on('connection', async (ws, req) => {
  const sid = getSessionId(req);
  const admin = isAdmin(req);
  const authed = isAuthorized(req);
  const clientIp = getClientIp(req);
  const uaParsed = parseUserAgent(req.headers['user-agent']);
  const isLocal = isLocalNetwork(req);

  ws.sessionId = sid;
  ws.isAdmin = admin;
  ws.isAuthed = authed;

  // Resolve client geolocation asynchronously
  const geo = await resolveIpGeo(clientIp);

  // Register session
  activeSessions.set(sid, {
    sessionId: sid,
    ip: clientIp,
    device: uaParsed.device,
    os: uaParsed.os,
    browser: uaParsed.browser,
    geo,
    role: admin ? 'admin' : 'user',
    isLocal,
    connectedAt: Date.now(),
    lastSeen: Date.now()
  });

  if (!authed) {
    ws.send(JSON.stringify({
      type: 'auth_required',
      data: { message: 'PIN code required' }
    }));
  } else {
    const rootFolder = getFolderContents('', admin);
    ws.send(
      JSON.stringify({
        type: 'init',
        data: {
          files: rootFolder.items,
          currentFolder: rootFolder.currentFolder,
          breadcrumbs: rootFolder.breadcrumbs,
          isAdmin: admin,
          totalSize: rootFolder.totalSize,
          status: {
            localUrl: LOCAL_URL,
            localQr: localQrCode,
            tunnel: getTunnelState(),
            isAdmin: admin,
            countryCode: homeGeo.countryCode
          }
        }
      })
    );
  }

  // Handle client ping messages
  ws.on('message', (raw) => {
    try {
      const msg = JSON.parse(raw);
      if (msg.type === 'client_ping') {
        ws.send(JSON.stringify({ type: 'server_pong', t: msg.t }));
        if (typeof msg.ping === 'number') {
          const s = activeSessions.get(sid);
          if (s) {
            s.ping = msg.ping;
            s.lastSeen = Date.now();
          }
        }
      }
    } catch (e) {}
  });

  ws.on('close', () => {
    let hasOtherSockets = false;
    wss.clients.forEach((c) => {
      if (c !== ws && c.sessionId === sid && c.readyState === WebSocket.OPEN) {
        hasOtherSockets = true;
      }
    });
    if (!hasOtherSockets) {
      activeSessions.delete(sid);
      broadcastAdminStats();
    }
  });
});

// Configure server socket timeouts for large file transfers
server.timeout = 0; // Infinite timeout for long file streams
server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;

// Periodically clean up stale transfers (e.g. aborted without close event)
setInterval(() => {
  const now = Date.now();
  let changed = false;
  activeSessions.forEach((s) => {
    if (s.transfers && s.transfers.size > 0) {
      s.transfers.forEach((tr, id) => {
        if (now - (tr.lastTime || 0) > 15000) {
          s.transfers.delete(id);
          changed = true;
        }
      });
    }
  });
  if (changed) {
    scheduleAdminBroadcast(100);
  }
}, 5000);

// Periodically refresh stats for admins
setInterval(() => {
  if (wss.clients.size > 0) {
    broadcastAdminStats();
  }
}, 5000);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`⚡ iDispenser Server Running!`);
  console.log(`💻 Localhost (Admin):   http://localhost:${PORT}`);
  console.log(`📱 Local Wi-Fi (Admin): ${LOCAL_URL}`);
  console.log(`📂 Shared Directory:    ${SHARED_DIR}`);
  console.log(`======================================================\n`);
});

process.on('uncaughtException', (err) => {
  console.error('[SERVER ERROR (handled)]:', err.message);
});
process.on('unhandledRejection', (reason) => {
  console.error('[UNHANDLED REJECTION]:', reason);
});
