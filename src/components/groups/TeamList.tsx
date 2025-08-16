import React, { useEffect, useMemo, useState } from "react";
import {
  getFirestore,
  collectionGroup,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";

type Member = {
  uid: string;
  role?: string;
  name?: string;
  photoURL?: string;
}

export default function TeamList({ groupId }: { groupId: string }) {
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [members, setMembers] = useState<Member[]>([]);
  const [openDM, setOpenDM] = useState<string | null>(null);
  const [dmText, setDmText] = useState("");

  useEffect(() => {
    const q = query(collectionGroup(db, "memberships"), where("groupId", "==", groupId));
    const unsub = onSnapshot(q, async (snap) => {
      const list = await Promise.all(
        snap.docs.map(async (d) => {
          const uid = d.ref.parent.parent?.id || ""; // users/{uid}/memberships/{doc}
          let name: string | undefined; let photoURL: string | undefined;
          try {
            const u = await getDoc(doc(db, "users", uid));
            const ud = u.exists() ? (u.data() as any) : null;
            name = ud?.displayName || ud?.name || uid.slice(0,6);
            photoURL = ud?.photoURL || undefined;
          } catch {}
          const role = (d.data() as any)?.role || "member";
          return { uid, role, name, photoURL } as Member;
        })
      );
      setMembers(list);
    });
    return unsub;
  }, [db, groupId]);

  const me = auth.currentUser?.uid || null;

  async function sendDM(targetUid: string) {
    if (!me || !dmText.trim()) return;
    // Store per-group DM threads so they stay scoped to the team
    const pair = [me, targetUid].sort().join("_");
    await addDoc(collection(db, `groups/${groupId}/directMessages/${pair}/messages`), {
      uid: me,
      text: dmText.trim(),
      createdAt: serverTimestamp(),
    } as any);
    setDmText("");
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
      <h2 className="text-lg font-semibold text-slate-900">Team</h2>
      <ul className="mt-3 divide-y divide-slate-200">
        {members.map((m) => (
          <li key={m.uid} className="py-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
                {m.photoURL ? <img src={m.photoURL} className="h-full w-full object-cover" /> : null}
              </div>
              <div>
                <div className="text-sm font-medium">{m.name || m.uid.slice(0,6)}</div>
                <div className="text-xs text-slate-600 capitalize">{m.role}</div>
              </div>
            </div>
            {me && me !== m.uid && (
              <button
                onClick={() => setOpenDM(openDM === m.uid ? null : m.uid)}
                className="text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100"
              >
                Message
              </button>
            )}
            {openDM === m.uid && (
              <div className="mt-2 w-full">
                <div className="text-xs text-slate-600 mb-1">Direct message to {m.name || m.uid.slice(0,6)}</div>
                <div className="flex gap-2">
                  <input
                    className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none"
                    placeholder="Write a private message…"
                    value={dmText}
                    onChange={(e) => setDmText(e.target.value)}
                  />
                  <button onClick={() => sendDM(m.uid)} className="rounded-lg bg-[#919FAA] hover:opacity-90 px-3 py-2 text-white text-xs">
                    Send
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
        {members.length === 0 && <li className="py-2 text-sm text-slate-600">No team members yet.</li>}
      </ul>
    </div>
  );
}
