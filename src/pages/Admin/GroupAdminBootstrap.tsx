import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

type Group = { id: string; name?: string };

export default function GroupAdminBootstrap() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [groups, setGroups] = useState<Group[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [targetUid, setTargetUid] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const uid = auth.currentUser?.uid || "";

  useEffect(() => {
    let active = true;
    async function load() {
      const ref = collection(db, "groups");
      const q = query(ref, orderBy("name", "asc"));
      const snap = await getDocs(q);
      if (!active) return;
      const list: Group[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...(d.data() as any) }));
      setGroups(list);
      if (list.length) setSelected(list[0].id);
      setTargetUid(uid);
    }
    load();
    return () => { active = false; };
  }, [db, uid]);

  async function grant() {
    try {
      setStatus("Working…");
      const who = (targetUid || "").trim();
      if (!who) { setStatus("Please enter a UID."); return; }
      if (!selected) { setStatus("Please select a group."); return; }
      await setDoc(doc(db, `groups/${selected}/groupAdmins/${who}`), {
        uid: who,
        addedAt: serverTimestamp(),
        addedBy: uid || "unknown",
      }, { merge: true });
      setStatus("✅ Granted group admin.");
    } catch (e: any) {
      setStatus("❌ " + (e?.message || String(e)));
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-slate-900">Grant Group Admin</h1>
      <p className="text-slate-600 mt-2">Assign a user as an admin for a specific group.</p>
      <div className="mt-4 space-y-3">
        <div>
          <label className="block text-sm font-medium text-slate-700">Group</label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm"
          >
            {groups.map((g) => (
              <option key={g.id} value={g.id}>{g.name || g.id}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">User UID</label>
          <input
            type="text"
            value={targetUid}
            onChange={(e) => setTargetUid(e.target.value)}
            placeholder="Paste a user's UID (defaults to you)"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm"
          />
          <p className="text-xs text-slate-500 mt-1">Your UID: <code>{uid || "(not signed in)"}</code></p>
        </div>
        <button
          onClick={grant}
          className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
        >
          Grant admin
        </button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </div>
    </div>
  );
}
