import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { app } from "@/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";

type EventItem = {
  id: string;
  type: string;
  uid?: string;
  at?: Timestamp;
  payload?: any;
  [k: string]: any;
};

export default function AdminGroupEvents() {
  const { slug } = useParams();
  const db = getFirestore(app);
  const groupId = slug as string;
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function load() {
      if (!groupId) return;
      setLoading(true);
      try {
        const col = collection(db, `groups/${groupId}/groupEvents`);
        const q = query(col, orderBy("at", "desc"));
        const snap = await getDocs(q);
        if (!active) return;
        const list: EventItem[] = [];
        snap.forEach((d) => list.push({ id: d.id, ...(d.data() as any) }));
        setEvents(list);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [db, groupId]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Audit Log</h1>
          <p className="text-slate-600">Recent events for this group.</p>
        </div>
        <Link to={`/admin/groups`} className="text-sm text-slate-700 underline">Back to groups</Link>
      </div>

      {loading ? (
        <p className="text-slate-600">Loading…</p>
      ) : events.length === 0 ? (
        <p className="text-slate-600">No events yet.</p>
      ) : (
        <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70">
          {events.map((e) => (
            <li key={e.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium text-slate-900">
                  {e.type.replace(/_/g, " ")}
                </div>
                <div className="text-xs text-slate-500">
                  {e.at?.toDate ? e.at.toDate().toLocaleString() : "—"}
                </div>
              </div>
              <div className="text-xs text-slate-600 mt-1">
                {e.uid && <>User: <code>{e.uid}</code></>}
              </div>
              {e.payload && (
                <pre className="mt-2 text-xs bg-slate-50 rounded-lg p-2 overflow-auto">
                  {JSON.stringify(e.payload, null, 2)}
                </pre>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
