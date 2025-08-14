import { Link } from "react-router-dom";

export default function Dashboard(){
  return (
    <div className="container py-8 md:py-10">
      {/* General Announcements */}
      <section className="border border-border p-5">
        <h2 className="text-xl font-semibold text-accent">General Announcements</h2>
        <ul className="mt-3 space-y-2 text-text">
          <li>• Welcome to the members portal. Check your groups for updates.</li>
          <li>• Volunteers needed for upcoming events.</li>
          <li>• New to Immanuel? Explore the Foundations course.</li>
        </ul>
      </section>

      {/* Calendar + Quick Nav */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {/* Google Calendar */}
        <section className="md:col-span-2 border border-border p-5">
          <h2 className="text-xl font-semibold text-accent">Calendar</h2>
          <p className="text-text2 text-sm mt-1">Synced from church Google Calendar.</p>
          {/* Replace the src with your public Google Calendar embed URL or a custom component later */}
          <div className="mt-4 aspect-video bg-surface">
            <iframe
              className="w-full h-full border-0"
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_PUBLIC_URL_HERE&ctz=America%2FNew_York"
              title="Church Calendar"
            />
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="border border-border p-5">
          <h2 className="text-xl font-semibold text-accent">Go to…</h2>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <Link to="/groups" className="btn btn-outline">Groups</Link>
            <Link to="/forums" className="btn btn-outline">Forums</Link>
            <Link to="/resources" className="btn btn-outline">Resources</Link>
            <Link to="/events" className="btn btn-outline">Events</Link>
            <Link to="/profile" className="btn btn-outline">Profile</Link>
            <Link to="/settings" className="btn btn-outline">Settings</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
