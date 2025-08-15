import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { addDoc, collection, doc, onSnapshot, serverTimestamp, setDoc } from "firebase/firestore"
import { useAuth } from "@/contexts/AuthContext"
import { db } from "@/lib/firebase"
import HeaderDash from "@/components/HeaderDash"
import defaultGroups, { AppGroup } from "@/data/defaultGroups"

type Membership = { groupId: string, role?: "admin"|"member" }

export default function Groups(){
  return (
    <>
      {/* Hide any app-wide header (e.g., HeaderAuth mounted above routes) */}
      <style>{`header:first-of-type{display:none !important;}`}</style>
      <HeaderDash />
      <GroupsBody />
    </>
  )
}

function GroupsBody(){
  const { user } = useAuth()
  const [myGroupIds, setMyGroupIds] = useState<string[]>([])
  const [requesting, setRequesting] = useState<Record<string, boolean>>({})
  const [requested, setRequested] = useState<Record<string, boolean>>({})

  // Load the user's current memberships
  useEffect(() => {
    if (!user) { setMyGroupIds([]); return }
    const ref = collection(db, "users", user.uid, "memberships")
    const unsub = onSnapshot(ref, (snap) => {
      const ids = snap.docs.map(d => (d.data() as Membership).groupId).filter(Boolean)
      setMyGroupIds(Array.from(new Set(ids)))
    })
    return () => unsub()
  }, [user])

  // Compute parents and children lists
  const parents = useMemo(() => defaultGroups.filter(g => !g.parentId), [])
  const childrenByParent = (id: string) => defaultGroups.filter(g => g.parentId === id)

  // Only show user's groups in this view
  const myGroups = useMemo(() => defaultGroups.filter(g => myGroupIds.includes(g.slug)), [myGroupIds])

  async function requestMembership(g: AppGroup) {
    if (!user) { alert("Please sign in to request membership."); return }
    try {
      setRequesting(prev => ({ ...prev, [g.slug]: true }))

      // 1) Create/merge a membership request under the group
      await setDoc(doc(db, "groups", g.slug, "membershipRequests", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName ?? null,
        createdAt: serverTimestamp(),
        status: "pending",
      }, { merge: true })

      // 2) (Optional) record it under the user
      await setDoc(doc(db, "users", user.uid, "membershipRequests", g.slug), {
        groupId: g.slug,
        createdAt: serverTimestamp(),
        status: "pending",
      }, { merge: true })

      // 3) Notify group admins
      await addDoc(collection(db, "notifications"), {
        groupId: g.slug,
        groupName: g.name,
        type: "membership_request",
        title: "Membership request",
        body: `${user.displayName || user.email} requested to join ${g.name}`,
        createdAt: serverTimestamp(),
      })

      setRequested(prev => ({ ...prev, [g.slug]: true }))
    } catch (e) {
      console.error(e)
      alert("Could not send request. Please try again.")
    } finally {
      setRequesting(prev => ({ ...prev, [g.slug]: false }))
    }
  }

  function Section({ title, children }:{ title: string; children: React.ReactNode }){
    return (
      <section className="border border-border p-5 rounded-xl">
        <h2 className="text-xl font-semibold text-accent">{title}</h2>
        <div className="mt-3">{children}</div>
      </section>
    )
  }

  function GroupCard({ g }:{ g: AppGroup }){
    const kids = childrenByParent(g.slug)
    const isParent = kids.length > 0
    const mine = myGroupIds.includes(g.slug)
    return (
      <div className="rounded-xl border border-border p-4">
        <h3 className="text-lg font-medium">{g.name}</h3>
        {g.description && <p className="text-sm text-text2 mt-1">{g.description}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {/* If parent, show children */}
          {isParent && kids.map(c => (
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
        {/* If this group itself is joinable (no parent) */}
        {!isParent && (
          <div className="mt-3">
            {mine ? (
              <Link to={`/groups/${g.slug}`} className="btn btn-outline btn-sm">Open</Link>
            ) : (
              <button
                className="btn btn-outline btn-sm"
                disabled={!!requesting[g.slug] || !!requested[g.slug]}
                onClick={() => requestMembership(g)}
              >
                {requested[g.slug] ? "Requested" : "Request to Join"}
              </button>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-10">
      {/* Your groups only */}
      <div className="mt-0">
        <Section title="Your Groups">
          {myGroups.length === 0 ? (
            <p className="text-sm text-text2">You haven&apos;t joined any groups yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {parents.map(p => (
                (myGroupIds.includes(p.slug) || childrenByParent(p.slug).some(c => myGroupIds.includes(c.slug))) && (
                  <div key={p.slug}>
                    <GroupCard g={p} />
                  </div>
                )
              ))}
              {/* Include top-level groups with no children that the user is in */}
              {defaultGroups
                .filter(g => !g.parentId && childrenByParent(g.slug).length === 0 && myGroupIds.includes(g.slug))
                .map(g => (
                  <div key={g.slug}>
                    <GroupCard g={g} />
                  </div>
                ))}
            </div>
          )}
          <div className="mt-4">
            <Link to="/groups/explore" className="btn btn-outline">View More Groups</Link>
          </div>
        </Section>
      </div>
    </div>
  )
}
