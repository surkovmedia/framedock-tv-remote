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
  // Tiles the TV builds itself (continue watching, pinned sites) carry no logo: same size rule as on the TV.
  function logoHtml(a) {
    if (a.logoImg) return '<img src="' + esc(a.logoImg) + '" alt="">';
    if (a.logo) return a.logo;
    var t = String(a.name || '').slice(0, 22);
    return '<span class="wm" style="font-size:' + Math.min(64, Math.floor(640 / Math.max(4, t.length))) + 'px;color:#E9E4DA">' + esc(t) + '</span>';
  }

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
      // The art is laid out at the TV's tile size (400x225) and scaled as one piece, so it matches the TV exactly.
      '<div class="art"><div class="logo">' + logoHtml(a) + '</div></div>' + chip + '<div class="cap"><b>' + esc(a.name) + '</b><span>' + esc(a.sub || '') + '</span></div></button>';
  }
  // The rows exactly as the TV shows them (its own order, names, hidden tiles); older TVs: built from the catalog.
  var editing = false, model = null;                                 // model: {rows:[{id,title,items:[tile]}], hidden:[tile], names:{}}
  function tileFor(id, s) {
    var x = null;
    (s.extra || []).forEach(function (e) { if (e.id === id) x = e; });
    var a = x || byId(id);
    if (!a) return null;
    a = Object.assign({}, a);
    if (s.names && s.names[id]) a.name = s.names[id];
    return a;
  }
  function buildModel() {
    var s = tvState;
    if (s && s.rows) {
      return {
        rows: s.rows.map(function (r) { return { id: r.id, title: r.title, items: r.items.map(function (id) { return tileFor(id, s); }).filter(Boolean) }; }),
        hidden: (s.hidden || []).map(function (h) { var a = byId(h.id); return Object.assign({}, a || {}, h); }),
        names: Object.assign({}, s.names || {})
      };
    }
    var visible = s && s.apps ? s.apps : null, extra = s && s.extra ? s.extra : [];
    return {
      rows: (window.HOME_ROWS || []).map(function (r) {
        var items = CAT.filter(function (a) { return a.row === r.id && (!visible || visible.indexOf(a.id) !== -1); });
        extra.forEach(function (x) { if (x.row === r.id) items[x.first ? 'unshift' : 'push'](x); });
        return { id: r.id, title: r.title, items: items };
      }).filter(function (x) { return x.items.length; }),
      hidden: [], names: {}
    };
  }
  var FIXED = { 'framedock.continue': 1, 'framedock.webcontinue': 1, 'framedock.kidsexit': 1 };   // always first / not editable
  function renderHome() {
    if (!editing || !model) model = buildModel();
    var canEdit = !!(tvState && tvState.rows) && !(tvState && tvState.kids);
    var head = '<div class="edit-bar">' + (editing
      ? '<span>EDIT HOME · CHANGES SHOW ON THE TV AT ONCE</span><button data-ed="reset">Reset</button><button class="on" data-ed="done">Done</button>'
      : (canEdit ? '<button data-ed="start">Edit home</button>' : '')) + '</div>';
    var rows = model.rows.map(function (x, i) {
      var ctl = editing ? '<span class="row-ctl"><button data-row-up="' + i + '" ' + (i === 0 ? 'disabled' : '') + '>&#9650;</button><button data-row-down="' + i + '" ' + (i === model.rows.length - 1 ? 'disabled' : '') + '>&#9660;</button></span>' : '';
      return '<div class="row"><div class="rh"><h3>' + esc(x.title) + '</h3><small>0' + (i + 1) + '</small>' + ctl + '</div><div class="strip">' +
        x.items.map(function (a, k) { return editing ? editCard(a, i, k, x.items.length) : card(a); }).join('') + '</div></div>';
    }).join('');
    var hid = editing && model.hidden.length ? '<div class="row"><div class="rh"><h3>Hidden</h3><small>' + model.hidden.length + '</small></div><div class="strip">' +
      model.hidden.map(function (a, k) { return '<div class="ecard">' + card(a) + '<div class="ectl"><button data-show="' + k + '">Show</button></div></div>'; }).join('') + '</div></div>' : '';
    $('tab-home').innerHTML = head + rows + hid;
  }
  function editCard(a, ri, k, n) {
    if (FIXED[a.id]) return '<div class="ecard fixed">' + card(a) + '<div class="ectl"><span>STAYS FIRST</span></div></div>';
    var first = k === 0 || FIXED[model.rows[ri].items[k - 1].id];
    return '<div class="ecard">' + card(a) + '<div class="ectl">' +
      '<button data-mv="-1" data-r="' + ri + '" data-k="' + k + '" ' + (first ? 'disabled' : '') + '>&#9664;</button>' +
      '<button data-mv="1" data-r="' + ri + '" data-k="' + k + '" ' + (k === n - 1 ? 'disabled' : '') + '>&#9654;</button>' +
      '<button data-rename="1" data-r="' + ri + '" data-k="' + k + '">Rename</button>' +
      '<button data-hide="1" data-r="' + ri + '" data-k="' + k + '">Hide</button></div></div>';
  }
  function pushLayout() {
    var order = {};
    model.rows.forEach(function (r) { order[r.id] = r.items.filter(function (a) { return !FIXED[a.id]; }).map(function (a) { return a.id; }); });
    send({ cmd: 'layout', layout: {
      hidden: model.hidden.map(function (a) { return a.id; }),
      order: order,
      names: model.names,
      rows: model.rows.map(function (r) { return r.id; })
    } }, true);
    renderHome();
  }
  $('tab-home').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b || b.disabled) return;
    var ed = b.getAttribute('data-ed');
    if (ed === 'start') { editing = true; model = buildModel(); renderHome(); return; }
    if (ed === 'done') { editing = false; model = null; renderHome(); toast('Saved on the TV'); return; }
    if (ed === 'reset') {
      if (!confirm('Reset the home screen to the standard layout?')) return;
      send({ cmd: 'layout', layout: {} }, true); editing = false; model = null; toast('Standard layout restored');
      setTimeout(function () { send({ cmd: 'sync' }, true); }, 800);
      return;
    }
    if (editing) {
      var r = +b.getAttribute('data-r'), k = +b.getAttribute('data-k'), items = model.rows[r] ? model.rows[r].items : null;
      if (b.hasAttribute('data-row-up') || b.hasAttribute('data-row-down')) {
        var i = +(b.getAttribute('data-row-up') || b.getAttribute('data-row-down')), j = b.hasAttribute('data-row-up') ? i - 1 : i + 1;
        var t = model.rows[i]; model.rows[i] = model.rows[j]; model.rows[j] = t; pushLayout(); return;
      }
      if (b.hasAttribute('data-mv')) { var d = +b.getAttribute('data-mv'), x = items[k]; items[k] = items[k + d]; items[k + d] = x; pushLayout(); return; }
      if (b.hasAttribute('data-hide')) { model.hidden.push(items.splice(k, 1)[0]); pushLayout(); return; }
      if (b.hasAttribute('data-show')) {
        var a = model.hidden.splice(+b.getAttribute('data-show'), 1)[0];
        model.rows.forEach(function (row) { if (row.id === a.row) row.items.push(a); });
        pushLayout(); return;
      }
      if (b.hasAttribute('data-rename')) {
        var tile = items[k], name = prompt('Name on the TV', tile.name);
        if (name == null) return;
        name = name.trim().slice(0, 40);
        if (name) { model.names[tile.id] = name; tile.name = name; } else { delete model.names[tile.id]; }
        pushLayout(); return;
      }
      return;                                                         // in edit mode tiles do not open apps
    }
    var o = e.target.closest('[data-open]');
    if (!o) return;
    var id = o.getAttribute('data-open'), app = byId(id) || { name: o.querySelector('.cap b').textContent };
    send({ cmd: 'open', id: id }); toast('Opening ' + app.name + ' on the TV');
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
    this.hidden = true;
  });

  // ---------------------------------------------------------------- tile art scale (card width / 400)
  function setTileScale() {
    var w = (Math.min(window.innerWidth, 600) - 52) / 2;
    document.documentElement.style.setProperty('--tile-s', (w / 400).toFixed(4));
  }
  setTileScale();
  window.addEventListener('resize', setTileScale);

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
