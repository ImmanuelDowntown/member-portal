import { useEffect, useMemo, useRef, useState } from 'react'
import { collection, onSnapshot, query, where, DocumentData, Timestamp } from 'firebase/firestore'
import { useAuth } from '@/contexts/AuthContext'
import { db } from '@/lib/firebase'

type Membership = { groupId: string }
export type NotificationItem = {
  id: string
  groupId: string
  title: string
  body?: string
  createdAt?: number // millis
  groupName?: string
}

function toMillis(t?: Timestamp | number) {
  if (!t) return undefined
  // @ts-ignore
  return typeof t.toMillis === 'function' ? t.toMillis() : t
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

/**
 * Live Notifications sourced from any group the user is a member of.
 * Expected Firestore shape:
 *   users/{uid}/memberships/{groupId} -> { groupId }
 *   notifications/{id} -> { groupId, title, body?, createdAt: Timestamp, groupName? }
 *
 * The component will listen for membership changes and then subscribe to notifications
 * using batched `where('groupId','in',chunkOfUpTo10)` queries. Results are merged,
 * sorted by createdAt desc, and trimmed to the provided limit.
 */
export default function Notifications({ limit = 20 }: { limit?: number }) {
  const { user } = useAuth()
  const [groupIds, setGroupIds] = useState<string[]>([])
  const [items, setItems] = useState<NotificationItem[]>([])
  const [loading, setLoading] = useState(true)

  // 1) Listen to the user's memberships to get groupIds
  useEffect(() => {
    if (!user) { setGroupIds([]); setItems([]); setLoading(false); return }
    const membershipsRef = collection(db, 'users', user.uid, 'memberships')
    const unsub = onSnapshot(membershipsRef, snap => {
      const ids = snap.docs.map(d => (d.data() as Membership).groupId).filter(Boolean)
      setGroupIds(Array.from(new Set(ids)))
    })
    return () => unsub()
  }, [user])

  // 2) Subscribe to notifications for those groups (handle chunks of 10 for 'in' query)
  useEffect(() => {
    const unsubs: Array<() => void> = []
    const acc: Record<string, NotificationItem> = {}
    setLoading(true)
    setItems([])

    if (groupIds.length === 0) { setLoading(false); return }

    for (const ids of chunk(groupIds, 10)) {
      const q = query(collection(db, 'notifications'), where('groupId', 'in', ids))
      const unsub = onSnapshot(q, (snap) => {
        snap.docChanges().forEach((chg) => {
          const d = chg.doc.data() as DocumentData
          const n: NotificationItem = {
            id: chg.doc.id,
            groupId: d.groupId,
            title: d.title ?? '(untitled)',
            body: d.body,
            createdAt: toMillis(d.createdAt),
            groupName: d.groupName,
          }
          if (chg.type === 'removed') {
            delete acc[n.id]
          } else {
            acc[n.id] = n
          }
        })
        const sorted = Object.values(acc).sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0))
        setItems(sorted.slice(0, limit))
        setLoading(false)
      })
      unsubs.push(unsub)
    }

    return () => { unsubs.forEach(u => u()) }
  }, [groupIds, limit])

  if (!user) {
    return <div className="text-sm text-text2">Sign in to see your notifications.</div>
  }

  if (loading) {
    return <div className="text-sm text-text2">Loading notifications…</div>
  }

  if (items.length === 0) {
    return <div className="text-sm text-text2">No new notifications.</div>
  }

  return (
    <ul className="mt-3 space-y-2 text-text">
      {items.map(n => (
        <li key={n.id} className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="font-medium">
              {n.title}
              {n.groupName && <span className="ml-2 text-xs text-text2">· {n.groupName}</span>}
            </div>
            {n.createdAt && (
              <div className="text-xs text-text2">{new Date(n.createdAt).toLocaleString()}</div>
            )}
          </div>
          {n.body && <p className="text-sm text-slate-300 mt-1">{n.body}</p>}
        </li>
      ))}
    </ul>
  )
}
