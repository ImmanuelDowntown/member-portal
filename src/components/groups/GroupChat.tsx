import React, { useEffect, useRef, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";

type Msg = {
  id?: string;
  uid: string;
  text: string;
  createdAt?: any;
}

export default function GroupChat({ groupId }: { groupId: string }) {
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const q = query(collection(db, `groups/${groupId}/messages`), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      setMsgs(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
    });
    return unsub;
  }, [db, groupId]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const uid = auth.currentUser?.uid;
    if (!uid || !text.trim()) return;
    await addDoc(collection(db, `groups/${groupId}/messages`), {
      uid,
      text: text.trim(),
      createdAt: serverTimestamp(),
    } as any);
    setText("");
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
      <h2 className="text-lg font-semibold text-slate-900">Team Chat</h2>
      <div className="mt-3 max-h-72 overflow-y-auto rounded-lg border border-slate-200 bg-white">
        {msgs.length === 0 && <div className="p-3 text-sm text-slate-600">No messages yet.</div>}
        {msgs.map(m => (
          <div key={m.id} className="p-2 text-sm border-b border-slate-100">
            <span className="font-medium">{m.uid.slice(0, 6)}</span>: {m.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={send} className="mt-2 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a message…"
          className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none"
        />
        <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm">Send</button>
      </form>
    </div>
  );
}
