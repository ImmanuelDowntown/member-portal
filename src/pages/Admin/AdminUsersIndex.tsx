import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  type DocumentData,
  serverTimestamp,
  deleteField,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import Loader from "@/components/Loader";
import { setUserDisabled, deleteUserAccount } from "@/lib/adminUsers";

type UserRow = {
  uid: string;
  displayName?: string;
  email?: string;
  status?: string; // active | inactive | deleted (if present on user doc)
  isCommunityApproved?: boolean;
  reviewed?: boolean;
  groups: Array<{ id: string; name: string }>;
};

export default function AdminUsersIndex() {
  const db = useMemo(() => getFirestore(app), []);
  const auth = getAuth(app);

  const [loading, setLoading] = useState(true);
  const [isSuper, setIsSuper] = useState(false);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState<string>("");

  // optional preselect via ?uid=...
  const { search } = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(search);
    const pre = params.get("uid") || "";
    if (pre) setQ(pre);
  }, [search]);

  // Determine super-admin and load users
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        // Require sign-in
        const current = auth.currentUser;
        if (!current) {
          if (!cancelled) {
            setUsers([]);
            setIsSuper(false);
          }
          return;
        }

        // super-admin check
        const superSnap = await getDoc(doc(db, "admins", current.uid));
        const superAdmin = superSnap.exists();
        if (!cancelled) setIsSuper(superAdmin);

        // Read all /users docs (super admins can read them per rules)
        const usnap = await getDocs(collection(db, "users"));
        const base: UserRow[] = usnap.docs.map((d) => {
          const data = d.data() as DocumentData;
          return {
            uid: d.id,
            displayName: (data?.displayName as string) || (data?.name as string) || "",
            email: (data?.email as string) || "",
            status: (data?.status as string) || "active",
            isCommunityApproved: Boolean(data?.isCommunityApproved),
            reviewed: Boolean(data?.reviewed),
            groups: [],
          };
        });

        // For each user, read memberships and resolve group names
        for (const row of base) {
          try {
            const msnap = await getDocs(collection(db, `users/${row.uid}/memberships`));
            const groups: Array<{ id: string; name: string }> = [];
            for (const m of msnap.docs) {
              const gid = m.id;
              try {
                const gdoc = await getDoc(doc(db, "groups", gid));
                const gdata = (gdoc.data() as DocumentData) || {};
                groups.push({ id: gid, name: (gdata?.name as string) || gid });
              } catch {
                groups.push({ id: gid, name: gid });
              }
            }
            row.groups = groups.sort((a, b) => a.name.localeCompare(b.name));
          } catch {
            row.groups = [];
          }
          if (cancelled) return;
        }

        // Sort users by name/email/uid
        base.sort((a, b) => (a.displayName || a.email || a.uid).localeCompare(b.displayName || b.email || b.uid));
        if (!cancelled) setUsers(base);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [db, auth.currentUser]);

  const filtered = users.filter((u) => {
    const needle = q.trim().toLowerCase();
    if (!needle) return true;
    return (
      u.uid.toLowerCase().includes(needle) ||
      (u.displayName || "").toLowerCase().includes(needle) ||
      (u.email || "").toLowerCase().includes(needle) ||
      u.groups.some((g) => g.name.toLowerCase().includes(needle) || g.id.toLowerCase().includes(needle))
    );
  });

  async function handleInactivate(uid: string) {
    if (!isSuper) return;
    const reason = window.prompt("Reason for inactivation? (optional)") || undefined;
    setBusy(`disable:${uid}`);
    try {
      await setUserDisabled(uid, true, reason);
      setUsers((prev) => prev.map((u) => (u.uid === uid ? { ...u, status: "inactive" } : u)));
    } catch (e) {
      // surface minimal error
      alert("Failed to inactivate user.");
    } finally {
      setBusy("");
    }
  }

  async function handleReactivate(uid: string) {
    if (!isSuper) return;
    if (!window.confirm("Reactivate this user?")) return;
    setBusy(`enable:${uid}`);
    try {
      await setUserDisabled(uid, false);
      setUsers((prev) => prev.map((u) => (u.uid === uid ? { ...u, status: "active" } : u)));
    } catch (e) {
      alert("Failed to reactivate user.");
    } finally {
      setBusy("");
    }
  }

  async function handleDelete(uid: string) {
    if (!isSuper) return;
    const confirm1 = window.confirm("Delete this user? This will remove their authentication account and related data.");
    if (!confirm1) return;
    const confirm2 = window.prompt('Type "DELETE" to confirm.') === "DELETE";
    if (!confirm2) return;

    setBusy(`delete:${uid}`);
    try {
      await deleteUserAccount(uid, false); // soft-delete Firestore user doc; auth user removed
      setUsers((prev) => prev.filter((u) => u.uid !== uid));
    } catch (e) {
      alert("Failed to delete user.");
    } finally {
      setBusy("");
    }
  }

  async function handleToggleApproved(uid: string, next: boolean) {
    if (!isSuper) return;
    setBusy(`approve:${uid}`);
    try {
      const approver = auth.currentUser?.uid || "";
      const patch = next
        ? {
            isCommunityApproved: true,
            dmApprovedAt: serverTimestamp(),
            dmApprovedBy: approver,
          }
        : {
            isCommunityApproved: false,
            dmApprovedAt: deleteField(),
            dmApprovedBy: deleteField(),
          };
      await setDoc(doc(db, "users", uid), patch, { merge: true });
      setUsers((prev) => prev.map((u) => (u.uid === uid ? { ...u, isCommunityApproved: next } : u)));
    } catch (e) {
      alert("Failed to update approval.");
    } finally {
      setBusy("");
    }
  }

  async function handleMarkReviewed(uid: string) {
    if (!isSuper) return;
    setBusy(`review:${uid}`);
    try {
      await setDoc(
        doc(db, "users", uid),
        { reviewed: true, needsReview: false },
        { merge: true }
      );
      // mark related notifications as read for this admin
      const adminUid = auth.currentUser?.uid;
      if (adminUid) {
        try {
          const qs = await getDocs(
            query(
              collection(db, `users/${adminUid}/notifications`),
              where("type", "==", "new-user"),
              where("uid", "==", uid)
            )
          );
          for (const d of qs.docs) {
            await updateDoc(d.ref, {
              read: true,
              readAt: serverTimestamp(),
            }).catch(() => {});
          }
        } catch {
          /* ignore */
        }
      }
      setUsers((prev) => prev.map((u) => (u.uid === uid ? { ...u, reviewed: true } : u)));
    } catch (e) {
      alert("Failed to mark reviewed.");
    } finally {
      setBusy("");
    }
  }

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <Loader label="Loading users…" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Users</h1>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search users…"
          className="rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none w-56"
          aria-label="Search users"
        />
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs font-medium text-slate-600">
          <div className="col-span-4">Name</div>
          <div className="col-span-3">Email</div>
          <div className="col-span-3">Groups</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        <div className="divide-y divide-slate-200">
          {filtered.length === 0 ? (
            <div className="px-4 py-4 text-sm text-slate-600">No users found.</div>
          ) : (
            filtered.map((u) => (
              <div key={u.uid} className="grid grid-cols-12 gap-2 px-4 py-3 items-start">
                <div className="col-span-4 min-w-0">
                  <div className="text-sm text-slate-900 truncate">{u.displayName || u.uid}</div>
                  {u.email && <div className="text-xs text-slate-600 truncate">{u.email}</div>}
                  <div className="text-[11px] text-slate-500 mt-0.5">Status: {u.status || "active"}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    DM access: <b>{u.isCommunityApproved ? "Approved" : "Not approved"}</b>
                  </div>
                </div>
                <div className="col-span-3 min-w-0">
                  <div className="flex flex-wrap gap-1">
                    {u.groups.map((g) => (
                      <Link
                        key={g.id}
                        to={`/admin/groups/${g.id}/members`}
                        className="text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-800 hover:bg-slate-200"
                        title="Manage members"
                      >
                        {g.name}
                      </Link>
                    ))}
                    {u.groups.length === 0 && <span className="text-xs text-slate-600">—</span>}
                  </div>
                </div>
                <div className="col-span-3 min-w-0">
                  <span className="text-xs break-all">{u.uid}</span>
                </div>
                <div className="col-span-2 text-right">
                  <div className="inline-flex flex-col gap-1 items-end">
                    <label className="inline-flex items-center gap-2 text-xs select-none">
                      <input
                        type="checkbox"
                        checked={!!u.isCommunityApproved}
                        onChange={(e) => void handleToggleApproved(u.uid, e.target.checked)}
                        disabled={!isSuper || !!busy}
                      />
                      <span>Approved for DMs</span>
                    </label>

                    <Link
                      to={`/admin/users?uid=${encodeURIComponent(u.uid)}`}
                      className="text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100"
                    >
                      View
                    </Link>

                    {!u.reviewed && (
                      <button
                        onClick={() => handleMarkReviewed(u.uid)}
                        disabled={!isSuper || !!busy}
                        className="text-xs rounded-lg px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                        style={{ opacity: busy ? 0.6 : 1 }}
                      >
                        {busy === `review:${u.uid}` ? "Saving…" : "Mark reviewed"}
                      </button>
                    )}

                    {isSuper && (
                      <div className="flex flex-wrap gap-1 justify-end">
                        {u.status === "inactive" ? (
                          <button
                            onClick={() => handleReactivate(u.uid)}
                            disabled={!!busy}
                            className="text-xs rounded-lg px-2 py-1 text-white"
                            style={{ backgroundColor: "#919FAA", opacity: busy ? 0.6 : 1 }}
                          >
                            {busy === `enable:${u.uid}` ? "Working…" : "Reactivate"}
                          </button>
                        ) : (
                          <button
                            onClick={() => handleInactivate(u.uid)}
                            disabled={!!busy}
                            className="text-xs rounded-lg px-2 py-1 text-white"
                            style={{ backgroundColor: "#919FAA", opacity: busy ? 0.6 : 1 }}
                          >
                            {busy === `disable:${u.uid}` ? "Working…" : "Inactivate"}
                          </button>
                        )}

                        <button
                          onClick={() => handleDelete(u.uid)}
                          disabled={!!busy}
                          className="text-xs rounded-lg px-2 py-1 bg-rose-100 text-rose-800 hover:bg-rose-200"
                          style={{ opacity: busy ? 0.6 : 1 }}
                          title="Soft delete (Auth account removed; user doc marked deleted)"
                        >
                          {busy === `delete:${u.uid}` ? "Deleting…" : "Delete"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
