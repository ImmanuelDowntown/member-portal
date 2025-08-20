/* Dashboard.tsx — add "needs attention" indicator for Admin Console */
const GCAL_EMBED_URL = import.meta.env.VITE_GCAL_EMBED_URL as string | undefined;
const TIMEZONE = (import.meta.env.VITE_TZ as string | undefined) || "America/New_York";

import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import Notifications from "@/components/dashboard/Notifications";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  collectionGroup,
  query,
  where,
  limit,
  documentId,
} from "firebase/firestore";
import { app } from "@/lib/firebase";

export default function Dashboard(){
  const { isAdmin } = useAuth();

  const auth = useMemo(() => getAuth(app), []);
  const db = useMemo(() => getFirestore(app), []);
  const [needsAttention, setNeedsAttention] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function computeAttention() {
      try {
        const u = auth.currentUser;
        if (!u) return;
        const uid = u.uid;
        let attention = false;

        // Is super admin?
        const superSnap = await getDoc(doc(db, "admins", uid));
        const isSuper = superSnap.exists();

        if (isSuper) {
          // Any pending membership requests anywhere?
          try {
            const rs = await getDocs(query(collectionGroup(db, "membershipRequests"), limit(1)));
            if (rs.size > 0) attention = true;
          } catch {
            // ignore failures; keep attention false
          }
          // Any unapproved users?
          try {
            const us = await getDocs(query(collection(db, "users"), where("isCommunityApproved", "==", false), limit(1)));
            if (us.size > 0) attention = true;
          } catch {
            // ignore if rules block non-super (but super should have access)
          }
        } else {
          // Group admin: find groups they administer
          try {
            const cg = await getDocs(query(collectionGroup(db, "groupAdmins"), where(documentId(), "==", uid)));
            const groupIds = cg.docs
              .map((d) => d.ref.parent.parent?.id || "")
              .filter(Boolean);
            for (const gid of groupIds) {
              try {
                const snap = await getDocs(query(collection(db, `groups/${gid}/membershipRequests`), limit(1)));
                if (snap.size > 0) {
                  attention = true;
                  break;
                }
              } catch {
                // continue
              }
            }
          } catch {
            // ignore
          }
        }

        if (!cancelled) setNeedsAttention(attention);
      } catch {
        if (!cancelled) setNeedsAttention(false);
      }
    }
    void computeAttention();
    // Re-evaluate on mount; if your app tracks auth state, you could also
    // re-run when isAdmin changes or when user reauths.
    return () => { cancelled = true; };
  }, [auth, db]);

  const calendarSrc = GCAL_EMBED_URL
    ? `${GCAL_EMBED_URL}${GCAL_EMBED_URL.includes("?") ? "&" : "?"}ctz=${encodeURIComponent(TIMEZONE)}`
    : null;

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
              {needsAttention ? "Attention needed: pending requests or new users." : "You have admin privileges."}
            </p>
          </div>
          <Link
            to="/admin/groups"
            className={adminBtnClass}
            title={needsAttention ? "Pending requests or new users need review" : "Open Admin Console"}
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
          <li>• Notifications are now working. Open your profile and click on "Enable notification" in order be kept up to speed on announcements and new resources and communications in your groups.</li>
          <li>• We are working on getting Direct Messaging working so everyone can communicate easily in one place.</li>
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
                  Set <code className="px-1 py-0.5 rounded bg-surface/50">VITE_GCAL_EMBED_URL</code> in your env.
                  In Google Calendar → <em>Settings → Integrate calendar</em>, copy the <strong>Embed code</strong> <code>src</code> URL and paste it there.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
