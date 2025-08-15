import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { addDoc, collection, doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore"
import { useAuth } from "@/contexts/AuthContext"
import { db } from "@/lib/firebase"
import defaultGroups, { AppGroup } from "@/data/defaultGroups"

type Membership = { groupId: string, role?: "admin"|"member" }

export default function GroupsExplore(){
  const { user } = useAuth()
  const [myGroupIds, setMyGroupIds] = useState<string[]>([])
  const [requesting, setRequesting] = useState<Record<string, boolean>>({})
  const [requested, setRequested] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (!user) { setMyGroupIds([]); return }
    const ref = collection(db, "users", user.uid, "memberships")
    const unsub = onSnapshot(ref, (snap) => {
      const ids = snap.docs.map(d => (d.data() as Membership).groupId).filter(Boolean)
      setMyGroupIds(Array.from(new Set(ids)))
    })
    return () => unsub()
  }, [user])

  const parents = useMemo(() => defaultGroups.filter(g => !g.parentId), [])
  const childrenByParent = (id: string) => defaultGroups.filter(g => g.parentId === id)

  async function requestMembership(g: AppGroup) {
    if (!user) { alert("Please sign in to request membership."); return }
    try {
      setRequesting(prev => ({ ...prev, [g.slug]: true }))
      await setDoc(doc(db, "groups", g.slug, "membershipRequests", user.uid), {
        uid: user.uid, email: user.email, displayName: user.displayName ?? null,
        createdAt: serverTimestamp(), status: "pending",
      }, { merge: true })
      await setDoc(doc(db, "users", user.uid, "membershipRequests", g.slug), {
        groupId: g.slug, createdAt: serverTimestamp(), status: "pending",
      }, { merge: true })
      await addDoc(collection(db, "notifications"), {
        groupId: g.slug, groupName: g.name, type: "membership_request",
        title: "Membership request",
        body: `${user.displayName || user.email} requested to join ${g.name}`,
        createdAt: serverTimestamp(),
      })
      setRequested(prev => ({ ...prev, [g.slug]: true }))
    } catch (e) {
      console.error(e); alert("Could not send request. Please try again.")
    } finally {
      setRequesting(prev => ({ ...prev, [g.slug]: false }))
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold text-accent">Explore Groups</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {parents.map(p => {
          const kids = childrenByParent(p.slug)
          const showParent = !myGroupIds.includes(p.slug) || kids.some(c => !myGroupIds.includes(c.slug))
          if (!showParent) return null
          return (
            <div key={p.slug} className="rounded-xl border border-border p-4">
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="text-sm text-text2 mt-1">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {kids.map(c => (
                  myGroupIds.includes(c.slug) ? (
                    <Link key={c.slug} to={`/groups/${c.slug}`} className="btn btn-outline btn-sm">Open {c.name}</Link>
                  ) : (
                    <button
                      key={c.slug}
                      className="btn btn-outline btn-sm"
                      disabled={!!requesting[c.slug] || !!requested[c.slug]}
                      onClick={() => requestMembership(c)}
                    >
                      {requested[c.slug] ? "Requested" : "Request " + c.name}
                    </button>
                  )
                ))}
              </div>
            </div>
          )
        })}
        {defaultGroups
          .filter(g => !g.parentId && defaultGroups.filter(x => x.parentId === g.slug).length === 0 && !myGroupIds.includes(g.slug))
          .map(g => (
            <div key={g.slug} className="rounded-xl border border-border p-4">
              <h3 className="text-lg font-medium">{g.name}</h3>
              {g.description && <p className="text-sm text-text2 mt-1">{g.description}</p>}
              <div className="mt-3">
                <button
                  className="btn btn-outline btn-sm"
                  disabled={!!requesting[g.slug] || !!requested[g.slug]}
                  onClick={() => requestMembership(g)}
                >
                  {requested[g.slug] ? "Requested" : "Request to Join"}
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-6">
        <Link to="/groups" className="btn btn-outline">Back to Your Groups</Link>
      </div>
    </div>
  )
}
