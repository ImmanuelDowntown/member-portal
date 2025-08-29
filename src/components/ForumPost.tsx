import { FormEvent, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

export type Post = {
  id: string;
  author: string;
  content: string;
  quote?: string;
  uid?: string;
};

type Reply = {
  id: string;
  author: string;
  content: string;
  uid?: string;
};

interface ForumPostProps {
  threadId: string;
  post: Post;
}

export default function ForumPost({ threadId, post }: ForumPostProps) {
  const { user } = useAuth();
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [isSuper, setIsSuper] = useState(false);
  const [replies, setReplies] = useState<Reply[]>([]);

  useEffect(() => {
    if (!user?.uid) {
      setIsSuper(false);
      return;
    }
    const d = doc(db, "users", user.uid);
    const unsub = onSnapshot(d, (snap) => setIsSuper((snap.data() as any)?.isSuperAdmin === true));
    return () => unsub();
  }, [user?.uid]);

  useEffect(() => {
    const q = query(
      collection(db, "forumThreads", threadId, "posts", post.id, "replies"),
      orderBy("createdAt", "asc"),
    );
    const unsub = onSnapshot(q, (snap) => {
      setReplies(snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })));
    });
    return () => unsub();
  }, [threadId, post.id]);

  const createReply = async (e: FormEvent) => {
    e.preventDefault();
    const content = newReply.trim();
    if (!content || !user) return;
    await addDoc(collection(db, "forumThreads", threadId, "posts", post.id, "replies"), {
      author: user.displayName || user.email || "Anonymous",
      content,
      uid: user.uid,
      createdAt: serverTimestamp(),
    });
    setNewReply("");
    setShowReplyForm(false);
  };

  const removePost = async () => {
    if (!user) return;
    await deleteDoc(doc(db, "forumThreads", threadId, "posts", post.id));
  };

  const removeReply = async (rid: string, ruid?: string) => {
    if (!user) return;
    if (!(isSuper || user.uid === ruid)) return;
    await deleteDoc(doc(db, "forumThreads", threadId, "posts", post.id, "replies", rid));
  };

  return (
    <div className="rounded-lg border border-border bg-muted p-3">
      <p className="font-medium text-accent">{post.author}</p>
      {post.quote && (
        <blockquote className="mt-1 border-l-2 border-border pl-2 text-sm text-text2 whitespace-pre-line">
          {post.quote}
        </blockquote>
      )}
      <p className="text-text2 mt-1 whitespace-pre-line">{post.content}</p>
      {user && (
        <>
          <div className="mt-2 flex items-center gap-4 text-sm">
            <button
              onClick={() => setShowReplyForm((prev) => !prev)}
              className="text-accent hover:underline"
            >
              Reply
            </button>
            {(isSuper || user.uid === post.uid) && (
              <button
                onClick={removePost}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            )}
          </div>
          {showReplyForm && (
            <form onSubmit={createReply} className="mt-2 space-y-2">
              <textarea
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Write a reply..."
                className="w-full rounded-md border border-border bg-background p-2 text-sm"
                rows={3}
              />
              <button
                type="submit"
                className="rounded-md bg-accent px-3 py-1 text-sm text-bg"
              >
                Post Reply
              </button>
            </form>
          )}
        </>
      )}
      {replies.length > 0 && (
        <div className="mt-4 space-y-2 border-l border-border pl-4">
          {replies.map((r) => (
            <div key={r.id} className="relative">
              <p className="text-sm">
                <span className="font-medium text-accent">{r.author}</span>
              </p>
              <p className="whitespace-pre-line text-sm text-text2">{r.content}</p>
              {(user && (isSuper || user.uid === r.uid)) && (
                <button
                  type="button"
                  onClick={() => void removeReply(r.id, r.uid)}
                  className="absolute top-0 right-0 text-xs text-red-500 hover:underline"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

