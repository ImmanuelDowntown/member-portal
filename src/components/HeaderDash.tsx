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

export default function HeaderDash(){
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
      <div className="container py-3 md:py-4 grid grid-cols-2 md:grid-cols-3 items-center gap-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/dashboard" aria-label="Immanuel Members Home" className="shrink-0">
            <img src={mainLogo} alt="Immanuel Downtown" className="max-h-16 md:max-h-20 h-auto w-auto object-contain" />
          </Link>
        </div>

        {/* Only Dashboard + Groups nav */}
        <nav className="col-span-1 md:col-span-1 order-2 md:order-none flex justify-center gap-6 text-sm">
          <NavLink to="/dashboard" className={({isActive}) =>
            "px-3 py-2 rounded-lg transition " + (isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800/60")
          }>Dashboard</NavLink>
          <NavLink to="/groups" className={({isActive}) =>
            "px-3 py-2 rounded-lg transition " + (isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800/60")
          }>Groups</NavLink>
        </nav>

        {/* Greeting + Sign out */}
        <div className="flex justify-end items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-text2 hidden md:inline">Hi, {greetingName}</span>
              <button className="btn btn-outline" onClick={() => signOut(auth)}>Sign out</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-outline">Sign in</Link>
          )}
        </div>
      </div>
    </header>
  );
}
