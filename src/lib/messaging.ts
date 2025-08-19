// src/lib/messaging.ts
// Web Push (FCM) client helpers with verbose diagnostics.
// Uses single firebase init from "@/lib/firebase".
// Saves tokens under users/{uid}/pushTokens/{token}.

import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import type { MessagePayload } from "firebase/messaging";
import { getToken, onMessage } from "firebase/messaging";
import { db, getMessagingIfSupported, app } from "@/lib/firebase";
import { getFunctions, httpsCallable } from "firebase/functions";

// Small util: safe boolean presence log (avoid leaking secret values)
function present(v: unknown): "present" | "missing" {
  return v ? "present" : "missing";
}

// Expose a quick diagnostic you can call from the console.
export async function checkMessagingDiagnostics() {
  const supports = await (async () => {
    try {
      const m = await Promise.resolve(getMessagingIfSupported());
      return !!m;
    } catch {
      return false;
    }
  })();
  const swReg = await navigator.serviceWorker.getRegistration();
  const perm = typeof Notification !== "undefined" ? Notification.permission : "unavailable";
  // Do not print the actual key, only presence
  const vapidKey = (import.meta as any).env?.VITE_FIREBASE_VAPID_KEY as string | undefined;
  const result = {
    permission: perm,
    swRegistered: !!swReg,
    swScope: swReg?.scope || null,
    messagingSupported: supports,
    vapidKey: present(vapidKey),
  };
  console.table(result);
  return result;
}

// Return false if notifications/messaging are not supported.
async function isMessagingSupported(): Promise<boolean> {
  try {
    const maybe = await Promise.resolve(getMessagingIfSupported());
    return !!maybe;
  } catch (e) {
    console.warn("[push] getMessagingIfSupported threw:", e);
    return false;
  }
}

/**
 * Ensure a push token exists for this user on THIS device.
 * Returns the token string on success, or null if permission denied/unsupported.
 * Includes verbose logging to help diagnose "permission denied or unsupported".
 */
export async function ensurePushTokenForUser(uid: string): Promise<string | null> {
  console.groupCollapsed("[push] enroll start");
  try {
    // 0) Show quick status
    const diag = await checkMessagingDiagnostics();

    // 1) Check support
    if (!(await isMessagingSupported())) {
      console.warn("[push] messaging not supported in this environment");
      return null;
    }

    // 2) Ask for permission
    let perm: NotificationPermission = Notification.permission;
    if (perm !== "granted") {
      perm = await Notification.requestPermission();
    }
    console.log("[push] permission after request:", perm);
    if (perm !== "granted") {
      console.warn("[push] user did not grant permission");
      return null;
    }

    // 3) Ensure /sw.js is registered
    let reg = await navigator.serviceWorker.getRegistration();
    if (!reg) {
      console.log("[push] registering /sw.js");
      try {
        reg = await navigator.serviceWorker.register("/sw.js");
        console.log("[push] /sw.js registered at", reg.scope);
      } catch (e) {
        console.warn("[push] failed to register /sw.js:", e);
        return null;
      }
    } else {
      console.log("[push] using existing SW at", reg.scope);
    }

    // 4) Get messaging instance
    const messaging = await Promise.resolve(getMessagingIfSupported());
    if (!messaging) {
      console.warn("[push] getMessagingIfSupported returned null");
      return null;
    }

    // 5) Get token
    const vapidKey = (import.meta as any).env?.VITE_FIREBASE_VAPID_KEY as string | undefined;
    if (!vapidKey) {
      console.warn("[push] VITE_FIREBASE_VAPID_KEY missing from env");
      return null;
    }
    let token: string | null = null;
    try {
      token = await getToken(messaging, { vapidKey, serviceWorkerRegistration: reg });
    } catch (e) {
      console.warn("[push] getToken() threw:", e);
      return null;
    }
    if (!token) {
      console.warn("[push] getToken() returned null/empty");
      return null;
    }
    console.log("[push] obtained token (truncated):", token.slice(0, 10) + "…");

    // 6) Save token (client-side best effort)
    try {
      const ref = doc(db, `users/${uid}/pushTokens/${token}`);
      await setDoc(ref, { token, createdAt: serverTimestamp(), userAgent: navigator.userAgent || "" }, { merge: true });
      console.log("[push] token saved to Firestore (client)");
    } catch (e) {
      console.warn("[push] failed to write token to Firestore (client):", e);
      // Continue; server callable will upsert
    }

    // 6b) Also upsert token server-side via callable to bypass client rules/CORS
    try {
      const region = "us-central1"; // keep in sync with deployed region
      const fn = httpsCallable(getFunctions(app, region), "registerPushToken");
      await fn({ token });
      console.log("[push] token saved via callable (server)");
    } catch (e) {
      console.warn("[push] registerPushToken callable failed (non-fatal):", e);
      // Non-fatal: client write above may have succeeded
    }

    return token;
  } finally {
    console.groupEnd();
  }
}

/**
 * Listen for foreground FCM messages. Returns an unsubscribe function.
 */
export async function listenForegroundMessages(
  handler: (payload: MessagePayload) => void
): Promise<() => void> {
  if (!(await isMessagingSupported())) return () => {};
  const messaging = await Promise.resolve(getMessagingIfSupported());
  if (!messaging) return () => {};

  const unsubscribe = onMessage(messaging, (payload) => {
    try {
      handler(payload);
    } catch (e) {
      console.warn("[push] handler error:", e);
    }
  });
  return unsubscribe;
}

export {}; // module boundary
