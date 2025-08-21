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
  displayName?: string;
  createdAt?: any;
};

function MessageItem({ groupId, msg }: { groupId: string; msg: Msg }) {
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [showThread, setShowThread] = useState(false);
  const [replies, setReplies] = useState<Msg[]>([]);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    if (!showThread || !msg.id) return;
    const q = query(
      collection(db, `groups/${groupId}/messages/${msg.id}/replies`),
      orderBy("createdAt", "asc"),
    );
    const unsub = onSnapshot(q, (snap) => {
      setReplies(snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })));
    });
    return unsub;
  }, [db, groupId, msg.id, showThread]);

  async function sendReply(e: React.FormEvent) {
    e.preventDefault();
    const uid = auth.currentUser?.uid;
    if (!uid || !replyText.trim() || !msg.id) return;
    await addDoc(collection(db, `groups/${groupId}/messages/${msg.id}/replies`), {
      uid,
      text: replyText.trim(),
      displayName: auth.currentUser?.displayName || null,
      createdAt: serverTimestamp(),
    } as any);
    setReplyText("");
  }

  return (
    <div className="p-2 text-sm border-b border-border">
      <div>
        <span className="font-medium">{msg.displayName || msg.uid.slice(0, 6)}</span>: {msg.text}
      </div>
      <button
        onClick={() => setShowThread((v) => !v)}
        className="mt-1 text-xs text-accent"
      >
        {showThread ? "Hide replies" : "Reply"}
      </button>
      {showThread && (
        <div className="mt-2 ml-4">
          {replies.length === 0 && (
            <div className="p-1 text-xs text-text2">No replies yet.</div>
          )}
          {replies.map((r) => (
            <div key={r.id} className="p-1 text-xs border-b border-border">
              <span className="font-medium">{r.displayName || r.uid.slice(0, 6)}</span>: {r.text}
            </div>
          ))}
          <form onSubmit={sendReply} className="mt-2 flex gap-2">
            <input
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply…"
              className="flex-1 rounded-lg border border-border bg-background px-2 py-1 text-xs outline-none"
            />
            <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-3 py-1 text-white text-xs">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
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
      displayName: auth.currentUser?.displayName || null,
      createdAt: serverTimestamp(),
    } as any);
    setText("");
  }

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h2 className="text-lg font-semibold text-accent">Team Chat</h2>
      <div className="mt-3 max-h-72 overflow-y-auto rounded-lg border border-border bg-background">
        {msgs.length === 0 && (
          <div className="p-3 text-sm text-text2">No messages yet.</div>
        )}
        {msgs.map((m) => (
          <MessageItem key={m.id} groupId={groupId} msg={m} />
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={send} className="mt-2 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a message…"
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
        />
        <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm">Send</button>
      </form>
    </div>
  );
}
