import { Link } from "react-router-dom";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

const recommended = [
  { title: "Sample Book", url: "https://example.com/book" },
  { title: "Helpful Video", url: "https://youtu.be/dQw4w9WgXcQ" },
];

type SRDoc = {
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
  const db = useMemo(() => getFirestore(app), []);
  const { user } = useAuth();
  const [papers, setPapers] = useState<SRDoc[] | null>(null);
  const [threads, setThreads] = useState<Thread[] | null>(null);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const q = query(collection(db, "sundayResources"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const list: SRDoc[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setPapers(list);
    });
    return () => unsub();
  }, [db]);

  useEffect(() => {
    const q = query(collection(db, "forumThreads"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const list: Thread[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setThreads(list);
    });
    return () => unsub();
  }, [db]);

  const createThread = async (e: FormEvent) => {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    await addDoc(collection(db, "forumThreads"), {
      title,
      createdAt: serverTimestamp(),
      creator: user?.uid ?? null,
    });
    setNewTitle("");
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <section>
          <h1 className="text-2xl font-semibold text-accent">The Forum</h1>
          <p className="text-text2 mt-2">Connect with others and explore resources.</p>
        </section>

        <section>
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
              <button
                type="submit"
                className="rounded-md bg-accent px-4 py-2 text-white"
              >
                Create Thread
              </button>
            </form>
          )}
        </section>

        <section>
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

        <section>
          <h2 className="text-xl font-semibold text-accent">Recommended Resources</h2>
          <ul className="mt-4 space-y-2">
            {recommended.map((r, idx) => (
              <li key={idx}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

