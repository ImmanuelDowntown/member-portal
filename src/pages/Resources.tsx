import React, { useEffect, useMemo, useState } from "react";
import {
  getFirestore,
  collectionGroup,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import { logResourceAccess } from "@/lib/activity";

type Resource = {
  id?: string;
  title: string;
  url: string;
  description?: string;
  createdAt?: any;
  tags?: string[];
  __path?: string; // internal helper
};

export default function Resources() {
  const db = getFirestore(app);
  const [items, setItems] = useState<Resource[]>([]);
  const [qtext, setQtext] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  useEffect(() => {
    // Read across all group resources the user is allowed to see per Firestore rules.
    // NOTE: Firestore may prompt to create a composite index for createdAt ordering.
    const qy = query(collectionGroup(db, "resources"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(qy, (snap) => {
      setItems(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
          __path: d.ref.path,
        }))
      );
    });
    return unsub;
  }, [db]);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    items.forEach((r) => (r.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [items]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

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

  const filtered = useMemo(() => {
    const qlc = qtext.trim().toLowerCase();
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
  }, [items, qtext, activeTags]);

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold text-accent">Resources</h1>
      <p className="text-text2 mt-2">Documents, links, and media you have access to.</p>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <input
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none"
            placeholder="Search by title, description, or URL"
            value={qtext}
            onChange={(e) => setQtext(e.target.value)}
          />
          {activeTags.length > 0 && (
            <button
              type="button"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100"
              onClick={() => setActiveTags([])}
            >
              Clear tags
            </button>
          )}
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => toggleTag(t)}
                className={`text-xs rounded-full px-3 py-1 border ${
                  activeTags.includes(t)
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
                aria-pressed={activeTags.includes(t)}
              >
                #{t}
              </button>
            ))}
          </div>
        )}

        <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/70">
          {filtered.map((r) => (
            <li key={r.__path || r.id} className="p-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent underline underline-offset-2 break-all"
                  onClick={() => logResourceAccess(r.__path || "", r.title || r.url)}
                >
                  {r.title || r.url}
                </a>
                  {isNew(r.createdAt) && (
                    <span className="text-[10px] uppercase tracking-wide rounded-full bg-green-100 text-green-800 px-2 py-0.5">
                      New
                    </span>
                  )}
                </div>
                {r.description && (
                  <p className="mt-1 text-sm text-slate-600 whitespace-pre-wrap break-words">
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
                            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
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
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="p-4 text-sm text-slate-600">No resources match your filters.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
