const CACHE_NAME = 'ai-camera-pwa-v4-memory-loader';
const ASSETS = ['./index.html?v=4','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.pathname.endsWith('/memory.json') || url.pathname.endsWith('memory.json')) {
    e.respondWith(fetch(e.request, {cache:'no-store'}));
    return;
  }
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE_NAME).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html?v=4'))));
});
