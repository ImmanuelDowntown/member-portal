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
  setDoc,
  serverTimestamp,
  type DocumentData,
  type DocumentReference,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";
import GroupChat from "@/components/groups/GroupChat";

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

  // NEW: my membership + mute toggle
  const me = auth.currentUser?.uid || null;
  const myMembership = React.useMemo(() => members.find((m) => m.uid === me) || null, [members, me]);
  const [muted, setMuted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMuted(!!myMembership?.muted);
  }, [myMembership?.muted]);


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

  // Load resources and members if allowed
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
    return () => { unsubRes(); unsubMem(); };
  }, [db, slug, allowed]);

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
          {isAdmin && (
            <Link to={`/admin/groups/${slug}/edit`} className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted">
              Edit settings
            </Link>
          )}

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

        {/* Team Chat */}
        <div className="mt-6">
          <GroupChat groupId={slug} />
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
