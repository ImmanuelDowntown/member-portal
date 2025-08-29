import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  getFirestore,
  collection,
  serverTimestamp,
  orderBy,
  query,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
  getDocs,
  limit,
  deleteDoc,
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
  latestReplyAt?: number | null;
};

function MessageItem({
  groupId,
  msg,
  lastSeen,
  currentUid,
  canDelete,
  markRepliesRead,
}: {
  groupId: string;
  msg: Msg;
  lastSeen: number;
  currentUid: string | null;
  canDelete: boolean;
  markRepliesRead: (ts?: number) => void;
}) {
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const [showThread, setShowThread] = useState(false);
  const [replies, setReplies] = useState<Msg[]>([]);
  const [replyText, setReplyText] = useState("");
  const [replyFile, setReplyFile] = useState<File | null>(null);

  useEffect(() => {
    if (showThread && msg.latestReplyAt && msg.latestReplyAt > lastSeen) {
      markRepliesRead(msg.latestReplyAt);
    }
  }, [showThread, msg.latestReplyAt, lastSeen, markRepliesRead]);

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

  async function deleteMessage() {
    if (!msg.id) return;
    if (!(currentUid && (msg.uid === currentUid || canDelete))) return;
    try {
      await deleteDoc(doc(db, `groups/${groupId}/messages/${msg.id}`));
    } catch {
      // eslint-disable-next-line no-alert
      alert("Failed to delete message (check rules).");
    }
  }

  async function deleteReply(rid: string, ruid: string) {
    if (!msg.id) return;
    if (!(currentUid && (ruid === currentUid || canDelete))) return;
    try {
      await deleteDoc(doc(db, `groups/${groupId}/messages/${msg.id}/replies/${rid}`));
    } catch {
      // eslint-disable-next-line no-alert
      alert("Failed to delete reply (check rules).");
    }
  }

  return (
    <div className="relative p-2 text-sm border-b border-border">
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
      {(currentUid === msg.uid || canDelete) && (
        <button
          type="button"
          onClick={() => void deleteMessage()}
          className="absolute -top-2 -right-2 text-[10px] rounded-full border border-border bg-background px-1.5 py-0.5 hover:bg-surface"
          title="Delete message"
        >
          ×
        </button>
      )}
      <button
        onClick={() => setShowThread((v) => !v)}
        className="mt-1 text-xs text-accent"
      >
        {showThread ? "Hide replies" : "Reply"}
      </button>
      {msg.latestReplyAt && !showThread && (
        <button
          type="button"
          onClick={() => setShowThread(true)}
          className={
            msg.latestReplyAt > lastSeen
              ? "ml-2 rounded bg-yellow-200 px-1 py-0.5 text-xs text-yellow-800 cursor-pointer hover:underline"
              : "ml-2 text-xs text-accent"
          }
        >
          {msg.latestReplyAt > lastSeen ? "New Replies" : "Open Replies"}
        </button>
      )}
      {showThread && (
        <div className="mt-2 ml-4">
          {replies.length === 0 && (
            <div className="p-1 text-xs text-text2">No replies yet.</div>
          )}
          {replies.map((r) => (
            <div key={r.id} className="relative p-1 text-xs border-b border-border">
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
              {(currentUid === r.uid || canDelete) && (
                <button
                  type="button"
                  onClick={() => void deleteReply(r.id!, r.uid)}
                  className="absolute -top-1 -right-1 text-[8px] rounded-full border border-border bg-background px-1 py-0 hover:bg-surface"
                  title="Delete reply"
                >
                  ×
                </button>
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
  const [lastSeen, setLastSeen] = useState<number>(() => {
    const stored = localStorage.getItem(`groupChatLastSeen_${groupId}`);
    return stored ? parseInt(stored, 10) : 0;
  });
  const markRepliesRead = useCallback(
    (ts?: number) => {
      const newTs = Math.max(Date.now(), ts || 0);
      localStorage.setItem(`groupChatLastSeen_${groupId}`, newTs.toString());
      setLastSeen(newTs);
    },
    [groupId]
  );
  const [canDeleteAll, setCanDeleteAll] = useState(false);

  useEffect(() => {
    async function check() {
      const uid = auth.currentUser?.uid;
      if (!uid) {
        setCanDeleteAll(false);
        return;
      }
      try {
        const superSnap = await getDoc(doc(db, "users", uid));
        const isSuper = (superSnap.data() as any)?.isSuperAdmin === true;
        if (isSuper) {
          setCanDeleteAll(true);
          return;
        }
        const adminSnap = await getDoc(doc(db, `groups/${groupId}/groupAdmins/${uid}`));
        setCanDeleteAll(adminSnap.exists());
      } catch {
        setCanDeleteAll(false);
      }
    }
    check();
  }, [auth.currentUser?.uid, db, groupId]);

  useEffect(() => {
    return () => {
      markRepliesRead();
    };
  }, [groupId, markRepliesRead]);

  useEffect(() => {
    const q = query(collection(db, `groups/${groupId}/messages`), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, async (snap) => {
      const list: Msg[] = await Promise.all(
        snap.docs.map(async (d) => {
          const data = d.data() as any;
          const repliesSnap = await getDocs(
            query(
              collection(db, `groups/${groupId}/messages/${d.id}/replies`),
              orderBy("createdAt", "desc"),
              limit(1)
            )
          );
          const latestReplyAt = !repliesSnap.empty
            ? repliesSnap.docs[0].data().createdAt?.toMillis?.()
            : null;
          return { id: d.id, ...data, latestReplyAt };
        })
      );
      setMsgs(list);
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
          <MessageItem
            key={m.id}
            groupId={groupId}
            msg={m}
            lastSeen={lastSeen}
            currentUid={auth.currentUser?.uid || null}
            canDelete={canDeleteAll}
            markRepliesRead={markRepliesRead}
          />
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
