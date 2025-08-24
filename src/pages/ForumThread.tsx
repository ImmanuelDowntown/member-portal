import { Link, useParams } from "react-router-dom";
import { sampleThreads } from "@/data/forum";

export default function ForumThread() {
  const { id } = useParams<{ id: string }>();
  const thread = sampleThreads.find((t) => t.id === id);

  if (!thread) {
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
          <h1 className="mt-4 text-2xl font-semibold text-accent">{thread.title}</h1>
        </section>
        <section className="space-y-4">
          {thread.posts.length === 0 ? (
            <p className="text-text2">No posts yet.</p>
          ) : (
            thread.posts.map((p) => (
              <div key={p.id} className="rounded-lg border border-border bg-muted p-3">
                <p className="font-medium text-accent">{p.author}</p>
                <p className="text-text2 mt-1 whitespace-pre-line">{p.content}</p>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}
