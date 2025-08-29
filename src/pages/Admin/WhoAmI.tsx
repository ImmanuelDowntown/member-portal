import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";

export default function WhoAmI() {
  const auth = getAuth(app);
  const [ready, setReady] = useState(false);
  const [uid, setUid] = useState<string | null>(auth.currentUser?.uid || null);
  const [email, setEmail] = useState<string | null>(auth.currentUser?.email || null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUid(user?.uid || null);
      setEmail(user?.email || null);
      setReady(true);
    });
    return () => unsub();
  }, [auth]);

  const sdkProjectId = (app.options as any)?.projectId;
  // Vite env (might be undefined in production if not exposed)
  const envProjectId = (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID;

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="mb-4">
        <Link to="/admin" className="text-sm text-slate-700 underline">Back to Admin Console</Link>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white/70 p-6">
        <h1 className="text-lg font-semibold text-slate-900">Auth Debug: WhoAmI</h1>
        <div className="mt-2 text-sm text-slate-700">
          <div><span className="font-medium">ready:</span> {String(ready)}</div>
          <div><span className="font-medium">email:</span> {email || "—"}</div>
          <div><span className="font-medium">uid:</span> <code>{uid || "—"}</code></div>
          <div className="mt-2"><span className="font-medium">SDK projectId:</span> <code>{sdkProjectId || "—"}</code></div>
          <div><span className="font-medium">ENV projectId:</span> <code>{String(envProjectId)}</code></div>
        </div>
      </div>
    </div>
  );
}
