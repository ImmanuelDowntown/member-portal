import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
import { useAuth } from "@/contexts/AuthContext";

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
  const db = useMemo(() => getFirestore(app), []);
  const { user, loading } = useAuth();
  const uid = user?.uid ?? null;

  const [rows, setRows] = useState<NotificationDoc[] | null>(null);

  useEffect(() => {
    if (!uid) {
      setRows([]); // show empty state if not signed in yet
      return;
    }
    const q = query(
      collection(db, `users/${uid}/notifications`),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(
      q,
      (snap) => {
        const list: NotificationDoc[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
        }));
        // Only show UNREAD notifications in the panel
        setRows(list.filter((n) => !n.read));
      },
      (err) => {
        console.error("Notifications listener error:", err?.message || err);
        setRows([]);
      }
    );
    return () => unsub();
  }, [db, uid]);

  if (rows === null || loading) {
    return (
      <div className="p-1">
        <h2 className="text-xl font-semibold text-accent">Notifications</h2>
        <div className="mt-2">
          <Loader label="Loading notifications…" />
        </div>
      </div>
    );
  }

  async function markRead(id: string) {
    if (!uid) return;
    try {
      await updateDoc(doc(db, `users/${uid}/notifications/${id}`), {
        read: true,
        readAt: serverTimestamp(),
      });
    } catch {
      // best-effort
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
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                  new
                </span>
              </div>
            );

            return (
              <li
                key={n.id}
                className="rounded-lg border border-border bg-card px-3 py-2 ring-1 ring-emerald-300/40"
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
