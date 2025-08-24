import { Link } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

type ResourceDoc = {
  id: string;
  title: string;
  url: string;
  note?: string;
};

type Thread = {
  id: string;
  title: string;
};

export default function Forum() {
  const { user } = useAuth();
  const [papers, setPapers] = useState<ResourceDoc[] | null>(null);
  const [resources, setResources] = useState<ResourceDoc[] | null>(null);
  const [threads, setThreads] = useState<Thread[] | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [isSuper, setIsSuper] = useState<boolean | null>(null);
  const [resTitle, setResTitle] = useState("");
  const [resUrl, setResUrl] = useState("");
  const [resNote, setResNote] = useState("");

  useEffect(() => {
    const q = query(collection(db, "sundayResources"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const list: ResourceDoc[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setPapers(list);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "forumThreads"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list: Thread[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setThreads(list);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "forumResources"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list: ResourceDoc[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setResources(list);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    let unsub: (() => void) | undefined;
    if (user?.uid) {
      const d = doc(db, "admins", user.uid);
      unsub = onSnapshot(d, (snap) => setIsSuper(snap.exists()));
    } else {
      setIsSuper(false);
    }
    return () => {
      if (unsub) unsub();
    };
  }, [user?.uid]);

  const createThread = async (e: FormEvent) => {
    e.preventDefault();
    const title = newTitle.trim();
    const body = newBody.trim();
    if (!title || !body || !user) return;
    const threadDoc = await addDoc(collection(db, "forumThreads"), {
      title,
      createdAt: serverTimestamp(),
      creator: user.uid,
    });
    await addDoc(collection(db, "forumThreads", threadDoc.id, "posts"), {
      author: user.displayName || user.email || "Anonymous",
      content: body,
      uid: user.uid,
      createdAt: serverTimestamp(),
    });
    setNewTitle("");
    setNewBody("");
  };

  const addResource = async (e: FormEvent) => {
    e.preventDefault();
    if (!isSuper) return;
    const title = resTitle.trim();
    const url = resUrl.trim();
    const note = resNote.trim();
    if (!title || !url) return;
    await addDoc(collection(db, "forumResources"), {
      title,
      url,
      note: note || null,
      createdAt: serverTimestamp(),
      createdBy: user?.uid ?? null,
    });
    setResTitle("");
    setResUrl("");
    setResNote("");
  };

  const removeResource = async (id: string) => {
    if (!isSuper) return;
    await deleteDoc(doc(db, "forumResources", id));
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">The Forum</h1>
          <p className="text-text2 mt-2">Connect with others and explore resources.</p>
        </section>

        <section className="border border-border p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-accent">Discussion Forum</h2>
          {threads === null ? (
            <p className="text-text2 mt-2">Loading…</p>
          ) : threads.length === 0 ? (
            <p className="text-text2 mt-2">No threads yet.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {threads.map((t) => (
                <li key={t.id} className="rounded-lg border border-border bg-muted p-3">
                  <Link
                    to={`/forum/thread/${t.id}`}
                    className="font-medium text-accent hover:underline"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {user && (
            <form onSubmit={createThread} className="mt-4 space-y-2">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="New thread title"
                className="w-full rounded-md border border-border bg-background p-2"
              />
              <textarea
                value={newBody}
                onChange={(e) => setNewBody(e.target.value)}
                placeholder="Thread message"
                className="w-full rounded-md border border-border bg-background p-2"
                rows={4}
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-4 py-2 text-slate-900"
              >
                Create Thread
              </button>
            </form>
          )}
        </section>

        <section className="border border-border p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-accent">Sunday White Papers</h2>
          {papers === null ? (
            <p className="text-text2 mt-2">Loading…</p>
          ) : papers.length === 0 ? (
            <p className="text-text2 mt-2">No papers yet.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {papers.map((p) => (
                <li key={p.id} className="rounded-lg border border-border bg-muted p-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    {p.title}
                  </a>
                  {p.note && <p className="text-sm text-text2 mt-1">{p.note}</p>}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="border border-border p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-accent">Recommended Resources</h2>
          {resources === null ? (
            <p className="text-text2 mt-2">Loading…</p>
          ) : resources.length === 0 ? (
            <p className="text-text2 mt-2">No resources yet.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {resources.map((r) => (
                <li key={r.id} className="rounded-lg border border-border bg-muted p-3">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    {r.title}
                  </a>
                  {r.note && <p className="text-sm text-text2 mt-1">{r.note}</p>}
                  {isSuper && (
                    <button
                      onClick={() => removeResource(r.id)}
                      className="ml-2 text-xs text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
          {isSuper && (
            <form onSubmit={addResource} className="mt-4 space-y-2">
              <input
                type="text"
                value={resTitle}
                onChange={(e) => setResTitle(e.target.value)}
                placeholder="Title"
                className="w-full rounded-md border border-border bg-background p-2"
              />
              <input
                type="url"
                value={resUrl}
                onChange={(e) => setResUrl(e.target.value)}
                placeholder="URL"
                className="w-full rounded-md border border-border bg-background p-2"
              />
              <input
                type="text"
                value={resNote}
                onChange={(e) => setResNote(e.target.value)}
                placeholder="Note (optional)"
                className="w-full rounded-md border border-border bg-background p-2"
              />
              <button
                type="submit"
                className="rounded-md bg-slate-900 px-4 py-2 text-white"
              >
                Add resource
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

