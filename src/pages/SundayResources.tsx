import React from "react";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";

type SRDoc = {
  id: string;
  title: string;
  url: string;
  note?: string;
  createdAt?: any;
  createdBy?: string;
  createdByName?: string;
};

export default function SundayResources() {
  const db = React.useMemo(() => getFirestore(app), []);
  const { user } = useAuth();

  const [isSuper, setIsSuper] = React.useState<boolean | null>(null);
  const [items, setItems] = React.useState<SRDoc[] | null>(null);

  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [note, setNote] = React.useState("");
  const [err, setErr] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);

  // Check super-admin by looking at users/{uid}.isSuperAdmin
  React.useEffect(() => {
    let unsub: (() => void) | undefined;
    if (user?.uid) {
      const dref = doc(db, "users", user.uid);
      import("firebase/firestore").then(({ onSnapshot: os }) => {
        unsub = os(dref, (snap) => setIsSuper((snap.data() as any)?.isSuperAdmin === true));
      });
    } else {
      setIsSuper(false);
    }
    return () => {
      if (unsub) unsub();
    };
  }, [db, user?.uid]);

  // Live list of Sunday resources
  React.useEffect(() => {
    const q = query(collection(db, "sundayResources"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list: SRDoc[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setItems(list);
    });
    return () => unsub();
  }, [db]);

  async function addResource(e: React.FormEvent) {
    e.preventDefault();
    if (!isSuper) return;
    setErr(null);
    if (!title.trim() || !url.trim()) {
      setErr("Title and URL are required.");
      return;
    }
    try {
      setBusy(true);
      await addDoc(collection(db, "sundayResources"), {
        title: title.trim(),
        url: url.trim(),
        note: note.trim() || null,
        createdAt: serverTimestamp(),
        createdBy: user?.uid ?? null,
        createdByName: user?.displayName ?? null,
      });
      setTitle("");
      setUrl("");
      setNote("");
    } catch (e: any) {
      setErr(e?.message || "Failed to add resource.");
    } finally {
      setBusy(false);
    }
  }

  async function removeResource(id: string) {
    if (!isSuper) return;
    try {
      await deleteDoc(doc(db, "sundayResources", id));
    } catch {
      // no-op
    }
  }

  const canManage = isSuper === true;

  if (items === null || isSuper === null) {
    return (
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-accent">Sunday White Papers</h1>
          <div className="mt-4"><Loader label="Loading…" /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-accent">Sunday White Papers</h1>
        <p className="text-text2 mt-2">
          A curated library of Sunday white papers and study resources.
        </p>

        {canManage && (
          <section className="mt-6 rounded-xl border border-border bg-card p-5">
            <h2 className="text-lg font-semibold text-accent">Add a resource</h2>
            {err && <p className="text-red-500 text-sm mt-2">{err}</p>}
            <form onSubmit={addResource} className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="md:col-span-3 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL (Google Drive, video, article…)"
                className="md:col-span-6 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Note (optional)"
                className="md:col-span-3 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <div className="md:col-span-12 flex justify-end">
                <button
                  type="submit"
                  disabled={busy}
                  className="text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
                >
                  {busy ? "Adding…" : "Add resource"}
                </button>
              </div>
            </form>
          </section>
        )}

        <section className="mt-6 rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold text-accent">Resources</h2>
          {items.length === 0 ? (
            <p className="text-text2 text-sm mt-2">No resources yet.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {items.map((r) => (
                <li key={r.id} className="rounded-lg border border-border bg-muted px-3 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {r.title}
                        </a>
                      </p>
                      {r.note && <p className="text-xs text-text2 mt-0.5">{r.note}</p>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        to={r.url}
                        target="_blank"
                        className="text-xs px-2 py-1 rounded-md border border-border hover:bg-muted/70"
                      >
                        Open
                      </Link>
                      {canManage && (
                        <button
                          onClick={() => removeResource(r.id)}
                          className="text-xs px-2 py-1 rounded-md border border-border hover:bg-muted/70"
                          title="Delete"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
