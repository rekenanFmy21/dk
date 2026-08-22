/* REKENAN_CACHE_V20213 | forced cache invalidation */
const REKENAN_CACHE_V20213='rekenan-v20213-canonical';
const CACHE_NAME = 'rekenan-admin-V202.13';
const BUILD = 'V202.13';
const STATIC = ['./', './index.html?v=20213', './manifest.json'];
self.addEventListener('message', event => { if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('install', event => { console.info('[Rekenan BUILD] SW V202.13 installing'); self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(STATIC)).catch(() => {})); });
self.addEventListener('activate', event => { console.info('[Rekenan BUILD] SW V202.13 active'); event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME && (k.startsWith('rekenan-admin-') || k.startsWith('rekenan-user-'))).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => { if (event.request.method !== 'GET') return; const url = new URL(event.request.url); if (url.origin !== self.location.origin) return; const isHtml = event.request.mode === 'navigate' || url.pathname.endsWith('/index.html'); const isSw = url.pathname.endsWith('/sw.js'); if (isHtml || isSw) { event.respondWith(fetch(new Request(event.request, {cache:'no-store'})).then(resp => { const copy = resp.clone(); if (!isSw) caches.open(CACHE_NAME).then(c => c.put(event.request, copy)).catch(() => {}); return resp; }).catch(() => caches.match(event.request).then(r => r || caches.match('./index.html?v=20213')))); return; } event.respondWith(fetch(event.request).then(resp => { const copy = resp.clone(); caches.open(CACHE_NAME).then(c => c.put(event.request, copy)).catch(() => {}); return resp; }).catch(() => caches.match(event.request))); });
