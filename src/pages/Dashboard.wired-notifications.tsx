import { Link } from "react-router-dom";
import HeaderAuth from "@/components/HeaderAuth";
import Notifications from "@/components/dashboard/Notifications";
import HeaderAuth from "@/components/HeaderAuth";

/**
 * Dashboard (with dashboard-specific header only)
 * - Hides any global header (e.g., HeaderAuth mounted above routes)
 * - Renders HeaderAuth for this page
 * - Centers "Welcome" above the content
 * - Renders live Notifications under Announcements
 */
export default function Dashboard() {
  return (
    <>
      {/* Hide any app-wide header that might be mounted above the route. */}
      <style>{`header:first-of-type{display:none !important;}`}</style>

      <HeaderAuth />

      <div className="container py-8 md:py-10">
        {/* Centered Welcome */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Welcome to your Member&apos;s Portal</h1>
        </div>

        {/* Announcements + Notifications (same frame) */}
        <section className="border border-border p-5 rounded-xl">
          {/* General Announcements */}
          <h2 className="text-xl font-semibold text-accent">General Announcements</h2>
          <ul className="mt-3 space-y-2 text-text">
            <li>• Volunteers needed for upcoming events.</li>
            <li>• New to Immanuel? Explore the Foundations course.</li>
          </ul>

          {/* Divider */}
          <div className="my-5 border-t border-border/70" />

          {/* Notifications */}
          <h2 className="text-xl font-semibold text-accent">Notifications</h2>
          <p className="text-text2 text-sm mt-1">Personalized updates from your groups.</p>
          <Notifications limit={20} />
        </section>

        {/* Calendar + Quick Nav */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Google Calendar */}
          <section className="md:col-span-2 border border-border p-5 rounded-xl">
            <h2 className="text-xl font-semibold text-accent">Calendar</h2>
            <p className="text-text2 text-sm mt-1">Synced from church Google Calendar.</p>
            <div className="mt-4 aspect-video bg-surface rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full border-0"
                src="https://calendar.google.com/calendar/embed?src=immanueldowntown%40gmail.com&ctz=America%2FNew_York"
                title="Church Calendar"
              />
            </div>
          </section>

          {/* Quick Navigation (trimmed) */}
          <section className="border border-border p-5 rounded-xl">
            <h2 className="text-xl font-semibold text-accent">Go to…</h2>
            <div className="mt-3 grid grid-cols-1 gap-2">
              <Link to="/groups" className="btn btn-outline">Groups</Link>
              <Link to="/profile" className="btn btn-outline">Profile</Link>
              <Link to="/settings" className="btn btn-outline">Settings</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
