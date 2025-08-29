import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  collectionGroup,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
  Unsubscribe,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";

export default function AdminConsole() {
  const auth = useMemo(() => getAuth(app), []);
  const db = useMemo(() => getFirestore(app), []);

  const [groupsAlert, setGroupsAlert] = useState(false);
  const [usersAlert, setUsersAlert] = useState(false);
  const [questionsAlert, setQuestionsAlert] = useState(false);
  const [activityAlert, setActivityAlert] = useState(false);

  useEffect(() => {
    const u = auth.currentUser;
    if (!u) return;
    const uid = u.uid;
    let cancelled = false;
    const unsubs: Unsubscribe[] = [];
    const groupUnsubs = new Map<string, Unsubscribe>();
    const groupCounts = new Map<string, number>();

    async function wire() {
      let isSuper = false;
      try {
        const superSnap = await getDoc(doc(db, "users", uid));
        isSuper = (superSnap.data() as any)?.isSuperAdmin === true;
      } catch {
        isSuper = false;
      }

      if (isSuper) {
        const pendingQ = query(
          collectionGroup(db, "membershipRequests"),
          where("status", "==", "pending")
        );
        unsubs.push(
          onSnapshot(
            pendingQ,
            (qs) => !cancelled && setGroupsAlert(qs.size > 0),
            () => !cancelled && setGroupsAlert(false)
          )
        );

        let pending = 0,
          unreviewed = 0,
          needs = 0;
        const recompute = () => {
          if (!cancelled) setUsersAlert(pending + unreviewed + needs > 0);
        };
        unsubs.push(
          onSnapshot(
            query(collection(db, "users"), where("status", "==", "pending")),
            (qs) => {
              pending = qs.size;
              recompute();
            },
            () => {
              pending = 0;
              recompute();
            }
          )
        );
        unsubs.push(
          onSnapshot(
            query(collection(db, "users"), where("reviewed", "==", false)),
            (qs) => {
              unreviewed = qs.size;
              recompute();
            },
            () => {
              unreviewed = 0;
              recompute();
            }
          )
        );
        unsubs.push(
          onSnapshot(
            query(collection(db, "users"), where("needsReview", "==", true)),
            (qs) => {
              needs = qs.size;
              recompute();
            },
            () => {
              needs = 0;
              recompute();
            }
          )
        );
      } else {
        const adminQ = query(
          collectionGroup(db, "groupAdmins"),
          where("uid", "==", uid)
        );
        unsubs.push(
          onSnapshot(adminQ, (qs) => {
            const ids = new Set<string>();
            qs.forEach((d) => {
              const gid = d.ref.parent.parent?.id;
              if (gid) ids.add(gid);
            });
            for (const [gid, unsub] of groupUnsubs.entries()) {
              if (!ids.has(gid)) {
                try {
                  unsub();
                } catch {}
                groupUnsubs.delete(gid);
                groupCounts.delete(gid);
              }
            }
            ids.forEach((gid) => {
              if (groupUnsubs.has(gid)) return;
              const pendingQ = query(
                collection(db, `groups/${gid}/membershipRequests`),
                where("status", "==", "pending")
              );
              const gu = onSnapshot(
                pendingQ,
                (qs2) => {
                  groupCounts.set(gid, qs2.size);
                  let any = false;
                  for (const c of groupCounts.values()) {
                    if (c > 0) {
                      any = true;
                      break;
                    }
                  }
                  if (!cancelled) setGroupsAlert(any);
                },
                () => {
                  groupCounts.set(gid, 0);
                  let any = false;
                  for (const c of groupCounts.values()) {
                    if (c > 0) {
                      any = true;
                      break;
                    }
                  }
                  if (!cancelled) setGroupsAlert(any);
                }
              );
              groupUnsubs.set(gid, gu);
            });
          })
        );
        setUsersAlert(false);
      }

      const qQ = query(
        collection(db, "pastorQuestions"),
        where("to", "==", uid)
      );
      unsubs.push(
        onSnapshot(
          qQ,
          (qs) =>
            !cancelled &&
            setQuestionsAlert(
              qs.docs.some((d) => (d.data() as any).read !== true)
            ),
          () => !cancelled && setQuestionsAlert(false)
        )
      );

      const aQ = collection(db, `users/${uid}/activity`);
      unsubs.push(
        onSnapshot(
          aQ,
          (qs) => !cancelled && setActivityAlert(qs.size > 0),
          () => !cancelled && setActivityAlert(false)
        )
      );
    }

    void wire();

    return () => {
      cancelled = true;
      unsubs.forEach((u) => {
        try {
          u();
        } catch {}
      });
      groupUnsubs.forEach((u) => {
        try {
          u();
        } catch {}
      });
    };
  }, [auth, db]);

  const cardClass = (flag: boolean) =>
    `block rounded-xl border border-border p-6 text-center text-lg font-semibold transition-colors ${
      flag
        ? "bg-slate-200 text-slate-900"
        : "bg-card text-accent hover:bg-muted"
    }`;

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-accent mb-4">Admin Console</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/admin/groups" className={cardClass(groupsAlert)}>
            Groups
          </Link>
          <Link to="/admin/users" className={cardClass(usersAlert)}>
            Users
          </Link>
          <Link to="/pastor/questions" className={cardClass(questionsAlert)}>
            Questions
          </Link>
          <Link to="/admin/activity" className={cardClass(activityAlert)}>
            Activity
          </Link>
        </div>
      </div>
    </div>
  );
}
