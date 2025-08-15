import { useEffect, useMemo, useState } from 'react'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../../lib/firebase'
import type { Group, Membership } from '../../types/models'

export default function MyGroups() {
  const uid = getAuth().currentUser?.uid
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    if (!uid) return
    const colRef = collection(db, 'users', uid, 'memberships')
    const unsub = onSnapshot(colRef, async (snap) => {
      const groupIds = snap.docs.map(d => (d.data() as Membership).groupId)
      // fetch each group doc in parallel
      const docs = await Promise.all(
        groupIds.map(async (gid) => {
          const gref = doc(db, 'groups', gid)
          const g = await getDoc(gref)
          return g.exists() ? ({ id: g.id, ...(g.data() as any) } as Group) : null
        })
      )
      setGroups(docs.filter(Boolean) as Group[])
    })
    return () => unsub()
  }, [uid])

  return (
    <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 md:p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">My Groups</h2>
        <a href="/groups" className="text-sm underline">View all</a>
      </div>
      {(!uid) && <div className="text-sm text-slate-400">Sign in to see your groups.</div>}
      {uid && groups.length === 0 && (
        <div className="text-sm text-slate-400">You aren’t in any groups yet.</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map(g => (
          <a key={g.id} href={'/groups/'+g.id} className="block rounded-xl border border-slate-800 bg-slate-900/40 p-4 hover:bg-slate-900/60 transition">
            <div className="font-medium">{g.name}</div>
            {g.unread != null && <div className="text-xs text-slate-400">{g.unread} unread</div>}
          </a>
        ))}
      </div>
    </section>
  )
}
