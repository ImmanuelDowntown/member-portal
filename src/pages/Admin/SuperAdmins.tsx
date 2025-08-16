import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";

type AdminEntry = { uid: string; createdAt?: any; createdBy?: string };

export default function SuperAdmins() {
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [list, setList] = useState<AdminEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string>("");
  const [uid, setUid] = useState("");

  async function load() {
    setLoading(true);
    const snap = await getDocs(collection(db, "admins"));
    const rows: AdminEntry[] = [];
    snap.forEach(d => rows.push({ uid: d.id, ...(d.data() as any) }));
    rows.sort((a, b) => a.uid.localeCompare(b.uid));
    setList(rows);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function add() {
    const value = uid.trim();
    if (!value) return;
    setBusy("add");
    try {
      await setDoc(doc(db, "admins", value), {
        createdAt: serverTimestamp(),
        createdBy: auth.currentUser?.uid || "unknown"
      }, { merge: true });
      setUid("");
      await load();
    } finally {
      setBusy("");
    }
  }

  async function remove(targetUid: string) {
    setBusy(targetUid);
    try {
      await deleteDoc(doc(db, "admins", targetUid));
      await load();
    } finally {
      setBusy("");
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Super Admins</h1>
      <p className="text-slate-600 mt-1">Add or remove super admins by UID.</p>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4">
        <label className="block text-sm font-medium text-slate-700">Add by UID</label>
        <div className="mt-2 flex gap-2">
          <input
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            placeholder="Paste UID from Firebase Authentication → Users"
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <button
            onClick={add}
            disabled={!uid.trim() || !!busy}
            className="px-3 py-2 rounded-lg text-sm bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {busy === "add" ? "Adding…" : "Add"}
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white/70">
        {loading ? (
          <div className="p-4 text-slate-600">Loading…</div>
        ) : list.length === 0 ? (
          <div className="p-4 text-slate-600">No super admins yet.</div>
        ) : (
          <ul className="divide-y divide-slate-200">
            {list.map(a => (
              <li key={a.uid} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-slate-900">{a.uid}</div>
                  <div className="text-xs text-slate-500">Created by: {a.createdBy || "—"}</div>
                </div>
                <button
                  onClick={() => remove(a.uid)}
                  disabled={!!busy}
                  className="text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60"
                >
                  {busy === a.uid ? "Removing…" : "Remove"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
