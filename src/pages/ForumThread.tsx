import { Link, useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import {
  doc,
  onSnapshot,
  collection,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import ForumPost, { Post } from "@/components/ForumPost";

export default function ForumThread() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [threadTitle, setThreadTitle] = useState<string | null | undefined>(undefined);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    if (!id) return;
    const unsubThread = onSnapshot(doc(db, "forumThreads", id), (snap) => {
      if (snap.exists()) {
        setThreadTitle((snap.data() as any).title);
      } else {
        setThreadTitle(null);
      }
    });
    const q = query(
      collection(db, "forumThreads", id, "posts"),
      orderBy("createdAt", "asc")
    );
    const unsubPosts = onSnapshot(q, (snap) => {
      const list: Post[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setPosts(list);
    });
    return () => {
      unsubThread();
      unsubPosts();
    };
  }, [id]);

  const createPost = async (e: FormEvent) => {
    e.preventDefault();
    const content = newPost.trim();
    if (!content || !id || !user) return;
    await addDoc(collection(db, "forumThreads", id, "posts"), {
      author: user.displayName || user.email || "Anonymous",
      content,
      createdAt: serverTimestamp(),
    });
    setNewPost("");
  };

  if (threadTitle === undefined) {
    return (
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-text2">Loading…</p>
        </div>
      </div>
    );
  }

  if (threadTitle === null) {
    return (
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-text2">Thread not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <Link to="/forum" className="text-accent hover:underline">
            &larr; Back to forum
          </Link>
          <h1 className="mt-4 text-2xl font-semibold text-accent">{threadTitle}</h1>
        </section>
        <section className="space-y-4">
          {posts === null ? (
            <p className="text-text2">Loading…</p>
          ) : posts.length === 0 ? (
            <p className="text-text2">No posts yet.</p>
          ) : (
            posts.map((p) => (
              <ForumPost key={p.id} threadId={id!} post={p} />
            ))
          )}
          {user && (
            <form onSubmit={createPost} className="mt-4 space-y-2">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Write a reply..."
                className="w-full rounded-md border border-border bg-background p-2"
                rows={4}
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-4 py-2 text-white"
              >
                Post Reply
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

