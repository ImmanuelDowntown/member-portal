import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
  getDoc,
  type DocumentData,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";

type DM = {
  id: string;
  text: string;
  from: string;
  to: string;
  displayName?: string;
  createdAt?: any;
};

function makePairId(a: string, b: string) {
  // stable A_B ordering to avoid duplicates
  return [a, b].sort().join("_");
}

export default function GroupDirectMessages() {
  const { slug = "", otherUid = "" } = useParams();
  const db = React.useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);

  const [loading, setLoading] = React.useState(true);
  const [groupName, setGroupName] = React.useState<string>("");
  const [messages, setMessages] = React.useState<DM[]>([]);
  const [text, setText] = React.useState("");
  const me = auth.currentUser?.uid || "";
  const pairId = React.useMemo(() => (me ? makePairId(me, otherUid) : ""), [me, otherUid]);

  React.useEffect(() => {
    let cancelled = false;
    let unsub: (() => void) | undefined;

    async function init() {
      try {
        setLoading(true);
        // load group name for header
        try {
          const g = await getDoc(doc(db, "groups", slug));
          if (g.exists()) {
            const data = g.data() as DocumentData;
            if (!cancelled) setGroupName((data?.name as string) || slug);
          } else {
            if (!cancelled) setGroupName(slug);
          }
        } catch {
          if (!cancelled) setGroupName(slug);
        }

        if (!me) return;
        if (!pairId) return;
        const q = query(
          collection(db, `groups/${slug}/directMessages/${pairId}/messages`),
          orderBy("createdAt", "asc")
        );
        unsub = onSnapshot(q, (snap) => {
          const list: DM[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
          if (!cancelled) setMessages(list);
        });
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    init().catch(() => {});
    return () => {
      cancelled = true;
      if (unsub) unsub();
    };
  }, [db, slug, me, pairId]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim() || !me || !pairId) return;
    try {
      await addDoc(collection(db, `groups/${slug}/directMessages/${pairId}/messages`), {
        text: text.trim(),
        from: me,
        to: otherUid,
        displayName: auth.currentUser?.displayName || "Member",
        createdAt: serverTimestamp(),
      });
      setText("");
    } catch (err) {
      // Optional: surface error
      alert((err as any)?.message || "Failed to send");
    }
  }

  async function remove(id: string, fromUid: string) {
    if (!(fromUid === me)) return; // only author can delete (admins covered by rules if needed)
    if (!confirm("Delete this message?")) return;
    await deleteDoc(doc(db, `groups/${slug}/directMessages/${pairId}/messages/${id}`));
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Loader label="Loading direct messages…" />
      </div>
    );
  }

  return (
    <div className="container py-6">
      <div className="max-w-4xl mx-auto rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-accent">Direct Messages</h1>
          <Link to={`/groups/${slug}`} className="text-sm text-text2 underline">Back to group</Link>
        </div>
        <p className="text-sm text-text2 mt-1">Group: {groupName}</p>
        <div className="mt-4 max-h-[60vh] overflow-auto space-y-2 pr-1">
          {messages.length === 0 ? (
            <p className="text-sm text-text2">No messages yet.</p>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                className={"rounded-lg px-3 py-2 border " + (m.from === me ? "border-slate-300 bg-white" : "border-slate-700 bg-slate-800 text-white")}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs opacity-70">{m.displayName || m.from}</p>
                    <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                  </div>
                  {m.from === me && (
                    <button
                      onClick={() => remove(m.id, m.from)}
                      className="text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50 h-fit"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        <form onSubmit={send} className="mt-3 flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a message…"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
          />
          <button
            type="submit"
            disabled={!text.trim()}
            className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800 disabled:opacity-60"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
