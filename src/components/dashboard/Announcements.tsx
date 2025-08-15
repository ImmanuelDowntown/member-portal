import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import type { Announcement } from '../../types/models'

function toMillis(t?: Timestamp | number) {
  if (!t) return undefined
  // @ts-ignore - support both number and Timestamp
  return typeof t.toMillis === 'function' ? t.toMillis() : t
}

export default function Announcements() {
  const [items, setItems] = useState<Announcement[]>([])

  useEffect(() => {
    const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, snap => {
      const a: Announcement[] = snap.docs.map(d => ({
        id: d.id,
        ...(d.data() as any),
        createdAt: toMillis((d.data() as any).createdAt),
      }))
      setItems(a)
    })
    return () => unsub()
  }, [])

  return (
    <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 md:p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Announcements</h2>
      </div>
      <div className="space-y-3">
        {items.length === 0 && (
          <div className="text-sm text-slate-400">No announcements yet.</div>
        )}
        {items.map(a => (
          <div key={a.id} className="rounded-xl border border-slate-800 p-4 bg-slate-900/40">
            <div className="font-medium">{a.title}</div>
            {a.body && <p className="text-sm text-slate-300 mt-1">{a.body}</p>}
            {a.createdAt && (
              <div className="text-xs text-slate-500 mt-2">
                {new Date(a.createdAt).toLocaleString()}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
