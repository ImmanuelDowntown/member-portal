import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query, Timestamp, where } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import type { EventItem } from '../../types/models'

function toMillis(t?: Timestamp | number) {
  if (!t) return undefined
  // @ts-ignore
  return typeof t.toMillis === 'function' ? t.toMillis() : t
}

export default function UpcomingEvents() {
  const [items, setItems] = useState<EventItem[]>([])

  useEffect(() => {
    const now = Date.now()
    const q = query(
      collection(db, 'events'),
      orderBy('startAt', 'asc')
    )
    const unsub = onSnapshot(q, snap => {
      const e: EventItem[] = snap.docs
        .map(d => ({
          id: d.id,
          ...(d.data() as any),
          startAt: toMillis((d.data() as any).startAt),
        }))
        .filter(x => (x.startAt ?? 0) >= now)
        .slice(0, 5)
      setItems(e)
    })
    return () => unsub()
  }, [])

  return (
    <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
      {items.length === 0 && <div className="text-sm text-slate-400">No upcoming events.</div>}
      <ul className="space-y-3">
        {items.map(e => (
          <li key={e.id} className="rounded-xl border border-slate-800 p-4 bg-slate-900/40 flex items-center justify-between">
            <div>
              <div className="font-medium">{e.title}</div>
              <div className="text-xs text-slate-400">
                {e.startAt && new Date(e.startAt).toLocaleString()}
                {e.location ? ` · ${e.location}` : ''}
              </div>
            </div>
            <button className="text-sm px-3 py-1 rounded-lg border border-slate-700 hover:bg-slate-800">Add Reminder</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
