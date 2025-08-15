import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import mainLogo from "@/assets/Main_Logo.png";

function firstNameFrom(full?: string | null) {
  if (!full) return null;
  const parts = full.trim().split(/\s+/);
  return parts[0] || null;
}
function firstNameFromEmail(email?: string | null) {
  if (!email) return null;
  const local = email.split("@")[0] || "";
  return (local.replace(/[._-]+/g, " ").trim().split(/\s+/)[0]) || null;
}

export default function HeaderAuth(){
  const { user } = useAuth();
  const [greetingName, setGreetingName] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    async function resolveName() {
      if (!user) { if (isMounted) setGreetingName(""); return; }
      const fromAuth = firstNameFrom(user.displayName);
      if (fromAuth && isMounted) { setGreetingName(fromAuth); return; }
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data() as any;
          const composite = data?.name || [data?.firstName, data?.lastName].filter(Boolean).join(" ").trim();
          const fromDoc = firstNameFrom(composite);
          if (fromDoc && isMounted) { setGreetingName(fromDoc); return; }
        }
      } catch {}
      const fromEmail = firstNameFromEmail(user.email);
      if (isMounted) setGreetingName(fromEmail || "there");
    }
    resolveName();
    return () => { isMounted = false; };
  }, [user]);

  return (
    <header className="w-full border-b border-border bg-[var(--bg)]">
      <div className="container py-2 md:py-3 grid grid-cols-2 md:grid-cols-3 items-center gap-3">
        {/* Logo — tighter on mobile */}
        <div className="flex items-center min-w-0">
          <Link to="/dashboard" aria-label="Immanuel Members Home" className="shrink-0">
            {/* Use fixed heights that exist in Tailwind so it never blows up on mobile */}
            <img
              src={mainLogo}
              alt="Immanuel Downtown"
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>
          {/* Tagline only from md+ */}
          <div className="ml-3 hidden md:block leading-tight">
            <div className="font-semibold tracking-wide text-base">IMMANUEL<span className="opacity-80">DOWNTOWN</span></div>
            <div className="text-xs text-text2">Honest | Deep | Faithful</div>
          </div>
        </div>

        {/* Nav (Dashboard + Groups) */}
        <nav className="col-span-1 md:col-span-1 order-2 md:order-none flex justify-center gap-4 text-sm">
          <NavLink to="/dashboard" className={({isActive}) =>
            "px-2 py-1.5 rounded-md transition " + (isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800/60")
          }>Dashboard</NavLink>
          <NavLink to="/groups" className={({isActive}) =>
            "px-2 py-1.5 rounded-md transition " + (isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800/60")
          }>Groups</NavLink>
        </nav>

        {/* Greeting + Sign out */}
        <div className="flex justify-end items-center gap-2 sm:gap-3">
          {user ? (
            <>
              <span className="text-xs sm:text-sm text-text2 hidden sm:inline">Hi, {greetingName}</span>
              <button className="btn btn-outline btn-sm sm:btn-md" onClick={() => signOut(auth)}>Sign out</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-outline btn-sm sm:btn-md">Sign in</Link>
          )}
        </div>
      </div>
    </header>
  );
}
