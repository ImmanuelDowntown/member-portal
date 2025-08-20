/* Dashboard.tsx — no 'Go to...' menu */
const GCAL_EMBED_URL = import.meta.env.VITE_GCAL_EMBED_URL as string | undefined;
const TIMEZONE = (import.meta.env.VITE_TZ as string | undefined) || "America/New_York";

import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import Notifications from "@/components/dashboard/Notifications";

export default function Dashboard(){
  const { isAdmin } = useAuth();
  const calendarSrc = GCAL_EMBED_URL
    ? `${GCAL_EMBED_URL}${GCAL_EMBED_URL.includes("?") ? "&" : "?"}ctz=${encodeURIComponent(TIMEZONE)}`
    : null;

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
            <p className="text-sm text-text2">You have admin privileges.</p>
          </div>
          <Link
            to="/admin/groups"
            className="text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200"
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