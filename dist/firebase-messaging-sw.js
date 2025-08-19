/* Firebase Messaging Service Worker (Web Push)
 * Place at: public/firebase-messaging-sw.js
 * Uses compat libs so it works inside a plain service worker.
 */

// Load Firebase compat libraries in SW context
importScripts("https://www.gstatic.com/firebasejs/10.12.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.3/firebase-messaging-compat.js");

// IMPORTANT: This must be a real JS object with quoted strings.
// Do NOT use import.meta.env or .env syntax in this file.
// These values are public client config (same as src/lib/firebase.ts).
const firebaseConfig = {
  apiKey: "AIzaSyAvTkBdah-m0JBKF2hPh2ra95ZrFfFXPZs",
  authDomain: "immanuel-app.firebaseapp.com",
  projectId: "immanuel-app",
  storageBucket: "immanuel-app.appspot.com",
  messagingSenderId: "815824103273",
  appId: "1:815824103273:web:3817385bebff5f704a3ff8",
  measurementId: "G-P6WR1NQRB8",
};

// Initialize Firebase in the SW
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background messages (tab closed or in background)
messaging.onBackgroundMessage((payload) => {
  const data = (payload && payload.data) || {};
  const title = data.title || "New notification";
  const options = {
    body: data.body || "",
    icon: data.icon || "/icons/icon-192.png",
    badge: data.badge || "/icons/icon-192.png",
    data: { url: data.url || "/", ...data },
  };
  self.registration.showNotification(title, options);
});

// Focus or open the app on notification click
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = (event.notification && event.notification.data && event.notification.data.url) || "/";
  event.waitUntil((async () => {
    const allClients = await clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const client of allClients) {
      try {
        const url = new URL(client.url);
        if (url.origin === self.location.origin) {
          client.focus();
          if (targetUrl && !client.url.endsWith(targetUrl)) {
            client.navigate(targetUrl);
          }
          return;
        }
      } catch (_) {}
    }
    await clients.openWindow(targetUrl);
  })());
});