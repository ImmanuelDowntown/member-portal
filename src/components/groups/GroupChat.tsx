import React, { useEffect, useRef, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/lib/firebase";

type Msg = {
  id?: string;
  uid: string;
  text: string;
  displayName?: string;
  createdAt?: any;
  fileUrl?: string;
  fileName?: string;
};

function MessageItem({ groupId, msg }: { groupId: string; msg: Msg }) {
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const [showThread, setShowThread] = useState(false);
  const [replies, setReplies] = useState<Msg[]>([]);
  const [replyText, setReplyText] = useState("");
  const [replyFile, setReplyFile] = useState<File | null>(null);

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

  async function sendReply(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const uid = auth.currentUser?.uid;
    if (!uid || (!replyText.trim() && !replyFile) || !msg.id) return;
    const replyRef = doc(collection(db, `groups/${groupId}/messages/${msg.id}/replies`));
    let fileData: { fileUrl: string; fileName: string } | null = null;
    if (replyFile) {
      const path = `groupChatAttachments/${groupId}/${msg.id}/${replyRef.id}/${replyFile.name}`;
      const fref = storageRef(storage, path);
      await uploadBytes(fref, replyFile);
      const url = await getDownloadURL(fref);
      fileData = { fileUrl: url, fileName: replyFile.name };
    }
    await setDoc(
      replyRef,
      {
        uid,
        text: replyText.trim(),
        displayName: auth.currentUser?.displayName || null,
        createdAt: serverTimestamp(),
        ...(fileData || {}),
      } as any,
    );
    setReplyText("");
    setReplyFile(null);
    e.currentTarget.reset();
  }

  return (
    <div className="p-2 text-sm border-b border-border">
      <div>
        <span className="font-medium">{msg.displayName || msg.uid.slice(0, 6)}</span>: {msg.text}
        {msg.fileUrl && (
          <div>
            <a
              href={msg.fileUrl}
              target="_blank"
              rel="noopener"
              className="text-accent underline"
            >
              {msg.fileName || "Attachment"}
            </a>
          </div>
        )}
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
              {r.fileUrl && (
                <div>
                  <a
                    href={r.fileUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-accent underline"
                  >
                    {r.fileName || "Attachment"}
                  </a>
                </div>
              )}
            </div>
          ))}
          <form onSubmit={sendReply} className="mt-2 flex gap-2">
            <input
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply…"
              className="flex-1 rounded-lg border border-border bg-background px-2 py-1 text-xs outline-none"
            />
            <input
              type="file"
              onChange={(e) => setReplyFile(e.target.files?.[0] || null)}
              className="text-xs"
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
  const [file, setFile] = useState<File | null>(null);
  const storage = getStorage(app);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const q = query(collection(db, `groups/${groupId}/messages`), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      setMsgs(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
    });
    return unsub;
  }, [db, groupId]);

  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const uid = auth.currentUser?.uid;
    if (!uid || (!text.trim() && !file)) return;
    const msgRef = doc(collection(db, `groups/${groupId}/messages`));
    let fileData: { fileUrl: string; fileName: string } | null = null;
    if (file) {
      const path = `groupChatAttachments/${groupId}/${msgRef.id}/${file.name}`;
      const fref = storageRef(storage, path);
      await uploadBytes(fref, file);
      const url = await getDownloadURL(fref);
      fileData = { fileUrl: url, fileName: file.name };
    }
    await setDoc(
      msgRef,
      {
        uid,
        text: text.trim(),
        displayName: auth.currentUser?.displayName || null,
        createdAt: serverTimestamp(),
        ...(fileData || {}),
      } as any,
    );
    setText("");
    setFile(null);
    e.currentTarget.reset();
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
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="text-sm"
        />
        <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm">Send</button>
      </form>
    </div>
  );
}
