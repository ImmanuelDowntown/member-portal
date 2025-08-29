import { useEffect, useState } from "react";
import {
  collectionGroup,
  deleteDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { auth, db } from "@/lib/firebase";

type Activity = {
  id: string;
  type: string;
  resourcePath?: string;
  title?: string | null;
  createdAt?: any;
};

export default function AdminActivity() {
  const user = auth.currentUser;
  const [items, setItems] = useState<Activity[]>([]);

  useEffect(() => {
    if (!user) return;
    const qy = query(
      collectionGroup(db, "activity"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(qy, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })));
    });
    return unsub;
  }, [user]);

  async function handleMarkReviewed() {
    if (!user) return;
    try {
      const snap = await getDocs(collectionGroup(db, "activity"));
      await Promise.all(snap.docs.map((d) => deleteDoc(d.ref)));
    } catch {
      alert("Failed to mark activity as reviewed.");
    }
  }

  if (!user) {
    return (
      <div className="container py-10">
        <p className="text-text2">You must be signed in to view activity.</p>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-accent">Activity Log</h1>
        <Link to="/admin" className="text-sm text-slate-700 underline">
          Back to Admin Console
        </Link>
      </div>
      {items.length > 0 && (
        <button
          onClick={handleMarkReviewed}
          className="mb-4 rounded bg-slate-900 px-3 py-1 text-sm font-medium text-white"
        >
          Activity Log Reviewed
        </button>
      )}
      <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/70">
        {items.map((a) => (
          <li key={a.id} className="p-4 text-sm">
            {a.type === "resource_access" ? (
              <span>
                Opened resource {a.title ? <strong>{a.title}</strong> : <code>{a.resourcePath}</code>}
              </span>
            ) : (
              <span>{a.type}</span>
            )}
            {a.createdAt?.toDate && (
              <span className="block text-xs text-slate-500 mt-1">
                {a.createdAt.toDate().toLocaleString()}
              </span>
            )}
          </li>
        ))}
        {items.length === 0 && (
          <li className="p-4 text-sm text-slate-600">No activity logged.</li>
        )}
      </ul>
    </div>
  );
}
