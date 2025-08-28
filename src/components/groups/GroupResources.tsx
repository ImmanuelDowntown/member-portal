import React, { useEffect, useMemo, useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query as fsQuery,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

type Resource = {
  id?: string;
  title: string;
  url: string;
  type?: "drive" | "video" | "link";
  description?: string;
  createdAt?: any;
  createdBy?: string;
  tags?: string[];
};

export default function GroupResources({ groupId }: { groupId: string }) {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [items, setItems] = useState<Resource[]>([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState<"drive" | "video" | "link">("link");
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [canEdit, setCanEdit] = useState(false);

  // inline edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editTagsInput, setEditTagsInput] = useState("");

  // search/filter
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const uid = auth.currentUser?.uid || null;

  useEffect(() => {
    const qy = fsQuery(collection(db, `groups/${groupId}/resources`), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(qy, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })));
    });
    return unsub;
  }, [db, groupId]);

  useEffect(() => {
    let active = true;
    async function checkAdmin() {
      if (!uid) {
        setCanEdit(false);
        return;
      }
      const superDoc = await getDoc(doc(db, "users", uid));
      if (!active) return;
      if ((superDoc.data() as any)?.isSuperAdmin === true) {
        setCanEdit(true);
        return;
      }
      const gaDoc = await getDoc(doc(db, `groups/${groupId}/groupAdmins/${uid}`));
      if (!active) return;
      setCanEdit(gaDoc.exists());
    }
    checkAdmin();
    return () => {
      active = false;
    };
  }, [db, groupId, uid]);

  const normalizeTags = (raw: string): string[] => {
    const arr = raw
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t.length > 0);
    return Array.from(new Set(arr));
  };

  async function addResource(e: React.FormEvent) {
    e.preventDefault();
    if (!uid) return;
    const data: Resource = {
      title: title.trim(),
      url: url.trim(),
      type,
      description: description.trim() || "",
      createdAt: serverTimestamp(),
      createdBy: uid,
      tags: normalizeTags(tagsInput),
    };
    if (!data.title || !data.url) return;
    await addDoc(collection(db, `groups/${groupId}/resources`), data as any);
    setTitle("");
    setUrl("");
    setType("link");
    setDescription("");
    setTagsInput("");
  }

  async function removeResource(id?: string) {
    if (!id) return;
    await deleteDoc(doc(db, `groups/${groupId}/resources/${id}`));
  }

  function beginEdit(r: Resource) {
    setEditingId(r.id || null);
    setEditTitle(r.title || "");
    setEditUrl(r.url || "");
    setEditDescription(r.description || "");
    setEditTagsInput((r.tags || []).join(", "));
  }

  async function saveEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editingId) return;
    const t = editTitle.trim();
    const u = editUrl.trim();
    if (!t || !u) return;
    await updateDoc(doc(db, `groups/${groupId}/resources/${editingId}`), {
      title: t,
      url: u,
      description: editDescription.trim(),
      tags: normalizeTags(editTagsInput),
      // updatedAt could be added here if you track it elsewhere
    });
    setEditingId(null);
    setEditTitle("");
    setEditUrl("");
    setEditDescription("");
    setEditTagsInput("");
  }

  const pretty = useMemo(
    () => (u: string) => {
      try {
        const parsed = new URL(u);
        return parsed.host + parsed.pathname;
      } catch {
        return u;
      }
    },
    []
  );

  const allTags = useMemo(() => {
    const s = new Set<string>();
    items.forEach((r) => (r.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [items]);

  const filtered = useMemo(() => {
    const qlc = q.trim().toLowerCase();
    return items.filter((r) => {
      const matchesQ =
        qlc.length === 0 ||
        (r.title || "").toLowerCase().includes(qlc) ||
        (r.description || "").toLowerCase().includes(qlc) ||
        (r.url || "").toLowerCase().includes(qlc);
      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((t) => (r.tags || []).includes(t));
      return matchesQ && matchesTags;
    });
  }, [items, q, activeTags]);

  const isNew = (createdAt: any): boolean => {
    try {
      const d: Date =
        createdAt?.toDate ? createdAt.toDate() : createdAt instanceof Date ? createdAt : null;
      if (!d) return false;
      const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
      return Date.now() - d.getTime() < sevenDaysMs;
    } catch {
      return false;
    }
  };

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="text-lg font-semibold text-accent">Resources</h2>
        <div className="flex items-center gap-2">
          <input
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            placeholder="Search resources…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search resources"
          />
          {activeTags.length > 0 && (
            <button
              type="button"
              className="rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted"
              onClick={() => setActiveTags([])}
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {allTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {allTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => toggleTag(t)}
              className={`text-xs rounded-full px-3 py-1 border ${
                activeTags.includes(t)
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-border bg-background text-slate-200 hover:bg-muted"
              }`}
              aria-pressed={activeTags.includes(t)}
            >
              #{t}
            </button>
          ))}
        </div>
      )}

      {canEdit && (
        <form onSubmit={addResource} className="mt-4 grid gap-2 sm:grid-cols-6">
          <input
            className="sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            placeholder="https://…"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <select
            className="sm:col-span-1 rounded-lg border border-border bg-background px-2 py-2 text-sm"
            value={type}
            onChange={(e) => setType(e.target.value as any)}
          >
            <option value="link">Link</option>
            <option value="drive">Drive</option>
            <option value="video">Video</option>
          </select>

          <textarea
            className="sm:col-span-6 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none resize-y min-h-[80px]"
            placeholder="Add a description (optional)…"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            className="sm:col-span-6 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            placeholder="Tags (comma separated: theology, sermon-notes, audio)"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
          />

          <div className="sm:col-span-6">
            <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm">
              Add resource
            </button>
          </div>
        </form>
      )}

      <ul className="mt-4 divide-y divide-border">
        {filtered.map((r) => (
          <li key={r.id} className="py-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent underline underline-offset-2 break-all"
                >
                  {r.title || pretty(r.url)}
                </a>
                {isNew(r.createdAt) && (
                  <span className="text-[10px] uppercase tracking-wide rounded-full bg-green-100 text-green-800 px-2 py-0.5">
                    New
                  </span>
                )}
              </div>
              {r.description && (
                <p className="mt-1 text-sm text-slate-200 whitespace-pre-wrap break-words">
                  {r.description}
                </p>
              )}
              {(r.tags && r.tags.length > 0) && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggleTag(t)}
                      className={`text-[11px] rounded-full px-2.5 py-1 border ${
                        activeTags.includes(t)
                          ? "border-slate-700 bg-slate-800 text-white"
                          : "border-border bg-background text-slate-200 hover:bg-muted"
                      }`}
                      aria-pressed={activeTags.includes(t)}
                      title={`Filter by #${t}`}
                    >
                      #{t}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {canEdit && (
              <div className="shrink-0 flex items-center gap-2">
                <button
                  onClick={() => beginEdit(r)}
                  className="text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeResource(r.id)}
                  className="text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50"
                >
                  Remove
                </button>
              </div>
            )}
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="py-2 text-sm text-slate-300">No resources match your filters.</li>
        )}
      </ul>

      {/* Inline edit panel */}
      {canEdit && editingId && (
        <form onSubmit={saveEdit} className="mt-4 grid gap-2 sm:grid-cols-6">
          <input
            className="sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            placeholder="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            className="sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            placeholder="https://…"
            value={editUrl}
            onChange={(e) => setEditUrl(e.target.value)}
          />
          <div className="sm:col-span-6">
            <textarea
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none min-h-[80px]"
              placeholder="Optional description…"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </div>
          <input
            className="sm:col-span-6 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            placeholder="Tags (comma separated)"
            value={editTagsInput}
            onChange={(e) => setEditTagsInput(e.target.value)}
          />
          <div className="sm:col-span-6 flex items-center gap-2">
            <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm">
              Save changes
            </button>
            <button
              type="button"
              onClick={() => { setEditingId(null); setEditTitle(""); setEditUrl(""); setEditDescription(""); setEditTagsInput(""); }}
              className="text-sm rounded-lg border border-border px-3 py-2 hover:bg-muted"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
