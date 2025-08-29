import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type Activity = {
  id: string;
  type: string;
  resourcePath?: string;
  title?: string | null;
  createdAt?: any;
};

export default function UserActivity() {
  const uid = auth.currentUser?.uid;
  const [items, setItems] = useState<Activity[]>([]);

  useEffect(() => {
    if (!uid) return;
    const qy = query(
      collection(db, `users/${uid}/activity`),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(qy, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })));
    });
    return unsub;
  }, [uid]);

  if (!uid) {
    return (
      <div className="container py-10">
        <p className="text-text2">You must be signed in to view activity.</p>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold text-accent">Your Activity</h1>
      <ul className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/70">
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
