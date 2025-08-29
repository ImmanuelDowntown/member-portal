/* src/pages/Dashboard.tsx
   Fix (schema-aligned):
   - Super-admin: users/{uid}.isSuperAdmin == true → watch ALL membershipRequests where status == 'pending'
   - Group-admin: any /groups/{gid}/groupAdmins/{uid} doc exists → watch that group's membershipRequests where status == 'pending'
   - New users: for super-admins, watch users where reviewed == false OR status == 'pending' OR needsReview == true
   - Button is yellow if either condition is true, grey otherwise.
*/

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Notifications from "@/components/dashboard/Notifications";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  collectionGroup,
  query,
  where,
  onSnapshot,
  Unsubscribe,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

const GCAL_EMBED_URL = import.meta.env.VITE_GCAL_EMBED_URL as string | undefined;
const TIMEZONE = (import.meta.env.VITE_TZ as string | undefined) || "America/New_York";

export default function Dashboard() {
  const { isAdmin } = useAuth();

  const auth = useMemo(() => getAuth(app), []);
  const db = useMemo(() => getFirestore(app), []);
  const [needsAttention, setNeedsAttention] = useState(false);
  const [calendarSrc, setCalendarSrc] = useState<string | null>(null);

  // Combined flags
  const pendingRequestsAnyRef = useRef<boolean>(false); // any membershipRequests docs
  const newUsersAnyRef = useRef<boolean>(false);        // new/unreviewed users (super-admin only)
  const questionsAnyRef = useRef<boolean>(false);       // new pastor questions
  const activityAnyRef = useRef<boolean>(false);        // new activity logs
  const newUsersCountsRef = useRef<Map<string, number>>(new Map());

  // For group-admins: dynamic per-group listeners
  const groupUnsubsRef = useRef<Map<string, Unsubscribe>>(new Map());
  const groupPendingCountsRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    let cancelled = false;
    const unsubs: Unsubscribe[] = [];

    const updateFlag = () => {
      if (!cancelled)
        setNeedsAttention(
          pendingRequestsAnyRef.current ||
          newUsersAnyRef.current ||
          questionsAnyRef.current ||
          activityAnyRef.current
        );
    };

    const recomputeNewUsers = () => {
      let any = false;
      for (const count of newUsersCountsRef.current.values()) {
        if ((count ?? 0) > 0) { any = true; break; }
      }
      newUsersAnyRef.current = any;
      updateFlag();
    };

    const clearGroupListeners = () => {
      groupUnsubsRef.current.forEach((u) => { try { u(); } catch {} });
      groupUnsubsRef.current.clear();
      groupPendingCountsRef.current.clear();
      pendingRequestsAnyRef.current = false;
      updateFlag();
    };

    async function wireAttention() {
      const u = auth.currentUser;
      if (!u) return;
      const uid = u.uid;
      pendingRequestsAnyRef.current = false;
      newUsersCountsRef.current.clear();
      newUsersAnyRef.current = false;
      questionsAnyRef.current = false;
      activityAnyRef.current = false;
      updateFlag();

      // Super-admin detection via users/{uid}.isSuperAdmin
      let isSuper = false;
      try {
        const superSnap = await getDoc(doc(db, "users", uid));
        isSuper = (superSnap.data() as any)?.isSuperAdmin === true;
      } catch { isSuper = false; }

      // 1) Watch membership requests with status == "pending"
      if (isSuper) {
        try {
          const allPendingQ = query(
            collectionGroup(db, "membershipRequests"),
            where("status", "==", "pending")
          );
          unsubs.push(onSnapshot(
            allPendingQ,
            (qs) => { pendingRequestsAnyRef.current = qs.size > 0; updateFlag(); },
            () => { pendingRequestsAnyRef.current = false; updateFlag(); }
          ));
        } catch {
          pendingRequestsAnyRef.current = false;
          updateFlag();
        }
      } else {
        // Group-admin via /groups/{gid}/groupAdmins/{uid}
        try {
          const myAdminDocsQ = query(
            collectionGroup(db, "groupAdmins"),
            where("uid", "==", uid)
          );

          unsubs.push(onSnapshot(
            myAdminDocsQ,
            (qs) => {
              const nextIds = new Set<string>();
              qs.forEach((d) => {
                const gid = d.ref.parent.parent?.id;
                if (gid) nextIds.add(gid);
              });

              // Unsubscribe removed groups
              for (const [gid, unsub] of groupUnsubsRef.current.entries()) {
                if (!nextIds.has(gid)) {
                  try { unsub(); } catch {}
                  groupUnsubsRef.current.delete(gid);
                  groupPendingCountsRef.current.delete(gid);
                }
              }

              // Subscribe to each group's membershipRequests (status == "pending")
              nextIds.forEach((gid) => {
                if (groupUnsubsRef.current.has(gid)) return;
                const pendingQ = query(
                  collection(db, `groups/${gid}/membershipRequests`),
                  where("status", "==", "pending")
                );
                const gu = onSnapshot(
                  pendingQ,
                  (qs2) => {
                    groupPendingCountsRef.current.set(gid, qs2.size);
                    // Aggregate across groups
                    let any = false;
                    for (const count of groupPendingCountsRef.current.values()) {
                      if ((count ?? 0) > 0) { any = true; break; }
                    }
                    pendingRequestsAnyRef.current = any;
                    updateFlag();
                  },
                  () => {
                    groupPendingCountsRef.current.set(gid, 0);
                    let any = false;
                    for (const count of groupPendingCountsRef.current.values()) {
                      if ((count ?? 0) > 0) { any = true; break; }
                    }
                    pendingRequestsAnyRef.current = any;
                    updateFlag();
                  }
                );
                groupUnsubsRef.current.set(gid, gu);
              });

              // Recompute in case all cleared
              let any = false;
              for (const count of groupPendingCountsRef.current.values()) {
                if ((count ?? 0) > 0) { any = true; break; }
              }
              pendingRequestsAnyRef.current = any;
              updateFlag();
            },
            () => {
              clearGroupListeners();
            }
          ));
        } catch {
          clearGroupListeners();
        }
      }

      // 2) New/unreviewed users (super-admin only)
      if (isSuper) {
        const watchUsers = (key: string, qRef: ReturnType<typeof query>) => {
          try {
            const unsub = onSnapshot(
              qRef,
              (qs) => {
                newUsersCountsRef.current.set(key, qs.size);
                recomputeNewUsers();
              },
              () => {
                newUsersCountsRef.current.set(key, 0);
                recomputeNewUsers();
              }
            );
            unsubs.push(unsub);
          } catch {
            newUsersCountsRef.current.set(key, 0);
            recomputeNewUsers();
          }
        };
        // Use whichever your schema supports:
        watchUsers("reviewed", query(collection(db, "users"), where("reviewed", "==", false)));
        watchUsers("status", query(collection(db, "users"), where("status", "==", "pending")));
        watchUsers("needsReview", query(collection(db, "users"), where("needsReview", "==", true)));
      }

      // 3) Questions directed to the admin
      const qQ = query(
        collection(db, "pastorQuestions"),
        where("to", "==", uid)
      );
      unsubs.push(
        onSnapshot(
          qQ,
          (qs) => {
            questionsAnyRef.current = qs.docs.some(
              (d) => (d.data() as any).read !== true
            );
            updateFlag();
          },
          () => { questionsAnyRef.current = false; updateFlag(); }
        )
      );

      // 4) Activity for the admin
      const aQ = collection(db, `users/${uid}/activity`);
      unsubs.push(
        onSnapshot(
          aQ,
          (qs) => { activityAnyRef.current = qs.size > 0; updateFlag(); },
          () => { activityAnyRef.current = false; updateFlag(); }
        )
      );
    }

    void wireAttention();

    return () => {
      cancelled = true;
      unsubs.forEach((u) => { try { u(); } catch {} });
      clearGroupListeners();
      newUsersCountsRef.current.clear();
      newUsersAnyRef.current = false;
      questionsAnyRef.current = false;
      activityAnyRef.current = false;
    };
  }, [auth, db]);

  useEffect(() => {
    let cancelled = false;
    async function loadCalendar() {
      try {
        const snap = await getDoc(doc(db, "appSettings", "general"));
        const data = snap.data() as { calendarIds?: string[]; calendarId?: string } | undefined;
        let src: string | undefined;
        if (data?.calendarIds && data.calendarIds.length) {
          const params = data.calendarIds
            .map((id) => `src=${encodeURIComponent(id)}`)
            .join("&");
          src = `https://calendar.google.com/calendar/embed?${params}`;
        } else if (data?.calendarId) {
          src = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(data.calendarId)}`;
        } else {
          src = GCAL_EMBED_URL;
        }
        if (!cancelled) {
          setCalendarSrc(
            src
              ? `${src}${src.includes("?") ? "&" : "?"}ctz=${encodeURIComponent(TIMEZONE)}`
              : null
          );
        }
      } catch {
        if (!cancelled) setCalendarSrc(null);
      }
    }
    void loadCalendar();
    return () => {
      cancelled = true;
    };
  }, [db]);

  const adminBtnClass = needsAttention
    ? "text-sm px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
    : "text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200";

  return (
    <div className="container py-8 md:py-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Welcome!</h1>
      </div>

      {/* Admin Tools (admins only) */}
      {isAdmin && (
        <section className="mb-6 border border-border p-5 rounded-xl flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-accent">Admin Tools</h2>
            <p className="text-sm text-text2">
              {needsAttention
                ? "Attention needed: pending requests, new users, or questions."
                : "You have admin privileges."}
            </p>
          </div>
          <Link
            to="/admin"
            className={adminBtnClass}
            title=
              {needsAttention
                ? "Pending requests, new users, or questions need review"
                : "Open Admin Console"}
          >
            Admin Console
          </Link>
        </section>
      )}

      {/* Announcements + Notifications */}
      <section className="border border-border p-5 rounded-xl">
        <h2 className="text-xl font-semibold text-accent">General Announcements</h2>
        <ul className="mt-3 space-y-2 text-text">
          <li>• Welcome to the Community Portal. Check your groups for updates. </li>
          <li>• Notifications are now working. Open your profile and click on "Enable notification" to be kept up to speed on announcements and new resources and communications in your groups.</li>
          <li>• Direct Messaging are now working so everyone can communicate easily in one place.</li>
          <li>• We are still in development. If you find bugs, or have features you'd like to see added, send Sam a DM.</li>
        </ul>

        <div className="mt-6 pt-5 border-t border-border">
          <div className="mt-2"><Notifications /></div>
        </div>
      </section>

      {/* Calendar — full width; extra tall on mobile */}
      <section className="mt-8 border border-border p-5 rounded-xl">
        <h2 className="text-xl font-semibold text-accent">Calendar</h2>
        <p className="text-text2 text-sm mt-1">Synced from church Google Calendar.</p>

        <div className="mt-4 w-full">
          {calendarSrc ? (
            <iframe
              className="w-full h-[440px] sm:h-[520px] md:h-[720px] rounded border-0"
              src={calendarSrc}
              title="Church Calendar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-[440px] sm:h-[520px] md:h-[720px] flex items-center justify-center text-center p-6 text-sm text-text2 rounded bg-surface/50">
              <div>
                <div className="font-medium text-text mb-1">Calendar not configured</div>
                <div>
                  Set a <code className="px-1 py-0.5 rounded bg-surface/50">Calendar ID</code> in Settings.
                  In Google Calendar → <em>Settings → Integrate calendar</em>, copy the <strong>Calendar ID</strong> and paste it there.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
