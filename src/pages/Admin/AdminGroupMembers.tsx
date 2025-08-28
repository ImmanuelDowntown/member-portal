import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { app } from "@/lib/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  serverTimestamp,
  writeBatch,
  type DocumentData,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

type Member = { uid: string; displayName?: string; joinedAt?: unknown; email?: string; role?: string };
type UserLite = { uid: string; displayName?: string; email?: string };

export default function AdminGroupMembers() {
  const { slug } = useParams();
  const db = useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);
  const [groupName, setGroupName] = useState<string>("");
  const [members, setMembers] = useState<Member[]>([]);
  const [admins, setAdmins] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Admin gate
  const [canEdit, setCanEdit] = useState<boolean>(false);

  // Existing: add by UID
  const [newUid, setNewUid] = useState("");

  // NEW: directory for add-by-name
  const [allUsers, setAllUsers] = useState<UserLite[]>([]);
  const [userFilter, setUserFilter] = useState("");
  const [selectedUid, setSelectedUid] = useState("");

  const groupId = (slug || "").trim();

  useEffect(() => {
    let active = true;
    async function load() {
      if (!groupId) return;
      setLoading(true);
      setErrorMsg("");
      try {
        const gref = doc(db, "groups", groupId);
        const gsnap = await getDoc(gref);
        setGroupName((gsnap.exists() && ((gsnap.data() as DocumentData).name as string)) || humanizeSlug(groupId));

        // Admin permission check (super admin or group admin)
        const u = auth.currentUser;
        if (u) {
          const uid = u.uid;
          const superSnap = await getDoc(doc(db, "users", uid));
          if ((superSnap.data() as any)?.isSuperAdmin === true) {
            setCanEdit(true);
          } else {
            const gaSnap = await getDoc(doc(db, `groups/${groupId}/groupAdmins/${uid}`));
            setCanEdit(gaSnap.exists());
          }
        } else {
          setCanEdit(false);
        }

        const snap = await getDocs(collection(db, `groups/${groupId}/members`));
        if (!active) return;
        const list: Member[] = [];

        // Load groupAdmins set for promote/demote buttons
        const adminsSnap = await getDocs(collection(db, `groups/${groupId}/groupAdmins`));
        const adminSet: Record<string, boolean> = {};
        adminsSnap.forEach((d) => {
          adminSet[d.id] = true;
        });
        setAdmins(adminSet);

        snap.forEach((d) => list.push({ uid: d.id, ...(d.data() as DocumentData) } as Member));
        // sort by displayName/uid
        list.sort((a, b) => (a.displayName || a.uid).localeCompare(b.displayName || b.uid));
        setMembers(list);
      } catch (err: any) {
        setErrorMsg(err?.message || "Failed to load members.");
      } finally {
        setLoading(false);
      }
    }
    load();

    // NEW: load user directory for dropdown
    async function loadUsers() {
      try {
        const us = await getDocs(collection(db, "users"));
        const rows: UserLite[] = us.docs.map((d) => {
          const data = d.data() as DocumentData;
          return {
            uid: d.id,
            displayName: (data?.displayName as string) || (data?.name as string) || "",
            email: (data?.email as string) || "",
          };
        });
        rows.sort((a, b) => (a.displayName || a.email || a.uid).localeCompare(b.displayName || b.email || b.uid));
        setAllUsers(rows);
      } catch (err: any) {
        // if rules block this, the dropdown will simply be empty
        setAllUsers([]);
      }
    }
    loadUsers();

    return () => {
      active = false;
    };
  }, [db, groupId]);

  // Reusable write for both add flows
  async function addMemberByUid(uid: string, displayNameHint?: string, emailHint?: string) {
    const cleanUid = uid.trim();
    if (!cleanUid) return;
    setErrorMsg("");
    setBusy("add");
    try {
      const batch = writeBatch(db);

      const memberRef = doc(db, `groups/${groupId}/members/${cleanUid}`);
      {
      const memberPayload: Record<string, unknown> = {
        uid: cleanUid,
        displayName: displayNameHint || cleanUid,
        role: "member",
        joinedAt: serverTimestamp(),
        addedBy: auth.currentUser?.uid || "unknown",
      };
      if (emailHint) memberPayload.email = emailHint;
      batch.set(memberRef, memberPayload, { merge: true });
    }

      const membershipRef = doc(db, `users/${cleanUid}/memberships/${groupId}`);
      batch.set(
        membershipRef,
        {
          groupId,
          approvedAt: serverTimestamp(),
          approvedBy: auth.currentUser?.uid || "admin",
        },
        { merge: true },
      );

      await batch.commit();

      // optimistic refresh
      setMembers((prev) => {
        const next = [...prev.filter((m) => m.uid !== cleanUid), { uid: cleanUid, displayName: displayNameHint || cleanUid, email: emailHint }];
        next.sort((a, b) => (a.displayName || a.uid).localeCompare(b.displayName || b.uid));
        return next;
      });
      setNewUid("");
      setSelectedUid("");
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to add member. Check Firestore rules.");
    } finally {
      setBusy("");
    }
  }

  async function addMember() {
    await addMemberByUid(newUid);
  }

  async function addSelectedUser(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedUid) return;
    const u = allUsers.find((r) => r.uid === selectedUid);
    await addMemberByUid(selectedUid, u?.displayName, u?.email);
  }

  async function makeAdmin(uid: string) {
    setBusy(`admin:${uid}`);
    setErrorMsg("");
    try {
      await setDoc(
        doc(db, `groups/${groupId}/groupAdmins/${uid}`),
        {
          uid,
          grantedBy: auth.currentUser?.uid || "unknown",
          createdAt: serverTimestamp(),
        },
        { merge: true },
      );
      setAdmins((prev) => ({ ...prev, [uid]: true }));
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to grant admin.");
    } finally {
      setBusy("");
    }
  }

  async function removeAdmin(uid: string) {
    setBusy(`admin:${uid}`);
    setErrorMsg("");
    try {
      await deleteDoc(doc(db, `groups/${groupId}/groupAdmins/${uid}`));
      setAdmins((prev) => {
        const copy = { ...prev };
        delete copy[uid];
        return copy;
      });
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to remove admin.");
    } finally {
      setBusy("");
    }
  }

  async function removeMember(uid: string) {
    setBusy(uid);
    setErrorMsg("");
    try {
      await deleteDoc(doc(db, `groups/${groupId}/members/${uid}`));
      await deleteDoc(doc(db, `users/${uid}/memberships/${groupId}`));
      setMembers((prev) => prev.filter((m) => m.uid !== uid));
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to remove member.");
    } finally {
      setBusy("");
    }
  }

  if (!groupId) return <div className="p-6">Missing group slug.</div>;

  // Filtered user list for dropdown
  const filteredUsers = useMemo(() => {
    const needle = userFilter.trim().toLowerCase();
    if (!needle) return allUsers;
    return allUsers.filter((u) => {
      const name = (u.displayName || "").toLowerCase();
      const email = (u.email || "").toLowerCase();
      return name.includes(needle) || email.includes(needle) || u.uid.toLowerCase().includes(needle);
    });
  }, [allUsers, userFilter]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Group Members</h1>
          <p className="text-slate-600">Group: {groupName}</p>
        </div>
        <Link to="/admin/groups" className="text-sm text-slate-700 underline">
          Back to groups
        </Link>
      </div>

      {errorMsg && <div className="mb-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">{errorMsg}</div>}

      {/* NEW: Add Member (by Name) */}
      <div className="rounded-xl border border-slate-200 bg-white/70 p-4 mb-6">
        <h2 className="font-medium text-slate-900">Add Member (by Name)</h2>
        <form onSubmit={addSelectedUser} className="mt-2 grid gap-2 sm:grid-cols-6">
          <input
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            placeholder="Search users by name, email, or UID…"
            className="sm:col-span-2 rounded-lg border border-slate-300 px-3 py-2 text-sm"
            aria-label="Filter users"
            disabled={!canEdit}
          />
          <select
            className="sm:col-span-3 rounded-lg border border-slate-300 px-2 py-2 text-sm"
            value={selectedUid}
            onChange={(e) => setSelectedUid(e.target.value)}
            aria-label="Select user to add"
            disabled={!canEdit}
          >
            <option value="">Select a user…</option>
            {filteredUsers.map((u) => (
              <option key={u.uid} value={u.uid}>
                {(u.displayName || "Unnamed") + (u.email ? ` • ${u.email}` : "")}
              </option>
            ))}
          </select>
          <div className="sm:col-span-1">
            <button
              type="submit"
              disabled={!selectedUid || !!busy || !canEdit}
              className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 disabled:opacity-60"
            >
              {busy === "add" ? "Adding…" : "Add to group"}
            </button>
          </div>
        </form>
        <p className="text-xs text-slate-500 mt-1">Admins: choose a user to add them to this group.</p>
      </div>

      {/* Existing: Add Member (by UID) — preserved */}
      <div className="rounded-xl border border-slate-200 bg-white/70 p-4 mb-6">
        <h2 className="font-medium text-slate-900">Add Member (by UID)</h2>
        <div className="mt-2 flex gap-2">
          <input
            value={newUid}
            onChange={(e) => setNewUid(e.target.value)}
            placeholder="Paste a user's UID"
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
            disabled={!canEdit}
          />
          <button
            onClick={addMember}
            disabled={!newUid.trim() || !!busy || !canEdit}
            className="text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {busy === "add" ? "Adding…" : "Add"}
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-1">Tip: you can find a user's UID in Firebase → Authentication.</p>
      </div>

      {loading ? (
        <p className="text-slate-600">Loading…</p>
      ) : members.length === 0 ? (
        <p className="text-slate-600">No members yet.</p>
      ) : (
        <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70">
          {members.map((m) => (
            <li key={m.uid} className="p-4 flex items-center justify-between">
              <div>
                <div className="font-medium text-slate-900">{m.displayName || m.uid}</div>
                <div className="text-xs text-slate-500 truncate">{m.uid}</div>
              </div>
              <div className="flex items-center gap-2">
                {admins[m.uid] ? (
                  <button
                    onClick={() => removeAdmin(m.uid)}
                    disabled={!!busy || !canEdit}
                    className="text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60"
                  >
                    {busy === `admin:${m.uid}` ? "Updating…" : "Remove admin"}
                  </button>
                ) : (
                  <button
                    onClick={() => makeAdmin(m.uid)}
                    disabled={!!busy || !canEdit}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
                  >
                    {busy === `admin:${m.uid}` ? "Updating…" : "Make admin"}
                  </button>
                )}
                <button
                  onClick={() => removeMember(m.uid)}
                  disabled={!!busy || !canEdit}
                  className="text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60"
                >
                  {busy === m.uid ? "Removing…" : "Remove"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function humanizeSlug(slug: string) {
  return slug.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
