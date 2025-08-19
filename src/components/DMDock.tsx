// src/components/DMDock.tsx
import React from "react";
import {
  collectionGroup,
  getFirestore,
  onSnapshot,
  query,
  where,
  orderBy,
  collection,
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
  type DocumentData,
  type Unsubscribe,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/lib/firebase";

type Thread = {
  id: string;                // pairId
  groupId: string;           // parent group slug
  users: string[];           // [uidA, uidB]
  lastText?: string;
  lastAt?: unknown;
  otherUid: string;
  otherName?: string;
};

type ChatMsg = {
  id: string;
  text: string;
  from: string;
  to: string;
  displayName?: string;
  createdAt?: unknown;
};

function pairIdFor(a: string, b: string) {
  return [a, b].sort().join("_");
}

export default function DMDock() {
  const db = React.useMemo(() => getFirestore(app), []);
  const auth = React.useMemo(() => getAuth(app), []);

  // SUBSCRIBE to auth so the dock appears once the user is known
  const [me, setMe] = React.useState<string | null>(auth.currentUser?.uid ?? null);
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setMe(u?.uid ?? null));
    return () => unsub();
  }, [auth]);

  const [open, setOpen] = React.useState(false);
  const [threads, setThreads] = React.useState<Thread[]>([]);
  const [active, setActive] = React.useState<Thread | null>(null);
  const [msgs, setMsgs] = React.useState<ChatMsg[]>([]);
  const [text, setText] = React.useState("");
  const unsubRef = React.useRef<Unsubscribe | null>(null);

  // Resolve other user's display name cache
  const nameCache = React.useRef<Record<string, string>>({});
  async function resolveName(uid: string) {
    if (nameCache.current[uid]) return nameCache.current[uid];
    try {
      const { getDoc, doc } = await import("firebase/firestore");
      const snap = await getDoc(doc(db, "users", uid));
      const nm = (snap.data()?.displayName as string) || (snap.data()?.name as string) || uid;
      nameCache.current[uid] = nm;
      return nm;
    } catch {
      return uid;
    }
  }

  // Listen for my DM threads across all groups
  React.useEffect(() => {
    if (!me) return;
    let unsub: Unsubscribe | null = null;
    let cancelled = false;
    (async () => {
      try {
        // Prefer ordering by lastAt desc; fallback if index not ready
        try {
          const q = query(
            collectionGroup(db, "directMessages"),
            where("users", "array-contains", me),
            orderBy("lastAt", "desc")
          );
          unsub = onSnapshot(q, async (snap) => {
            const rows: Thread[] = [];
            for (const d of snap.docs) {
              const data = d.data() as DocumentData;
              const parts = d.ref.path.split("/");
              const groupId = parts.length >= 2 ? parts[1] : "";
              const users = (data?.users as string[]) || [];
              const otherUid = users.find((u) => u !== me) || "";
              const t: Thread = {
                id: d.id,
                groupId,
                users,
                lastText: (data?.lastText as string) || "",
                lastAt: data?.lastAt,
                otherUid,
                otherName: nameCache.current[otherUid],
              };
              rows.push(t);
            }
            for (const r of rows) {
              if (r.otherUid && !r.otherName) {
                resolveName(r.otherUid).then((nm) => {
                  setThreads((prev) => prev.map((p) => (p.id === r.id ? { ...p, otherName: nm } : p)));
                });
              }
            }
            if (!cancelled) setThreads(rows);
          });
        } catch {
          const q = query(collectionGroup(db, "directMessages"), where("users", "array-contains", me));
          unsub = onSnapshot(q, async (snap) => {
            const rows: Thread[] = [];
            for (const d of snap.docs) {
              const data = d.data() as DocumentData;
              const parts = d.ref.path.split("/");
              const groupId = parts.length >= 2 ? parts[1] : "";
              const users = (data?.users as string[]) || [];
              const otherUid = users.find((u) => u !== me) || "";
              const t: Thread = {
                id: d.id, groupId, users,
                lastText: (data?.lastText as string) || "",
                lastAt: data?.lastAt,
                otherUid,
                otherName: nameCache.current[otherUid],
              };
              rows.push(t);
            }
            rows.sort((a, b) => {
              const aa = (a.lastAt as any)?.toMillis ? (a.lastAt as any).toMillis() : 0;
              const bb = (b.lastAt as any)?.toMillis ? (b.lastAt as any).toMillis() : 0;
              return bb - aa;
            });
            for (const r of rows) {
              if (r.otherUid && !r.otherName) {
                resolveName(r.otherUid).then((nm) => {
                  setThreads((prev) => prev.map((p) => (p.id === r.id ? { ...p, otherName: nm } : p)));
                });
              }
            }
            if (!cancelled) setThreads(rows);
          });
        }
      } catch {
        // ignore
      }
    })();
    return () => {
      if (unsub) unsub();
    };
  }, [db, me]);

  // Load messages for active thread
  React.useEffect(() => {
    if (!active || !me) {
      if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; }
      setMsgs([]);
      return;
    }
    if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; }
    const col = collection(db, `groups/${active.groupId}/directMessages/${active.id}/messages`);
    const q = query(col, orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const rows: ChatMsg[] = snap.docs.map((d) => {
        const data = d.data() as DocumentData;
        return {
          id: d.id,
          text: (data?.text as string) || "",
          from: (data?.from as string) || "",
          to: (data?.to as string) || "",
          displayName: (data?.displayName as string) || "",
          createdAt: data?.createdAt,
        };
      });
      setMsgs(rows);
    });
    unsubRef.current = unsub;
    return () => { if (unsubRef.current) { unsubRef.current(); unsubRef.current = null; } };
  }, [db, active?.groupId, active?.id, me]);

  async function send() {
    if (!active || !me) return;
    const txt = text.trim();
    if (!txt) return;
    const toUid = active.otherUid;
    try {
      const col = collection(db, `groups/${active.groupId}/directMessages/${active.id}/messages`);
      await addDoc(col, {
        text: txt,
        from: me,
        to: toUid,
        displayName: (auth.currentUser?.displayName as string) || "Member",
        createdAt: serverTimestamp(),
      });
      // upsert thread meta
      await setDoc(
        doc(collection(db, `groups/${active.groupId}/directMessages`), active.id),
        { users: [me, toUid].sort(), lastText: txt, lastAt: serverTimestamp(), lastSender: me },
        { merge: true }
      );
      setText("");
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert("Could not send message.");
    }
  }

  // If the user isn't known yet, render nothing (will show as soon as auth arrives)
  if (!me) return null;

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-40 shadow-lg rounded-full px-4 py-2 text-white text-sm"
        style={{ backgroundColor: "#919FAA" }}
        aria-label={open ? "Close direct messages" : "Open direct messages"}
      >
        {open ? "Close DMs" : "Open DMs"}
      </button>

      {/* Dock */}
      {open && (
        <div className="fixed bottom-16 right-4 z-40 w-[680px] max-w-[95vw] h-[420px] rounded-xl border border-border bg-card shadow-xl overflow-hidden flex">
          {/* Threads list */}
          <div className="w-60 border-r border-border h-full overflow-auto">
            <div className="px-3 py-2 text-sm font-semibold">Conversations</div>
            {threads.length === 0 ? (
              <div className="px-3 py-2 text-sm text-text2">No conversations yet.</div>
            ) : (
              <ul>
                {threads.map((t) => (
                  <li key={`${t.groupId}__${t.id}`}>
                    <button
                      type="button"
                      onClick={() => setActive(t)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-muted ${active && active.id === t.id && active.groupId === t.groupId ? "bg-muted" : ""}`}
                    >
                      <div className="font-medium truncate">{t.otherName || t.otherUid}</div>
                      <div className="text-xs text-text2 truncate">{t.lastText || "…"}</div>
                      <div className="text-[10px] text-text2 mt-0.5">Group: {t.groupId}</div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Chat pane */}
          <div className="flex-1 h-full flex flex-col">
            {!active ? (
              <div className="flex-1 grid place-items-center text-sm text-text2">
                Select a conversation to start chatting.
              </div>
            ) : (
              <>
                <div className="px-3 py-2 border-b border-border">
                  <div className="text-sm font-semibold">{active.otherName || active.otherUid}</div>
                  <div className="text-xs text-text2">Group: {active.groupId}</div>
                </div>

                <div className="flex-1 overflow-auto p-3 space-y-2">
                  {msgs.map((m) => (
                    <div key={m.id} className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${m.from === me ? "ml-auto border border-border" : "bg-muted"}`}>
                      {m.text}
                    </div>
                  ))}
                  {msgs.length === 0 && <div className="text-sm text-text2">No messages in this conversation yet.</div>}
                </div>

                <div className="border-t border-border p-2 flex gap-2">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write a message…"
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void send(); } }}
                  />
                  <button
                    type="button"
                    onClick={() => void send()}
                    className="rounded-lg px-3 py-2 text-white text-sm"
                    style={{ backgroundColor: "#919FAA" }}
                    disabled={!text.trim()}
                  >
                    Send
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
