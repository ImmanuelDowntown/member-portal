import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, where, type DocumentData } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

type Question = {
  id: string;
  text: string;
  from: string;
  displayName?: string;
  createdAt?: unknown;
};

const pastorUid = import.meta.env.VITE_PASTOR_UID as string | undefined;

export default function PastorQuestions() {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    if (!user || user.uid !== pastorUid) return;
    const q = query(
      collection(db, "pastorQuestions"),
      where("to", "==", user.uid),
      orderBy("createdAt", "desc"),
    );
    const unsub = onSnapshot(q, (snap) => {
      const list: Question[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as DocumentData) })) as Question[];
      setQuestions(list);
    });
    return () => unsub();
  }, [user]);

  if (!user || user.uid !== pastorUid) {
    return (
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <p>You are not authorized to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-4 text-2xl font-semibold">Questions</h1>
        {questions === null ? (
          <p>Loading…</p>
        ) : questions.length === 0 ? (
          <p>No questions yet.</p>
        ) : (
          <ul className="space-y-4">
            {questions.map((q) => (
              <li key={q.id} className="rounded-md border border-border bg-muted p-4">
                <p className="font-medium">{q.displayName || "Anonymous"}</p>
                <p className="mt-1 whitespace-pre-wrap">{q.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
