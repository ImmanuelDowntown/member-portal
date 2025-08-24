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

interface ForumPostProps {
  threadId: string;
  post: Post;
  docPath: string;
  depth?: number;
}

const MAX_DEPTH = 5;

export default function ForumPost({
  threadId,
  post,
  docPath,
  depth = 0,
}: ForumPostProps) {
  const { user } = useAuth();
  const [replies, setReplies] = useState<Post[] | null>(null);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, docPath, "replies"),
      orderBy("createdAt", "asc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const list: Post[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setReplies(list);
    });
    return () => unsub();
  }, [docPath]);

  const createReply = async (e: FormEvent) => {
    e.preventDefault();
    const content = newReply.trim();
    if (!content || !user) return;
    await addDoc(collection(db, docPath, "replies"), {
      author: user.displayName || user.email || "Anonymous",
      content,
      createdAt: serverTimestamp(),
    });
    setNewReply("");
    setShowReplyForm(false);
  };

  const containerClass =
    depth === 0
      ? "rounded-lg border border-border bg-muted p-3"
      : "rounded-md border border-border bg-background p-2";

  return (
    <div className={containerClass}>
      <p className={depth === 0 ? "font-medium text-accent" : "text-sm font-medium text-accent"}>
        {post.author}
      </p>
      <p
        className={
          depth === 0
            ? "text-text2 mt-1 whitespace-pre-line"
            : "text-sm text-text2 mt-1 whitespace-pre-line"
        }
      >
        {post.content}
      </p>
      {depth < MAX_DEPTH - 1 && (
        <button
          onClick={() => setShowReplyForm((prev) => !prev)}
          className="mt-2 text-sm text-accent hover:underline"
        >
          Reply
        </button>
      )}
      {replies && replies.length > 0 && (
        <div className="mt-2 space-y-2 pl-4">
          {replies.map((r) => (
            <ForumPost
              key={r.id}
              threadId={threadId}
              post={r}
              docPath={`${docPath}/replies/${r.id}`}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
      {showReplyForm && user && depth < MAX_DEPTH - 1 && (
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
