/*
 * FrameDock TV — phone.
 * Talks to the TV launcher through the TV's secret ntfy.sh topic:
 *   phone → TV : https://ntfy.sh/<topic>       JSON commands {fd:1, cmd:…} or plain text
 *   TV → phone : https://ntfy.sh/<topic>-tv    the TV's state (what is on screen, installed apps, playlists)
 * The topic arrives once in the QR link (#t=…), is kept on the phone, and is removed from the address bar.
 * Playlist links never travel through ntfy (Xtream links contain passwords): playlists open on the TV.
 */
(function () {
  'use strict';
  var NTFY = 'https://ntfy.sh/';
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // ---------------------------------------------------------------- pairing
  var m = location.hash.match(/[#&]t=(fd-[a-z0-9]{6,32})/);
  if (m) { try { localStorage.setItem('fd_topic', m[1]); } catch (e) {} history.replaceState(null, '', location.pathname); }
  var topic = null;
  try { topic = localStorage.getItem('fd_topic'); } catch (e) {}

  var tvState = null, lastStateAt = 0;

  function toast(t) {
    var el = $('toast'); el.textContent = t; el.classList.add('on');
    clearTimeout(toast.h); toast.h = setTimeout(function () { el.classList.remove('on'); }, 2200);
  }
  function send(body, silent) {
    if (!topic) { if (!silent) toast('Scan the QR code on the TV first'); return Promise.resolve(); }
    var payload = typeof body === 'string' ? body : JSON.stringify(Object.assign({ fd: 1 }, body));
    if (navigator.vibrate && !silent) navigator.vibrate(10);
    return fetch(NTFY + topic, { method: 'POST', body: payload }).catch(function () { toast('No connection'); });
  }

  // ---------------------------------------------------------------- state from the TV
  function listen() {
    if (!topic) return;
    var es = new EventSource(NTFY + topic + '-tv/sse?since=latest');
    es.onmessage = function (ev) {
      var msg; try { msg = JSON.parse(ev.data); } catch (e) { return; }
      if (msg.event !== 'message' || !msg.message) return;
      var st; try { st = JSON.parse(msg.message); } catch (e) { return; }
      if (!st || st.fd !== 1) return;
      tvState = st; lastStateAt = Date.now();
      renderNow(); renderHome(); renderLink();
      if (currentList === 'PL') renderChannels();
    };
  }
  function renderLink() {
    var on = Date.now() - lastStateAt < 90000;
    $('link').classList.toggle('on', on);
    $('link-text').textContent = !topic ? 'NOT PAIRED' : on ? 'TV ONLINE' : 'CONNECTING';
  }
  setInterval(renderLink, 5000);

  // ---------------------------------------------------------------- catalog helpers
  var CAT = window.DEFAULT_CATALOG || [];
  function byId(id) { for (var i = 0; i < CAT.length; i++) if (CAT[i].id === id) return CAT[i]; return null; }
  function tileImg(a, kind) { return 'assets/tiles/' + (a.bakedAs || a.id) + '-' + kind + '.jpg'; }
  function logoHtml(a) { return a.logoImg ? '<img src="' + esc(a.logoImg) + '" alt="">' : (a.logo || '<span class="wm" style="font-size:44px">' + esc(a.name) + '</span>'); }

  // ---------------------------------------------------------------- now on TV
  function renderNow() {
    var s = tvState;
    var a = s && s.appId ? (byId(s.appId) || { id: 'cleanyourtv.livetv', name: s.title }) : byId('cleanyourtv.livetv');
    var playing = s && s.screen === 'livetv';
    var home = !s || s.screen === 'home';
    $('now-media').style.backgroundImage = home ? "url('assets/tiles/framedock.settings-prev.jpg')" :
        "url('" + tileImg(playing ? byId('cleanyourtv.livetv') : (a || {}), 'prev') + "')";
    $('now-logo').innerHTML = home ? '<span class="now-mark"></span><span class="wm" style="font-size:30px;color:#E9E4DA">FrameDock <span class="ghost">TV</span></span>' :
        playing ? '<span class="wm" style="font-size:34px;color:#E9E4DA">' + esc(s.title) + '</span>' : (a ? logoHtml(a) : '');
    $('now-chip').hidden = !playing;
    $('now-chip').textContent = 'LIVE';
    $('now-eyebrow').textContent = s ? (playing ? 'NOW ON TV · LIVE' : 'NOW ON TV') : 'WAITING FOR THE TV';
    $('now-title').textContent = s ? (s.title || 'FrameDock') : 'FrameDock TV';
    var vol = s && s.volume != null ? ' · ' + (s.muted ? 'muted' : 'volume ' + s.volume) : '';
    $('now-sub').textContent = s ? (s.sub || '') + vol : (topic ? 'Open FrameDock TV on the TV' : 'Not paired');
  }

  // ---------------------------------------------------------------- home rows
  function card(a) {
    var chip = a.chip ? '<span class="chip ' + esc(a.chipClass || '') + '">' + esc(a.chip) + '</span>' : '';
    return '<button class="card" data-open="' + esc(a.id) + '" style="background-color:' + esc(a.c1 || '#111417') + ';background-image:url(\'' + tileImg(a, 'card') + '\')">' +
      '<div class="logo">' + logoHtml(a) + '</div>' + chip + '<div class="cap"><b>' + esc(a.name) + '</b><span>' + esc(a.sub || '') + '</span></div></button>';
  }
  function renderHome() {
    var s = tvState;
    var visible = s && s.apps ? s.apps : null;                     // catalog ids the TV shows (installed, kids mode…)
    var extra = s && s.extra ? s.extra : [];                        // continue-watching, pinned sites
    var rows = (window.HOME_ROWS || []).map(function (r) {
      var items = CAT.filter(function (a) { return a.row === r.id && (!visible || visible.indexOf(a.id) !== -1); });
      extra.forEach(function (x) { if (x.row === r.id) items[x.first ? 'unshift' : 'push'](x); });
      return { r: r, items: items };
    }).filter(function (x) { return x.items.length; });
    $('tab-home').innerHTML = rows.map(function (x, i) {
      return '<div class="row"><div class="rh"><h3>' + esc(x.r.title) + '</h3><small>0' + (i + 1) + '</small></div><div class="strip">' + x.items.map(card).join('') + '</div></div>';
    }).join('');
  }
  $('tab-home').addEventListener('click', function (e) {
    var b = e.target.closest('[data-open]');
    if (!b) return;
    var id = b.getAttribute('data-open'), a = byId(id) || { name: b.querySelector('.cap b').textContent };
    send({ cmd: 'open', id: id }); toast('Opening ' + a.name + ' on the TV');
  });

  // ---------------------------------------------------------------- live tv
  var currentList = 'ALL', currentCat = 'All', query = '', shown = 80;
  function channelsOf(list) {
    var all = window.DEFAULT_IPTV_CHANNELS || [];
    if (list === 'ALL') return all.filter(function (c) { return c.lang === 'en'; });
    if (list === 'RU') return all.filter(function (c) { return c.country === 'RU'; });
    return [];
  }
  function renderChannels() {
    var box = $('channels');
    if (currentList === 'PL') {
      $('cats').innerHTML = ''; $('search').hidden = true;
      var pls = tvState && tvState.playlists ? tvState.playlists : [];
      box.innerHTML = pls.length ? pls.map(function (p) {
        return '<button class="ch" data-pl="' + esc(p.id) + '"><i>' + esc(p.name.charAt(0)) + '</i><div><b>' + esc(p.name) + '</b><span>' + (p.count != null ? p.count + ' channels · ' : '') + 'opens on the TV</span></div></button>';
      }).join('') : '<p class="muted">No playlists yet. Add one on the TV in My Playlists, or send its link from the Send tab.</p>';
      return;
    }
    $('search').hidden = false;
    var list = channelsOf(currentList);
    var cats = ['All'].concat(list.map(function (c) { return c.category; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
    $('cats').innerHTML = cats.map(function (c) { return '<button class="' + (c === currentCat ? 'on' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>'; }).join('');
    var q = query.toLowerCase();
    var f = list.filter(function (c) { return (currentCat === 'All' || c.category === currentCat) && (!q || c.name.toLowerCase().indexOf(q) !== -1); });
    var playingUrl = tvState && tvState.url;
    box.innerHTML = f.slice(0, shown).map(function (c) {
      return '<button class="ch' + (c.url === playingUrl ? ' playing' : '') + '" data-url="' + esc(c.url) + '" data-name="' + esc(c.name) + '"><i>' +
        (c.logo ? '<img src="' + esc(c.logo) + '" alt="" onerror="this.remove()">' : esc(c.name.charAt(0))) + '</i><div><b>' + esc(c.name) + '</b><span>' + esc(c.category) + '</span></div></button>';
    }).join('') + (f.length > shown ? '<button class="more" id="more">SHOW MORE · ' + (f.length - shown) + '</button>' : '');
  }
  $('lists').addEventListener('click', function (e) {
    var b = e.target.closest('[data-list]'); if (!b) return;
    currentList = b.getAttribute('data-list'); currentCat = 'All'; shown = 80;
    Array.prototype.forEach.call(this.children, function (x) { x.classList.toggle('on', x === b); });
    renderChannels();
  });
  $('cats').addEventListener('click', function (e) { var b = e.target.closest('[data-cat]'); if (!b) return; currentCat = b.getAttribute('data-cat'); shown = 80; renderChannels(); });
  $('search').addEventListener('input', function () { query = this.value.trim(); shown = 80; renderChannels(); });
  $('channels').addEventListener('click', function (e) {
    if (e.target.id === 'more') { shown += 120; renderChannels(); return; }
    var pl = e.target.closest('[data-pl]');
    if (pl) { send({ cmd: 'playlist', id: pl.getAttribute('data-pl') }); toast('Opening the playlist on the TV'); return; }
    var b = e.target.closest('[data-url]'); if (!b) return;
    send({ cmd: 'play', list: currentList, url: b.getAttribute('data-url'), name: b.getAttribute('data-name') });
    toast('Playing ' + b.getAttribute('data-name'));
  });

  // ---------------------------------------------------------------- tabs, send, dock
  $('tabs').addEventListener('click', function (e) {
    var b = e.target.closest('[data-tab]'); if (!b) return;
    var t = b.getAttribute('data-tab');
    Array.prototype.forEach.call(this.children, function (x) { x.classList.toggle('on', x === b); });
    ['home', 'live', 'send'].forEach(function (k) { $('tab-' + k).hidden = k !== t; });
    if (t === 'live') renderChannels();
  });
  $('send-btn').addEventListener('click', function () {
    var t = $('send-text').value.trim(); if (!t) return;
    send(t).then(function () { $('send-msg').textContent = 'Sent ✓'; $('send-text').value = ''; setTimeout(function () { $('send-msg').textContent = ''; }, 2500); });
  });
  document.querySelector('.dock').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var cmd = b.getAttribute('data-cmd'), key = b.getAttribute('data-key');
    if (cmd === 'source') { $('sheet').hidden = false; return; }
    if (cmd) send({ cmd: cmd });
    if (key) send({ cmd: 'key', key: key });
  });
  $('sheet').addEventListener('click', function (e) {
    if (e.target === this || e.target.id === 'sheet-close') { this.hidden = true; return; }
    var b = e.target.closest('button'); if (!b) return;
    if (b.getAttribute('data-key')) { send({ cmd: 'key', key: b.getAttribute('data-key') }); toast(b.textContent + ' on the TV'); }
    if (b.getAttribute('data-cmd') === 'mirror') send({ cmd: 'open', id: 'framedock.mirror' });
    this.hidden = true;
  });

  // ---------------------------------------------------------------- portrait only, no zoom
  try { if (screen.orientation && screen.orientation.lock) screen.orientation.lock('portrait').catch(function () {}); } catch (e) {}
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (t) {           // iOS pinch
    document.addEventListener(t, function (e) { e.preventDefault(); }, { passive: false });
  });
  document.addEventListener('touchmove', function (e) { if (e.touches && e.touches.length > 1) e.preventDefault(); }, { passive: false });
  // double-tap zoom is off through CSS touch-action: manipulation (keeps fast repeated taps working)

  // ---------------------------------------------------------------- start
  $('pair').hidden = !!topic;
  renderNow(); renderHome(); renderLink();
  listen();
  send({ cmd: 'sync' }, true);
  setInterval(function () { if (!document.hidden) send({ cmd: 'sync' }, true); }, 45000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) send({ cmd: 'sync' }, true); });
})();
