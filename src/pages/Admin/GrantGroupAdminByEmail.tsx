import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { httpsCallable, getFunctions } from "firebase/functions";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "@/lib/firebase";

export default function GrantGroupAdminByEmail() {
  const fx = getFunctions(app);
  const db = getFirestore(app);

  const [email, setEmail] = useState("");
  const [groupId, setGroupId] = useState("");
  const [groups, setGroups] = useState<{id:string; name?:string}[]>([]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "groups"));
      const list: {id:string; name?:string}[] = [];
      snap.forEach(d => list.push({ id: d.id, ...(d.data() as any) }));
      list.sort((a,b)=> (a.name || a.id).localeCompare(b.name || b.id));
      setGroups(list);
    }
    load();
  }, [db]);

  async function grant() {
    setBusy(true);
    setStatus(null);
    try {
      const call = httpsCallable<{email:string; groupId:string}, {ok:boolean; uid:string}>(fx, "grantGroupAdminByEmail");
      const res = await call({ email, groupId });
      setStatus(`✅ Granted admin to ${email} (uid=${res.data.uid})`);
      setEmail("");
    } catch (e:any) {
      setStatus(`❌ ${e?.message || "Failed"}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Grant Group Admin (by email)</h1>
        <Link to="/admin" className="text-sm text-slate-700 underline">Back to Admin Console</Link>
      </div>
      <div className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">User email</span>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="user@example.com"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Group</span>
          <select
            value={groupId}
            onChange={(e)=>setGroupId(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm"
          >
            <option value="">Select a group…</option>
            {groups.map(g=> <option key={g.id} value={g.id}>{g.name || g.id}</option>)}
          </select>
        </label>
        <div className="flex gap-3 items-center">
          <button onClick={grant} disabled={!email || !groupId || busy} className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
            {busy ? "Working…" : "Grant admin"}
          </button>
          {status && <p className="text-sm text-slate-700">{status}</p>}
        </div>
      </div>
    </div>
  );
}
