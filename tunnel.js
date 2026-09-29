const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const QRCode = require('qrcode');

const BIN_DIR = path.join(__dirname, 'bin');
const CLOUDFLARED_PATH = path.join(BIN_DIR, 'cloudflared.exe');
const DOWNLOAD_URL = 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe';

let tunnelProcess = null;
let ltInstance = null;

let tunnelState = {
  active: false,
  connecting: false,
  provider: 'serveo', // 'serveo' | 'cloudflare' | 'localtunnel'
  url: null,
  pin: null,
  qrCode: null,
  error: null
};

// Check and download cloudflared.exe if needed
function ensureCloudflared(onProgress) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(CLOUDFLARED_PATH)) {
      return resolve(CLOUDFLARED_PATH);
    }
    if (!fs.existsSync(BIN_DIR)) {
      fs.mkdirSync(BIN_DIR, { recursive: true });
    }
    onProgress('Downloading official cloudflared binary...');
    const file = fs.createWriteStream(CLOUDFLARED_PATH);

    function download(url) {
      https.get(url, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          return download(response.headers.location);
        }
        if (response.statusCode !== 200) {
          return reject(new Error(`Download failed: HTTP ${response.statusCode}`));
        }
        response.pipe(file);
        file.on('finish', () => file.close(() => resolve(CLOUDFLARED_PATH)));
      }).on('error', (err) => {
        fs.unlink(CLOUDFLARED_PATH, () => {});
        reject(err);
      });
    }
    download(DOWNLOAD_URL);
  });
}

// 1. Serveo Tunnel (Fastest HTTPS, built-in OpenSSH)
function startServeoTunnel(port, pin, broadcastUpdate) {
  tunnelProcess = spawn('ssh', [
    '-o', 'StrictHostKeyChecking=no',
    '-o', 'ServerAliveInterval=30',
    '-R', `80:127.0.0.1:${port}`,
    'serveo.net'
  ]);

  tunnelProcess.stdout.on('data', async (data) => {
    const text = data.toString();
    const match = text.match(/https:\/\/[a-zA-Z0-9-]+\.serveousercontent\.com/);
    if (match && !tunnelState.url) {
      tunnelState.url = match[0];
      tunnelState.active = true;
      tunnelState.connecting = false;
      tunnelState.error = null;
      tunnelState.qrCode = await QRCode.toDataURL(tunnelState.url, { margin: 1 });
      broadcastUpdate();
    }
  });

  tunnelProcess.stderr.on('data', (data) => {
    const text = data.toString();
    if (text.includes('Permission denied') || text.includes('Connection refused')) {
      tunnelState.error = text;
      broadcastUpdate();
    }
  });

  tunnelProcess.on('close', () => stopTunnel(broadcastUpdate));
  tunnelProcess.on('error', (err) => {
    tunnelState.error = 'SSH Error: ' + err.message;
    tunnelState.connecting = false;
    tunnelState.active = false;
    broadcastUpdate();
  });
}

// 2. Cloudflare Tunnel
function startCloudflareTunnel(port, pin, broadcastUpdate) {
  ensureCloudflared((msg) => {
    tunnelState.error = msg;
    broadcastUpdate();
  })
    .then((binPath) => {
      tunnelState.error = 'Connecting to Cloudflare edge...';
      tunnelProcess = spawn(binPath, ['tunnel', '--protocol', 'http2', '--no-autoupdate', '--url', `http://127.0.0.1:${port}`]);

      tunnelProcess.stderr.on('data', async (data) => {
        const text = data.toString();
        const match = text.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);
        if (match && !tunnelState.url) {
          tunnelState.url = match[0];
          tunnelState.active = true;
          tunnelState.connecting = false;
          tunnelState.error = null;
          tunnelState.qrCode = await QRCode.toDataURL(tunnelState.url, { margin: 1 });
          broadcastUpdate();
        }
      });

      tunnelProcess.on('close', () => stopTunnel(broadcastUpdate));
      tunnelProcess.on('error', (err) => {
        tunnelState.error = 'Cloudflare Error: ' + err.message;
        tunnelState.connecting = false;
        tunnelState.active = false;
        broadcastUpdate();
      });
    })
    .catch((err) => {
      tunnelState.connecting = false;
      tunnelState.active = false;
      tunnelState.error = 'Cloudflare Error: ' + err.message;
      broadcastUpdate();
    });
}

// 3. Localtunnel (Pure Node.js)
async function startLocaltunnel(port, pin, broadcastUpdate) {
  try {
    const localtunnel = require('localtunnel');
    ltInstance = await localtunnel({ port });
    tunnelState.url = ltInstance.url;
    tunnelState.active = true;
    tunnelState.connecting = false;
    tunnelState.error = null;
    tunnelState.qrCode = await QRCode.toDataURL(tunnelState.url, { margin: 1 });
    broadcastUpdate();

    ltInstance.on('close', () => stopTunnel(broadcastUpdate));
    ltInstance.on('error', (err) => {
      tunnelState.error = err.message;
      stopTunnel(broadcastUpdate);
    });
  } catch (err) {
    tunnelState.connecting = false;
    tunnelState.active = false;
    tunnelState.error = 'Localtunnel Error: ' + err.message;
    broadcastUpdate();
  }
}

function startTunnel(port, provider = 'serveo', broadcastUpdate) {
  if (tunnelState.active || tunnelState.connecting) return;

  tunnelState.connecting = true;
  tunnelState.provider = provider;
  tunnelState.error = 'Initializing tunnel...';
  const pin = Math.floor(1000 + Math.random() * 9000).toString();
  tunnelState.pin = pin;
  broadcastUpdate();

  if (provider === 'cloudflare') {
    startCloudflareTunnel(port, pin, broadcastUpdate);
  } else if (provider === 'localtunnel') {
    startLocaltunnel(port, pin, broadcastUpdate);
  } else {
    startServeoTunnel(port, pin, broadcastUpdate);
  }
}

function stopTunnel(broadcastUpdate) {
  if (tunnelProcess) {
    try {
      const pid = tunnelProcess.pid;
      tunnelProcess.kill();
      if (process.platform === 'win32' && pid) {
        exec(`taskkill /pid ${pid} /f /t`, () => {});
      }
    } catch (e) {}
    tunnelProcess = null;
  }
  if (ltInstance) {
    try { ltInstance.close(); } catch (e) {}
    ltInstance = null;
  }
  tunnelState = {
    active: false,
    connecting: false,
    provider: tunnelState.provider || 'serveo',
    url: null,
    pin: null,
    qrCode: null,
    error: null
  };
  if (broadcastUpdate) broadcastUpdate();
}

function getTunnelState() {
  return tunnelState;
}

process.on('exit', () => stopTunnel());
process.on('SIGINT', () => { stopTunnel(); process.exit(); });
process.on('SIGTERM', () => { stopTunnel(); process.exit(); });

module.exports = {
  startTunnel,
  stopTunnel,
  getTunnelState
};
