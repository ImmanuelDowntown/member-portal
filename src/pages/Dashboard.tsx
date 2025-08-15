
import { Link } from "react-router-dom";

const GCAL_EMBED_URL = import.meta.env.VITE_GCAL_EMBED_URL as string | undefined;
const TIMEZONE = (import.meta.env.VITE_TZ as string | undefined) || "America/New_York";

export default function Dashboard(){
  const calendarSrc = GCAL_EMBED_URL
    ? `${GCAL_EMBED_URL}${GCAL_EMBED_URL.includes("?") ? "&" : "?"}ctz=${encodeURIComponent(TIMEZONE)}`
    : null;

  return (
    <div className="container py-8 md:py-10">
      {/* Welcome */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Welcome!</h1>
      </div>

      {/* Announcements + Right rail */}
      <div className="grid md:grid-cols-3 gap-6">
        <section className="md:col-span-3 lg:col-span-3 border border-border p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-accent">General Announcements</h2>
          <ul className="mt-3 space-y-2 text-text">
            <li>• Welcome to the members portal. Check your groups for updates.</li>
            <li>• Volunteers needed for upcoming events.</li>
            <li>• New to Immanuel? Explore the Foundations course.</li>
          </ul>

          {/* Notifications block */}
          <div className="mt-6 pt-5 border-t border-border">
            <h3 className="text-lg font-semibold text-accent">Notifications</h3>
            <p className="text-sm text-text2 mt-2">You have no new notifications.</p>
          </div>
        </section>
      </div>

      {/* Calendar + Quick Links */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 border border-border p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-accent">Calendar</h2>
          <p className="text-text2 text-sm mt-1">Synced from church Google Calendar.</p>

          <div className="mt-4 aspect-video bg-surface rounded">
            {calendarSrc ? (
              <iframe
                className="w-full h-full border-0 rounded"
                src={calendarSrc}
                title="Church Calendar"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-center p-6 text-sm text-text2">
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
    </div>
  );
}
