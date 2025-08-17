import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { app } from "@/lib/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

type Member = { uid: string; displayName?: string; joinedAt?: any };

export default function AdminGroupMembers() {
  const { slug } = useParams();
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [groupName, setGroupName] = useState<string>("");
  const [members, setMembers] = useState<Member[]>([]);
  const [admins, setAdmins] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string>("");
  const [newUid, setNewUid] = useState("");

  const groupId = slug as string;

  useEffect(() => {
    let active = true;
    async function load() {
      if (!groupId) return;
      setLoading(true);
      try {
        const gref = doc(db, "groups", groupId);
        const gsnap = await getDoc(gref);
        setGroupName((gsnap.exists() && (gsnap.data() as any).name) || humanizeSlug(groupId));

        const col = collection(db, `groups/${groupId}/members`);
        const snap = await getDocs(col);
        if (!active) return;
        const list: Member[] = [];

        // Load groupAdmins set for promote/demote buttons
        const adminsSnap = await getDocs(collection(db, `groups/${groupId}/groupAdmins`));
        const adminSet: Record<string, boolean> = {};
        adminsSnap.forEach((d) => { adminSet[d.id] = true; });
        setAdmins(adminSet);
        snap.forEach((d) => list.push({ uid: d.id, ...(d.data() as any) }));
        // sort by displayName/uid
        list.sort((a, b) => ((a.displayName || a.uid).localeCompare(b.displayName || b.uid)));
        setMembers(list);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [db, groupId]);

  async function addMember() {
    const uid = newUid.trim();
    if (!uid) return;
    setBusy("add");
    try {
      await setDoc(doc(db, `groups/${groupId}/members/${uid}`), {
        uid,
        displayName: uid, // you can hydrate name later from a profile doc
        joinedAt: serverTimestamp(),
        addedBy: auth.currentUser?.uid || "unknown",
      }, { merge: true });

      await setDoc(doc(db, `users/${uid}/memberships/${groupId}`), {
        groupId,
        approvedAt: serverTimestamp(),
        approvedBy: auth.currentUser?.uid || "admin",
      }, { merge: true });

      setMembers((prev) => [...prev, { uid }].sort((a, b) => ((a.displayName || a.uid).localeCompare(b.displayName || b.uid))));
      setNewUid("");
    } finally {
      setBusy("");
    }
  }

  async function makeAdmin(uid: string) {
    setBusy(`admin:${uid}`);
    try {
      await setDoc(doc(db, `groups/${groupId}/groupAdmins/${uid}`), {
        uid,
        grantedBy: auth.currentUser?.uid || "unknown",
        createdAt: serverTimestamp(),
      }, { merge: true });
      setAdmins((prev) => ({ ...prev, [uid]: true }));
    } finally {
      setBusy("");
    }
  }

  async function removeAdmin(uid: string) {
    setBusy(`admin:${uid}`);
    try {
      await deleteDoc(doc(db, `groups/${groupId}/groupAdmins/${uid}`));
      setAdmins((prev) => { const copy = { ...prev }; delete copy[uid]; return copy; });
    } finally {
      setBusy("");
    }
  }

  async function removeMember(uid: string) {
    setBusy(uid);
    try {
      await deleteDoc(doc(db, `groups/${groupId}/members/${uid}`));
      await deleteDoc(doc(db, `users/${uid}/memberships/${groupId}`));
      setMembers((prev) => prev.filter((m) => m.uid !== uid));
    } finally {
      setBusy("");
    }
  }

  if (!groupId) return <div className="p-6">Missing group slug.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Group Members</h1>
          <p className="text-slate-600">Group: {groupName}</p>
        </div>
        <Link to={`/admin/groups`} className="text-sm text-slate-700 underline">Back to groups</Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white/70 p-4 mb-6">
        <h2 className="font-medium text-slate-900">Add Member (by UID)</h2>
        <div className="mt-2 flex gap-2">
          <input
            value={newUid}
            onChange={(e) => setNewUid(e.target.value)}
            placeholder="Paste a user's UID"
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <button
            onClick={addMember}
            disabled={!newUid.trim() || !!busy}
            className="text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {busy === "add" ? "Adding…" : "Add"}
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-1">Tip: you can find a user's UID in Firebase → Authentication.</p>
      </div>

      {loading ? (
        <p className="text-slate-600">Loading…</p>
      ) : members.length === 0 ? (
        <p className="text-slate-600">No members yet.</p>
      ) : (
        <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70">
          {members.map((m) => (
            <li key={m.uid} className="p-4 flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">{m.displayName || m.uid}</div>
                <div className="text-xs text-slate-500 truncate">{m.uid}</div>
              </div>
              <div className="flex items-center gap-2">
                {admins[m.uid] ? (
                  <button
                    onClick={() => removeAdmin(m.uid)}
                    disabled={!!busy}
                    className="text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60"
                  >
                    {busy === `admin:${m.uid}` ? "Updating…" : "Remove admin"}
                  </button>
                ) : (
                  <button
                    onClick={() => makeAdmin(m.uid)}
                    disabled={!!busy}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
                  >
                    {busy === `admin:${m.uid}` ? "Updating…" : "Make admin"}
                  </button>
                )}
                <button
                  onClick={() => removeMember(m.uid)}
                  disabled={!!busy}
                  className="text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60"
                >
                  {busy === m.uid ? "Removing…" : "Remove"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function humanizeSlug(slug: string) {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
