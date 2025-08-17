import React from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  serverTimestamp,
  query,
  orderBy,
  where,
  getCountFromServer,
  type DocumentData,
  type DocumentReference,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";
import GroupResources from "@/components/groups/GroupResources";

type GroupDoc = {
  name?: string;
  description?: string;
  parent?: string | null;
  campus?: string | null;
};

type Resource = {
  id: string;
  title: string;
  url: string;
  note?: string;
};

type Member = {
  uid: string;
  displayName?: string;
  email?: string;
  role?: string;
};

type Message = {
  id: string;
  uid: string;
  displayName?: string;
  text: string;
  createdAt?: any;
  replyCount?: number;
};

type Reply = {
  id: string;
  uid: string;
  displayName?: string;
  text: string;
  createdAt?: any;
};

export default function GroupDetail() {
  const { slug = "" } = useParams();
  const db = React.useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);

  const [group, setGroup] = React.useState<(GroupDoc & { id: string }) | null>(null);
  const [allowed, setAllowed] = React.useState<boolean>(false);
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState(true);

  const [resources, setResources] = React.useState<Resource[]>([]);
  const [members, setMembers] = React.useState<Member[]>([]);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [newMsg, setNewMsg] = React.useState<string>("");
  const [sending, setSending] = React.useState<boolean>(false);

  // Thread drawer state
  const [threadOpen, setThreadOpen] = React.useState(false);
  const [threadFor, setThreadFor] = React.useState<Message | null>(null);
  const [replies, setReplies] = React.useState<Reply[]>([]);
  const [replyText, setReplyText] = React.useState("");
  const [replySending, setReplySending] = React.useState(false);

  // Per-user thread reads to show "New replies"
  const [threadReads, setThreadReads] = React.useState<Record<string, { lastReplyCount?: number; lastViewedAt?: any }>>({});

  // Admin resource editor state
  const [newTitle, setNewTitle] = React.useState<string>("");
  const [newUrl, setNewUrl] = React.useState<string>("");
  const [newNote, setNewNote] = React.useState<string>("");
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editTitle, setEditTitle] = React.useState<string>("");
  const [editUrl, setEditUrl] = React.useState<string>("");
  const [editNote, setEditNote] = React.useState<string>("");
  const [saving, setSaving] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  async function safeExists(r: DocumentReference) {
    try {
      const s = await getDoc(r);
      return s.exists();
    } catch (e) {
      console.warn("safeExists permission/other error", e);
      return false;
    }
  }

  React.useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        if (!slug) return;

        try {
          const g = await getDoc(doc(db, "groups", slug));
          if (g.exists() && !cancelled) setGroup({ id: g.id, ...(g.data() as any) });
        } catch (e) {
          console.error("Failed to load group doc", e);
        }

        let ok = false;
        let admin = false;

        const u = auth.currentUser;
        if (u) {
          const uid = u.uid;
          const isSuper = await safeExists(doc(db, "admins", uid));
          if (isSuper) {
            ok = true; admin = true;
          } else {
            const isGroupAdmin = await safeExists(doc(db, `groups/${slug}/groupAdmins/${uid}`));
            if (isGroupAdmin) {
              ok = true; admin = true;
            } else {
              const isMemberDirect = await safeExists(doc(db, `users/${uid}/memberships/${slug}`));
              if (isMemberDirect) {
                ok = true;
              } else {
                try {
                  const ms = await getDocs(collection(db, `users/${uid}/memberships`));
                  ok = ms.docs.some((d) => {
                    const data = d.data() as any;
                    return data?.groupId === slug || data?.groupSlug === slug;
                  });
                } catch (e) {
                  console.warn("Membership scan failed", e);
                }
              }
            }
          }
        }

        if (!cancelled) {
          setIsAdmin(admin);
          setAllowed(ok);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [db, auth.currentUser, slug]);

  // Load resources, members, messages if allowed
  React.useEffect(() => {
    if (!allowed || !slug) return;
    const unsubRes = onSnapshot(collection(db, `groups/${slug}/resources`), (snap) => {
      const list: Resource[] = snap.docs.map((d) => ({
        id: d.id,
        title: (d.data() as DocumentData)?.title || d.id,
        url: (d.data() as DocumentData)?.url || "#",
        note: (d.data() as DocumentData)?.note || "",
      }));
      setResources(list);
    });
    const unsubMem = onSnapshot(collection(db, `groups/${slug}/members`), (snap) => {
      const list: Member[] = snap.docs.map((d) => ({
        uid: d.id, ...(d.data() as DocumentData),
      }));
      setMembers(list);
    });
    const unsubMsg = onSnapshot(
      query(collection(db, `groups/${slug}/messages`), orderBy("createdAt", "asc")),
      async (snap) => {
        const base: Message[] = snap.docs.map((d) => ({
          id: d.id,
          uid: (d.data() as any)?.uid,
          displayName: (d.data() as any)?.displayName,
          text: (d.data() as any)?.text,
          createdAt: (d.data() as any)?.createdAt,
        }));
        const withCounts = await Promise.all(base.map(async (m) => {
          try {
            const agg = await getCountFromServer(collection(db, `groups/${slug}/messages/${m.id}/replies`));
            return { ...m, replyCount: Number((agg.data() as any)?.count || 0) };
          } catch {
            return { ...m, replyCount: 0 };
          }
        }));
        setMessages(withCounts);
      }
    );
    return () => { unsubRes(); unsubMem(); unsubMsg(); };
  }, [db, slug, allowed]);

  // Subscribe to user's threadReads for this group
  React.useEffect(() => {
    if (!allowed || !slug || !auth.currentUser) return;
    const uid = auth.currentUser.uid;
    const unsub = onSnapshot(
      query(collection(db, `users/${uid}/threadReads`), where("groupId", "==", slug)),
      (snap) => {
        const map: Record<string, { lastReplyCount?: number; lastViewedAt?: any }> = {};
        snap.forEach((d) => {
          const data = d.data() as any;
          if (data?.messageId) {
            map[data.messageId] = { lastReplyCount: data.lastReplyCount, lastViewedAt: data.lastViewedAt };
          }
        });
        setThreadReads(map);
      }
    );
    return () => unsub();
  }, [db, slug, allowed, auth.currentUser]);

  // Admin actions for resources
  async function handleAddResource(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const t = newTitle.trim();
    const u = newUrl.trim();
    if (!t || !u) { setError("Please enter a title and URL."); return; }
    setSaving(true);
    try {
      await addDoc(collection(db, `groups/${slug}/resources`), {
        title: t, url: u, note: newNote.trim() || "",
        createdAt: serverTimestamp(), createdBy: auth.currentUser?.uid || null,
      });
      setNewTitle(""); setNewUrl(""); setNewNote("");
    } catch (err: any) {
      setError(err?.message || "Could not add resource.");
    } finally { setSaving(false); }
  }

  async function saveEdit() {
    if (!editingId) return;
    setError(null);
    const t = editTitle.trim();
    const u = editUrl.trim();
    if (!t || !u) { setError("Please enter a title and URL."); return; }
    setSaving(true);
    try {
      await updateDoc(doc(db, `groups/${slug}/resources/${editingId}`), {
        title: t, url: u, note: editNote.trim() || "",
        updatedAt: serverTimestamp(), updatedBy: auth.currentUser?.uid || null,
      });
      setEditingId(null); setEditTitle(""); setEditUrl(""); setEditNote("");
    } catch (err: any) {
      setError(err?.message || "Could not save changes.");
    } finally { setSaving(false); }
  }

  function startEdit(r: Resource) {
    setEditingId(r.id); setEditTitle(r.title); setEditUrl(r.url); setEditNote(r.note || ""); setError(null);
  }

  async function deleteResource(id: string) {
    setError(null);
    if (!confirm("Delete this resource?")) return;
    try { await deleteDoc(doc(db, `groups/${slug}/resources/${id}`)); }
    catch (err: any) { setError(err?.message || "Could not delete resource."); }
  }

  // Messages: send & delete
  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const t = newMsg.trim();
    if (!t || !auth.currentUser) return;
    setSending(true);
    try {
      await addDoc(collection(db, `groups/${slug}/messages`), {
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName || "Member",
        text: t,
        createdAt: serverTimestamp(),
      });
      setNewMsg("");
    } finally { setSending(false); }
  }

  async function deleteMessage(id: string) {
    if (!confirm("Delete this message?")) return;
    await deleteDoc(doc(db, `groups/${slug}/messages/${id}`));
  }

  // Thread handling
  async function openThread(m: Message) {
    setThreadFor(m);
    setThreadOpen(true);
    try {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const agg = await getCountFromServer(collection(db, `groups/${slug}/messages/${m.id}/replies`));
        const count = Number((agg.data() as any)?.count || 0);
        await setDoc(doc(db, `users/${uid}/threadReads/${slug}__${m.id}`), {
          groupId: slug,
          messageId: m.id,
          lastReplyCount: count,
          lastViewedAt: serverTimestamp(),
        }, { merge: true });
      }
    } catch (e) { console.warn("threadReads write failed", e); }

    // Live subscribe to replies for this message
    const unsub = onSnapshot(
      query(collection(db, `groups/${slug}/messages/${m.id}/replies`), orderBy("createdAt", "asc")),
      (snap) => {
        const list: Reply[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
        }));
        setReplies(list);
      }
    );
    // Teardown previous listener if any
    (openThread as any)._cleanup && (openThread as any)._cleanup();
    (openThread as any)._cleanup = () => unsub();
  }

  function closeThread() {
    setThreadOpen(false);
    setThreadFor(null);
    setReplies([]);
    (openThread as any)._cleanup && (openThread as any)._cleanup();
    (openThread as any)._cleanup = null;
  }

  async function sendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!threadFor || !auth.currentUser) return;
    const t = replyText.trim();
    if (!t) return;
    setReplySending(true);
    try {
      await addDoc(collection(db, `groups/${slug}/messages/${threadFor.id}/replies`), {
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName || "Member",
        text: t,
        createdAt: serverTimestamp(),
      });
      setReplyText("");
    } catch (err) {
      console.error("sendReply failed", err);
      alert((err && (err as any).message) || "Could not post reply. Check Firestore rules and your connection.");
    } finally { setReplySending(false); }
  }

  // NEW: allow deleting a reply (author or admin)
  async function deleteReply(parentId: string, replyId: string) {
    if (!confirm("Delete this reply?")) return;
    await deleteDoc(doc(db, `groups/${slug}/messages/${parentId}/replies/${replyId}`));
  }

  if (loading) {
    return (
      <div className="container py-8">
        <div className="max-w-5xl mx-auto p-6">
          <Loader label="Loading group…" />
        </div>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="container py-8">
        <div className="max-w-5xl mx-auto p-6">
          <p className="text-text2">Group not found.</p>
        </div>
      </div>
    );
  }

  if (!allowed) {
    return (
      <div className="container py-8">
        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card p-6">
          <h1 className="text-xl font-semibold text-accent mb-2">{group.name || slug}</h1>
          <p className="text-sm text-text2 mb-4">Membership is required to view this group.</p>
          <p className="text-sm text-text2">Request to join from the Explore page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-accent">{group.name || slug}</h1>
        {group.description && <p className="text-sm text-text2 mt-2">{group.description}</p>}

        {/* Resources */}
        <section className="mt-6">
          <GroupResources groupId={slug} />
        </section>

        {/* Messages */}
        <section className="mt-6 rounded-xl border border-border bg-card p-5 relative">
          <h2 className="text-lg font-semibold text-accent">Messages</h2>
          <div className="mt-3 space-y-2 max-h-80 overflow-auto pr-1">
            {messages.length > 0 ? (
              messages.map((m) => {
                const seen = threadReads[m.id]?.lastReplyCount || 0;
                const count = m.replyCount || 0;
                const hasNew = count > seen;
                return (
                  <div key={m.id} className="rounded-lg border border-slate-700 px-3 py-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm"><span className="font-medium">{m.displayName || "Member"}</span></p>
                        <p className="text-sm text-slate-200 whitespace-pre-wrap">{m.text}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {hasNew && count > 0 && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: "#C5B175", color: "#282F36" }}>New replies</span>
                        )}
                        <button
                          onClick={() => openThread(m)}
                          className="text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted"
                          title="View thread / Reply"
                        >
                          {count > 0 ? `View thread (${count})` : "Reply"}
                        </button>
                        {(isAdmin || auth.currentUser?.uid === m.uid) && (
                          <button
                            onClick={() => deleteMessage(m.id)}
                            className="text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50 h-fit"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-text2">No messages yet.</p>
            )}
          </div>

          <form onSubmit={sendMessage} className="mt-3 flex gap-2">
            <input
              type="text"
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              placeholder="Write a message…"
              className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              disabled={sending || !newMsg.trim()}
              className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send"}
            </button>
          </form>

          {/* Thread drawer (Slack-like right panel) */}
          {threadOpen && threadFor && (
            <div className="fixed inset-0 z-50">
              {/* overlay */}
              <button className="absolute inset-0 bg-black/60" onClick={closeThread} aria-label="Close thread overlay" />
              {/* panel */}
              <div className="absolute right-0 top-0 h-full w-full sm:w-[28rem] bg-slate-900 text-white border-l border-slate-800 shadow-xl p-4 overflow-y-auto">
                <div className="flex items-start justify-between gap-2">
                  <div className="pr-6">
                    <p className="text-sm"><span className="font-medium">{threadFor.displayName || "Member"}</span></p>
                    <p className="text-sm text-slate-200 whitespace-pre-wrap">{threadFor.text}</p>
                  </div>
                  <button onClick={closeThread} className="p-2 rounded-md hover:bg-muted" aria-label="Close thread">
                    ✕
                  </button>
                </div>

                <div className="mt-4 space-y-2">
                  {replies.length === 0 ? (
                    <p className="text-sm text-slate-200">No replies yet.</p>
                  ) : (
                    replies.map((r) => (
                      <div key={r.id} className="rounded-lg border border-slate-700 px-3 py-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm"><span className="font-medium">{r.displayName || "Member"}</span></p>
                            <p className="text-sm text-slate-200 whitespace-pre-wrap">{r.text}</p>
                          </div>
                          {(isAdmin || auth.currentUser?.uid === r.uid) && (
                            <button onClick={() => deleteReply(threadFor.id, r.id)} className="text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50 h-fit">Delete</button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <form onSubmit={sendReply} className="mt-3 flex gap-2 sticky bottom-2 pt-2 bg-slate-900">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a reply…"
                    className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm outline-none text-white placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={replySending || !replyText.trim()}
                    className="rounded-lg bg-slate-100 text-slate-900 px-3 py-1.5 text-sm hover:bg-white disabled:opacity-60"
                  >
                    {replySending ? "Sending…" : "Reply"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </section>

        {/* Team */}
        <section className="mt-6 rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold text-accent">Team</h2>
          {members.length > 0 ? (
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {members.map((m) => (
                <li key={m.uid} className="rounded-lg border border-border px-3 py-2">
                  <p className="text-sm">{m.displayName || m.uid}</p>
                  {m.role && <p className="text-xs text-text2">{m.role}</p>}
                  {m.email && <p className="text-xs text-text2">{m.email}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-text2 mt-2">No members are listed for this group yet.</p>
          )}
        </section>
      </div>
    </div>
  );
}
