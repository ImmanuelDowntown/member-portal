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
  muted?: boolean; // per-group mute flag
};

type Message = {
  id: string;
  uid: string;
  displayName?: string;
  text: string;
  createdAt?: unknown;
  replyCount?: number;
};

type Reply = {
  id: string;
  uid: string;
  displayName?: string;
  text: string;
  createdAt?: unknown;
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
  const [threadReads, setThreadReads] = React.useState<Record<string, { lastReplyCount?: number; lastViewedAt?: unknown }>>({});

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

  // Direct Messages (multi-select in-page)
  const [dmFilter, setDmFilter] = React.useState<string>("");
  const [dmSelections, setDmSelections] = React.useState<Record<string, boolean>>({});
  const [dmText, setDmText] = React.useState<string>("");
  const [dmSending, setDmSending] = React.useState<boolean>(false);
  const [dmError, setDmError] = React.useState<string>("");
  const [dmSuccess, setDmSuccess] = React.useState<boolean>(false);

  // NEW: my membership + mute toggle
  const me = auth.currentUser?.uid || null;
  const myMembership = React.useMemo(() => members.find((m) => m.uid === me) || null, [members, me]);
  const [muted, setMuted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMuted(!!myMembership?.muted);
  }, [myMembership?.muted]);

  const hasDmSelection = React.useMemo(() => Object.values(dmSelections).some(Boolean), [dmSelections]);

  function pairIdFor(a: string, b: string) {
    return [a, b].sort().join("_");
  }

  async function safeExists(r: DocumentReference) {
    try {
      const s = await getDoc(r);
      return s.exists();
    } catch {
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
          if (g.exists() && !cancelled) setGroup({ id: g.id, ...(g.data() as Record<string, unknown>) as GroupDoc });
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
            const isGroupAdminDoc = await safeExists(doc(db, `groups/${slug}/groupAdmins/${uid}`));
            if (isGroupAdminDoc) {
              ok = true; admin = true;
            } else {
              const isMemberDirect = await safeExists(doc(db, `users/${uid}/memberships/${slug}`));
              if (isMemberDirect) {
                ok = true;
              } else {
                try {
                  const ms = await getDocs(collection(db, `users/${uid}/memberships`));
                  ok = ms.docs.some((d) => {
                    const data = d.data() as Record<string, unknown>;
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
          uid: (d.data() as DocumentData)?.uid as string,
          displayName: (d.data() as DocumentData)?.displayName as string | undefined,
          text: (d.data() as DocumentData)?.text as string,
          createdAt: (d.data() as DocumentData)?.createdAt,
        }));
        const withCounts = await Promise.all(base.map(async (m) => {
          try {
            const agg = await getCountFromServer(collection(db, `groups/${slug}/messages/${m.id}/replies`));
            const c = (agg.data() as unknown as { count?: number })?.count ?? 0;
            return { ...m, replyCount: Number(c) };
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
        const map: Record<string, { lastReplyCount?: number; lastViewedAt?: unknown }> = {};
        snap.forEach((d) => {
          const data = d.data() as Record<string, unknown>;
          const msgId = (data?.messageId as string) || "";
          if (msgId) {
            map[msgId] = {
              lastReplyCount: data.lastReplyCount as number | undefined,
              lastViewedAt: data.lastViewedAt,
            };
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
    } catch (err: unknown) {
      const msg = (err as { message?: string })?.message || "Could not add resource.";
      setError(msg);
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
    } catch (err: unknown) {
      const msg = (err as { message?: string })?.message || "Could not save changes.";
      setError(msg);
    } finally { setSaving(false); }
  }

  function startEdit(r: Resource) {
    setEditingId(r.id); setEditTitle(r.title); setEditUrl(r.url); setEditNote(r.note || ""); setError(null);
  }

  async function deleteResource(id: string) {
    setError(null);
    // eslint-disable-next-line no-alert
    if (!window.confirm("Delete this resource?")) return;
    try { await deleteDoc(doc(db, `groups/${slug}/resources/${id}`)); }
    catch (err: unknown) {
      const msg = (err as { message?: string })?.message || "Could not delete resource.";
      setError(msg);
    }
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
    // eslint-disable-next-line no-alert
    if (!window.confirm("Delete this message?")) return;
    await deleteDoc(doc(db, `groups/${slug}/messages/${id}`));
  }

  // Thread handling
  const threadUnsubRef = React.useRef<(() => void) | null>(null);

  async function openThread(m: Message) {
    setThreadFor(m);
    setThreadOpen(true);
    try {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const agg = await getCountFromServer(collection(db, `groups/${slug}/messages/${m.id}/replies`));
        const count = Number((agg.data() as { count?: number })?.count || 0);
        await setDoc(doc(db, `users/${uid}/threadReads/${slug}__${m.id}`), {
          groupId: slug,
          messageId: m.id,
          lastReplyCount: count,
          lastViewedAt: serverTimestamp(),
        }, { merge: true });
      }
    } catch (e) {
      // ignore
    }

    // teardown any previous
    if (threadUnsubRef.current) {
      threadUnsubRef.current();
      threadUnsubRef.current = null;
    }
    // Live subscribe to replies for this message
    const unsub = onSnapshot(
      query(collection(db, `groups/${slug}/messages/${m.id}/replies`), orderBy("createdAt", "asc")),
      (snap) => {
        const list: Reply[] = snap.docs.map((d) => {
          const data = d.data() as DocumentData;
          return {
            id: d.id,
            uid: (data?.uid as string) || "",
            displayName: (data?.displayName as string) || undefined,
            text: (data?.text as string) || "",
            createdAt: data?.createdAt,
          };
        });
        setReplies(list);
      }
    );
    threadUnsubRef.current = unsub;
  }

  function closeThread() {
    setThreadOpen(false);
    setThreadFor(null);
    setReplies([]);
    if (threadUnsubRef.current) {
      threadUnsubRef.current();
      threadUnsubRef.current = null;
    }
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
      // eslint-disable-next-line no-alert
      alert((err && (err as { message?: string }).message) || "Could not post reply. Check Firestore rules and your connection.");
    } finally { setReplySending(false); }
  }

  // Direct messages helpers (bulk send on page)
  const dmCandidates = React.useMemo(() => {
    const mine = auth.currentUser?.uid;
    const needle = dmFilter.trim().toLowerCase();
    return members
      .filter((m) => m.uid !== mine)
      .filter((m) => {
        if (!needle) return true;
        const name = (m.displayName || "").toLowerCase();
        const email = (m.email || "").toLowerCase();
        return name.includes(needle) || email.includes(needle) || m.uid.toLowerCase().includes(needle);
      });
  }, [members, dmFilter, auth.currentUser]);

  async function sendDirectMessages(e: React.FormEvent) {
    e.preventDefault();
    setDmError("");
    setDmSuccess(false);
    const mine = auth.currentUser?.uid;
    if (!mine) { setDmError("You must be signed in."); return; }
    const text = dmText.trim();
    if (!text) { setDmError("Enter a message."); return; }
    const targets = Object.entries(dmSelections).filter(([, v]) => v).map(([k]) => k);
    if (targets.length === 0) { setDmError("Select at least one member."); return; }
    setDmSending(true);
    try {
      for (const toUid of targets) {
        const pid = pairIdFor(mine, toUid);
        await addDoc(collection(db, `groups/${slug}/directMessages/${pid}/messages`), {
          text,
          from: mine,
          to: toUid,
          displayName: auth.currentUser?.displayName || "Member",
          createdAt: serverTimestamp(),
        });
        // upsert thread metadata for the global dock to list
        await setDoc(doc(db, `groups/${slug}/directMessages/${pid}`), {
          users: [mine, toUid].sort(),
          lastText: text,
          lastAt: serverTimestamp(),
          lastSender: mine,
        }, { merge: true });
      }
      setDmText("");
      setDmSelections({});
      setDmSuccess(true);
      window.setTimeout(() => setDmSuccess(false), 2000);
    } catch (err: unknown) {
      const msg = (err as { message?: string })?.message || "Failed to send DM(s).";
      setDmError(msg);
    } finally {
      setDmSending(false);
    }
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
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-accent">{group.name || slug}</h1>
            {group.description && <p className="text-sm text-text2 mt-2">{group.description}</p>}
          </div>
          {/* Mute toggle for current user */}
          {me && (
            <div className="mt-1">
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={muted}
                  onChange={async (e) => {
                    const v = e.target.checked;
                    setMuted(v);
                    try {
                      await setDoc(doc(db, `groups/${slug}/members/${me}`), { muted: v }, { merge: true });
                    } catch {
                      // revert on failure
                      setMuted(!v);
                      // eslint-disable-next-line no-alert
                      alert("Could not update notification setting.");
                    }
                  }}
                />
                <span>Mute notifications for this group</span>
              </label>
            </div>
          )}
        </div>

        {/* Resources */}
        <section className="mt-6 rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-accent">Resources</h2>
          </div>

          {/* Editor */}
          {isAdmin && (
            <form onSubmit={handleAddResource} className="mt-3 grid gap-2 sm:grid-cols-6">
              <input
                className="sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <input
                className="sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                placeholder="https://..."
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
              />
              <div className="sm:col-span-6">
                <textarea
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                  placeholder="Optional note (description)…"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
              </div>
              <div className="sm:col-span-6">
                <button
                  className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm"
                  disabled={saving}
                >
                  {saving ? "Saving…" : "Add resource"}
                </button>
                {error && <span className="ml-3 text-sm text-rose-700">{error}</span>}
              </div>
            </form>
          )}

          {/* List */}
          <ul className="mt-3 divide-y divide-border">
            {resources.map((r) => (
              <li key={r.id} className="py-2 flex items-center justify-between gap-3">
                <div>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-accent underline underline-offset-2 break-all"
                  >
                    {r.title}
                  </a>
                  {r.note && <p className="text-xs text-text2 mt-1">{r.note}</p>}
                </div>
                {isAdmin && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(r)}
                      className="text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteResource(r.id)}
                      className="text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </li>
            ))}
            {resources.length === 0 && <li className="py-2 text-sm text-text2">No resources yet.</li>}
          </ul>

          {/* Inline editor when editing */}
          {editingId && (
            <form onSubmit={(e) => { e.preventDefault(); void saveEdit(); }} className="mt-3 grid gap-2 sm:grid-cols-6">
              <input
                className="sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                placeholder="Title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                className="sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                placeholder="https://..."
                value={editUrl}
                onChange={(e) => setEditUrl(e.target.value)}
              />
              <div className="sm:col-span-6">
                <textarea
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                  placeholder="Optional note (description)…"
                  value={editNote}
                  onChange={(e) => setEditNote(e.target.value)}
                />
              </div>
              <div className="sm:col-span-6 flex items-center gap-2">
                <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm" disabled={saving}>
                  {saving ? "Saving…" : "Save changes"}
                </button>
                <button
                  type="button"
                  onClick={() => { setEditingId(null); setEditTitle(""); setEditUrl(""); setEditNote(""); }}
                  className="text-sm rounded-lg border border-border px-3 py-2 hover:bg-muted"
                >
                  Cancel
                </button>
                {error && <span className="text-sm text-rose-700">{error}</span>}
              </div>
            </form>
          )}
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
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{ backgroundColor: "#919FAA", color: "#ffffff" }}
                          >
                            New replies
                          </span>
                        )}
                        <button
                          onClick={() => { void openThread(m); }}
                          className="text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted"
                          title="View thread / Reply"
                        >
                          {count > 0 ? `View thread (${count})` : "Reply"}
                        </button>
                        {(isAdmin || auth.currentUser?.uid === m.uid) && (
                          <button
                            onClick={() => { void deleteMessage(m.id); }}
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

          {/* Compose message */}
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

          {/* Thread drawer */}
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
                        <p className="text-sm"><span className="font-medium">{r.displayName || "Member"}</span></p>
                        <p className="text-sm text-slate-200 whitespace-pre-wrap">{r.text}</p>
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

        {/* Direct Messages (bulk send within the group) */}
        <section className="mt-6 rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold text-accent">Direct Messages</h2>
          <p className="text-sm text-text2 mt-1">Select one or more members and send a private message.</p>

          <div className="mt-3 grid gap-2 sm:grid-cols-6">
            <input
              type="text"
              value={dmFilter}
              onChange={(e) => setDmFilter(e.target.value)}
              placeholder="Search members…"
              className="sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
              aria-label="Filter members for DM"
            />
            <div className="sm:col-span-3 max-h-48 overflow-auto rounded-lg border border-border bg-background p-2">
              {dmCandidates.length === 0 ? (
                <p className="text-xs text-text2">No members to message.</p>
              ) : (
                <ul className="space-y-1">
                  {dmCandidates.map((m) => (
                    <li key={m.uid} className="flex items-center gap-2">
                      <input
                        id={`dm-${m.uid}`}
                        type="checkbox"
                        checked={!!dmSelections[m.uid]}
                        onChange={(e) => setDmSelections((prev) => ({ ...prev, [m.uid]: e.target.checked }))}
                        className="h-4 w-4"
                      />
                      <label htmlFor={`dm-${m.uid}`} className="text-sm">
                        {m.displayName || m.uid}{m.email ? ` • ${m.email}` : ""}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <form onSubmit={sendDirectMessages} className="mt-3 grid gap-2 sm:grid-cols-6">
            <textarea
              value={dmText}
              onChange={(e) => setDmText(e.target.value)}
              placeholder="Write a private message…"
              className="sm:col-span-5 min-h-[3.25rem] rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            />
            <div className="sm:col-span-1">
              <button
                type="submit"
                disabled={dmSending || !hasDmSelection || !dmText.trim()}
                className="w-full rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 disabled:opacity-60"
                title={!hasDmSelection ? "Select at least one member" : undefined}
              >
                {dmSending ? "Sending…" : "Send DM"}
              </button>
            </div>
          </form>
          {dmError && <p className="mt-2 text-sm text-rose-700">{dmError}</p>}
          {dmSuccess && <p className="mt-2 text-sm text-emerald-700">Message sent.</p>}
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
                  {"muted" in m && (
                    <p className="text-[11px] text-text2 mt-1">{m.muted ? "Muted" : "Notifications on"}</p>
                  )}
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
