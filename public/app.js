// ========================================================
// iDispenser - Multi-language File Sharing & Admin Hub
// ========================================================

const translations = {
  en: {
    pageTitle: "iDispenser - Fast File Sharing",
    subtitle: "Gigabit Wi-Fi transfer & 1-click internet access",
    roleAdmin: "🛡️ Administrator",
    roleUser: "👤 User",
    syncActive: "Shared folder active",
    wifiBadge: "Local Wi-Fi",
    speedHint: "🚀 Up to 1 Gbps",
    copy: "Copy",
    wifiDesc: "All devices on the local Wi-Fi network automatically receive Administrator rights.",
    tunnelBadge: "Internet Access",
    tunnelOff: "Off",
    tunnelConnecting: "Connecting...",
    tunnelActive: "Active",
    tunnelTurnOn: "Turn On in 1-Click",
    tunnelTurnOff: "Turn Off",
    tunnelService: "Tunnel service:",
    tunnelLink: "Link",
    friendPin: "PIN for friend:",
    copyAll: "Copy All",
    startingTunnel: "Starting tunnel...",
    adminTitle: "🛡️ Connection & User Monitoring",
    adminBadge: "Administrator",
    statOnline: "👥 Online:",
    statLocal: "🏠 Local:",
    statExternal: "🌐 External:",
    legendServer: "Server (You)",
    legendGuest: "Connected Users",
    sessionsTitle: "Real-time active sessions:",
    noActiveConnections: "No active connections",
    localWifiAdmin: "Local Wi-Fi (Admin)",
    revokeAdmin: "Revoke Admin",
    makeAdmin: "🛡️ Make Admin",
    connectedAt: "Connected:",
    dropTitle: "Drag and drop files here or <span class=\"accent-text\">browse from disk</span>",
    dropSubtitle: "Files are saved to shared storage and instantly available to all connected peers",
    uploading: "Uploading:",
    remaining: "remaining",
    retrying: "Retrying chunk...",
    uploadSuccess: "Upload completed successfully!",
    uploadFailed: "Upload failed",
    filesAdminTitle: "File & Folder Management",
    filesUserTitle: "Available Files & Folders",
    searchPlaceholder: "Search in current folder...",
    emptyShared: "This folder is empty. Drag and drop files here or create a new folder!",
    distributing: "🟢 Distributing",
    hidden: "⏸️ Hidden",
    hide: "⏸️ Hide",
    distribute: "▶️ Distribute",
    download: "Download",
    deleteConfirm: "Delete file \"{name}\" from disk?",
    deleteFolderConfirm: "Delete folder \"{name}\" and all its files from disk?",
    deleteError: "Delete error",
    linkCopied: "Link copied to clipboard!",
    directLinkCopied: "Direct file download link copied!",
    shareCopied: "Share message with link and PIN copied!",
    qrLocalTitle: "Local Wi-Fi (Mac / iPhone)",
    qrTunnelTitle: "Internet Link (Tunnel)",
    qrSub: "Opens download and upload interface",
    close: "Close",
    pinTitle: "Access Protected",
    pinDesc: "Enter the 4-digit PIN code provided by the host:",
    btnSubmitPin: "Access Files",
    pinError: "Invalid PIN code",
    serverMarker: "Your iDispenser Server",
    device: "Device:",
    role: "Role:",
    network: "Network:",
    homeWifi: "Home Wi-Fi",
    internet: "Internet",
    you: "(You)",
    ping: "Ping",
    newFolder: "+ New Folder",
    createFolderTitle: "📁 Create Shared Folder",
    createFolderSub: "Enter folder name to share with everyone:",
    folderNamePlaceholder: "Folder name...",
    renameTitle: "✏️ Rename",
    renameSub: "Enter new name:",
    create: "Create",
    rename: "Rename",
    cancel: "Cancel",
    open: "Open",
    folder: "Folder",
    itemsCount: "{count} items",
    home: "Shared (Root)",
    uploadTarget: "Uploading to:",
    donate: "Donate",
    donateTitle: "Support Developer via PayPal",
    donateSub: "If you find iDispenser helpful, consider supporting its active development!",
    copyEmail: "Copy",
    emailCopied: "PayPal email copied: mercooler666@gmail.com",
    openPaypal: "💛 Open PayPal ($ USD)",
    transferUploading: "Uploading",
    transferDownloading: "Downloading",
    idle: "Idle",
    statTransfers: "⚡ Transfers:",
    footerDonate: "💛 Support Developer (PayPal)"
  },
  uk: {
    pageTitle: "iDispenser - Швидкий обмін файлами",
    subtitle: "Гігабітний Wi-Fi обмін & 1-клік інтернет-доступ",
    roleAdmin: "🛡️ Адміністратор",
    roleUser: "👤 Користувач",
    syncActive: "Спільна папка активна",
    wifiBadge: "Локальний Wi-Fi",
    speedHint: "🚀 До 1 Гбіт/с",
    copy: "Копіювати",
    wifiDesc: "Всі пристрої в локальній Wi-Fi мережі автоматично отримують права Адміністратора.",
    tunnelBadge: "Інтернет доступ",
    tunnelOff: "Вимкнено",
    tunnelConnecting: "Підключення...",
    tunnelActive: "Активний",
    tunnelTurnOn: "Увімкнути в 1 клік",
    tunnelTurnOff: "Вимкнути",
    tunnelService: "Сервіс тунелю:",
    tunnelLink: "Посилання",
    friendPin: "PIN для друга:",
    copyAll: "Копіювати все",
    startingTunnel: "Запуск тунелю...",
    adminTitle: "🛡️ Моніторинг підключень і користувачів",
    adminBadge: "Адміністратор",
    statOnline: "👥 Онлайн:",
    statLocal: "🏠 Локальні:",
    statExternal: "🌐 Зовнішні:",
    legendServer: "Сервер (Ви)",
    legendGuest: "Підключені користувачі",
    sessionsTitle: "Активні сесії в реальному часі:",
    noActiveConnections: "Немає активних підключень",
    localWifiAdmin: "Локальний Wi-Fi (Адмін)",
    revokeAdmin: "Скинути права адміна",
    makeAdmin: "🛡️ Зробити адміном",
    connectedAt: "Підключено:",
    dropTitle: "Перетягніть файли сюди або <span class=\"accent-text\">виберіть з диска</span>",
    dropSubtitle: "Файли зберігаються у спільній пам'яті та миттєво доступні всім підключеним",
    uploading: "Завантаження:",
    remaining: "залишилось",
    retrying: "Повторна спроба...",
    uploadSuccess: "Завантаження успішно завершено!",
    uploadFailed: "Помилка завантаження",
    filesAdminTitle: "Керування файлами та папками",
    filesUserTitle: "Доступні файли та папки",
    searchPlaceholder: "Пошук у поточній папці...",
    emptyShared: "Ця папка порожня. Перетягніть сюди файли або створіть нову папку!",
    distributing: "🟢 В роздачі",
    hidden: "⏸️ Приховано",
    hide: "⏸️ Приховати",
    distribute: "▶️ Роздавати",
    download: "Завантажити",
    deleteConfirm: "Видалити файл \"{name}\" з диска?",
    deleteFolderConfirm: "Видалити папку \"{name}\" та всі файли в ній з диска?",
    deleteError: "Помилка видалення",
    linkCopied: "Посилання скопійовано!",
    directLinkCopied: "Пряме посилання на файл скопійовано!",
    shareCopied: "Повідомлення з посиланням та PIN скопійовано!",
    qrLocalTitle: "Локальний Wi-Fi (Mac / iPhone)",
    qrTunnelTitle: "Інтернет посилання (Тунель)",
    qrSub: "Відкриється інтерфейс завантаження та скачування",
    close: "Закрити",
    pinTitle: "Доступ захищено",
    pinDesc: "Введіть 4-значний PIN-код, отриманий від власника:",
    btnSubmitPin: "Увійти до файлів",
    pinError: "Невірний PIN-код",
    serverMarker: "Ваш сервер iDispenser",
    device: "Пристрій:",
    role: "Роль:",
    network: "Мережа:",
    homeWifi: "Домашній Wi-Fi",
    internet: "Інтернет",
    you: "(Ви)",
    ping: "Пінг",
    newFolder: "+ Нова папка",
    createFolderTitle: "📁 Створити спільну папку",
    createFolderSub: "Введіть назву папки для спільного доступу:",
    folderNamePlaceholder: "Назва папки...",
    renameTitle: "✏️ Перейменувати",
    renameSub: "Введіть нову назву:",
    create: "Створити",
    rename: "Перейменувати",
    cancel: "Скасувати",
    open: "Відкрити",
    folder: "Папка",
    itemsCount: "{count} файл(ів)",
    home: "Спільна (Корінь)",
    uploadTarget: "Завантаження у:",
    donate: "Підтримати",
    donateTitle: "Підтримати автора iDispenser",
    donateSub: "Якщо вам подобається iDispenser, ваша підтримка допомагає розвивати проект та додавати нові функції!",
    copyEmail: "Копіювати",
    emailCopied: "PayPal email скопійовано: mercooler666@gmail.com",
    openPaypal: "💛 Відкрити PayPal ($ USD)",
    transferUploading: "Завантаження",
    transferDownloading: "Вивантаження",
    idle: "Очікування",
    statTransfers: "⚡ Передачі:",
    footerDonate: "💛 Підтримати автора (PayPal)"
  },
  ru: {
    pageTitle: "iDispenser - Быстрый обмен файлами",
    subtitle: "Гигабитный Wi-Fi обмен & 1-клик интернет-доступ",
    roleAdmin: "🛡️ Администратор",
    roleUser: "👤 Пользователь",
    syncActive: "Общая папка активна",
    wifiBadge: "Локальный Wi-Fi",
    speedHint: "🚀 До 1 Гбит/с",
    copy: "Копировать",
    wifiDesc: "Все устройства в локальной Wi-Fi сети автоматически получают права Администратора.",
    tunnelBadge: "Интернет доступ",
    tunnelOff: "Выключен",
    tunnelConnecting: "Подключение...",
    tunnelActive: "Активен",
    tunnelTurnOn: "Включить в 1 клик",
    tunnelTurnOff: "Выключить",
    tunnelService: "Сервис туннеля:",
    tunnelLink: "Ссылка",
    friendPin: "PIN для друга:",
    copyAll: "Копировать все",
    startingTunnel: "Запуск туннеля...",
    adminTitle: "🛡️ Мониторинг подключений и пользователей",
    adminBadge: "Администратор",
    statOnline: "👥 Онлайн:",
    statLocal: "🏠 Локальные:",
    statExternal: "🌐 Внешние:",
    legendServer: "Сервер (Вы)",
    legendGuest: "Подключенные пользователи",
    sessionsTitle: "Активные сессии в реальном времени:",
    noActiveConnections: "Нет активных подключений",
    localWifiAdmin: "Локальный Wi-Fi (Админ)",
    revokeAdmin: "Снять права админа",
    makeAdmin: "🛡️ Сделать админом",
    connectedAt: "Подключен:",
    dropTitle: "Перетащите файлы сюда или <span class=\"accent-text\">выберите с диска</span>",
    dropSubtitle: "Файлы сохраняются в общее хранилище и мгновенно доступны всем подключенным",
    uploading: "Загрузка:",
    remaining: "осталось",
    retrying: "Повторная попытка...",
    uploadSuccess: "Загрузка успешно завершена!",
    uploadFailed: "Ошибка загрузки",
    filesAdminTitle: "Управление файлами и папками",
    filesUserTitle: "Доступные файлы и папки",
    searchPlaceholder: "Поиск в текущей папке...",
    emptyShared: "Эта папка пуста. Перетащите сюда файлы или создайте новую папку!",
    distributing: "🟢 В раздаче",
    hidden: "⏸️ Скрыт",
    hide: "⏸️ Скрыть",
    distribute: "▶️ Раздавать",
    download: "Скачать",
    deleteConfirm: "Удалить файл \"{name}\" с диска?",
    deleteFolderConfirm: "Удалить папку \"{name}\" и все файлы внутри с диска?",
    deleteError: "Ошибка удаления",
    linkCopied: "Ссылка скопирована!",
    directLinkCopied: "Прямая ссылка на файл скопирована!",
    shareCopied: "Сообщение со ссылкой и PIN-кодом скопировано в буфер!",
    qrLocalTitle: "Локальный Wi-Fi (Mac / iPhone)",
    qrTunnelTitle: "Интернет ссылка (Туннель)",
    qrSub: "Откроется интерфейс скачивания и загрузки",
    close: "Закрыть",
    pinTitle: "Доступ защищен",
    pinDesc: "Введите 4-значный PIN-код, полученный от владельца:",
    btnSubmitPin: "Войти к файлам",
    pinError: "Неверный PIN-код",
    serverMarker: "Ваш сервер iDispenser",
    device: "Устройство:",
    role: "Роль:",
    network: "Сеть:",
    homeWifi: "Домашний Wi-Fi",
    internet: "Интернет",
    you: "(Вы)",
    ping: "Пинг",
    newFolder: "+ Новая папка",
    createFolderTitle: "📁 Создать общую папку",
    createFolderSub: "Введите название папки для общего доступа:",
    folderNamePlaceholder: "Название папки...",
    renameTitle: "✏️ Переименовать",
    renameSub: "Введите новое название:",
    create: "Создать",
    rename: "Переименовать",
    cancel: "Отмена",
    open: "Открыть",
    folder: "Папка",
    itemsCount: "{count} файл(ов)",
    home: "Общая (Корень)",
    uploadTarget: "Загрузка в:",
    donate: "Поддержать",
    donateTitle: "Поддержать автора iDispenser",
    donateSub: "Если вам нравится iDispenser, ваша поддержка помогает развивать проект и добавлять новые функции!",
    copyEmail: "Копировать",
    emailCopied: "PayPal email скопирован: mercooler666@gmail.com",
    openPaypal: "💛 Открыть PayPal ($ USD)",
    transferUploading: "Загрузка",
    transferDownloading: "Скачивание",
    idle: "Ожидание",
    statTransfers: "⚡ Передачи:",
    footerDonate: "💛 Поддержать автора (PayPal)"
  },
  de: {
    pageTitle: "iDispenser - Schnelle Dateifreigabe",
    subtitle: "Gigabit Wi-Fi-Freigabe & 1-Klick-Internetzugang",
    roleAdmin: "🛡️ Administrator",
    roleUser: "👤 Benutzer",
    syncActive: "Freigegebener Ordner aktiv",
    wifiBadge: "Lokales WLAN",
    speedHint: "🚀 Bis zu 1 Gbit/s",
    copy: "Kopieren",
    wifiDesc: "Alle Geräte im lokalen WLAN-Netzwerk erhalten automatisch Administratorrechte.",
    tunnelBadge: "Internetzugang",
    tunnelOff: "Aus",
    tunnelConnecting: "Verbinden...",
    tunnelActive: "Aktiv",
    tunnelTurnOn: "In 1-Klick aktivieren",
    tunnelTurnOff: "Ausschalten",
    tunnelService: "Tunnel-Dienst:",
    tunnelLink: "Link",
    friendPin: "PIN für Freund:",
    copyAll: "Alles kopieren",
    startingTunnel: "Tunnel wird gestartet...",
    adminTitle: "🛡️ Verbindungs- & Benutzerüberwachung",
    adminBadge: "Administrator",
    statOnline: "👥 Online:",
    statLocal: "🏠 Lokal:",
    statExternal: "🌐 Extern:",
    legendServer: "Server (Sie)",
    legendGuest: "Verbundene Benutzer",
    sessionsTitle: "Aktive Sitzungen in Echtzeit:",
    noActiveConnections: "Keine aktiven Verbindungen",
    localWifiAdmin: "Lokales WLAN (Admin)",
    revokeAdmin: "Admin entziehen",
    makeAdmin: "🛡️ Zum Admin machen",
    connectedAt: "Verbunden:",
    dropTitle: "Dateien hierher ziehen oder <span class=\"accent-text\">von der Festplatte wählen</span>",
    dropSubtitle: "Dateien werden gespeichert und sofort für alle geteilt",
    uploading: "Hochladen:",
    remaining: "verbleibend",
    retrying: "Wiederholung...",
    uploadSuccess: "Upload erfolgreich abgeschlossen!",
    uploadFailed: "Upload fehlgeschlagen",
    filesAdminTitle: "Datei- und Ordnerverwaltung",
    filesUserTitle: "Verfügbare Dateien und Ordner",
    searchPlaceholder: "Im aktuellen Ordner suchen...",
    emptyShared: "Dieser Ordner ist leer. Dateien hierher ziehen oder neuen Ordner erstellen!",
    distributing: "🟢 Freigegeben",
    hidden: "⏸️ Ausgeblendet",
    hide: "⏸️ Ausblenden",
    distribute: "▶️ Freigeben",
    download: "Herunterladen",
    deleteConfirm: "Datei \"{name}\" von der Festplatte löschen?",
    deleteFolderConfirm: "Ordner \"{name}\" und alle Inhalte von der Festplatte löschen?",
    deleteError: "Fehler beim Löschen",
    linkCopied: "Link in die Zwischenablage kopiert!",
    directLinkCopied: "Direkter Download-Link kopiert!",
    shareCopied: "Freigabenachricht mit Link und PIN kopiert!",
    qrLocalTitle: "Lokales WLAN (Mac / iPhone)",
    qrTunnelTitle: "Internet-Link (Tunnel)",
    qrSub: "Öffnet die Benutzeroberfläche zum Herunterladen",
    close: "Schließen",
    pinTitle: "Zugriff geschützt",
    pinDesc: "Geben Sie die 4-stellige PIN des Hosts ein:",
    btnSubmitPin: "Zu den Dateien",
    pinError: "Ungültiger PIN-Code",
    serverMarker: "Ihr iDispenser Server",
    device: "Gerät:",
    role: "Rolle:",
    network: "Netzwerk:",
    homeWifi: "Heim-WLAN",
    internet: "Internet",
    you: "(Sie)",
    ping: "Ping",
    newFolder: "+ Neuer Ordner",
    createFolderTitle: "📁 Freigegebenen Ordner erstellen",
    createFolderSub: "Geben Sie den Ordnernamen ein:",
    folderNamePlaceholder: "Ordnername...",
    renameTitle: "✏️ Umbenennen",
    renameSub: "Neuen Namen eingeben:",
    create: "Erstellen",
    rename: "Umbenennen",
    cancel: "Abbrechen",
    open: "Öffnen",
    folder: "Ordner",
    itemsCount: "{count} Elemente",
    home: "Freigegeben (Root)",
    uploadTarget: "Hochladen nach:",
    donate: "Spenden",
    donateTitle: "iDispenser-Entwickler unterstützen",
    donateSub: "Wenn dir iDispenser gefällt, hilft deine Spende bei der Weiterentwicklung und neuen Features!",
    copyEmail: "Kopieren",
    emailCopied: "PayPal-E-Mail kopiert: mercooler666@gmail.com",
    openPaypal: "💛 PayPal öffnen ($ USD)",
    transferUploading: "Hochladen",
    transferDownloading: "Herunterladen",
    idle: "Inaktiv",
    statTransfers: "⚡ Übertragungen:",
    footerDonate: "💛 Entwickler unterstützen (PayPal)"
  },
  it: {
    pageTitle: "iDispenser - Condivisione rapida file",
    subtitle: "Condivisione Wi-Fi gigabit & accesso internet in 1 clic",
    roleAdmin: "🛡️ Amministratore",
    roleUser: "👤 Utente",
    syncActive: "Cartella condivisa attiva",
    wifiBadge: "Wi-Fi locale",
    speedHint: "🚀 Fino a 1 Gbps",
    copy: "Copia",
    wifiDesc: "Tutti i dispositivi nella rete Wi-Fi locale ricevono automaticamente i diritti di amministratore.",
    tunnelBadge: "Accesso a Internet",
    tunnelOff: "Disattivato",
    tunnelConnecting: "Connessione...",
    tunnelActive: "Attivo",
    tunnelTurnOn: "Attiva in 1 clic",
    tunnelTurnOff: "Disattiva",
    tunnelService: "Servizio tunnel:",
    tunnelLink: "Link",
    friendPin: "PIN per l'amico:",
    copyAll: "Copia tutto",
    startingTunnel: "Avvio del tunnel...",
    adminTitle: "🛡️ Monitoraggio connessioni e utenti",
    adminBadge: "Amministratore",
    statOnline: "👥 Online:",
    statLocal: "🏠 Locali:",
    statExternal: "🌐 Esterni:",
    legendServer: "Server (Tu)",
    legendGuest: "Utenti connessi",
    sessionsTitle: "Sessioni attive in tempo reale:",
    noActiveConnections: "Nessuna connessione attiva",
    localWifiAdmin: "Wi-Fi locale (Admin)",
    revokeAdmin: "Revoca admin",
    makeAdmin: "🛡️ Rendi admin",
    connectedAt: "Connesso:",
    dropTitle: "Trascina i file qui o <span class=\"accent-text\">seleziona dal disco</span>",
    dropSubtitle: "I file vengono salvati nello spazio condiviso e resi subito disponibili a tutti",
    uploading: "Caricamento:",
    remaining: "rimanente",
    retrying: "Nuovo tentativo...",
    uploadSuccess: "Caricamento completato con successo!",
    uploadFailed: "Caricamento non riuscito",
    filesAdminTitle: "Gestione file e cartelle",
    filesUserTitle: "File e cartelle disponibili",
    searchPlaceholder: "Cerca nella cartella corrente...",
    emptyShared: "Questa cartella è vuota. Trascina i file qui o crea una nuova cartella!",
    distributing: "🟢 In condivisione",
    hidden: "⏸️ Nascosto",
    hide: "⏸️ Nascondi",
    distribute: "▶️ Condividi",
    download: "Scarica",
    deleteConfirm: "Eliminare il file \"{name}\" dal disco?",
    deleteFolderConfirm: "Eliminare la cartella \"{name}\" e tutti i file contenuti?",
    deleteError: "Errore durante l'eliminazione",
    linkCopied: "Link copiato negli appunti!",
    directLinkCopied: "Link di download diretto copiato!",
    shareCopied: "Messaggio con link e PIN copiato!",
    qrLocalTitle: "Wi-Fi locale (Mac / iPhone)",
    qrTunnelTitle: "Link Internet (Tunnel)",
    qrSub: "Scansiona con il telefono per accedere ai file",
    close: "Chiudi",
    pinTitle: "Accesso protetto",
    pinDesc: "Inserisci il codice PIN a 4 cifre fornito dall'host:",
    btnSubmitPin: "Accedi ai file",
    pinError: "Codice PIN non valido",
    serverMarker: "Il tuo server iDispenser",
    device: "Dispositivo:",
    role: "Ruolo:",
    network: "Rete:",
    homeWifi: "Wi-Fi domestico",
    internet: "Internet",
    you: "(Tu)",
    ping: "Ping",
    newFolder: "+ Nuova cartella",
    createFolderTitle: "📁 Crea cartella condivisa",
    createFolderSub: "Inserisci il nome della cartella da condividere:",
    folderNamePlaceholder: "Nome cartella...",
    renameTitle: "✏️ Rinomina",
    renameSub: "Inserisci il nuovo nome:",
    create: "Crea",
    rename: "Rinomina",
    cancel: "Annulla",
    open: "Apri",
    folder: "Cartella",
    itemsCount: "{count} elementi",
    home: "Condivisa (Root)",
    uploadTarget: "Caricamento in:",
    donate: "Dona",
    donateTitle: "Sostieni lo sviluppatore di iDispenser",
    donateSub: "Se ti piace iDispenser, il tuo supporto aiuta a mantenere e sviluppare nuove funzionalità!",
    copyEmail: "Copia",
    emailCopied: "Email PayPal copiata: mercooler666@gmail.com",
    openPaypal: "💛 Apri PayPal ($ USD)",
    transferUploading: "Caricamento",
    transferDownloading: "Scaricamento",
    idle: "Inattivo",
    statTransfers: "⚡ Trasferimenti:",
    footerDonate: "💛 Sostieni il creatore (PayPal)"
  }
};

let currentLang = 'en';

function t(key) {
  const dict = translations[currentLang] || translations.en;
  return dict[key] || translations.en[key] || key;
}

function detectLanguage(countryCode) {
  const saved = localStorage.getItem('dispenser_lang');
  if (saved && translations[saved]) return saved;

  const code = (countryCode || '').toUpperCase();
  if (code === 'UA') return 'uk';
  if (['RU', 'BY', 'KZ', 'KG', 'TJ', 'UZ'].includes(code)) return 'ru';
  if (['DE', 'AT', 'CH'].includes(code)) return 'de';
  if (['IT', 'SM', 'VA'].includes(code)) return 'it';

  const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (navLang.startsWith('uk')) return 'uk';
  if (navLang.startsWith('ru')) return 'ru';
  if (navLang.startsWith('de')) return 'de';
  if (navLang.startsWith('it')) return 'it';

  return 'en';
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('dispenser_lang', lang);

  const langSelect = document.getElementById('langSelect');
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }

  applyTranslations();
  updateRoleUI(currentUserIsAdmin);
  renderBreadcrumbs(currentBreadcrumbs);
  renderFiles(currentFiles);
  if (serverStatus && serverStatus.tunnel) {
    updateTunnelStatusUI(serverStatus.tunnel);
  }
  if (currentUserIsAdmin && lastUsersList) {
    renderAdminUsers(lastUsersList);
    updateMapMarkers(lastUsersList, lastHomeGeo);
  }
}

function applyTranslations() {
  document.title = t('pageTitle');
  document.documentElement.lang = currentLang;

  const headerSub = document.getElementById('headerSubtitle');
  if (headerSub) headerSub.innerText = t('subtitle');

  const syncText = document.getElementById('syncText');
  if (syncText) syncText.innerText = t('syncActive');

  const wifiBadge = document.getElementById('lblWifiBadge');
  if (wifiBadge) wifiBadge.innerText = t('wifiBadge');

  const speedHint = document.getElementById('lblSpeedHint');
  if (speedHint) speedHint.innerText = t('speedHint');

  const btnCopyLocal = document.getElementById('btnCopyLocal');
  if (btnCopyLocal) btnCopyLocal.innerText = t('copy');

  const wifiDesc = document.getElementById('lblWifiDesc');
  if (wifiDesc) wifiDesc.innerText = t('wifiDesc');

  const tunnelBadge = document.getElementById('tunnelBadge');
  if (tunnelBadge) tunnelBadge.innerText = t('tunnelBadge');

  const lblTunnelProvider = document.getElementById('lblTunnelProvider');
  if (lblTunnelProvider) lblTunnelProvider.innerText = t('tunnelService');

  const btnCopyTunnelUrl = document.getElementById('btnCopyTunnelUrl');
  if (btnCopyTunnelUrl) btnCopyTunnelUrl.innerText = t('tunnelLink');

  const lblFriendPin = document.getElementById('lblFriendPin');
  if (lblFriendPin) lblFriendPin.innerText = t('friendPin');

  const btnCopyShare = document.getElementById('btnCopyShare');
  if (btnCopyShare) btnCopyShare.innerText = t('copyAll');

  const tunnelLoadingMsg = document.getElementById('tunnelLoadingMsg');
  if (tunnelLoadingMsg) tunnelLoadingMsg.innerText = t('startingTunnel');

  const lblAdminTitle = document.getElementById('lblAdminTitle');
  if (lblAdminTitle) lblAdminTitle.innerText = t('adminTitle');

  const lblAdminBadge = document.getElementById('lblAdminBadge');
  if (lblAdminBadge) lblAdminBadge.innerText = t('adminBadge');

  const lblStatActive = document.getElementById('lblStatActive');
  if (lblStatActive) lblStatActive.innerText = t('statOnline');

  const lblStatLocal = document.getElementById('lblStatLocal');
  if (lblStatLocal) lblStatLocal.innerText = t('statLocal');

  const lblStatGuest = document.getElementById('lblStatGuest');
  if (lblStatGuest) lblStatGuest.innerText = t('statExternal');

  const lblStatTransfers = document.getElementById('lblStatTransfers');
  if (lblStatTransfers) lblStatTransfers.innerText = t('statTransfers');

  const lblDonate = document.getElementById('lblDonate');
  if (lblDonate) lblDonate.innerText = t('donate');

  const lblLegendServer = document.getElementById('lblLegendServer');
  if (lblLegendServer) {
    lblLegendServer.innerHTML = `<span class="dot-legend dot-home"></span> ${t('legendServer')}`;
  }

  const lblLegendGuest = document.getElementById('lblLegendGuest');
  if (lblLegendGuest) {
    lblLegendGuest.innerHTML = `<span class="dot-legend dot-guest"></span> ${t('legendGuest')}`;
  }

  const lblSessionsTitle = document.getElementById('lblSessionsTitle');
  if (lblSessionsTitle) lblSessionsTitle.innerText = t('sessionsTitle');

  const dropTitle = document.getElementById('dropTitle');
  if (dropTitle) dropTitle.innerHTML = t('dropTitle');

  updateDropSubtitle();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');

  const lblNewFolder = document.getElementById('lblNewFolder');
  if (lblNewFolder) lblNewFolder.innerText = t('newFolder');

  const lblCreateFolderTitle = document.getElementById('lblCreateFolderTitle');
  if (lblCreateFolderTitle) lblCreateFolderTitle.innerText = t('createFolderTitle');

  const lblCreateFolderSub = document.getElementById('lblCreateFolderSub');
  if (lblCreateFolderSub) lblCreateFolderSub.innerText = t('createFolderSub');

  const folderNameInput = document.getElementById('folderNameInput');
  if (folderNameInput) folderNameInput.placeholder = t('folderNamePlaceholder');

  const btnCancelFolder = document.getElementById('btnCancelFolder');
  if (btnCancelFolder) btnCancelFolder.innerText = t('cancel');

  const btnSubmitFolder = document.getElementById('btnSubmitFolder');
  if (btnSubmitFolder) btnSubmitFolder.innerText = t('create');

  const lblRenameTitle = document.getElementById('lblRenameTitle');
  if (lblRenameTitle) lblRenameTitle.innerText = t('renameTitle');

  const lblRenameSub = document.getElementById('lblRenameSub');
  if (lblRenameSub) lblRenameSub.innerText = t('renameSub');

  const btnCancelRename = document.getElementById('btnCancelRename');
  if (btnCancelRename) btnCancelRename.innerText = t('cancel');

  const btnSubmitRename = document.getElementById('btnSubmitRename');
  if (btnSubmitRename) btnSubmitRename.innerText = t('rename');

  const qrModalSub = document.getElementById('qrModalSub');
  if (qrModalSub) qrModalSub.innerText = t('qrSub');

  const btnQrClose = document.getElementById('btnQrClose');
  if (btnQrClose) btnQrClose.innerText = t('close');

  const lblPinTitle = document.getElementById('lblPinTitle');
  if (lblPinTitle) lblPinTitle.innerText = t('pinTitle');

  const lblPinDesc = document.getElementById('lblPinDesc');
  if (lblPinDesc) lblPinDesc.innerText = t('pinDesc');

  const btnSubmitPin = document.getElementById('btnSubmitPin');
  if (btnSubmitPin) btnSubmitPin.innerText = t('btnSubmitPin');

  const pinError = document.getElementById('pinError');
  if (pinError) pinError.innerText = t('pinError');

  const lblDonateModalTitle = document.getElementById('lblDonateModalTitle');
  if (lblDonateModalTitle) lblDonateModalTitle.innerText = t('donateTitle');

  const lblDonateModalSub = document.getElementById('lblDonateModalSub');
  if (lblDonateModalSub) lblDonateModalSub.innerText = t('donateSub');

  const btnGoPaypal = document.getElementById('btnGoPaypal');
  if (btnGoPaypal) btnGoPaypal.innerHTML = `<span>${t('openPaypal')}</span>`;

  const btnCopyDonateEmail = document.getElementById('btnCopyDonateEmail');
  if (btnCopyDonateEmail) btnCopyDonateEmail.innerText = `📋 ${t('copyEmail')}`;

  const btnFooterDonate = document.getElementById('btnFooterDonate');
  if (btnFooterDonate) btnFooterDonate.innerHTML = `<span>${t('footerDonate')}</span>`;
}

function updateDropSubtitle() {
  const dropSubtitle = document.getElementById('dropSubtitle');
  if (!dropSubtitle) return;
  const folderDisplay = currentFolder ? ` / ${currentFolder}` : ` / ${t('home')}`;
  dropSubtitle.innerHTML = `${t('dropSubtitle')} • <strong>${t('uploadTarget')} ${folderDisplay}</strong>`;
}

// Global State
let currentFiles = [];
let currentFolder = '';
let currentBreadcrumbs = [{ name: 'Shared', path: '' }];
let serverStatus = null;
let savedPin = localStorage.getItem('dispenser_pin') || '';
let currentUserIsAdmin = false;
let mySessionId = null;
let mapInstance = null;
let mapMarkers = [];
let lastUsersList = null;
let lastHomeGeo = null;

// Ping Latency Tracking
let currentPing = null;
let pingInterval = null;

function getPingClass(ping) {
  if (typeof ping !== 'number' || ping <= 0) return 'ping-good';
  if (ping < 50) return 'ping-good';
  if (ping < 150) return 'ping-fair';
  return 'ping-poor';
}

function updatePingUI(ping) {
  const badge = document.getElementById('pingBadge');
  const val = document.getElementById('pingValue');
  if (!badge || !val) return;

  val.innerText = `${ping} ms`;
  badge.classList.remove('ping-good', 'ping-fair', 'ping-poor');
  badge.classList.add(getPingClass(ping));
}

function startPingProbe() {
  if (pingInterval) clearInterval(pingInterval);
  pingInterval = setInterval(() => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'client_ping',
        t: Date.now(),
        ping: currentPing
      }));
    }
  }, 3000);
}

// Extract PIN from URL parameter if present
const urlParams = new URLSearchParams(window.location.search);
const queryPin = urlParams.get('pin') || window.location.hash.replace('#pin=', '');
if (queryPin) {
  savedPin = queryPin;
  localStorage.setItem('dispenser_pin', queryPin);
}

// Setup Language Switcher listener
const langSelect = document.getElementById('langSelect');
if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

// Icon helper by extension
function getFileIcon(ext) {
  ext = (ext || '').toLowerCase();
  if (ext === 'folder') return '📁';
  if (['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'].includes(ext)) return '🖼️';
  if (['mp4', 'mkv', 'mov', 'avi', 'webm'].includes(ext)) return '🎬';
  if (['mp3', 'wav', 'flac', 'm4a', 'ogg'].includes(ext)) return '🎵';
  if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return '📦';
  if (['pdf', 'doc', 'docx', 'txt', 'md'].includes(ext)) return '📄';
  if (['js', 'ts', 'py', 'json', 'html', 'css', 'bat', 'sh'].includes(ext)) return '💻';
  return '📄';
}

// WebSocket Connection
let ws = null;
function connectWs() {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  ws = new WebSocket(`${protocol}//${window.location.host}`);

  ws.onopen = () => {
    startPingProbe();
  };

  ws.onmessage = (event) => {
    try {
      const msg = JSON.parse(event.data);

      if (msg.type === 'server_pong') {
        currentPing = Math.max(1, Date.now() - msg.t);
        updatePingUI(currentPing);
        return;
      }

      if (msg.type === 'auth_required') {
        showPinModal();
        return;
      }

      if (msg.type === 'role_changed') {
        currentUserIsAdmin = msg.data.role === 'admin';
        updateRoleUI(currentUserIsAdmin);
        fetchFiles(currentFolder);
      }

      if (msg.type === 'init') {
        if (typeof msg.data.isAdmin === 'boolean') {
          currentUserIsAdmin = msg.data.isAdmin;
          updateRoleUI(currentUserIsAdmin);
        }
        if (msg.data.status) updateStatusUI(msg.data.status);
        fetchFiles(currentFolder);
      }

      if (msg.type === 'files_updated') {
        fetchFiles(currentFolder);
      }

      if (msg.type === 'status_updated') {
        updateStatusUI(msg.data);
      }

      if (msg.type === 'admin_stats') {
        if (currentUserIsAdmin) {
          lastUsersList = msg.data.users;
          lastHomeGeo = msg.data.homeGeo;
          renderAdminUsers(msg.data.users);
          updateMapMarkers(msg.data.users, msg.data.homeGeo);
        }
      }
    } catch (e) {
      console.error('WS Parse Error', e);
    }
  };

  ws.onclose = () => {
    if (pingInterval) clearInterval(pingInterval);
    setTimeout(connectWs, 2000);
  };
}

// API: Fetch files and folders for current path
async function fetchFiles(targetFolder = '') {
  try {
    const res = await fetch(`/api/files?folder=${encodeURIComponent(targetFolder)}`, {
      headers: savedPin ? { 'x-dispenser-pin': savedPin } : {}
    });
    if (res.ok) {
      const data = await res.json();
      currentFiles = data.items || [];
      currentFolder = data.currentFolder || '';
      currentBreadcrumbs = data.breadcrumbs || [{ name: 'Shared', path: '' }];
      currentUserIsAdmin = !!data.isAdmin;

      updateRoleUI(currentUserIsAdmin);
      renderBreadcrumbs(currentBreadcrumbs);
      renderFiles(currentFiles);
      updateDropSubtitle();

      document.getElementById('totalSizeText').innerText = data.totalSize || '';
      document.getElementById('filesCount').innerText = currentFiles.length;
    }
  } catch (e) {
    console.error('fetchFiles error:', e);
  }
}

// Breadcrumbs Navigation
function renderBreadcrumbs(breadcrumbs) {
  const container = document.getElementById('breadcrumbsBar');
  if (!container) return;

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    container.innerHTML = `<span class="crumb-current">📁 ${t('home')}</span>`;
    return;
  }

  container.innerHTML = breadcrumbs.map((crumb, idx) => {
    const isLast = idx === breadcrumbs.length - 1;
    const label = idx === 0 ? `📁 ${t('home')}` : crumb.name;
    if (isLast) {
      return `<span class="crumb-current">${label}</span>`;
    }
    return `
      <span class="crumb-item" onclick="openFolder('${crumb.path.replace(/'/g, "\\'")}')">${label}</span>
      <span class="crumb-separator">/</span>
    `;
  }).join('');
}

// Navigate into folder
function openFolder(folderPath) {
  currentFolder = folderPath || '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  fetchFiles(currentFolder);
}

// Role UI Update
function updateRoleUI(isAdmin) {
  const roleBadge = document.getElementById('myRoleBadge');
  const adminPanel = document.getElementById('adminPanel');
  const filesTitleText = document.getElementById('filesSectionTitleText');

  if (isAdmin) {
    if (roleBadge) {
      roleBadge.innerText = t('roleAdmin');
      roleBadge.className = 'role-badge role-admin';
    }
    if (adminPanel) {
      adminPanel.classList.remove('hidden');
      setTimeout(() => {
        if (mapInstance) mapInstance.invalidateSize();
      }, 200);
    }
    if (filesTitleText) {
      filesTitleText.innerText = t('filesAdminTitle');
    }
  } else {
    if (roleBadge) {
      roleBadge.innerText = t('roleUser');
      roleBadge.className = 'role-badge';
    }
    if (adminPanel) {
      adminPanel.classList.add('hidden');
    }
    if (filesTitleText) {
      filesTitleText.innerText = t('filesUserTitle');
    }
  }
}

// Status UI Update
function updateStatusUI(status) {
  serverStatus = status;

  if (typeof status.isAdmin === 'boolean') {
    currentUserIsAdmin = status.isAdmin;
    updateRoleUI(currentUserIsAdmin);
  }
  if (status.sessionId) {
    mySessionId = status.sessionId;
  }

  const isExternal =
    status.isExternal ||
    window.location.hostname.includes('serveousercontent.com') ||
    window.location.hostname.includes('trycloudflare.com') ||
    window.location.hostname.includes('loca.lt');

  const netGrid = document.getElementById('networkGrid');
  if (netGrid) {
    netGrid.style.display = (isExternal && !currentUserIsAdmin) ? 'none' : 'grid';
  }

  if (status.localUrl) {
    document.getElementById('localUrlInput').value = status.localUrl;
  }

  if (status.tunnel) {
    updateTunnelStatusUI(status.tunnel);
  }
}

// Tunnel UI update
function updateTunnelStatusUI(tunnel) {
  const badge = document.getElementById('tunnelBadge');
  const statusText = document.getElementById('tunnelStatusText');
  const btnToggle = document.getElementById('btnToggleTunnel');
  const activeBlock = document.getElementById('tunnelActiveBlock');
  const loadingBlock = document.getElementById('tunnelLoadingBlock');
  const providerRow = document.getElementById('providerRow');

  if (!tunnel) return;

  if (tunnel.connecting) {
    badge.className = 'badge badge-tunnel';
    btnToggle.className = 'btn btn-secondary';
    btnToggle.innerText = t('tunnelTurnOff');
    btnToggle.disabled = false;
    activeBlock.classList.add('hidden');
    if (providerRow) providerRow.classList.add('hidden');
    loadingBlock.classList.remove('hidden');
    statusText.innerText = t('tunnelConnecting');
    document.getElementById('tunnelLoadingMsg').innerText = t('startingTunnel');
  } else if (tunnel.active) {
    badge.className = 'badge badge-tunnel';
    btnToggle.className = 'btn btn-danger';
    btnToggle.innerText = t('tunnelTurnOff');
    btnToggle.disabled = false;
    loadingBlock.classList.add('hidden');
    if (providerRow) providerRow.classList.add('hidden');
    activeBlock.classList.remove('hidden');
    statusText.innerText = t('tunnelActive');
    document.getElementById('tunnelUrlInput').value = tunnel.url || '';
    document.getElementById('tunnelPinDisplay').innerText = tunnel.pin || '----';
  } else {
    badge.className = 'badge badge-tunnel';
    btnToggle.className = 'btn btn-primary';
    btnToggle.innerText = t('tunnelTurnOn');
    btnToggle.disabled = false;
    activeBlock.classList.add('hidden');
    if (providerRow) providerRow.classList.remove('hidden');
    loadingBlock.classList.add('hidden');
    statusText.innerText = t('tunnelOff');
  }
}

// Leaflet Map Initialization using Free OpenStreetMap
function initAdminMap(homeGeo) {
  if (typeof L === 'undefined') return;
  const mapElem = document.getElementById('adminMap');
  if (!mapElem || mapInstance) return;

  const lat = (homeGeo && homeGeo.lat) || 50.45;
  const lon = (homeGeo && homeGeo.lon) || 30.52;

  mapInstance = L.map('adminMap', {
    zoomControl: false,
    attributionControl: false
  }).setView([lat, lon], 4);

  L.control.zoom({ position: 'bottomleft' }).addTo(mapInstance);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    subdomains: ['a', 'b', 'c']
  }).addTo(mapInstance);
}

// Update markers on the map
function updateMapMarkers(users, homeGeo) {
  if (!currentUserIsAdmin) return;
  if (!mapInstance) initAdminMap(homeGeo);
  if (!mapInstance) return;

  mapMarkers.forEach((m) => mapInstance.removeLayer(m));
  mapMarkers = [];

  // Server marker
  if (homeGeo && homeGeo.lat && homeGeo.lon) {
    const homeIcon = L.divIcon({
      className: 'map-custom-icon',
      html: '<div style="background:#06b6d4; width:16px; height:16px; border-radius:50%; border:2px solid #fff; box-shadow:0 0 10px #06b6d4;"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    const homeMarker = L.marker([homeGeo.lat, homeGeo.lon], { icon: homeIcon })
      .addTo(mapInstance)
      .bindPopup(`<b>💻 ${t('serverMarker')}</b><br>${homeGeo.city || ''}, ${homeGeo.country || ''}`);
    mapMarkers.push(homeMarker);
  }

  // Connected users markers
  if (users && users.length) {
    users.forEach((u) => {
      if (!u.geo || !u.geo.lat || !u.geo.lon) return;

      const jitterLat = u.isLocal ? (Math.random() - 0.5) * 0.05 : 0;
      const jitterLon = u.isLocal ? (Math.random() - 0.5) * 0.05 : 0;
      const lat = u.geo.lat + jitterLat;
      const lon = u.geo.lon + jitterLon;

      const color = u.role === 'admin' ? '#f59e0b' : '#f43f5e';
      const userIcon = L.divIcon({
        className: 'map-custom-icon',
        html: `<div style="background:${color}; width:14px; height:14px; border-radius:50%; border:2px solid #fff; box-shadow:0 0 8px ${color};"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      const pingStr = typeof u.ping === 'number' ? `${u.ping} ms` : '< 1 ms';
      const countryCode = u.geo.countryCode || '';

      let transferInfo = '';
      if (u.transfers && u.transfers.length > 0) {
        transferInfo = `<div style="margin-top:6px; padding-top:6px; border-top:1px solid #ddd; font-size:11px;">` +
          u.transfers.map(tr => `⚡ <b>${tr.type === 'upload' ? t('transferUploading') : t('transferDownloading')}</b>: ${tr.fileName} (${tr.percent}% • ${tr.speedFormatted})`).join('<br>') +
          `</div>`;
      }

      const popupContent = `
        <div style="font-family: sans-serif; font-size: 12px; line-height: 1.5; color:#111;">
          <strong>${countryCode ? `[${countryCode}] ` : ''}${u.geo.city || ''}, ${u.geo.country || ''}</strong><br>
          <b>IP:</b> ${u.ip}<br>
          <b>${t('device')}</b> ${u.device} (${u.os} • ${u.browser})<br>
          <b>${t('role')}</b> ${u.role === 'admin' ? t('roleAdmin') : t('roleUser')}<br>
          <b>${t('network')}</b> ${u.isLocal ? t('homeWifi') : t('internet')}<br>
          <b>${t('ping')}:</b> ${pingStr}
          ${transferInfo}
        </div>
      `;

      const marker = L.marker([lat, lon], { icon: userIcon }).addTo(mapInstance).bindPopup(popupContent);
      mapMarkers.push(marker);
    });
  }
}

// Render active users in admin panel
function renderAdminUsers(users) {
  if (!currentUserIsAdmin) return;
  const container = document.getElementById('adminUsersList');
  if (!container) return;

  if (!users || users.length === 0) {
    container.innerHTML = `<div style="color:var(--text-muted); font-size:13px; padding:10px;">${t('noActiveConnections')}</div>`;
    return;
  }

  let localCount = 0;
  let guestCount = 0;
  let totalTransfers = 0;

  container.innerHTML = users.map((u) => {
    if (u.isLocal) localCount++; else guestCount++;
    const isMe = u.sessionId === mySessionId;
    const isUserAdmin = u.role === 'admin';
    const pingStr = typeof u.ping === 'number' ? `${u.ping} ms` : '< 1 ms';
    const pingClass = getPingClass(u.ping);
    const countryCode = u.geo?.countryCode || (u.isLocal ? 'LAN' : 'NET');

    let actionBtn = '';
    if (u.isLocal) {
      actionBtn = `<span class="badge badge-wifi">${t('localWifiAdmin')}</span>`;
    } else if (isUserAdmin) {
      actionBtn = `<button class="btn btn-sm btn-danger" onclick="setUserRole('${u.sessionId}', 'user')">${t('revokeAdmin')}</button>`;
    } else {
      actionBtn = `<button class="btn btn-sm btn-promote" onclick="setUserRole('${u.sessionId}', 'admin')">${t('makeAdmin')}</button>`;
    }

    let transfersHtml = '';
    const activeTransfers = u.transfers || [];
    if (activeTransfers.length > 0) {
      totalTransfers += activeTransfers.length;
      transfersHtml = `
        <div class="user-transfers-box">
          ${activeTransfers.map((tr) => {
            const isUp = tr.type === 'upload';
            const icon = isUp ? '⬆️' : '⬇️';
            const typeLabel = isUp ? t('transferUploading') : t('transferDownloading');
            const speedText = tr.speedFormatted ? ` • 🚀 ${tr.speedFormatted}` : '';
            return `
              <div class="transfer-item ${isUp ? 'transfer-upload' : 'transfer-download'}">
                <div class="transfer-info">
                  <span class="transfer-name" title="${tr.fileName}">${icon} <strong>${typeLabel}</strong>: ${tr.fileName}</span>
                  <span class="transfer-stats"><strong>${tr.percent}%</strong>${speedText}</span>
                </div>
                <div class="transfer-bar-bg">
                  <div class="transfer-bar-fill ${isUp ? 'fill-upload' : 'fill-download'}" style="width: ${tr.percent}%;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      transfersHtml = `<div class="user-idle-status">💤 ${t('idle')}</div>`;
    }

    return `
      <div class="user-card">
        <div class="user-card-header">
          <div class="user-identity">
            <span class="country-pill">${countryCode}</span>
            <div>
              <div class="user-ip">${u.ip} ${isMe ? `<span style="color:var(--accent-cyan); font-size:11px;">${t('you')}</span>` : ''}</div>
              <div class="user-city">${u.geo?.city || 'Local Network'}, ${u.geo?.country || ''}</div>
            </div>
          </div>
          <span class="role-badge ${isUserAdmin ? 'role-admin' : ''}">${isUserAdmin ? t('roleAdmin') : t('roleUser')}</span>
        </div>
        <div class="user-details">
          <div class="user-meta-row">
            <span>📱 ${u.device} • ${u.os} • ${u.browser}</span>
            <span class="user-ping-pill ${pingClass}">📶 ${pingStr}</span>
          </div>
          <div style="font-size:11px; color:var(--text-muted);">${t('connectedAt')} ${new Date(u.connectedAt).toLocaleTimeString()}</div>
          ${transfersHtml}
        </div>
        <div class="user-actions">
          ${actionBtn}
        </div>
      </div>
    `;
  }).join('');

  const statActiveCount = document.getElementById('statActiveCount');
  if (statActiveCount) statActiveCount.innerText = users.length;
  const statLocalCount = document.getElementById('statLocalCount');
  if (statLocalCount) statLocalCount.innerText = localCount;
  const statGuestCount = document.getElementById('statGuestCount');
  if (statGuestCount) statGuestCount.innerText = guestCount;
  const statTransferCount = document.getElementById('statTransferCount');
  if (statTransferCount) statTransferCount.innerText = totalTransfers;
}

// Appoint or revoke user admin role
async function setUserRole(sessionId, role) {
  await fetch('/api/admin/promote-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, role })
  });
}

// Toggle distribution for file or folder (Admin only)
async function toggleDistribution(itemPath) {
  await fetch('/api/files/toggle-distribution', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: itemPath })
  });
}

// Render files & folders list
function renderFiles(items) {
  const container = document.getElementById('filesList');
  if (!items || items.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 30px; color: var(--text-muted);">${t('emptyShared')}</div>`;
    return;
  }

  container.innerHTML = items.map((item) => {
    const isDist = item.isDistributed !== false;
    const isDir = item.isDir === true;

    // Distribution badge (Admin only)
    const distBadge = currentUserIsAdmin
      ? (isDist
          ? `<span class="file-status-badge badge-distributed">${t('distributing')}</span>`
          : `<span class="file-status-badge badge-hidden">${t('hidden')}</span>`)
      : '';

    // Distribution toggle button (Admin only)
    const distBtn = currentUserIsAdmin
      ? `<button class="btn-toggle-dist" onclick="toggleDistribution('${item.relPath.replace(/'/g, "\\'")}')" title="${isDist ? t('hide') : t('distribute')}">${isDist ? t('hide') : t('distribute')}</button>`
      : '';

    // Deletion button (Strictly Administrator only! Regular users cannot delete)
    const deleteBtn = currentUserIsAdmin
      ? `<button class="btn btn-danger" onclick="deleteItem('${item.relPath.replace(/'/g, "\\'")}', ${isDir}, '${item.name.replace(/'/g, "\\'")}')" title="Delete">✕</button>`
      : '';

    // Rename button (Available to modify folders/files)
    const renameBtn = `<button class="btn btn-secondary btn-sm" onclick="openRenameModal('${item.relPath.replace(/'/g, "\\'")}', '${item.name.replace(/'/g, "\\'")}')" title="${t('rename')}">✏️</button>`;

    if (isDir) {
      const itemsLabel = t('itemsCount').replace('{count}', item.itemCount || 0);
      return `
        <div class="file-item folder-item">
          <div class="file-meta">
            <div class="file-icon" style="cursor:pointer;" onclick="openFolder('${item.relPath.replace(/'/g, "\\'")}')">📁</div>
            <div>
              <div class="file-name">
                <span class="folder-name-link" onclick="openFolder('${item.relPath.replace(/'/g, "\\'")}')" title="${item.name}">${item.name}</span>
                ${distBadge}
              </div>
              <div class="file-sub">📁 ${itemsLabel} • ${item.sizeFormatted} • ${new Date(item.mtime).toLocaleDateString()}</div>
            </div>
          </div>
          <div class="file-actions">
            <button class="btn btn-primary" onclick="openFolder('${item.relPath.replace(/'/g, "\\'")}')">▶️ ${t('open')}</button>
            ${renameBtn}
            ${distBtn}
            ${deleteBtn}
          </div>
        </div>
      `;
    }

    return `
      <div class="file-item">
        <div class="file-meta">
          <div class="file-icon">${getFileIcon(item.ext)}</div>
          <div>
            <div class="file-name" title="${item.name}">
              ${item.name}
              ${distBadge}
            </div>
            <div class="file-sub">${item.sizeFormatted} • ${new Date(item.mtime).toLocaleTimeString()}</div>
          </div>
        </div>
        <div class="file-actions">
          <a href="/api/download/${encodeURIComponent(item.relPath)}" download class="btn btn-primary">${t('download')}</a>
          <button class="btn btn-secondary" onclick="copyDownloadUrl('${item.relPath.replace(/'/g, "\\'")}')">${t('tunnelLink')}</button>
          ${renameBtn}
          ${distBtn}
          ${deleteBtn}
        </div>
      </div>
    `;
  }).join('');
}

// Search files filter within current folder
document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = currentFiles.filter((f) => f.name.toLowerCase().includes(query));
  renderFiles(filtered);
});

// PayPal Donate Modal
function openDonateModal() {
  const modal = document.getElementById('donateModal');
  if (modal) modal.classList.remove('hidden');
}

function closeDonateModal() {
  const modal = document.getElementById('donateModal');
  if (modal) modal.classList.add('hidden');
}

function copyDonateEmail() {
  navigator.clipboard.writeText('mercooler666@gmail.com');
  alert(t('emailCopied'));
}

const btnCopyDonateEmail = document.getElementById('btnCopyDonateEmail');
if (btnCopyDonateEmail) {
  btnCopyDonateEmail.addEventListener('click', copyDonateEmail);
}

// Create Folder Modal Handling (1-Click Creation)
const btnNewFolder = document.getElementById('btnNewFolder');
if (btnNewFolder) {
  btnNewFolder.addEventListener('click', () => {
    openFolderModal();
  });
}

function openFolderModal() {
  const modal = document.getElementById('folderModal');
  const input = document.getElementById('folderNameInput');
  modal.classList.remove('hidden');
  input.value = 'New Folder';
  setTimeout(() => {
    input.focus();
    input.select();
  }, 100);
}

function closeFolderModal() {
  document.getElementById('folderModal').classList.add('hidden');
}

async function submitCreateFolder() {
  const input = document.getElementById('folderNameInput');
  const name = input.value.trim();
  if (!name) return;

  try {
    const res = await fetch('/api/folders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(savedPin ? { 'x-dispenser-pin': savedPin } : {})
      },
      body: JSON.stringify({
        parentFolder: currentFolder,
        folderName: name
      })
    });
    if (res.ok) {
      closeFolderModal();
      fetchFiles(currentFolder);
    } else {
      const err = await res.json();
      alert(err.error || 'Failed to create folder');
    }
  } catch (e) {
    alert('Error creating folder: ' + e.message);
  }
}

document.getElementById('btnSubmitFolder').addEventListener('click', submitCreateFolder);
document.getElementById('folderNameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') submitCreateFolder();
  if (e.key === 'Escape') closeFolderModal();
});

// Rename Modal Handling
let renameTargetRelPath = '';

function openRenameModal(relPath, currentName) {
  renameTargetRelPath = relPath;
  const modal = document.getElementById('renameModal');
  const input = document.getElementById('renameInput');
  modal.classList.remove('hidden');
  input.value = currentName;
  setTimeout(() => {
    input.focus();
    input.select();
  }, 100);
}

function closeRenameModal() {
  document.getElementById('renameModal').classList.add('hidden');
  renameTargetRelPath = '';
}

async function submitRename() {
  const input = document.getElementById('renameInput');
  const newName = input.value.trim();
  if (!newName || !renameTargetRelPath) return;

  try {
    const res = await fetch('/api/items/rename', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(savedPin ? { 'x-dispenser-pin': savedPin } : {})
      },
      body: JSON.stringify({
        oldRelPath: renameTargetRelPath,
        newName
      })
    });
    if (res.ok) {
      closeRenameModal();
      fetchFiles(currentFolder);
    } else {
      const err = await res.json();
      alert(err.error || 'Failed to rename item');
    }
  } catch (e) {
    alert('Error renaming item: ' + e.message);
  }
}

document.getElementById('btnSubmitRename').addEventListener('click', submitRename);
document.getElementById('renameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') submitRename();
  if (e.key === 'Escape') closeRenameModal();
});

// Delete Item (File or Folder, Admin Only)
async function deleteItem(relPath, isDir, name) {
  const confirmMsg = isDir
    ? t('deleteFolderConfirm').replace('{name}', name)
    : t('deleteConfirm').replace('{name}', name);

  if (!confirm(confirmMsg)) return;

  try {
    const res = await fetch(`/api/items?path=${encodeURIComponent(relPath)}`, {
      method: 'DELETE',
      headers: savedPin ? { 'x-dispenser-pin': savedPin } : {}
    });
    if (res.ok) {
      fetchFiles(currentFolder);
    } else {
      const err = await res.json();
      alert(err.error || t('deleteError'));
    }
  } catch (e) {
    alert(t('deleteError') + ': ' + e.message);
  }
}

// Toggle tunnel button
const btnToggleTunnel = document.getElementById('btnToggleTunnel');
if (btnToggleTunnel) {
  btnToggleTunnel.addEventListener('click', async () => {
    const providerSelect = document.getElementById('tunnelProviderSelect');
    const provider = providerSelect ? providerSelect.value : 'serveo';
    await fetch('/api/tunnel/toggle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ provider })
    });
  });
}

// Drag & drop upload with Chunking Engine (5MB slices) directly into current folder
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');

dropzone.addEventListener('click', () => fileInput.click());
dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
});
fileInput.addEventListener('change', () => {
  if (fileInput.files.length) uploadFiles(fileInput.files);
});

const CHUNK_SIZE = 5 * 1024 * 1024; // 5 MB chunks

async function uploadFiles(fileList) {
  if (!fileList || !fileList.length) return;

  const progressContainer = document.getElementById('uploadProgressContainer');
  const progressBar = document.getElementById('uploadProgressBar');
  const uploadSpeed = document.getElementById('uploadSpeed');
  const uploadFileName = document.getElementById('uploadFileName');

  progressContainer.classList.remove('hidden');

  const files = Array.from(fileList);
  const totalFiles = files.length;
  const targetFolder = currentFolder; // Capture target folder at upload start

  for (let fIdx = 0; fIdx < totalFiles; fIdx++) {
    const file = files[fIdx];
    const uploadId = 'up_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE) || 1;

    let uploadedBytes = 0;
    let lastTime = Date.now();
    let lastLoaded = 0;

    uploadFileName.innerText = `${t('uploading')} (${fIdx + 1}/${totalFiles}) ${file.name}`;
    uploadSpeed.innerText = `0% • 0 MB / ${(file.size / (1024 * 1024)).toFixed(1)} MB`;

    for (let cIdx = 0; cIdx < totalChunks; cIdx++) {
      const start = cIdx * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, file.size);
      const chunkBlob = file.slice(start, end);
      const chunkBytes = end - start;

      let attempt = 0;
      let success = false;
      let lastError = null;

      while (attempt < 3 && !success) {
        attempt++;
        try {
          if (attempt > 1) {
            uploadSpeed.innerText = `⚠️ ${t('retrying')} (${attempt}/3)`;
          }

          await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/upload-chunk');
            if (savedPin) xhr.setRequestHeader('x-dispenser-pin', savedPin);

            xhr.upload.onprogress = (e) => {
              if (e.lengthComputable) {
                const totalLoaded = uploadedBytes + e.loaded;
                const percent = Math.min(99, Math.round((totalLoaded / file.size) * 100));
                progressBar.style.width = percent + '%';

                const now = Date.now();
                const diffTime = (now - lastTime) / 1000;
                if (diffTime >= 0.4) {
                  const bytesDiff = totalLoaded - lastLoaded;
                  const speedBps = bytesDiff / diffTime;
                  const speedMbps = (speedBps / (1024 * 1024)).toFixed(1);

                  const remainingBytes = file.size - totalLoaded;
                  const etaSec = speedBps > 0 ? Math.ceil(remainingBytes / speedBps) : 0;
                  const etaText = etaSec > 60 ? `${Math.ceil(etaSec / 60)}m` : `${etaSec}s`;

                  const loadedMb = (totalLoaded / (1024 * 1024)).toFixed(1);
                  const totalMb = (file.size / (1024 * 1024)).toFixed(1);

                  uploadSpeed.innerText = `${percent}% (${loadedMb}/${totalMb} MB) • 🚀 ${speedMbps} MB/s • ~${etaText} ${t('remaining')}`;

                  lastTime = now;
                  lastLoaded = totalLoaded;
                }
              }
            };

            xhr.onload = () => {
              if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
              } else {
                reject(new Error(`Server HTTP ${xhr.status}`));
              }
            };

            xhr.onerror = () => reject(new Error('Network error'));
            xhr.ontimeout = () => reject(new Error('Timeout'));
            xhr.timeout = 90000;

            const formData = new FormData();
            formData.append('uploadId', uploadId);
            formData.append('fileName', file.name);
            formData.append('folder', targetFolder);
            formData.append('chunkIndex', cIdx);
            formData.append('totalChunks', totalChunks);
            formData.append('chunkSize', CHUNK_SIZE);
            formData.append('totalSize', file.size);
            formData.append('chunk', chunkBlob, 'chunk.bin');

            xhr.send(formData);
          });

          uploadedBytes += chunkBytes;
          success = true;
        } catch (err) {
          lastError = err;
          console.warn(`Chunk ${cIdx + 1}/${totalChunks} attempt ${attempt} failed:`, err);
          if (attempt < 3) {
            await new Promise((r) => setTimeout(r, 1200));
          }
        }
      }

      if (!success) {
        alert(`${t('uploadFailed')}: ${file.name}\n${lastError ? lastError.message : ''}`);
        progressContainer.classList.add('hidden');
        progressBar.style.width = '0%';
        return;
      }
    }

    progressBar.style.width = '100%';
    uploadSpeed.innerText = `100% • ${t('uploadSuccess')}`;
  }

  setTimeout(() => {
    progressContainer.classList.add('hidden');
    progressBar.style.width = '0%';
    fetchFiles(currentFolder);
  }, 1200);
}

// Copy utilities
function copyText(id) {
  const input = document.getElementById(id);
  input.select();
  navigator.clipboard.writeText(input.value);
  alert(t('linkCopied'));
}

function copyDownloadUrl(relPath) {
  const url = `${window.location.origin}/api/download/${encodeURIComponent(relPath)}`;
  navigator.clipboard.writeText(url);
  alert(t('directLinkCopied'));
}

function copyShareText() {
  const url = document.getElementById('tunnelUrlInput').value;
  const pin = document.getElementById('tunnelPinDisplay').innerText;
  const message = `📂 iDispenser:\n${t('tunnelLink')}: ${url}\nPIN: ${pin}`;
  navigator.clipboard.writeText(message);
  alert(t('shareCopied'));
}

// QR Code Modals
const btnShowLocalQr = document.getElementById('btnShowLocalQr');
if (btnShowLocalQr) {
  btnShowLocalQr.addEventListener('click', () => {
    if (serverStatus && serverStatus.localQr) {
      document.getElementById('qrModalTitle').innerText = t('qrLocalTitle');
      document.getElementById('qrModalImg').src = serverStatus.localQr;
      document.getElementById('qrModal').classList.remove('hidden');
    }
  });
}

const btnShowTunnelQr = document.getElementById('btnShowTunnelQr');
if (btnShowTunnelQr) {
  btnShowTunnelQr.addEventListener('click', () => {
    if (serverStatus && serverStatus.tunnel && serverStatus.tunnel.qrCode) {
      document.getElementById('qrModalTitle').innerText = t('qrTunnelTitle');
      document.getElementById('qrModalImg').src = serverStatus.tunnel.qrCode;
      document.getElementById('qrModal').classList.remove('hidden');
    }
  });
}

function closeQrModal() {
  document.getElementById('qrModal').classList.add('hidden');
}

// PIN Authorization overlay
function showPinModal() {
  const overlay = document.getElementById('pinOverlay');
  overlay.classList.remove('hidden');
  const input = document.getElementById('pinInput');
  setTimeout(() => input.focus(), 100);
}

async function verifyPin(pinToTest) {
  const pin = pinToTest || document.getElementById('pinInput').value.trim();
  if (!pin) return;

  const res = await fetch('/api/verify-pin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pin })
  });

  if (res.ok) {
    savedPin = pin;
    localStorage.setItem('dispenser_pin', pin);
    document.getElementById('pinOverlay').classList.add('hidden');
    document.getElementById('pinError').classList.add('hidden');
    window.location.reload();
  } else {
    document.getElementById('pinError').classList.remove('hidden');
    const input = document.getElementById('pinInput');
    input.value = '';
    input.focus();
  }
}

document.getElementById('btnSubmitPin').addEventListener('click', () => verifyPin());
document.getElementById('pinInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') verifyPin();
});

// App Initialization
async function initAuth() {
  try {
    const res = await fetch('/api/status');
    const data = await res.json();

    const detected = detectLanguage(data.clientCountryCode || data.countryCode);
    setLanguage(detected);

    updateStatusUI(data);

    if (savedPin && data.requiresPin) {
      await verifyPin(savedPin);
    } else if (data.requiresPin) {
      showPinModal();
    } else {
      fetchFiles(currentFolder);
    }
  } catch (e) {
    console.error('Init error', e);
    setLanguage(detectLanguage());
    fetchFiles(currentFolder);
  }
}

// Launch
initAuth();
connectWs();
