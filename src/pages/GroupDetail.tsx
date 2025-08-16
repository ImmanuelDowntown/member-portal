import React from "react";
import { useParams, Link } from "react-router-dom";
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
  serverTimestamp,
  query,
  orderBy,
  type DocumentData,
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
};

type Message = {
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

  // Load group + permission
  React.useEffect(() => {
    let cancelled = false;
    async function load() {
      if (!slug) return;
      const g = await getDoc(doc(db, "groups", slug));
      if (g.exists() && !cancelled) setGroup({ id: g.id, ...(g.data() as any) });

      // Permission: super admin OR group admin OR membership doc under user
      let ok = false;
      let admin = false;
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const superSnap = await getDoc(doc(db, "admins", uid));
        if (superSnap.exists()) {
          ok = true;
          admin = true;
        } else {
          const groupAdminSnap = await getDoc(doc(db, `groups/${slug}/groupAdmins/${uid}`));
          if (groupAdminSnap.exists()) {
            ok = true;
            admin = true;
          } else {
            const memberSnap = await getDoc(doc(db, `users/${uid}/memberships/${slug}`));
            if (memberSnap.exists()) {
              ok = true;
            } else {
              // fallback: membership doc with a field groupId or groupSlug
              try {
                const ms = await getDocs(collection(db, `users/${uid}/memberships`));
                ok = ms.docs.some(d => {
                  const data = d.data() as any;
                  return data?.groupId === slug || data?.groupSlug === slug;
                });
              } catch {/* ignore */}
            }
          }
        }
      }
      if (!cancelled) {
        setIsAdmin(admin);
        setAllowed(ok);
        setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [db, auth.currentUser, slug]);

  // Load resources, members, messages if allowed
  React.useEffect(() => {
    if (!allowed || !slug) return;
    // resources
    const unsubRes = onSnapshot(collection(db, `groups/${slug}/resources`), (snap) => {
      const list: Resource[] = snap.docs.map((d) => ({
        id: d.id,
        title: (d.data() as DocumentData)?.title || d.id,
        url: (d.data() as DocumentData)?.url || "#",
        note: (d.data() as DocumentData)?.note || "",
      }));
      setResources(list);
    });
    // members
    const unsubMem = onSnapshot(collection(db, `groups/${slug}/members`), (snap) => {
      const list: Member[] = snap.docs.map((d) => ({
        uid: d.id,
        ...(d.data() as DocumentData),
      }));
      setMembers(list);
    });
    // messages (ordered)
    const unsubMsg = onSnapshot(query(collection(db, `groups/${slug}/messages`), orderBy("createdAt", "asc")), (snap) => {
      const list: Message[] = snap.docs.map((d) => ({
        id: d.id,
        uid: (d.data() as any)?.uid,
        displayName: (d.data() as any)?.displayName,
        text: (d.data() as any)?.text,
        createdAt: (d.data() as any)?.createdAt,
      }));
      setMessages(list);
    });
    return () => {
      unsubRes();
      unsubMem();
      unsubMsg();
    };
  }, [db, slug, allowed]);

  // Admin actions for resources
  async function handleAddResource(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const t = newTitle.trim();
    const u = newUrl.trim();
    if (!t || !u) {
      setError("Please enter a title and URL.");
      return;
    }
    setSaving(true);
    try {
      await addDoc(collection(db, `groups/${slug}/resources`), {
        title: t,
        url: u,
        note: newNote.trim() || "",
        createdAt: serverTimestamp(),
        createdBy: auth.currentUser?.uid || null,
      });
      setNewTitle("");
      setNewUrl("");
      setNewNote("");
    } catch (err: any) {
      setError(err?.message || "Could not add resource.");
    } finally {
      setSaving(false);
    }
  }

  function startEdit(r: Resource) {
    setEditingId(r.id);
    setEditTitle(r.title);
    setEditUrl(r.url);
    setEditNote(r.note || "");
    setError(null);
  }

  async function saveEdit() {
    if (!editingId) return;
    setError(null);
    const t = editTitle.trim();
    const u = editUrl.trim();
    if (!t || !u) {
      setError("Please enter a title and URL.");
      return;
    }
    setSaving(true);
    try {
      await updateDoc(doc(db, `groups/${slug}/resources/${editingId}`), {
        title: t,
        url: u,
        note: editNote.trim() || "",
        updatedAt: serverTimestamp(),
        updatedBy: auth.currentUser?.uid || null,
      });
      setEditingId(null);
      setEditTitle("");
      setEditUrl("");
      setEditNote("");
    } catch (err: any) {
      setError(err?.message || "Could not save changes.");
    } finally {
      setSaving(false);
    }
  }

  async function deleteResource(id: string) {
    setError(null);
    if (!confirm("Delete this resource?")) return;
    try {
      await deleteDoc(doc(db, `groups/${slug}/resources/${id}`));
    } catch (err: any) {
      setError(err?.message || "Could not delete resource.");
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
    } finally {
      setSending(false);
    }
  }

  async function deleteMessage(id: string) {
    if (!confirm("Delete this message?")) return;
    await deleteDoc(doc(db, `groups/${slug}/messages/${id}`));
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

        {/* Quick links to child/related groups if desired */}
        {slug === "strategy-planning" && (
          <div className="mt-4 flex gap-2">
            <Link to="/groups/branding" className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted">Open Branding</Link>
            <Link to="/groups/marketing" className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted">Open Marketing</Link>
          </div>
        )}

        {/* Resources */}
        <section className="mt-6 rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-accent">Resources</h2>
          </div>

          {isAdmin && (
            <form onSubmit={handleAddResource} className="mt-3 grid gap-2 md:grid-cols-4 md:items-end">
              <label className="block">
                <span className="text-xs text-text2">Title</span>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                  placeholder="e.g., Vision Deck"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-xs text-text2">URL</span>
                <input
                  type="url"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                  placeholder="https://drive.google.com/..."
                />
              </label>
              <label className="block">
                <span className="text-xs text-text2">Note (optional)</span>
                <input
                  type="text"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                  placeholder="Short description"
                />
              </label>
              <div className="md:col-span-4">
                {error && <p className="text-sm text-rose-700 mb-2">{error}</p>}
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800 disabled:opacity-60"
                >
                  {saving ? "Adding…" : "Add resource"}
                </button>
              </div>
            </form>
          )}

          {resources.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {resources.map((r) => (
                <li key={r.id} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border border-border rounded-lg px-3 py-2">
                  {editingId === r.id ? (
                    <div className="flex-1 grid gap-2 md:grid-cols-3">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                      />
                      <input
                        type="url"
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                      />
                      <input
                        type="text"
                        value={editNote}
                        onChange={(e) => setEditNote(e.target.value)}
                        className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
                      />
                    </div>
                  ) : (
                    <div className="flex-1">
                      <p className="text-sm font-medium">{r.title}</p>
                      {r.note && <p className="text-xs text-text2">{r.note}</p>}
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    {editingId === r.id ? (
                      <>
                        <button
                          onClick={saveEdit}
                          className="rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <a href={r.url} target="_blank" rel="noreferrer" className="text-sm rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">
                          Open
                        </a>
                        {isAdmin && (
                          <>
                            <button
                              onClick={() => setEditingId(r.id)}
                              className="text-sm rounded-lg border border-border px-3 py-1.5 hover:bg-muted"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteResource(r.id)}
                              className="text-sm rounded-lg border border-rose-300 text-rose-700 px-3 py-1.5 hover:bg-rose-50"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-text2 mt-2">No resources yet.</p>
          )}
        </section>

        {/* Messages (Slack-like lightweight chat) */}
        <section className="mt-6 rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold text-accent">Messages</h2>
          <div className="mt-3 space-y-2 max-h-80 overflow-auto pr-1">
            {messages.length > 0 ? (
              messages.map((m) => (
                <div key={m.id} className="rounded-lg border border-border px-3 py-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm"><span className="font-medium">{m.displayName || "Member"}</span></p>
                    <p className="text-sm text-text2 whitespace-pre-wrap">{m.text}</p>
                  </div>
                  {(isAdmin || auth.currentUser?.uid === m.uid) && (
                    <button
                      onClick={() => deleteMessage(m.id)}
                      className="text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50 h-fit"
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))
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
