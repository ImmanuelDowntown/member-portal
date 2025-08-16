import React, { useEffect, useMemo, useState } from "react";
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";
import { app } from "@/lib/firebase";

type Row = { id: string; displayName?: string; email?: string };

export default function AdminUsersIndex() {
  const db = useMemo(() => getFirestore(app), []);
  const [rows, setRows] = useState<Row[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function load() {
      const snap = await getDocs(query(collection(db, "users"), orderBy("displayName")));
      setRows(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
    }
    load();
  }, [db]);

  const filtered = rows.filter(r => {
    const t = (r.displayName || "") + " " + (r.email || "") + " " + r.id;
    return t.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-accent">Users</h1>
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search users…"
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
          />
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">UID</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t border-border/70">
                  <td className="px-4 py-2">{r.displayName || "—"}</td>
                  <td className="px-4 py-2">{r.email || "—"}</td>
                  <td className="px-4 py-2 font-mono text-xs">{r.id}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td className="px-4 py-4 text-text2" colSpan={3}>
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
