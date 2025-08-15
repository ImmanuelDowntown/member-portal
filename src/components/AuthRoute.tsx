import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/firebase";

function Loader({ label = "Checking admin access…" }: { label?: string }) {
  return <div className="max-w-xl mx-auto p-6 text-slate-700">{label}</div>;
}

/**
 * AdminRoute
 * - Waits for Firebase Auth to initialize
 * - Reads /admins/{uid} to confirm super admin
 * - Renders children if allowed
 * - Redirects to /login if not signed in
 * - Shows a clear message if access is denied (instead of silently bouncing)
 */
export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [authReady, setAuthReady] = React.useState(false);
  const [allowed, setAllowed] = React.useState<boolean | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setAuthReady(true);
      if (!user) {
        setAllowed(false);
        return;
      }
      try {
        const snap = await getDoc(doc(db, "admins", user.uid));
        setAllowed(snap.exists());
      } catch (e: any) {
        setError(e?.message || String(e));
        setAllowed(false);
      }
    });
    return () => unsub();
  }, [auth, db]);

  if (!authReady || allowed === null) return <Loader />;

  if (!auth.currentUser) return <Navigate to="/login" replace />;

  if (!allowed) {
    return (
      <div className="max-w-xl mx-auto p-6 rounded-2xl border border-slate-200 bg-white/70">
        <h2 className="text-lg font-semibold text-slate-900">Admin access required</h2>
        <p className="text-sm text-slate-700 mt-2">
          Your account is not recognized as a super admin for this project. If you recently added
          an admin document at <code>admins/&#123;your-uid&#125;</code>, ensure Firestore rules allow
          you to read your own admin doc and reload.
        </p>
        {error && <p className="text-sm text-rose-700 mt-2">Error: {error}</p>}
      </div>
    );
  }

  return <>{children}</>;
}
