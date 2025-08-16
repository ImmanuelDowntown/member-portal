import React, { useEffect, useMemo, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

type Resource = {
  id?: string;
  title: string;
  url: string;
  type?: "drive" | "video" | "link";
  createdAt?: any;
  createdBy?: string;
}

export default function GroupResources({ groupId }: { groupId: string }) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [items, setItems] = useState<Resource[]>([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState<"drive" | "video" | "link">("link");
  const [canEdit, setCanEdit] = useState(false);
  const uid = auth.currentUser?.uid || null;

  useEffect(() => {
    const q = query(collection(db, `groups/${groupId}/resources`), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setItems(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
    });
    return unsub;
  }, [db, groupId]);

  useEffect(() => {
    let active = true;
    async function checkAdmin() {
      if (!uid) { setCanEdit(false); return; }
      const superDoc = await getDoc(doc(db, "admins", uid));
      if (!active) return;
      if (superDoc.exists()) { setCanEdit(true); return; }
      const gaDoc = await getDoc(doc(db, `groups/${groupId}/groupAdmins/${uid}`));
      if (!active) return;
      setCanEdit(gaDoc.exists());
    }
    checkAdmin();
    return () => { active = false; };
  }, [db, groupId, uid]);

  async function addResource(e: React.FormEvent) {
    e.preventDefault();
    if (!uid) return;
    const data: Resource = {
      title: title.trim(),
      url: url.trim(),
      type,
      createdAt: serverTimestamp(),
      createdBy: uid,
    };
    if (!data.title || !data.url) return;
    await addDoc(collection(db, `groups/${groupId}/resources`), data as any);
    setTitle(""); setUrl(""); setType("link");
  }

  async function removeResource(id?: string) {
    if (!id) return;
    await deleteDoc(doc(db, `groups/${groupId}/resources/${id}`));
  }

  const pretty = useMemo(() => (u: string) => {
    try { const url = new URL(u); return url.host + url.pathname; } catch { return u; }
  }, []);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Resources</h2>
      </div>

      {canEdit && (
        <form onSubmit={addResource} className="mt-3 grid gap-2 sm:grid-cols-6">
          <input
            className="sm:col-span-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="sm:col-span-3 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none"
            placeholder="https://..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <select
            className="sm:col-span-1 rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm"
            value={type}
            onChange={(e) => setType(e.target.value as any)}
          >
            <option value="link">Link</option>
            <option value="drive">Drive</option>
            <option value="video">Video</option>
          </select>
          <div className="sm:col-span-6">
            <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm">Add resource</button>
          </div>
        </form>
      )}

      <ul className="mt-3 divide-y divide-slate-200">
        {items.map((r) => (
          <li key={r.id} className="py-2 flex items-center justify-between gap-3">
            <a href={r.url} target="_blank" rel="noreferrer" className="text-sm text-accent underline underline-offset-2 break-all">
              {r.title || pretty(r.url)}
            </a>
            {canEdit && (
              <button onClick={() => removeResource(r.id)} className="text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100">
                Remove
              </button>
            )}
          </li>
        ))}
        {items.length === 0 && <li className="py-2 text-sm text-slate-600">No resources yet.</li>}
      </ul>
    </div>
  );
}
