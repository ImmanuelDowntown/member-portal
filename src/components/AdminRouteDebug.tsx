import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

export default function AdminRouteDebug({ children }: { children: React.ReactNode }) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [authReady, setAuthReady] = React.useState(false);
  const [uid, setUid] = React.useState<string | null>(null);
  const [isAdmin, setIsAdmin] = React.useState<boolean | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setAuthReady(true);
      if (!user) { setUid(null); setIsAdmin(false); return; }
      setUid(user.uid);
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        setIsAdmin((snap.data() as any)?.isSuperAdmin === true);
      } catch (e: any) {
        setError(e?.message || String(e));
        setIsAdmin(false);
      }
    });
    return () => unsub();
  }, [auth, db]);

  if (!authReady || isAdmin === null) return <div className="max-w-xl mx-auto p-6">Checking…</div>;
  if (isAdmin) return <>{children}</>;

  return (
    <div className="max-w-xl mx-auto p-6 rounded-2xl border border-slate-200 bg-white/70">
      <h2 className="text-lg font-semibold text-slate-900">AdminRouteDebug</h2>
      <p className="text-sm text-slate-700 mt-2">
        UID: <code>{uid || "—"}</code>
      </p>
      <p className="text-sm text-slate-700">
        users/UID.isSuperAdmin? <strong>{isAdmin ? "YES" : "NO"}</strong>
      </p>
      {!uid && (
        <p className="mt-3 text-sm text-rose-700">You are not signed in.</p>
      )}
      {uid && !isAdmin && (
        <p className="mt-3 text-sm text-amber-700">
          Signed in, but your user document does not have <code>isSuperAdmin</code> set.
        </p>
      )}
      {error && (
        <p className="mt-3 text-sm text-rose-700">
          Error reading <code>users/{'{uid}'}</code>: {error}
        </p>
      )}
    </div>
  );
}
