/**
 * CleanYourTV - Global IPTV Catalog & Service
 * Synchronized with https://github.com/iptv-org/iptv
 * Free public broadcast streams from all countries.
 */

const IPTV_COUNTRIES = [
    { code: "FAVORITES", name: "★ Favorites", flag: "⭐" },
    { code: "ALL", name: "English", flag: "🇬🇧" },
    { code: "RU", name: "Русские", flag: "🇷🇺" },
    { code: "CUSTOM", name: "Custom M3U", flag: "📁" }
];

const IPTV_CATEGORIES = [
    { id: "ALL", name: "All Genres", icon: "📺" },
    { id: "News", name: "News", icon: "📰" },
    { id: "Sports", name: "Sports", icon: "⚽" },
    { id: "Movies", name: "Movies", icon: "🎬" },
    { id: "Music", name: "Music", icon: "🎵" },
    { id: "Science", name: "Science & Nature", icon: "🔬" },
    { id: "Entertainment", name: "Entertainment", icon: "🍿" },
    { id: "Kids", name: "Kids & Animation", icon: "🧸" },
    { id: "Documentary", name: "Documentary", icon: "📚" }
];

const DEFAULT_IPTV_CHANNELS = [
    {
        "name": "ABC News",
        "logo": "https://i.imgur.com/BrW7gk8.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8",
        "lang": "en"
    },
    {
        "name": "Al Jazeera English",
        "logo": "https://i.imgur.com/7bRVpnu.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://live-hls-apps-aje-fa.getaj.net/AJE/index.m3u8",
        "lang": "en"
    },
    {
        "name": "CBS News Baltimore",
        "logo": "https://i.imgur.com/jy3UfCe.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://lineup.cbsivideo.com/playout/8877a7d5-b094-4ac8-bc72-75a5fed68e5b/index.m3u8",
        "lang": "en"
    },
    {
        "name": "CBS News Miami",
        "logo": "https://i.imgur.com/DExbVa9.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://cbsn-mia.cbsnstream.cbsnews.com/out/v1/ac174b7938264d24ae27e56f6584bca0/master.m3u8",
        "lang": "en"
    },
    {
        "name": "CBS News Sacramento",
        "logo": "https://i.imgur.com/0e1kSGX.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://lineup.cbsivideo.com/playout/c1ed69db-6b71-4581-a937-a70ab4089f8a/index.m3u8",
        "lang": "en"
    },
    {
        "name": "Cheddar News",
        "logo": "https://i.imgur.com/tuP9GW8.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://wurlcheddar.global.transmit.live/hls/689ceac9301c34d3919676f3/v1/Cheddar/samsung_us/latest/main/hls/playlist.m3u8",
        "lang": "en"
    },
    {
        "name": "DW English",
        "logo": "https://i.imgur.com/8MRNFb9.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://amg01644-amg01644c1-amgplt0343.playout.now3.amagi.tv/ts-eu-w1-n2/playlist/amg01644-amg01644c1-amgplt0343/playlist.m3u8",
        "lang": "en"
    },
    {
        "name": "NBC News NOW",
        "logo": "https://i.imgur.com/JZt2qh5.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://xumo-drct-nbcnn-ir8ze.fast.nbcuni.com/live/master.m3u8",
        "lang": "en"
    },
    {
        "name": "NHK World-Japan",
        "logo": "https://jiotvimages.cdn.jio.com/dare_images/images/NHK_World_Japan.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://masterpl.hls.nhkworld.jp/hls/w/live/smarttv.m3u8",
        "lang": "en"
    },
    {
        "name": "Sky News Extra 1",
        "logo": "https://i.imgur.com/ZsPb8nL.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://skynewsau-live.akamaized.net/hls/live/2002689/skynewsau-extra1/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Sky News Extra 2",
        "logo": "https://i.imgur.com/ZsPb8nL.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://skynewsau-live.akamaized.net/hls/live/2002690/skynewsau-extra2/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Sky News Extra 3",
        "logo": "https://i.imgur.com/ZsPb8nL.png",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://skynewsau-live.akamaized.net/hls/live/2002691/skynewsau-extra3/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Red Bull TV",
        "logo": "https://images.pluto.tv/channels/5e7cb84a172a0f0007da69e4/colorLogoPNG.png",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://3ea22335.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWdiX1JlZEJ1bGxUVl9ITFM/playlist.m3u8",
        "lang": "en"
    },
    {
        "name": "Red Bull TV AU",
        "logo": "https://images.pluto.tv/channels/5e7cb84a172a0f0007da69e4/colorLogoPNG.png",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://db34cc6127ac459db55cab5f97cd66b9.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-680-WORBAUENFAST-WHALETVPLUS/680/whaletvplus/hls/master/playlist.m3u8",
        "lang": "en"
    },
    {
        "name": "Red Bull TV SD",
        "logo": "https://images.pluto.tv/channels/5e7cb84a172a0f0007da69e4/colorLogoPNG.png",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Red Bull TV UK",
        "logo": "https://images.pluto.tv/channels/5e7cb84a172a0f0007da69e4/colorLogoPNG.png",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://1a3566cb46914c5499fbc86fbc4ac87e.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-932-WORBUKENFAST-WHALETVPLUS/932/whaletvplus/hls/master/playlist.m3u8",
        "lang": "en"
    },
    {
        "name": "Red Bull TV US",
        "logo": "https://images.pluto.tv/channels/5e7cb84a172a0f0007da69e4/colorLogoPNG.png",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://0b73ace69ebb45eaa249bb87837cb958.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-644-WORBUSENFAST-LG_US/644/lgtv/hls/master/playlist.m3u8",
        "lang": "en"
    },
    {
        "name": "World Poker Tour",
        "logo": "https://i.imgur.com/98kLMjj.png",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://d2e00kr7m9coe4.cloudfront.net/scheduler/scheduleMaster/406.m3u8",
        "lang": "en"
    },
    {
        "name": "World Poker Tour UK",
        "logo": "https://i.imgur.com/98kLMjj.png",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://amg00477-samsungelectron-worldpokertour-samsunguk-81igb.amagi.tv/playlist/amg00477-samsungelectron-worldpokertour-samsunguk/playlist.m3u8",
        "lang": "en"
    },
    {
        "name": "Rakuten TV Action Movies",
        "logo": "https://i.imgur.com/Meew6eX.png",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://a9c57ec7ec5e4b7daeacc6316a0bb404.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6069/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Rakuten TV Action Movies UK",
        "logo": "https://i.imgur.com/Meew6eX.png",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://54045f0c40fd442c8b06df076aaf1e85.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6065/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Rakuten TV Comedy Movies",
        "logo": "https://i.imgur.com/Meew6eX.png",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://71db867f03ce4d71a29e92155f07ab87.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6180/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Rakuten TV Comedy Movies UK",
        "logo": "https://i.imgur.com/Meew6eX.png",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://9be783d652cd4b099cf63e1dc134c4a3.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6181/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Rakuten TV Drama Movies",
        "logo": "https://i.imgur.com/Meew6eX.png",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://a7089c89d85f453d850c4a1518b43076.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6092/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Rakuten TV Drama Movies UK",
        "logo": "https://i.imgur.com/Meew6eX.png",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://fee09fd665814f51b939b6d106cf5f66.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6093/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Rakuten TV Family Movies",
        "logo": "https://i.imgur.com/Meew6eX.png",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://b0d59c8c98974e708e5ccb9a27cdfdfc.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6205/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Rakuten TV Family Movies UK",
        "logo": "https://i.imgur.com/Meew6eX.png",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://e3207568b726401995c25670faaf32e4.mediatailor.eu-west-1.amazonaws.com/v1/master/0547f18649bd788bec7b67b746e47670f558b6b2/production-LiveChannel-6203/master.m3u8",
        "lang": "en"
    },
    {
        "name": "Bloomberg Originals",
        "logo": "https://jiotvimages.cdn.jio.com/dare_images/images/Bloomberg_Originals.png",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://bloomberg.com/media-manifest/streams/qt.m3u8",
        "lang": "en"
    },
    {
        "name": "Bloomberg Originals SD",
        "logo": "https://jiotvimages.cdn.jio.com/dare_images/images/Bloomberg_Originals.png",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "url": "https://86fdc85a.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctZ2JfQmxvb21iZXJnT3JpZ2luYWxzX0hMUw/playlist.m3u8",
        "lang": "en"
    },
    {
        "name": "30A Georgia Hollywood Review TV",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/gh.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A Investment Pitch",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/feeds/xodglobal/30atv.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ABC News Live",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/d6cbb0de-68e4-4f3b-82f9-bf5d526e0bde/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "AccuWeather Now",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00684-accuweather-accuweather-plex/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "America's Voice",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://content.uplynk.com/channel/26bd482ffe364a1282bc3df28bd3c21f.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Ameritrade",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://tdameritrade-vizio.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "BBC News",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/mobile_wifi_main_hd_abr_v2.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Black News Channel",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://blacknewschannel-vizio.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Bloomberg TV+",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d8975dc3.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1nYl9CbG9vbWJlcmdUVlBsdXNfSExT/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "CBC News Network",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aka-live1050.delivery.roku.com/0c24a9ef-e9c3-485c-bf68-3f1ae5ef3e85/t2-origin/out/v1/live.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "CBS News 24/7",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cbsn-us-vtt.cbsnstream.cbsnews.com/out/v1/ef868690d34144509eda696884bf1619/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "CBS News Boston",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dai.google.com/linear/hls/event/dHA193vxQ_WqZNVoC-W5MA/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "CNBC",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01079-nbcuuk-amg01079c2-samsung-gb-1258.playouts.now.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "CNN Originals",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01918-cnnus-amg01918c2-vizio-us-9192.playouts.now.amagi.tv/playlist/amg01918-cnnus-cnnoriginals-vizious/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Entertainment Tonight",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://enterbcef94b.airspace-cdn.cbsivideo.com/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Entrepreneur TV",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live3/entrepreneurtv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Fox News Radio",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://radiovid.foxnews.com/hls/live/661547/RADIOVID/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Fox Sports News",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://skynewsau-live-premium.akamaized.net/hls/live/2105307/foxsportsnews/live_1080p.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Fox Weather",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aka-live1050.delivery.roku.com/2ff50939-341e-4fa8-becf-718769322f14/t2-origin/out/v1/live.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "GB News",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-gbnewsnz-samsungnz/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Hollywire",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://di1slo8304ver.cloudfront.net/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "LiveNOW from FOX",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aka-live1050.delivery.roku.com/eaf7d889-16e0-4c14-a299-a2932df9f467/t2-origin/out/v1/live.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "News24",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://skynewsau-live-premium.akamaized.net/hls/live/2105299/skynews/live.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "News24 Weather",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://skynewsau-live-premium.akamaized.net/hls/live/2105305/skynewsweather/live_540p.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "News24 World",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://skynewsau-live-premium.akamaized.net/hls/live/2105306/skynewsextra/live_540p.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Newsmax 2",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00217-newsmax-newsmax-zeasn-022k9.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Newsmax TV",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00217-newsmax-amg00217c2-zeasn-us-2412.playouts.now.amagi.tv/playlist/amg00217-newsmaxmediafast-newsmaxn1-zeasnus/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NTD TV English",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg17596-ntdtv-amg17596c1-rakuten-gb-6741.playouts.now.amagi.tv/playlist/amg17596-newtangdynastytelevision-ntdtv-rakutengb/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "OAN",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live1/oan_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "OAN Plus",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live1/oane/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Reuters Now",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00453-reuters-amg00453c1-xumo-us-2073.playouts.now.amagi.tv/reuters-reuters-hls/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Salem News Channel",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00732-salemmediagroup-snc-ono-ekp8j.amagi.tv/playlist/amg00732-salemmediagroup-snc-ono/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Schwab Network",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://content.uplynk.com/channel/f9aafa1f132e40af9b9e7238bc18d128.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Scripps News",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/7e1c26b7-7975-4240-9a4f-480eaa8f3ea4/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The First TV",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://thefirst-oando.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Weather Channel",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/theweatherchannel_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Young Turks (TYT)",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://tyt-samsungus.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "TODAY All Day",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d37kx062o4ii0p.cloudfront.net/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Top Stories by Newsy",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://content.uplynk.com/channel/33c48f602cfd4474b957eb4ad999caf8.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "USA Today",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00731-gannettcoinc-usatodaynews-plex/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WeatherNation",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aka-live1050.delivery.roku.com/90ba101a-eef0-4c48-b464-b5ef935b5dcb/t2-origin/out/v1/live.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WeatherSpy",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://jukin-weatherspy-2-au.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WeatherSpy",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d12gab6t5iutxf.cloudfront.net/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Yahoo! Finance",
        "logo": "",
        "category": "News",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://yahoo-plex.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A Darcizzle Offshore",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/darcizzle.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A Golf Kingdom",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/feeds/vidaa/golf.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ACCDN",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://raycom-accdn-firetv.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "American Ninja Warrior",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://xumo-drct-ch812-n4996.fast.nbcuni.com/live/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "beIN SPORTS XTRA",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d9ssxzmclhfo4.cloudfront.net/bein_sports.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "beIN Sports XTRA en Espanol",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dc1644a9jazgj.cloudfront.net/beIN_Sports_Xtra_Espanol.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Cricket Gold",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d382r3rgbxdixq.cloudfront.net/scheduler/scheduleMaster/418.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ESPN8 The Ocho",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d3b6q2ou5kp8ke.cloudfront.net/ESPNTheOcho.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Eurovision Sport",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg26268-amg26268c34-amgplt0018.playout.now3.amagi.tv/ts-us-e2-n1/playlist/amg26268-amg26268c34-amgplt0018/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "FIFA+",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "FIFA+ Women",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cffda8ff.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1nYl9GSUZBUGx1c3dvbWVuX0hMUw/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Fight Network",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/fight_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "FITE 24/7",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d3d85c7qkywguj.cloudfront.net/scheduler/scheduleMaster/263.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "FloHockey 24/7",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg02278-amg02278c2-flosports-worldwide-9916.playouts.now.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "FloRacing 24/7",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg02278-amg02278c1-flosports-worldwide-7592.playouts.now.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "FTF Sports",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/ftf_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Game+",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/fntsy_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Hard Knocks",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d3uyzhwvmemdyf.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/HardKnocks-PLEX/121.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "HBCU-GO Sports",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live3/hbcugo_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Horse & Country TV",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://hnc-free-viewlift.amagi.tv/HNC_AUSTRALIA.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Lacrosse TV",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/lsn_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Love Nature",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/6d6d0f24-8445-4b4c-bdf6-44f9e38beaa4/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "MLB",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/36ef2f9d-7100-4c4d-b41a-dbf41ab7e461/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NBC Sports NOW",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d1m1xk35ma8qfl.cloudfront.net/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NHL Network",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://nhl-firetv.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NHRA TV",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/b8c5eb48-349b-454f-9625-63911ee923f5/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Outdoor America",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d1e354daam8g5r.cloudfront.net/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Outdoor Channel",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00718-outdoorchannela-outdoortvnz-samsungnz/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Outside TV",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://outsidetv-firetv.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Pac 12 Insider",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://pac12-firetv.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "PGA Tour",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d11k1mnrgfposz.cloudfront.net/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Pursuit UP",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-205.frequency.stream/dist/glewedtv/205/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Racer Network",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00378-mavtv-amg00378c3-sportstribal-emea-1325.playouts.now.amagi.tv/mavtv-smn-xm/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Racer Select",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00378-amg00378c4-freelivesports-emea-5637.playouts.now.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "RightNow TV",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/rightnowtv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "SportsGrid",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://sportsgrid-tribal.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stadium",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/74681dcc-e6d0-4add-ad67-a22ad9c152e6/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Strongman",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://rightsboosterltd-scl-1-eu.rakuten.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Strongman Champions League",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://rightsboosterltd-scl-1-us.xumo.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Swerve Combat",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-253.frequency.stream/mt/roku/253/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Swerve Sports",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live3/swervewomenssports_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "talkSPORT",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://af7a8b4e.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctZ2JfdGFsa1NQT1JUX0hMUw/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Tennis Channel",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01444-tennischannelth-tennischnlintl-lggb/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Unbeaten Sports Channel",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d1t5afz6qed3xk.cloudfront.net/Unbeaten.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Waypoint TV",
        "logo": "",
        "category": "Sports",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://waypoint-waypointtv-firetv.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "24 Hour Free Movies",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d1j2u714xk898n.cloudfront.net/scheduler/scheduleMaster/145.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A TV Classic Movies",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/feeds/pzaz/30atvmovies.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ABC 5 Boston MA (WCVB)",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/c2e3094d-ad56-4c5f-9655-cd80df71fbab/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "All Weddings We TV",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amc-allweddings-1-us.xumo.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Always Funny Videos",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/a0713659-0883-4501-9aba-f7e651becae9/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Anger Management Channel",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00353-lionsgatestudio-angermgmt-samsungau-o9jg9.amagi.tv/playlist/amg00353-lionsgatestudio-angermgmt-samsungau/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Antiques Roadshow PBS",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00953-pbsusa-antiroadshow-xumo-x6ud5.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Antiques Roadshow UK",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://bbc-antiquesroadshowuk-1-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Are We There Yet?",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00353-lionsgatestudio-arewethereyet-samsunguk-6h2ju.amagi.tv/playlist/amg00353-lionsgatestudio-arewethereyet-samsunguk/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "At Home with Family Handyman",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-458.frequency.stream/dist/xumo/458/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Baywatch",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/9d1cd886-32b9-41ce-a7de-3babb46506aa/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "BBC Doctor Who Classic",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://bbc-classicdrwho-1-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Choppertown",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-11.frequency.stream/dist/glewedtv/11/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Cine Romantico",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d1si3n1st4nkgb.cloudfront.net/10502/88886011/hls/master.m3u8?ads.xumo_channelId=88886011",
        "source": "iptv-org"
    },
    {
        "name": "Cine Sony",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live1/cine_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Cold Case Files",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/1e764712-0649-4946-bd7e-f1bbba3be6fa/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Dark Matter TV",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://tricoast-tv-dark-matter-01-us.ono.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Deal or No Deal",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00627-banijaygroup-dealornodeal-samsungau-si7xg.amagi.tv/playlist/amg00627-banijaygroup-dealornodeal-samsungau/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Dog the Bounty Hunter",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/ff0ad399-75ed-42ba-8c60-75bb6cb8c929/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Duck Dynasty",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/ae3cd8ce-3c41-452b-92a0-78fdb3c5b855/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Ebony TV by Lionsgate",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/a0ad4b53-ab3a-48dd-be12-bc7f533c372c/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Fear Factor",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00627-banijaygroup-fearfactor-samsungau-9vdod.amagi.tv/playlist/amg00627-banijaygroup-fearfactor-samsungau/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "FilmRise Westerns",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dz05z8iljgvbe.cloudfront.net/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Gravitas Movies",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d6dg3ebeih71x.cloudfront.net/Gravitas_Movies.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Great! Movies",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01753-narrativeentert-greatmovies-samsunguk-7z6eh.amagi.tv/playlist/amg01753-narrativeentert-greatmovies-samsunguk/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Great! Romance",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01753-narrativeentert-greatchristmas-samsunguk-8atls.amagi.tv/playlist/amg01753-narrativeentert-greatchristmas-samsunguk/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Haunt TV",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01446-blueantmediacan-haunttvaussam-samsungau-vcnai.amagi.tv/playlist/amg01446-blueantmediacan-haunttvaussam-samsungau/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Hell's Kitchen",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://itv-hellskitchen-rakuten.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Homes Under The Hammer",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://all3media-homes-under-the-hammer-1-au.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Impossible Quiz Show",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://bbc-impossible-1-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Inside Crime",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aenetworks-insidecrime-rakuten.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Judge Nosey",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00514-noseybaxterllc-realnosey-cineverse-tqbpv.amagi.tv/playlist/amg00514-noseybaxterllc-realnosey-cineverse/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Made in Hollywood",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://connection3-ent-nz.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Maverick Black Cinema",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://maverick-maverick-black-cinema-3-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Midsomer Murders",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://all3media-midsomer-1-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "MovieSphere AU",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00353-lionsgatefilmsi-moviesphereaus-samsungau-7qzhf.amagi.tv/playlist/amg00353-lionsgatefilmsi-moviesphereaus-samsungau/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Mystery Science Theater 3000",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/99c48388-377e-4f2c-ad8e-33d0dee33bc3/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Mythbusters",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00627-amg00627c14-rakuten-uk-4802.playouts.now.amagi.tv/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "MyTime Movie Network",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://mytime-tcl.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "MyTime Movie Network",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://appletree-mytimeuk-rakuten.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Nosey",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00514-noseybaxterllc-nosey-cineverse-hvu5a.amagi.tv/playlist/amg00514-noseybaxterllc-nosey-cineverse/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NOST",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/nost_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "On Patrol: Live",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live3/onpatrol_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "OuterSphere",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d3o593mz1glx8d.cloudfront.net/OuterSphere_US.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Scares by Shudder",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aka-live1050.delivery.roku.com/bf4fff9b-e81f-4dcb-baaf-71b75e091599/t2-origin/out/v1/live.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Sony Movies",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live1/smc_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Survivor",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00627-banijaygroup-surviour-uk-samsunguk-uyz22.amagi.tv/playlist/amg00627-banijaygroup-survivor-samsunguk/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Chat Show Channel",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00426-littledotstudio-thechatshow-samsungnz-uqmtt.amagi.tv/playlist/amg00426-littledotstudio-thechatshow-samsungnz/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Johnny Carson Show",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/475550ae-8708-46a5-a7c3-54acb3d91480/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Walking Dead Universe",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amc-twdfanexperience-1-us.xumo.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "This Old House",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://thisoldhouse-2-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Tiny House Nation",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://adf47c43.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1nYl9UaW55SG91c2VOYXRpb25fSExT/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "True Crime UK",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://b6cca454.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1nYl9UcnVlQ3JpbWVVS2Zyb21DQlNSZWFsaXR5X0hMUw/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Universal Crime",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://xumo-xumoent-vc-107-xmuvk.fast.nbcuni.com/live/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Unsolved Mysteries",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d31z96rdrmwfsp.cloudfront.net/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WFXT-DT2",
        "logo": "",
        "category": "Movies",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01438-ewscrippscompan-ionmystery-tablo/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A Ridiculous TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/feeds/720p/63.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A Sidewalks",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/sidewalks.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A Television Channel",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/feeds/masters/30atv.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A The Beach Show",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/beachy.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A We Love Cars",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/feeds/vidaa/cars.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "3ABN Canada",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://3abn.bozztv.com/3abncanada/3ABN/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "3ABN Dare To Dream Network",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://3abn.bozztv.com/3abn2/d2d_live/smil:d2d_live.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "3ABN English",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://3abn.bozztv.com/3abn2/3abn_live/smil:3abn_live.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "3ABN International Network",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://3abn.bozztv.com/3abn2/Int_live/smil:Int_live.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "3ABN Proclaim! Network",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://3abn.bozztv.com/3abn2/Pro_live/smil:Pro_live.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ABC 15 Phoenix AZ (KNXV)",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/e923f4ce-7229-4e01-a25e-d453993dab82/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ABC 9 Charlotte NC (WSOC)",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/d864a20b-85bb-41bc-8fbe-6c9d8a88a32d/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "AFV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-12.frequency.stream/dist/plex/12/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "AMC Absolute Reality",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amc-absolutereality-1-us.plex.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "AsianCrush",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-900.frequency.stream/dist/cineverse/900/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "AWE",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live1/awe_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "AWE International",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live1/aweint/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "AWE Plus",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live1/awee/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Bounce XL",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01438-ewscrippscompan-bouncexl-tablo/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "BUZZR",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/d4038326-a3e3-4aba-b1f1-f0526c912c74/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Cars.TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/carstv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "CBS 3 Omaha NE (KMTV-TV)",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://content.uplynk.com/channel/328d1434fb51476cb6567c74d5b2cc70.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Circle",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://circle-roku.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Comedy Dynamics",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-903.frequency.stream/dist/xumo/903/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Comedy.TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/comedytv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Dry Bar Comedy",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://drybar-drybarcomedy-1-au.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Elevation Church",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-1066.frequency.stream/dist/stirr/1066/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ES.TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/estv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "EstrellaTV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00567-estrellamedia-estrellatv-distrotv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Failarmy International",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://failarmy-international-au.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Feva TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d3c1w351ahk83d.cloudfront.net/scheduler/scheduleMaster/416.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Game Show Network East",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/gsn_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Gem Shopping Network",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01460-gemshoppingnetw-gem-ono-x662c.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Great Entertainment Television",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/greattv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Grit Xtra",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01438-ewscrippscompan-gritxtra-tablo/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Hi-Yah!",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-59.frequency.stream/dist/xumo/59/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Homeful",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/9f31e187-3d43-4ed0-81ba-63bd3bc560aa/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "HSN",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/hsn_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "INSP",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/insp_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ION Plus",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01438-ewscrippscompan-ionplus-tablo/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "It's Supernatural! Network",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://content.uplynk.com/channel/b880a791bf95426d917a509e0c44796a.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Joel Osteen Network",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-860.frequency.stream/dist/xumo/860/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Justice Central.TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/justicecentral_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "K Content by CJ ENM",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d2q0mzb9bm4w5z.cloudfront.net/68fee8e1_605a_437b_b968_244c3c0d5f24/hls/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "KOKI-DT1",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg02104-imagicommcommun-kokibreaking-ono/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "KSHB 41 (Kansas City MO)",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://content.uplynk.com/channel/50d0fa1b042945a3a4f550f9b8412c83.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "MHZ",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://mhz-samsung-linear-ca.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Midnight Pulp",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-897.frequency.stream/dist/cineverse/897/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Mystery TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aenetworks-mysterytv-rakuten.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NBC Comedy Vault",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://xumo-xumoent-vc-105-z0vpm.fast.nbcuni.com/live/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NBC LX Home",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dn7vkzd5khpp3.cloudfront.net/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "People Are Awesome",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://jukin-peopleareawesome-2-au.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Pets.TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/petstv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Pop",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01753-narrativeentert-popkids-lggb-xyy5k.amagi.tv/ts-eu-w1-n2/playlist/amg01753-narrativeentert-popkids-lggb/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Portlandia",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amc-portlandia-1-us.xumo.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "PowerNation",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01258-raycomsports-powernationau-samsungau-18bwc.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Pursuit Channel",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live3/pursuit_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "QVC Live",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/qvclive_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Rainbow Ruby",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dt9mwqwe98q7o.cloudfront.net/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Real America's Voice",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d2jiqiw4g5lj5k.cloudfront.net/AVSamsung/AVSamsung.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Real Wild",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg00426-littledotstudio-realwildnz-samsungnz/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Rev and Roll",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d39nqr4d4h6cv6.cloudfront.net/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Revry LatinX",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-142.frequency.stream/dist/24i/142/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "RiffTrax",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://wurlrifftrax.global.transmit.live/hls/68222b9cbe836edbe6f39e74/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "RugbyPass TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://97bf7b92.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/U2Ftc3VuZy1nYl9SdWdieVBhc3NUVl9ITFM/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Shop LC",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-shop-lc-01.vos360.video/Content/HLS_HLS/Live/channel(ShopLCStirrTV)/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "SNL Vault",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://xumo-xumoent-vc-103-d3uqt.fast.nbcuni.com/live/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Spark TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://candlelightmedia-sparklightlove-4-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray ZenLIFE",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/zenlife-zen001-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stories by AMC",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amc-amcpresents-1-us.xumo.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "TalkTV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://488f4ce4.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctZ2JfVGFsa19ITFM/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "TBN+",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live3/tbn_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Archive",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-1080.frequency.stream/dist/cineverse/1080/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Graham Norton Show",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00654-itv-amg00654c35-rakuten-gb-7598.playouts.now.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "TheGrio",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/thegrio_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "TMZ",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/57c1fa3c-566b-4998-b6de-d6de67031d99/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Top Gear",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/33ccaca5-a666-4b28-8578-55a9ab9f06d5/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "True History",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-188.frequency.stream/dist/glewedtv/188/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Undercover Boss",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://all3media-international-undercoverboss-1-au.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Vice TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://vicetv-vicefast1-firetv.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Wanted: Dead or Alive",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/d5171dc7-f8c6-469c-81eb-e1ffaaed5721/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WBTV News",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d2ugl2g2gz1giy.cloudfront.net/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WFLD-DT1",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00488-foxdigital-wfld-lgus/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WGGS-DT2",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://content.uplynk.com/channel/1f93c13275024afb9e0ead299624073d.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WHBQ-DT1",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg02104-imagicommcommun-whbqbreaking-ono/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Wild TV",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dfhsahpa45kk2.cloudfront.net/scheduler/scheduleMaster/476.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Wine Watches & Whiskey",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://www-on-stirr.b-cdn.net/Wine-Watches-and-Whiskey/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Wipeout Xtra",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00627-banijaygroup-wipeoutxtraau-samsungau-ashbl.amagi.tv/playlist/amg00627-banijaygroup-wipeoutxtraau-samsungau/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Women's Sports Network",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d39accvx65hq9o.cloudfront.net/Womens_Sports_Network.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WSLF-LD 35.1",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://content.uplynk.com/channel/1992858a34c3423dbdad491d07ae6f75.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Xplore",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://xplore-vizio.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Young Hollywood",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://younghollywood-rakuten-samsung.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Zee One",
        "logo": "",
        "category": "Entertainment",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg17931-zee-amg17931c6-samsung-au-8872.playouts.now.amagi.tv/playlist/amg17931-asiatvusaltdfast-zeeworld-samsungau/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A Luxe Life Discovered",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/feeds/vidaa/luxelife.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Americas Test Kitchen",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/0094c1fc-7c41-45d0-af7a-6bbb62d6cd6e/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Antiques Road Trip",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d3v8uchko88gmi.cloudfront.net/PBSART_GB.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Aspire TV Life",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://uptv-aspiretvlife-klowdtv.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "BBC Earth",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/bb1fc6ad-9948-42ea-aaf3-20acfcdeecac/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "bon appétit",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://bonappetit-samsung.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "BritBox Mysteries",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/c95700f8-e51c-4a36-ad46-56f70fc9f1d9/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Court TV",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01438-ewscrippscompan-courttv-tablo/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Dateline 24/7",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/240e3917-5be6-4a26-a1a2-878c9d40b5cf/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Deadly Women",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d1mgh147xpmgs8.cloudfront.net/DeadlyWomen_GB.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Documentary+",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://ef79b15c8c7c46c7a9de9d33001dbd07.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-859-DOCUMENTARYPLUS-DOCUMENTARYPLUS/mt/documentaryplus/859/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "DroneTV",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://airvuz-dronetv-1-us.ohlscdn.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Fox Soul",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://foxsoul-vizio.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Fun Roads TV",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live3/funroads_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Get.Factual",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d1nhni5l2n8hjt.cloudfront.net/gf.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Gordon Ramsay",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/c8364f36-c60b-4a39-8d86-0b92db4611c0/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Gusto TV",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01077-gustoworldwidem-gustotvnz-samsungnz/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "History Hit",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lds-timeline-rakuten.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Hmong TV Network",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://livefta.malimarcdn.com/ftaedge00/cvabroadcasting.stream/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Jewish Life Television",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://jlt-jltv-stirr.otteravision.com/jlt/jltv/jltv.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Law & Crime",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cdn.lawandcrime.net/rewind/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Localish",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/0ecc85a2-5e1b-482a-9c69-3eaaee160f2e/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Love Pets",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://rakutenaa-blueskyent-lovepetsemea-rakuten-ikc4q.amagi.tv/playlist/rakutenAA-blueskyent-lovepetsemea-rakuten/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "MyDestination.TV",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/mydestinationtv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NatureTime",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00090-blueantllc-lovenature-au-samsungau-wggcn.amagi.tv/playlist/amg00090-blueantllc-lovenature-au-samsungau/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NBC LX Home",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://plex-xumoent-ch485-e7l5l.fast.nbcuni.com/live/master_5.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Recipe.TV",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/recipetv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Reelz Famous & Infamous",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/dfd312a3-99b3-45fe-89b2-d20579fee2e9/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Revry",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d36jpyyja698yd.cloudfront.net/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Revry Queer",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-43.frequency.stream/mt/galxy/43/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "So… Real",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://all3media-soreal-1-gb.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Space Live",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d111bsx9oooqoh.cloudfront.net/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Tastemade",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://rakutenaa-tm-intl-aus-rakuten-eu-n1gtg.amagi.tv/playlist/rakutenAA-tm-intl-aus-rakuten-eu/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Design Network",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00441-amg00441c1-rakuten-us-6050.playouts.now.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Jamie Oliver Channel",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://jamieoliver-xumo.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Total Crime",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aegis-cloudfront-1.tubi.video/b062c287-a170-47df-99e4-f5dcd441ee59/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Unidentified",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d3ify425qsio2d.cloudfront.net/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "WMPT-DT2 (PBS Create)",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://2-fss-1.streamhoster.com/pl_122/amlst:201814-2122456/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Wonder",
        "logo": "",
        "category": "Documentary",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lds-wonder-plex.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "30A Music",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://30a-tv.com/music.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "3ABN Praise Him Music Network",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://3abn.bozztv.com/3abn1/PraiseHim/smil:PraiseHim.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "California Music Channel",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://cmc-cmctv-cineverse.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Clubbing TV UK",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live3/clubbingtv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Now 70's",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lightning-now70s-samsungnz.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Now 80's",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lightning-now80s-samsungnz.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Now 90s00s",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01076-amg01076c19-rakuten-gb-8653.playouts.now.amagi.tv/ts-eu-w1-n2/playlist/amg01076-lightning-now90s00s-rakutengb/cb513f19657460909bce2167d0d334dd844c3bdd0b61cb3071aa448f049f4b1bdae5a5d3ec4ae47821c04d873d5f66411f21c118dc7c1fc7c76adf046727486b9b9ab265d9896450f08d597562ac7b1c51e00e07c47100238ebb4e5dd670e7295243a5583f5063c0bf5fab704fc1d50bd8767dd8a9d963317c383ea57e657305d692dfd07777ae0eb3876a0ac47116b2a063f3e669dea0488f5371ac408451dfcdb0def92098b6937091938145c78e2062208d51b3b0e4ebc3a2a1ecfe51622a3b40f4ac83fb010c87554a4fc219aad541d21cd480298d6178ee4ec80fcc11846fb806aee50ef1fce09f6f4e3badc85e3a67b2f3fadba9657ded2fbb85ecde7873d6a7462809992dfe2b393d96f2d35bd59145d8e651e8de0e3c36c4834a9299c0e1bee1f705f642ffc9ff963255401972258353a78864d869fc76acdc1c28580d69a2985cc8839b321d6d4d8f8c5b942313b6d58e89bd566e2a01dfdb52cdbf8ef6cea6a54bcf99790ab8c7b3a23d0c/85/1920x1080_4716800/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NOW Rock",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lightning-now90s-samsungnz.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Pamir TV",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "http://live.stream.cdn.pamirtv.com/ptv/d0dbe915091d400bd8ee7f27f0791303.sdp/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Qello Concerts by Stingray",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/qello-qello001-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Cityscapes",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aka-live1050.delivery.roku.com/7572d640-7373-4137-8b14-a3afff395349/t2-origin/out/v1/live.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Classic Rock",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-101ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Classica",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/classica-cla008-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Cozy Cafe",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://aka-live1050.delivery.roku.com/372c813e-1fb9-41d4-a4d0-5fbd803659c5/t2-origin/out/v1/live.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray DJAZZ",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/djazz-djaads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Easy Listening",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-137ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Flashback 70s",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-115ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Hit List",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-107ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Holiday Hits",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-155ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Holidayscapes",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/holidayscapes-hol001ads_hol001-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Hot Country",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-108ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Jukebox Oldies",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-021ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Karaoke",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/karaoke-kar000-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Movie Music",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/cmusic-cme004-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Naturescape",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/naturescape-a003-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Nothin' But 90s",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-142ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Pop Adult",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-104ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Remember the 80s",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-128ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Rock Alternative",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-102ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Romance Latino",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-202ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Smooth Jazz",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-140ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Soul Storm",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-134ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray The Spa",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-122ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Today's KPOP",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-317ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Stingray Today's Latin Pop",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lotus.stingray.com/manifest/ose-190ads-montreal/samsungtvplus/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Country Network",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://a-cdn.klowdtv.com/live2/countrytv_720p/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Trace UK",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d2l4tng0wskzvn.cloudfront.net/Trace_GB.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Vevo Pop",
        "logo": "",
        "category": "Music",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00056-amg00056c6-rakuten-uk-3235.playouts.now.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "3ABN Kids Network",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://3abn.bozztv.com/3abn2/Kids_live/smil:Kids_live.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Baby Shark TV",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://newidco-babysharktv-1-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Dove Channel",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-896.frequency.stream/dist/cineverse/896/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "HappyKids",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dil9xdvretp0f.cloudfront.net/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Kartoon Channel",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://lightning-fnf-samsungaus.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Moonbug Kids",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://moonbug-rokuus.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Mr Bean Live Action",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00627-amg00627c40-rakuten-uk-5725.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanpopupcc-rakutenuk/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Mr. Bean Anime",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg00627-amg00627c28-rakuten-uk-3984.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanukcc-rakutenuk/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Ninja Kidz TV",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://playworksdigital-ninjakidztv-1-us.xumo.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "PBS Kids",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "PBS Kids Alaska",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://livestream.pbskids.org/out/v1/94b88ad58fc14f84a9382341f1c00b82/akst.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "PBS Kids Hawaii",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://livestream.pbskids.org/out/v1/aa31792fee094b24b09045483f04d150/hast.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "PBS Kids Mountain",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://livestream.pbskids.org/out/v1/3fe3030a2c8045a3932f4289d9eba3e6/mst.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "PBS Kids Pacific",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://livestream.pbskids.org/out/v1/11f2e6b73eaa4887b3746cb863960e79/pst.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "RetroCrush",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://linear-899.frequency.stream/dist/cineverse/899/hls/master/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Ryan and Friends",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://ryanandfriends-samsungau.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Super Simple Songs",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://janson-supersimplesongs-1-us.roku.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Teletubbies",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dv8lsrd8fecw9.cloudfront.net/master.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The LEGO Channel",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://dltiqboxjw21d.cloudfront.net/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Pet Collective International",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://the-pet-collective-international-au.samsung.wurl.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Tiny Pop",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01753-narrativeuk-amg01753c1-rakuten-uk-2339.playouts.now.amagi.tv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Toon Goggles",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d1eg24xrsfr6kv.cloudfront.net/tg/tg/tg.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Toon Goggles Junior",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://d3i6upqaqzosi1.cloudfront.net/tg/jr_us/tg_jr_us.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Yu-Gi-Oh!",
        "logo": "",
        "category": "Kids",
        "country": "EN",
        "flag": "🇬🇧",
        "lang": "en",
        "url": "https://amg01796-amg01796c19-rakuten-gb-7486.playouts.now.amagi.tv/playlist/amg01796-fastmediafast-yugioh2en-rakutengb/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "DW Russian",
        "logo": "https://i.imgur.com/8MRNFb9.png",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://dwamdstream110.akamaized.net/hls/live/2017971/dwstream110/master.m3u8",
        "lang": "ru"
    },
    {
        "name": "Euronews Russian",
        "logo": "https://i.imgur.com/8t9mdg9.png",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn-euronews.akamaized.net/live/eds/euronews-ru/25071/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "Россия 1",
        "logo": "https://ngrch.github.io/iptv/logos/rossiya_1.png",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://live.smotrim.ru/vgtrk/0/russia1-hd/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "НТВ",
        "logo": "https://ngrch.github.io/iptv/logos/ntv.png",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn.ntv.ru/ntv-msk_hd/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "НТВ +1",
        "logo": "https://ngrch.github.io/iptv/logos/ntv.png",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn.ntv.ru/ntv1/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "НТВ +2",
        "logo": "https://ngrch.github.io/iptv/logos/ntv.png",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn.ntv.ru/ntv2/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "НТВ +4",
        "logo": "https://ngrch.github.io/iptv/logos/ntv.png",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn.ntv.ru/ntv4/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "НТВ +7",
        "logo": "https://ngrch.github.io/iptv/logos/ntv.png",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn.ntv.ru/ntv7/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "НТВ Хит",
        "logo": "https://ngrch.github.io/iptv/logos/ntv_hit.png",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn.ntv.ru/th_hit/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "Москва Доверие",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls2/doverie/playlist_3.m3u8",
        "lang": "ru"
    },
    {
        "name": "Ты супер!",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn-dvr.ntv.ru/Super/tracks-v1a1/rewind-240.ts.m3u8",
        "lang": "ru"
    },
    {
        "name": "Неизвестная Россия",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn.ntv.ru/unknown_russia/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "Москва 24 (М24)",
        "logo": "https://ngrch.github.io/iptv/logos/m24.png",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls/moscow_24/playlist_3.m3u8",
        "lang": "ru"
    },
    {
        "name": "НТВ Право",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://cdn.ntv.ru/th_pravo/index.m3u8",
        "lang": "ru"
    },
    {
        "name": "100% Детское",
        "logo": "",
        "category": "Kids",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls3/fasttv05/playlist_3.m3u8",
        "lang": "ru"
    },
    {
        "name": "100% Классика",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls3/fasttv03/playlist_3.m3u8",
        "lang": "ru"
    },
    {
        "name": "100% Любовь",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls3/fasttv01/playlist_3.m3u8",
        "lang": "ru"
    },
    {
        "name": "100% Мужское",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls3/fasttv02/playlist_3.m3u8",
        "lang": "ru"
    },
    {
        "name": "100% Праздник",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls3/fasttv04/playlist_3.m3u8",
        "lang": "ru"
    },
    {
        "name": "100% Факты",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls3/fasttv06/playlist_3.m3u8",
        "lang": "ru"
    },
    {
        "name": "Лен ТВ 24 | Ленинградская область",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "url": "https://stream.smotrim.ru/hls/lentv24/playlist_5.m3u8",
        "lang": "ru"
    },
    {
        "name": "360° Новости",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/smotrim-live-03-srt.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Russia-24 HD",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live.smotrim.ru/vgtrk/0/russia24-hd/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Vesti FM",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls2/vesti_fm/playlist_4.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "КРИК-ТВ (Екатеринбург)",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "http://cdn-01.bonus-tv.ru/kriktv_edge/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Крым 24",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/28.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Мир 24",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "http://hls.mirtv.cdnvideo.ru/mirtv-parampublish/mir24_2500/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Первый Республиканский",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/27.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Толк",
        "logo": "",
        "category": "News",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live-tolknews.cdnvideo.ru/tolknews/stream/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Skoraya pomoshch",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://cdn-dvr.ntv.ru/Skoraja_pomosh/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Smotrim 100% Klassika",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls/fasttv03/playlist_3.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Smotrim 100% Lyubov",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls/fasttv01/playlist_2.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Smotrim 100% Muzhskoe",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls/fasttv02/playlist_3.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Кино 1 International",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "http://kino-1.catcast.tv/content/38617/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Сити Эдем КиноДрама",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://cityeden.catcast.tv/content/45269/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Смотрим Честный Детектив",
        "logo": "",
        "category": "Movies",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/smotrim-live-01.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "12 канал",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://12channel.bonus-tv.ru/cdn/12channel/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "360°",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live-vgtrksmotrim.cdnvideo.ru/vgtrksmotrim/smotrim-live-04-srt.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Mir HD",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "http://hls.mirtv.cdnvideo.ru/mirtv-parampublish/mirtv_2500/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Moskva 24",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls/givc8/playlist.m3u8?entity=channel&id=798&sign=37881ef2e289f062ceff0dca6c24dc58",
        "source": "iptv-org"
    },
    {
        "name": "NTV HD",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://cdn-dvr.ntv.ru/ntv0_hd/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "NTV Vitrina",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://cdn.ntv.ru/vitrina/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Prosveshchenie",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "http://cdn-01.bonus-tv.ru/prosveschenie_edge/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Radio Rossii",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls2/radio_rus/playlist_4.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Sankt-Peterburg HD",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls2/ext_spbtv/playlist_5.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Smotrim 100% Prazdnik",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls/fasttv04/playlist_3.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Zvezda HD",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://tvchannelstream1.tvzvezda.ru/cdn/tvzvezda/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Zvezda Plus HD",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "http://tvzvezda.bonus-tv.ru/cdn/zvezdaplus/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Большая Азия",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live-bigasia.cdnvideo.ru/bigasia/bigasia.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "БСТ (Башкирское спутниковое телевидение)",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://bsttv.bonus-tv.ru/cdn/bst/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Вместе РФ",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://qcpdqumitwf.a.trbcdn.net/livemastersrt/pr4mw_lvie-vmesterf-srt.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "За!ТВ",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/25.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Курай (Уфа)",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://bsttv.bonus-tv.ru/cdn/kurai/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ОТВ Приморье",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://jz2lo90hnpy.a.trbcdn.net/livemaster/yo8gr_live-5gorrrfpouq.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Россия-РТР",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/211.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Салям (Уфа)",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://bsttv.bonus-tv.ru/cdn/salyam/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "СургутИнформТВ",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://sitv.ru/vgtrk/stv.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Таврия",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/24.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Телеканал Краснодар",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live-tvkrasnodar.cdnvideo.ru/tvkrasnodar/tvkrasnodar.sdp/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "ТНТ",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/38.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Три Ангела",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://3abn.bozztv.com/3abn2/Rus_live/smil:Rus_live.smil/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Югра",
        "logo": "",
        "category": "Entertainment",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live-ugratv.cdnvideo.ru/ugratv/ugratv/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Russia-K HD",
        "logo": "",
        "category": "Documentary",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://live.smotrim.ru/vgtrk/0/kultura-hd/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Smotrim 100% Fakty",
        "logo": "",
        "category": "Documentary",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls/fasttv06/playlist_3.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "The Explorers",
        "logo": "",
        "category": "Documentary",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://sofast-yupptv.vgcdn.net/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/4804aca3-dd54-43d1-8caa-0b836a76d9e9/manifest.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "НТВ Стиль",
        "logo": "",
        "category": "Documentary",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://cdn.ntv.ru/th_style/playlist.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Сити Эдем МедЗдрав",
        "logo": "",
        "category": "Documentary",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://cityeden.catcast.tv/content/47519/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Сити Эдем Рецепты Гурмана",
        "logo": "",
        "category": "Documentary",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://cityeden.catcast.tv/content/47516/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "МузТВ",
        "logo": "",
        "category": "Music",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/618.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Музыка 1 International",
        "logo": "",
        "category": "Music",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://kino-1.catcast.tv/content/37745/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Музыка Кино International",
        "logo": "",
        "category": "Music",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://kino-1.catcast.tv/content/37739/index.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Smotrim 100% Detskoe",
        "logo": "",
        "category": "Kids",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://stream.smotrim.ru/hls/fasttv05/playlist_3.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "Карусель",
        "logo": "",
        "category": "Kids",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/232.m3u8",
        "source": "iptv-org"
    },
    {
        "name": "СТС",
        "logo": "",
        "category": "Kids",
        "country": "RU",
        "flag": "🇷🇺",
        "lang": "ru",
        "url": "https://streaming.televizor-24-tochka.ru/live/296.m3u8",
        "source": "iptv-org"
    }
];

const IPTVService = {
    getCountries: function() {
        return IPTV_COUNTRIES;
    },

    getCategories: function() {
        return IPTV_CATEGORIES;
    },

    getDefaultChannels: function() {
        return DEFAULT_IPTV_CHANNELS;
    },

    parseM3U: function(content, defaultCountry = "Global") {
        const channels = [];
        const lines = content.split('\n');
        let current = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('#EXTINF:')) {
                current = {};
                const commaIdx = line.lastIndexOf(',');
                if (commaIdx !== -1) {
                    let rawName = line.substring(commaIdx + 1).trim();
                    rawName = rawName.replace(/\s*[\[\(][0-9]+p.*?[\)\]]/g, '').trim();
                    current.name = rawName;
                }

                if (line.indexOf('[Geo-blocked]') !== -1) {
                    current.geoBlocked = true;
                }

                const logoMatch = line.match(/tvg-logo="([^"]+)"/i);
                current.logo = logoMatch ? logoMatch[1] : '';

                const groupMatch = line.match(/group-title="([^"]+)"/i);
                current.category = groupMatch ? groupMatch[1].split(';')[0] : 'General';

                const countryMatch = line.match(/tvg-country="([^"]+)"/i);
                current.country = countryMatch ? countryMatch[1].toUpperCase() : defaultCountry;
                current.flag = "📺";

            } else if ((line.startsWith('http://') || line.startsWith('https://')) && current) {
                if (current.name && !current.geoBlocked) {
                    current.url = line;
                    channels.push(current);
                }
                current = null;
            }
        }
        return channels;
    },

    getFavorites: function() {
        try {
            const data = localStorage.getItem('cleanyourtv_iptv_favorites');
            return data ? JSON.parse(data) : [];
        } catch(e) {
            return [];
        }
    },

    isFavorite: function(url) {
        if (!url) return false;
        return this.getFavorites().some(c => c.url === url);
    },

    toggleFavorite: function(channel) {
        if (!channel || !channel.url) return false;
        let favs = this.getFavorites();
        const idx = favs.findIndex(c => c.url === channel.url);
        let isNowFav = false;
        if (idx >= 0) {
            favs.splice(idx, 1);
            isNowFav = false;
        } else {
            favs.unshift(channel);
            isNowFav = true;
        }
        try {
            localStorage.setItem('cleanyourtv_iptv_favorites', JSON.stringify(favs));
        } catch(e) {}
        return isNowFav;
    },

    getCustomPlaylists: function() {
        try {
            const data = localStorage.getItem('cleanyourtv_custom_playlists');
            return data ? JSON.parse(data) : [];
        } catch(e) {
            return [];
        }
    },

    addCustomPlaylist: function(name, url) {
        if (!url) return;
        const list = this.getCustomPlaylists();
        list.push({ name: name || 'Custom M3U', url: url, addedAt: new Date().toISOString() });
        try {
            localStorage.setItem('cleanyourtv_custom_playlists', JSON.stringify(list));
        } catch(e) {}
    },

    loadCountryChannels: function(countryCode, onSuccess, onError) {
        // Kids mode: whatever is asked, only the Kids category.
        if (window.FDKids && FDKids.isOn()) {
            onSuccess(DEFAULT_IPTV_CHANNELS.filter(c => c.category === 'Kids'));
            return;
        }
        if (countryCode === "FAVORITES") {
            const favs = this.getFavorites();
            console.log(`[IPTV] Loaded ${favs.length} favorite channels`);
            onSuccess(favs.length > 0 ? favs : DEFAULT_IPTV_CHANNELS.slice(0, 10));
            return;
        }

        if (countryCode === "CUSTOM") {
            const customLists = this.getCustomPlaylists();
            if (customLists.length > 0) {
                const targetUrl = customLists[0].url;
                console.log(`[IPTV] Loading custom M3U: ${targetUrl}`);
                fetch(targetUrl)
                    .then(res => res.text())
                    .then(text => {
                        const parsed = this.parseM3U(text, "Custom");
                        onSuccess(parsed.length > 0 ? parsed : DEFAULT_IPTV_CHANNELS);
                    })
                    .catch(err => {
                        console.warn("[IPTV] Failed to fetch custom M3U:", err);
                        onSuccess(DEFAULT_IPTV_CHANNELS);
                    });
            } else {
                console.log("[IPTV] No custom M3U configured, using default channels");
                onSuccess(DEFAULT_IPTV_CHANNELS);
            }
            return;
        }

        if (countryCode === "ALL") {
            onSuccess(DEFAULT_IPTV_CHANNELS.filter(c => c.lang === "en"));
            return;
        }

        // Russia: only the broadcasters' own free streams, checked from this TV's network (2026-11-14).
        if (countryCode === "RU") {
            onSuccess(DEFAULT_IPTV_CHANNELS.filter(c => c.country === "RU"));
            return;
        }

        // Check local cache first
        const cacheKey = "iptv_cache_country_" + countryCode;
        try {
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (parsed && parsed.length > 0) {
                    console.log(`[IPTV] Loaded ${parsed.length} cached channels for ${countryCode}`);
                    onSuccess(parsed);
                    return;
                }
            }
        } catch(e) {}

        const url = `https://iptv-org.github.io/iptv/countries/${countryCode.toLowerCase()}.m3u`;
        console.log(`[IPTV] Fetching live channels for ${countryCode} from ${url}`);

        // iptv-org can hang on some networks: give up after 8 s and use the built-in list.
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 8000));
        Promise.race([fetch(url), timeout])
            .then(res => {
                if (!res.ok) throw new Error("Status: " + res.status);
                return res.text();
            })
            .then(text => {
                const list = this.parseM3U(text, countryCode);
                console.log(`[IPTV] Fetched ${list.length} channels for ${countryCode}`);
                if (list.length > 0) {
                    try { localStorage.setItem(cacheKey, JSON.stringify(list)); } catch(e) {}
                    onSuccess(list);
                } else {
                    onSuccess(DEFAULT_IPTV_CHANNELS.filter(c => c.country === countryCode));
                }
            })
            .catch(err => {
                console.warn(`[IPTV] Fallback for ${countryCode}:`, err);
                const filtered = DEFAULT_IPTV_CHANNELS.filter(c => c.country === countryCode);
                onSuccess(filtered.length > 0 ? filtered : DEFAULT_IPTV_CHANNELS);
            });
    },

    loadCategoryChannels: function(category, onSuccess, onError) {
        if (category === "ALL") {
            onSuccess(DEFAULT_IPTV_CHANNELS);
            return;
        }

        const url = `https://iptv-org.github.io/iptv/categories/${category.toLowerCase()}.m3u`;
        console.log(`[IPTV] Fetching live category '${category}' from ${url}`);

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("Status: " + res.status);
                return res.text();
            })
            .then(text => {
                const list = this.parseM3U(text, "Global");
                console.log(`[IPTV] Fetched ${list.length} channels for ${category}`);
                onSuccess(list.length > 0 ? list : DEFAULT_IPTV_CHANNELS.filter(c => c.category.toLowerCase() === category.toLowerCase()));
            })
            .catch(err => {
                console.warn(`[IPTV] Fallback for category ${category}:`, err);
                onSuccess(DEFAULT_IPTV_CHANNELS.filter(c => c.category.toLowerCase() === category.toLowerCase()));
            });
    }
};

window.IPTVService = IPTVService;
window.IPTV_COUNTRIES = IPTV_COUNTRIES;
window.IPTV_CATEGORIES = IPTV_CATEGORIES;
window.DEFAULT_IPTV_CHANNELS = DEFAULT_IPTV_CHANNELS;
