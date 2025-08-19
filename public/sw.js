importScripts('/firebase-messaging-sw.js');
// Minimal service worker for PWA install + basic offline fallback
const CACHE = 'immanuel-portal-v1';
const ASSETS = ['/', '/index.html', '/manifest.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : Promise.resolve())));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        return await fetch(req);
      } catch (e) {
        const cache = await caches.open(CACHE);
        const cached = await cache.match('/index.html');
        return cached || Response.error();
      }
    })());
  }
});
