// --- Firebase/FCM-agnostic push handler (works with notification or data payloads) ---
self.addEventListener('push', (event) => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch (e) { payload = {}; }
  // FCM may nest fields under 'notification' or 'data'
  const n = payload.notification || payload;
  const title = n.title || 'New notification';
  const options = {
    body: n.body || '',
    icon: n.icon || '/icons/icon-192.png',
    badge: n.badge || undefined,
    tag: n.tag || undefined,
    data: {
      url: n.click_action || payload.click_action || n.url || payload.url || '/'
    }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification && event.notification.data && event.notification.data.url) || '/';
  event.waitUntil((async () => {
    const allClients = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of allClients) {
      // focus if already open on same origin
      if ('focus' in client) {
        const clientUrl = new URL(client.url);
        const targetUrl = new URL(url, self.location.origin);
        if (clientUrl.origin === targetUrl.origin) {
          // Navigate if path differs
          if (clientUrl.pathname !== targetUrl.pathname || clientUrl.search !== targetUrl.search) {
            client.navigate(targetUrl.href);
          }
          return client.focus();
        }
      }
    }
    // Otherwise open a new window
    if (clients.openWindow) {
      return clients.openWindow(url);
    }
  })());
});

// Ensure SW activates fast
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try { await self.clients.claim(); } catch(e) {}
  })());
});

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
