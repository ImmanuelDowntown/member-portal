import { FormEvent, useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

export type Post = {
  id: string;
  author: string;
  content: string;
};

interface Reply {
  id: string;
  author: string;
  content: string;
}

interface ForumPostProps {
  threadId: string;
  post: Post;
}

export default function ForumPost({ threadId, post }: ForumPostProps) {
  const { user } = useAuth();
  const [replies, setReplies] = useState<Reply[] | null>(null);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "forumThreads", threadId, "posts", post.id, "replies"),
      orderBy("createdAt", "asc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const list: Reply[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setReplies(list);
    });
    return () => unsub();
  }, [threadId, post.id]);

  const createReply = async (e: FormEvent) => {
    e.preventDefault();
    const content = newReply.trim();
    if (!content || !user) return;
    await addDoc(
      collection(db, "forumThreads", threadId, "posts", post.id, "replies"),
      {
        author: user.displayName || user.email || "Anonymous",
        content,
        createdAt: serverTimestamp(),
      }
    );
    setNewReply("");
    setShowReplyForm(false);
  };

  return (
    <div className="rounded-lg border border-border bg-muted p-3">
      <p className="font-medium text-accent">{post.author}</p>
      <p className="text-text2 mt-1 whitespace-pre-line">{post.content}</p>
      <button
        onClick={() => setShowReplyForm((prev) => !prev)}
        className="mt-2 text-sm text-accent hover:underline"
      >
        Reply
      </button>
      {replies && replies.length > 0 && (
        <div className="mt-2 space-y-2 pl-4">
          {replies.map((r) => (
            <div
              key={r.id}
              className="rounded-md border border-border bg-background p-2"
            >
              <p className="text-sm font-medium text-accent">{r.author}</p>
              <p className="text-sm text-text2 mt-1 whitespace-pre-line">
                {r.content}
              </p>
            </div>
          ))}
        </div>
      )}
      {showReplyForm && user && (
        <form onSubmit={createReply} className="mt-2 space-y-2 pl-4">
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
    </div>
  );
}
