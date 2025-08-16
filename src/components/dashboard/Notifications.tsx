import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";

type NotificationDoc = {
  id: string;
  type: string;
  text: string;
  href?: string;
  groupId?: string;
  groupName?: string;
  messageId?: string;
  read?: boolean;
  createdAt?: any;
};

export default function Notifications() {
  const auth = getAuth(app);
  const db = useMemo(() => getFirestore(app), []);
  const [rows, setRows] = useState<NotificationDoc[] | null>(null);

  useEffect(() => {
    if (!auth.currentUser) return;
    const uid = auth.currentUser.uid;
    const q = query(
      collection(db, `users/${uid}/notifications`),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const list: NotificationDoc[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as any),
      }));
      setRows(list);
    });
    return () => unsub();
  }, [db, auth.currentUser]);

  if (rows === null) {
    return (
      <div className="p-6">
        <Loader label="Loading notifications…" />
      </div>
    );
  }

  async function markRead(id: string) {
    if (!auth.currentUser) return;
    try {
      await updateDoc(doc(db, `users/${auth.currentUser.uid}/notifications/${id}`), {
        read: true,
        readAt: serverTimestamp(),
      });
    } catch {
      // ignore — best effort
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent">Notifications</h2>
      {rows.length === 0 ? (
        <p className="text-text2 mt-2">You have no new notifications.</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {rows.map((n) => {
            const content = (
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm">{n.text}</p>
                  {n.groupName && (
                    <p className="text-xs text-text2">Group: {n.groupName}</p>
                  )}
                </div>
                {!n.read && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                    new
                  </span>
                )}
              </div>
            );

            return (
              <li
                key={n.id}
                className={
                  "rounded-lg border border-border bg-card px-3 py-2 " +
                  (!n.read ? "ring-1 ring-emerald-300/40" : "")
                }
              >
                {n.href ? (
                  <Link
                    to={n.href}
                    onClick={() => markRead(n.id)}
                    className="block hover:opacity-90"
                  >
                    {content}
                  </Link>
                ) : (
                  <button
                    onClick={() => markRead(n.id)}
                    className="block w-full text-left hover:opacity-90"
                  >
                    {content}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
