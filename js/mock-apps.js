/**
 * Curated metadata, known Tizen App IDs, SVG icons and brand glow colors
 * for major streaming apps on Samsung Smart TVs.
 */

// SVG Icon Data URIs for offline, crystal-clear 4K rendering
const APP_ICONS = {
    livetv: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%230F172A"/><circle cx="50" cy="50" r="8" fill="%2338BDF8"/><path d="M66 34a23 23 0 0 1 0 32m-32 0a23 23 0 0 1 0-32m44-11a38 38 0 0 1 0 54m-54 0a38 38 0 0 1 0-54" stroke="%2338BDF8" stroke-width="4.5" fill="none" stroke-linecap="round"/></svg>',
    netflix: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23000"/><path d="M28 20h12v60H28z" fill="%23E50914"/><path d="M60 20h12v60H60z" fill="%23E50914"/><path d="M28 20h12l32 60H60z" fill="%23B81D24"/></svg>',
    youtubefree: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23E11D48"/><path d="M38 34l26 16-26 16z" fill="%23FFF"/><circle cx="76" cy="24" r="16" fill="%2310B981"/><path d="M70 24l4 4 8-8" stroke="%23FFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    youtube: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23FF0000"/><path d="M42 36l22 14-22 14z" fill="%23FFF"/></svg>',
    prime: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%2300A8E1"/><path d="M25 60c18 12 36 12 50 0M68 56l7 4-5 6" stroke="%23FFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    disney: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23113CCF"/><path d="M50 24c-14 0-24 12-24 26 0 16 14 26 24 26 10 0 24-10 24-26 0-14-10-26-24-26z" fill="none" stroke="%23FFF" stroke-width="4"/><path d="M36 50h28" stroke="%23FFF" stroke-width="4"/></svg>',
    appletv: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%231C1C1E"/><text x="50" y="62" font-family="-apple-system, sans-serif" font-size="34" font-weight="600" fill="%23FFF" text-anchor="middle">tv</text><path d="M50 26c2-4 6-5 6-5s-1 4-3 6c-2 2-6 1-6 1s0-4 3-6z" fill="%23FFF"/></svg>',
    plex: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23282A2D"/><path d="M34 26l18 24-18 24h15l18-24-18-24z" fill="%23E5A00D"/></svg>',
    spotify: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%231ED760"/><path d="M28 42c16-4 32-2 44 5M32 54c13-3 26-1 36 5M36 66c10-2 20 0 28 4" stroke="%23000" stroke-width="5" stroke-linecap="round" fill="none"/></svg>',
    twitch: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%239146FF"/><path d="M26 24h48v34l-12 12H50l-8 8v-8H26z" fill="%23FFF"/><path d="M42 38v14M58 38v14" stroke="%239146FF" stroke-width="5" stroke-linecap="round"/></svg>',
    jellyfin: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23000B25"/><path d="M50 22C32 22 22 42 22 62c8-8 18-12 28-12s20 4 28 12c0-20-10-40-28-40z" fill="%2300A4DC"/></svg>',
    moonlight: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%231B2838"/><circle cx="50" cy="50" r="28" fill="%2358A6FF"/></svg>',
    browser: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%231A73E8"/><circle cx="50" cy="50" r="26" fill="none" stroke="%23FFF" stroke-width="4"/><ellipse cx="50" cy="50" rx="14" ry="26" fill="none" stroke="%23FFF" stroke-width="4"/><line x1="24" y1="50" x2="76" y2="50" stroke="%23FFF" stroke-width="4"/></svg>',
    hdmi: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%2330363D"/><rect x="28" y="38" width="44" height="26" rx="4" fill="none" stroke="%23FFF" stroke-width="4"/><text x="50" y="56" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="%23FFF" text-anchor="middle">HDMI</text></svg>',
    cinema: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%237C3AED"/><path d="M26 26h48v48H26z" fill="none" stroke="%23FFF" stroke-width="4"/><path d="M26 38h48M26 62h48M38 26v12M50 26v12M62 26v12M38 62v12M50 62v12M62 62v12" stroke="%23FFF" stroke-width="4"/></svg>',
    lofi: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23D97706"/><circle cx="50" cy="50" r="26" fill="none" stroke="%23FFF" stroke-width="4"/><circle cx="50" cy="50" r="10" fill="%23FFF"/><path d="M72 28l-8 8" stroke="%23FFF" stroke-width="4" stroke-linecap="round"/></svg>',
    arcade: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23EC4899"/><path d="M28 42h44v32H28z" rx="6" fill="%230F172A"/><circle cx="62" cy="54" r="4.5" fill="%23EF4444"/><circle cx="52" cy="62" r="4.5" fill="%2338BDF8"/><path d="M38 52v12M32 58h12" stroke="%23FFF" stroke-width="3.5" stroke-linecap="round"/><circle cx="38" cy="30" r="6" fill="%23FACC15"/><line x1="38" y1="36" x2="38" y2="42" stroke="%23FFF" stroke-width="3"/></svg>',
    gamepad: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%236366F1"/><path d="M30 36h40c8 0 14 6 12 16l-3 18c-1 6-7 10-13 10-5 0-9-3-11-8l-2-6h-6l-2 6c-2 5-6 8-11 8-6 0-12-4-13-10l-3-18c-2-10 4-16 12-16z" fill="%230F172A"/><path d="M36 46v10M31 51h10" stroke="%2338BDF8" stroke-width="3" stroke-linecap="round"/><circle cx="68" cy="48" r="3" fill="%23EF4444"/><circle cx="62" cy="54" r="3" fill="%2310B981"/></svg>'
};


APP_ICONS.tvplus = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%230B57D0"/><rect x="22" y="30" width="56" height="38" rx="6" fill="none" stroke="%23FFF" stroke-width="5"/><path d="M50 40v18M41 49h18" stroke="%23FFF" stroke-width="5" stroke-linecap="round"/><path d="M38 76h24" stroke="%23FFF" stroke-width="5" stroke-linecap="round"/></svg>';
APP_ICONS.store = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="%23334155"/><rect x="26" y="26" width="20" height="20" rx="5" fill="%23FFF"/><rect x="54" y="26" width="20" height="20" rx="5" fill="%23FFF"/><rect x="26" y="54" width="20" height="20" rx="5" fill="%23FFF"/><path d="M64 56v16M56 64h16" stroke="%23FFF" stroke-width="5" stroke-linecap="round"/></svg>';
APP_ICONS.ytkids = APP_ICONS.youtube;

/**
 * FrameDock TV catalog.
 *  row:     which home row the tile lives in ('apps' | 'free' | 'framedock' | 'tv')
 *  builtin: opens a screen inside FrameDock TV (never leaves the launcher)
 *  native app tiles are shown only when the app is installed (tizenIds first, then a name match),
 *  unless storeFallback is set: then the tile stays and OK opens the Apps store with a hint.
 *  c1/c2: tile background and light colour; logo: typographic wordmark (not an official logo).
 */
function wm(text, size, color, extra) {
    return '<span class="wm" style="font-size:' + size + 'px;color:' + color + ';' + (extra || '') + '">' + text + '</span>';
}

const DEFAULT_CATALOG = [
    // ---- Your apps
    { id: "youtube", row: "apps", logoImg: "assets/logos/youtube.png", name: "YouTube", sub: "Video · Music", chip: "4K",
      tizenIds: ["com.samsung.tv.cobalt-yt", "9Ur5IzDKqV.TizenYouTube"], match: /^youtube$/i,
      c1: "#140606", c2: "#FF2A2A", logo: wm("&#9654;&#xFE0E; YouTube", 62, "#fff"),
      eyebrow: "STREAMING · INSTALLED", desc: "Videos, music and live streams.", chips: "4K · HDR" },
    { id: "tizentube", row: "apps", name: "YouTube no ads", sub: "TizenTube · SponsorBlock", chip: "NO ADS",
      tizenIds: ["k78Z2j0mY1.TizenTube", "org.tizen.tizentube"], match: /tizentube/i,
      c1: "#16040B", c2: "#E11D48", logo: wm("YouTube <span style=\"color:#9FD17A\">no ads</span>", 42, "#fff"),
      eyebrow: "STREAMING · INSTALLED", desc: "YouTube without ads, sponsor segments skipped automatically.", chips: "SPONSORBLOCK" },
    { id: "netflix", row: "apps", logoImg: "assets/logos/netflix.png", name: "Netflix", sub: "Series · Films", chip: "4K",
      tizenIds: ["org.tizen.netflix-app", "3201907018807.Netflix"], match: /^netflix$/i,
      c1: "#120203", c2: "#E50914", logo: wm("NETFLIX", 64, "#E50914", "letter-spacing:.02em"),
      eyebrow: "STREAMING · INSTALLED", desc: "TV shows and movies.", chips: "4K · DOLBY VISION" },
    { id: "primevideo", row: "apps", logoImg: "assets/logos/primevideo.png", name: "Prime Video", sub: "Amazon", chip: "4K",
      tizenIds: ["org.tizen.primevideo-dummy", "evKhCgZelL.AmazonIgnitionLauncher2"], match: /^prime video$/i,
      c1: "#04121A", c2: "#1AA7E0", logo: wm("prime <span style=\"color:#1AA7E0\">video</span>", 58, "#fff"),
      eyebrow: "STREAMING · INSTALLED", desc: "Amazon Originals, movies and series.", chips: "4K · HDR10+" },
    { id: "disneyplus", row: "apps", logoImg: "assets/logos/disneyplus.png", name: "Disney+", sub: "Disney · Pixar · Marvel", chip: "4K",
      tizenIds: ["MCmYXNxgcu.DisneyPlus"], match: /^disney\+$/i,
      c1: "#050A24", c2: "#2B5BFF", logo: wm("Disney<span style=\"color:#7FA5FF\">+</span>", 66, "#fff", "font-weight:700"),
      eyebrow: "STREAMING · INSTALLED", desc: "Disney, Pixar, Marvel, Star Wars and National Geographic.", chips: "4K · DOLBY VISION" },
    { id: "spotify", row: "apps", logoImg: "assets/logos/spotify.png", name: "Spotify", sub: "Music · Podcasts", chip: "APP",
      tizenIds: ["rJeHak5zRg.Spotify"], match: /^spotify/i,
      c1: "#04140A", c2: "#1ED760", logo: wm("Spotify", 60, "#1ED760"),
      eyebrow: "MUSIC · INSTALLED", desc: "Music and podcasts on the big speakers.", chips: "MUSIC" },
    { kids: true, id: "ytkids", row: "apps", logoImg: "assets/logos/ytkids.png", name: "YouTube Kids", sub: "For children", chip: "KIDS",
      tizenIds: ["com.samsung.tv.cobalt-ytkids"],
      c1: "#1A0A04", c2: "#FF6A2A", logo: wm("YouTube <span style=\"color:#FFB02A\">Kids</span>", 50, "#fff"),
      eyebrow: "KIDS · INSTALLED", desc: "Videos picked for children.", chips: "KIDS" },
    { id: "appletv", row: "apps", name: "Apple TV", sub: "Apple Originals", chip: "4K",
      tizenIds: [], match: /^apple tv$/i,
      c1: "#0E0E10", c2: "#A1A1AA", logo: wm("&#63743; tv", 64, "#fff"),
      eyebrow: "STREAMING · INSTALLED", desc: "Apple Originals, movies and series.", chips: "4K · DOLBY VISION" },
    { id: "plex", row: "apps", name: "Plex", sub: "Your media", chip: "APP",
      tizenIds: ["kIciSQlYEM.plex"], match: /^plex$/i,
      c1: "#141006", c2: "#E5A00D", logo: wm("plex", 66, "#E5A00D"),
      eyebrow: "MEDIA · INSTALLED", desc: "Your personal media, free live TV and movies.", chips: "MEDIA SERVER" },
    { id: "twitch", row: "apps", name: "Twitch", sub: "Live streams", chip: "LIVE",
      tizenIds: [], match: /^twitch$/i,
      c1: "#0E0618", c2: "#9146FF", logo: wm("twitch", 64, "#B794FF"),
      eyebrow: "LIVE · INSTALLED", desc: "Live gaming and creative streams.", chips: "LIVE" },
    { id: "jellyfin", row: "apps", name: "Jellyfin", sub: "Your media", chip: "APP",
      tizenIds: ["AprZAARz4r.Jellyfin", "org.jellyfin.tizen"], match: /^jellyfin$/i,
      c1: "#060B1A", c2: "#00A4DC", logo: wm("jellyfin", 58, "#7FD3F0"),
      eyebrow: "MEDIA · INSTALLED", desc: "Free software media system.", chips: "MEDIA SERVER" },

    // ---- Watch free
    { kids: true, id: "cleanyourtv.livetv", builtin: true, row: "free", name: "Live World TV", sub: "English · Русские", chip: "LIVE", chipClass: "live",
      c1: "#061218", c2: "#38BDF8", logo: wm("LIVE <span style=\"color:#38BDF8\">WORLD</span>", 54, "#fff"),
      eyebrow: "FRAMEDOCK · BUILT-IN", desc: "Free broadcasts in English and Russian: news, sport, films. Plays inside FrameDock TV, Back returns here.", chips: "368 ENGLISH · 74 RUSSIAN · ALL PLAYED ON THIS TV" },
    { id: "framedock.playlists", builtin: true, row: "free", name: "My Playlists", sub: "Your own IPTV", chip: "M3U",
      c1: "#120C06", c2: "#E8B27A", logo: wm("my <span style=\"color:#E8B27A\">.m3u</span>", 56, "#E9E4DA"),
      eyebrow: "FRAMEDOCK · IPTV PLAYER", desc: "Your own playlists: an M3U link or an Xtream Codes login. Saved on this TV, plays in the FrameDock player.", chips: "M3U · M3U8 · XTREAM" },
    { id: "plutotv", row: "free", name: "Pluto TV", sub: "Movies · Channels", chip: "FREE", chipClass: "free", storeFallback: true,
      tizenIds: [], match: /^pluto ?tv$/i,
      c1: "#16140A", c2: "#F5D90A", logo: wm("pluto<span style=\"color:#fff\">tv</span>", 58, "#F5D90A"),
      eyebrow: "FREE · NO ACCOUNT", desc: "Free movies and live channels, no sign-up.", chips: "AD-SUPPORTED" },
    { id: "tubi", row: "free", name: "Tubi", sub: "Movies · Series", chip: "FREE", chipClass: "free", storeFallback: true,
      tizenIds: [], match: /^tubi/i,
      c1: "#180A04", c2: "#FA5A1E", logo: wm("tubi", 70, "#FFD23F"),
      eyebrow: "FREE · NO ACCOUNT", desc: "Thousands of free movies and series. Sign-in is optional.", chips: "AD-SUPPORTED" },

    // ---- FrameDock built-ins
    { id: "framedock.today", builtin: true, row: "framedock", name: "Today", sub: "Weather · News", chip: "DXB",
      c1: "#0A1218", c2: "#38BDF8", logo: wm("to<span style=\"color:#38BDF8\">day</span>", 60, "#E9E4DA"),
      eyebrow: "FRAMEDOCK · MORNING", desc: "Weather in Dubai and the latest headlines on one calm screen.", chips: "OPEN-METEO · BBC · DW" },
    { id: "framedock.phone", builtin: true, row: "framedock", name: "Phone", sub: "FrameDock on your phone", chip: "PHONE",
      c1: "#0B1210", c2: "#9FD17A", logo: wm("phone <span style=\"color:#9FD17A\">&rarr;</span> tv", 52, "#E9E4DA"),
      eyebrow: "FRAMEDOCK · PHONE", desc: "Type a link, a playlist or a search on your phone; the TV picks it up.", chips: "NTFY.SH" },
    { kids: true, id: "cleanyourtv.lofiradio", builtin: true, row: "framedock", name: "Lo-Fi Radio", sub: "6 stations · no ads", chip: "ON AIR", chipClass: "live",
      c1: "#160E04", c2: "#E8B27A", logo: wm("lo-fi &#9702; radio", 46, "#E8B27A"),
      eyebrow: "FRAMEDOCK · BUILT-IN", desc: "Lo-fi, SomaFM ambient, lounge and sleep stations. The screen can go dark while it plays.", chips: "NO ADS" },
    { kids: true, id: "framedock.artmode", builtin: true, row: "framedock", name: "Art Mode", sub: "Paintings · Clock", chip: "4K",
      c1: "#0E0C08", c2: "#C9A66B", logo: wm("Art Mode", 56, "#E9E4DA", "font-weight:500;font-style:italic"),
      eyebrow: "FRAMEDOCK · BUILT-IN", desc: "Eight masterpieces and a quiet clock. Works offline.", chips: "OFFLINE" },
    { id: "framedock.sleep", builtin: true, row: "framedock", name: "Sleep Timer", sub: "Turns the TV off", chip: "OFF",
      c1: "#0C0816", c2: "#8B5CF6", logo: wm("sleep <span style=\"color:#B79CFF\">&#9790;</span>", 56, "#fff"),
      eyebrow: "FRAMEDOCK · TOOL", desc: "Each press: 30, 60, 90 minutes, off.", chips: "1-CLICK" },
    { kids: true, id: "cleanyourtv.retroarcade", builtin: true, row: "framedock", name: "Retro Arcade", sub: "Remote or gamepad", chip: "GAME",
      c1: "#16040E", c2: "#EC4899", logo: wm("ARCADE<span style=\"color:#EC4899\">.</span>", 54, "#fff"),
      eyebrow: "FRAMEDOCK · GAMES", desc: "Classic games playable with the remote or a Bluetooth controller.", chips: "60 FPS" },
    { id: "framedock.speedtest", builtin: true, row: "framedock", name: "Speed Test", sub: "Wi-Fi · Streaming", chip: "NET",
      c1: "#08120C", c2: "#9FD17A", logo: wm("<span style=\"color:#9FD17A\">&#8595;</span> Mbps", 58, "#fff"),
      eyebrow: "FRAMEDOCK · TOOL", desc: "Measures the TV's real download speed and latency.", chips: "CLOUDFLARE" },
    { id: "cleanyourtv.gamepadtester", builtin: true, row: "framedock", name: "Gamepad Test", sub: "Sticks · Triggers", chip: "TEST",
      c1: "#08081A", c2: "#6366F1", logo: wm("pad <span style=\"color:#A5A8FF\">test</span>", 56, "#fff"),
      eyebrow: "FRAMEDOCK · TOOL", desc: "Check a connected controller: stick drift, triggers, buttons, rumble.", chips: "BLUETOOTH" },

    // ---- TV
    { id: "source", builtin: true, row: "tv", name: "Source", sub: "HDMI 1–4 · TV", chip: "HDMI",
      c1: "#0B1012", c2: "#9FD17A", logo: wm("HDMI", 60, "#9FD17A"),
      eyebrow: "TV · SYSTEM", desc: "Switch straight to HDMI 1–4 or TV. The first time, allow FrameDock TV on the TV.", chips: "HDMI 1 · 2 · 3 · 4 · TV" },
    { id: "framedock.mirror", builtin: true, row: "tv", name: "Screen mirroring", sub: "iPhone · Mac · AirPlay", chip: "AIRPLAY",
      c1: "#0E0E10", c2: "#A1A1AA", logo: wm("AirPlay", 60, "#E9E4DA"),
      eyebrow: "TV · APPLE AIRPLAY 2", desc: "This TV is an AirPlay receiver: mirror an iPhone or a Mac, or use the TV as a second display.", chips: "BUILT INTO THE TV" },
    { id: "store", row: "tv", name: "Apps", sub: "Install more", chip: "STORE",
      tizenIds: ["com.samsung.tv.store"],
      c1: "#0D1114", c2: "#94A3B8", logo: wm("+ Apps", 58, "#fff"),
      eyebrow: "TV · SYSTEM", desc: "Find and install more apps from Samsung Apps.", chips: "SAMSUNG" },
    { id: "framedock.settings", builtin: true, row: "tv", name: "Settings", sub: "FrameDock TV", chip: "SYS",
      c1: "#0D0F12", c2: "#64748B", logo: wm("Settings", 56, "#E9E4DA"),
      eyebrow: "FRAMEDOCK · SETTINGS", desc: "Screensaver, background light, auto-start and diagnostics.", chips: "" },
    { id: "framedock.browser", builtin: true, row: "tv", name: "Browser", sub: "Stays in FrameDock", chip: "WEB",
      c1: "#06101C", c2: "#9FD17A", logo: wm("www<span style=\"color:#9FD17A\">.</span>", 64, "#E9E4DA"),
      eyebrow: "FRAMEDOCK · BROWSER", desc: "Web pages open inside FrameDock TV. Arrows move the pointer, OK clicks, Back returns.", chips: "NO EXIT TO SAMSUNG" }
];

const HOME_ROWS = [
    { id: "apps", title: "Your apps", tag: "01", hint: "INSTALLED ON THIS TV" },
    { id: "sites", title: "Your sites", tag: "", hint: "PIN A PAGE IN THE BROWSER" },
    { id: "free", title: "Watch free", tag: "02", hint: "NO SUBSCRIPTION" },
    { id: "framedock", title: "FrameDock", tag: "03", hint: "NEVER LEAVES THE LAUNCHER" },
    { id: "tv", title: "TV", tag: "04", hint: "SYSTEM" }
];

window.DEFAULT_CATALOG = DEFAULT_CATALOG;
window.HOME_ROWS = HOME_ROWS;
window.APP_ICONS = APP_ICONS;
