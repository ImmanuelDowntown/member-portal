import { initializeApp, getApps, getApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Build config from Vite env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
} as const;

// Helpful runtime check so we fail loudly (and with the exact keys) if anything is missing
function assertFirebaseConfig(cfg: Record<string, any>) {
  const missing = Object.entries(cfg)
    .filter(([, v]) => !v || String(v).trim() === "")
    .map(([k]) => k);
  if (missing.length) {
    // Mask sensitive values but print what's present/missing for quick debugging
    const masked = Object.fromEntries(
      Object.entries(cfg).map(([k, v]) => [
        k,
        v ? (typeof v === "string" ? v.slice(0, 6) + "…" : v) : v,
      ])
    );
    // eslint-disable-next-line no-console
    console.error("[firebase] Missing config keys:", missing, "\nLoaded values:", masked);
    throw new Error("Firebase configuration is incomplete. Missing: " + missing.join(", "));
  }
}

assertFirebaseConfig(firebaseConfig);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Expose for one-off debugging in the browser console (optional)
// @ts-ignore
if (typeof window !== "undefined") window.__FIREBASE_CONFIG__ = firebaseConfig;