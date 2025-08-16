import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { app } from "@/lib/firebase"; // change to ../lib/firebase if you don't use '@'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";

type Pending = {
  uid: string;
  displayName?: string;
  createdAt?: any;
};

export default function AdminGroupRequests() {
  const { slug } = useParams();
  const db = getFirestore(app);
  const [groupName, setGroupName] = useState<string>("");
  const [pending, setPending] = useState<Pending[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string>("");
  const groupId = slug as string;

  useEffect(() => {
    let active = true;
    async function load() {
      if (!groupId) return;
      setLoading(true);
      try {
        // load group title
        const gref = doc(db, "groups", groupId);
        const gsnap = await getDoc(gref);
        setGroupName((gsnap.exists() && (gsnap.data() as any).name) || humanizeSlug(groupId));

        // list pending requests
        const reqCol = collection(db, `groups/${groupId}/membershipRequests`);
        const snap = await getDocs(reqCol);
        if (!active) return;
        const list: Pending[] = [];
        snap.forEach((d) => list.push(d.data() as any));
        setPending(list);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [db, groupId]);

  async function approve(p: Pending) {
    setBusyId(p.uid);
    try {
      // 1) write user membership
      await setDoc(doc(db, `users/${p.uid}/memberships/${groupId}`), {
        groupId,
        approvedAt: serverTimestamp(),
        approvedBy: "admin",
      }, { merge: true });

      // 2) write group member record (handy for group rosters)
      await setDoc(doc(db, `groups/${groupId}/members/${p.uid}`), {
        uid: p.uid,
        displayName: p.displayName || "Member",
        joinedAt: serverTimestamp(),
      }, { merge: true });

      // 3) delete mirrored request docs
      await Promise.all([
        deleteDoc(doc(db, `groups/${groupId}/membershipRequests/${p.uid}`)),
        deleteDoc(doc(db, `users/${p.uid}/membershipRequests/${groupId}`)),
      ]);

      // 4) update local state
      setPending((prev) => prev.filter((x) => x.uid !== p.uid));
    } finally {
      setBusyId("");
    }
  }

  async function deny(p: Pending) {
    setBusyId(p.uid);
    try {
      await Promise.all([
        deleteDoc(doc(db, `groups/${groupId}/membershipRequests/${p.uid}`)),
        deleteDoc(doc(db, `users/${p.uid}/membershipRequests/${groupId}`)),
      ]);
      setPending((prev) => prev.filter((x) => x.uid !== p.uid));
    } finally {
      setBusyId("");
    }
  }

  if (!groupId) return <div className="p-6">Missing group slug.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Pending Requests</h1>
          <p className="text-slate-600">Group: {groupName}</p>
        </div>
        <Link to={`/groups/${groupId}`} className="text-sm text-slate-700 underline">Back to group</Link>
      </div>

      {loading ? (
        <p className="text-slate-600">Loading…</p>
      ) : pending.length === 0 ? (
        <p className="text-slate-600">No pending requests.</p>
      ) : (
        <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70">
          {pending.map((p) => (
            <li key={p.uid} className="p-4 flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">{p.displayName || p.uid}</div>
                <div className="text-xs text-slate-500 truncate">{p.uid}</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => approve(p)}
                  disabled={!!busyId}
                  className="text-xs px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
                >
                  {busyId === p.uid ? "Working…" : "Approve"}
                </button>
                <button
                  onClick={() => deny(p)}
                  disabled={!!busyId}
                  className="text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60"
                >
                  Deny
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
