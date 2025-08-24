import { FormEvent, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  onSnapshot,
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

interface ForumPostProps {
  threadId: string;
  post: Post;
}

export default function ForumPost({ threadId, post }: ForumPostProps) {
  const { user } = useAuth();
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [newReply, setNewReply] = useState("");
  const [isSuper, setIsSuper] = useState(false);

  useEffect(() => {
    if (!user?.uid) {
      setIsSuper(false);
      return;
    }
    const d = doc(db, "admins", user.uid);
    const unsub = onSnapshot(d, (snap) => setIsSuper(snap.exists()));
    return () => unsub();
  }, [user?.uid]);

  const createReply = async (e: FormEvent) => {
    e.preventDefault();
    const content = newReply.trim();
    if (!content || !user) return;
    const quote = post.content.split(/\r?\n/).slice(0, 3).join("\n");
    await addDoc(collection(db, "forumThreads", threadId, "posts"), {
      author: user.displayName || user.email || "Anonymous",
      content,
      quote,
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
                className="rounded-md bg-accent px-3 py-1 text-sm text-white"
              >
                Post Reply
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

