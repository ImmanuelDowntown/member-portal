import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, onSnapshot, addDoc, updateDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";
import type { Poll } from "@/types/models";

export default function GroupPolls() {
  const { slug = "" } = useParams();
  const db = useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);
  const uid = auth.currentUser?.uid || "";

  const [polls, setPolls] = useState<Poll[]>([]);
  const [question, setQuestion] = useState("");
  const [optionsText, setOptionsText] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const unsub = onSnapshot(collection(db, `groups/${slug}/polls`), (snap) => {
      const items = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as Poll[];
      setPolls(items);
    });
    return () => unsub();
  }, [db, slug]);

  useEffect(() => {
    let ignore = false;
    async function checkAdmin() {
      if (!slug || !uid) return;
      try {
        const [superSnap, groupSnap] = await Promise.all([
          getDoc(doc(db, "admins", uid)),
          getDoc(doc(db, `groups/${slug}/groupAdmins/${uid}`)),
        ]);
        if (!ignore) setIsAdmin(superSnap.exists() || groupSnap.exists());
      } catch {
        if (!ignore) setIsAdmin(false);
      }
    }
    void checkAdmin();
    return () => {
      ignore = true;
    };
  }, [db, slug, uid]);

  async function createPoll() {
    if (!isAdmin || !question.trim()) return;
    const opts = optionsText
      .split("\n")
      .map((t) => t.trim())
      .filter(Boolean)
      .map((t) => ({ id: crypto.randomUUID(), label: t, voters: [] as string[] }));
    await addDoc(collection(db, `groups/${slug}/polls`), {
      question: question.trim(),
      options: opts,
      createdBy: uid,
    });
    setQuestion("");
    setOptionsText("");
  }

  async function toggleVote(pollId: string, optionId: string) {
    const poll = polls.find((p) => p.id === pollId);
    if (!poll || !uid) return;
    const options = poll.options.map((o) => {
      let voters = o.voters || [];
      if (o.id === optionId) {
        voters = voters.includes(uid) ? voters.filter((v) => v !== uid) : [...voters, uid];
      }
      return { ...o, voters };
    });
    await updateDoc(doc(db, `groups/${slug}/polls/${pollId}`), { options });
  }

  async function deletePoll(pollId: string) {
    if (!isAdmin) return;
    // eslint-disable-next-line no-alert
    if (!window.confirm("Delete this poll?")) return;
    await deleteDoc(doc(db, `groups/${slug}/polls/${pollId}`));
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-accent">Polls</h1>
          <Link to={`/groups/${slug}`} className="text-sm text-accent underline underline-offset-2">
            Back to group
          </Link>
        </div>

        {isAdmin && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void createPoll();
            }}
            className="mt-6 grid gap-2 sm:grid-cols-6"
          >
            <input
              className="sm:col-span-6 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
              placeholder="Poll question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <textarea
              className="sm:col-span-6 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
              placeholder="Options, one per line"
              value={optionsText}
              onChange={(e) => setOptionsText(e.target.value)}
            />
            <div className="sm:col-span-6">
              <button className="rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm">
                Create poll
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 space-y-6">
          {polls.map((p) => (
            <div key={p.id} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start justify-between">
                <h2 className="font-medium text-accent">{p.question}</h2>
                {isAdmin && (
                  <button
                    onClick={() => void deletePoll(p.id)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                )}
              </div>
              <ul className="mt-3 space-y-2">
                {p.options.map((o) => (
                  <li key={o.id}>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={o.voters?.includes(uid)}
                        onChange={() => void toggleVote(p.id, o.id)}
                      />
                      <span>{o.label}</span>
                      <span className="text-xs text-text2">({o.voters?.length || 0})</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {polls.length === 0 && <p className="text-sm text-text2">No polls yet.</p>}
        </div>
      </div>
    </div>
  );
}
