import AdminTools from "@/components/dashboard/AdminTools";
/* Dashboard.tsx — no 'Go to...' menu */
const GCAL_EMBED_URL = import.meta.env.VITE_GCAL_EMBED_URL as string | undefined;
const TIMEZONE = (import.meta.env.VITE_TZ as string | undefined) || "America/New_York";

export default function Dashboard(){
  const calendarSrc = GCAL_EMBED_URL
    ? `${GCAL_EMBED_URL}${GCAL_EMBED_URL.includes("?") ? "&" : "?"}ctz=${encodeURIComponent(TIMEZONE)}`
    : null;

  return (
    <div className="container py-8 md:py-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Welcome!</h1>
      <div className="mt-4">
        <AdminTools />
      </div>
      </div>

      {/* Announcements + Notifications */}
      <section className="border border-border p-5 rounded-xl">
        <h2 className="text-xl font-semibold text-accent">General Announcements</h2>
        <ul className="mt-3 space-y-2 text-text">
          <li>• Welcome to the members portal. Check your groups for updates.</li>
          <li>• Volunteers needed for upcoming events.</li>
          <li>• New to Immanuel? Explore the Foundations course.</li>
        </ul>

        <div className="mt-6 pt-5 border-t border-border">
          <h3 className="text-lg font-semibold text-accent">Notifications</h3>
          <p className="text-sm text-text2 mt-2">You have no new notifications.</p>
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