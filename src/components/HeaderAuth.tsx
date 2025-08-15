import { Link, NavLink, useLocation } from "react-router-dom";
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

export default function HeaderAuth(){
  const { user, isAdmin } = useAuth();
  const loc = useLocation();
  const [greetingName, setGreetingName] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    async function resolveName() {
      if (!user) { if (isMounted) setGreetingName(""); return; }

      // 1) Try Firebase Auth displayName
      const fromAuth = firstNameFrom(user.displayName);
      if (fromAuth) { if (isMounted) setGreetingName(fromAuth); return; }

      // 2) Try Firestore users/{uid} -> name OR firstName/lastName
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data() as any;
          const composite = data?.name || [data?.firstName, data?.lastName].filter(Boolean).join(" ").trim();
          const fromDoc = firstNameFrom(composite);
          if (fromDoc) { if (isMounted) setGreetingName(fromDoc); return; }
        }
      } catch { /* ignore */ }

      // 3) Last resort — avoid showing email; use a friendly fallback
      if (isMounted) setGreetingName("there");
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

        {/* Nav */}
        <nav className="col-span-2 md:col-span-1 order-2 md:order-none flex flex-wrap justify-start md:justify-center gap-x-6 gap-y-2 text-sm">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Dashboard</NavLink>
          <NavLink to="/groups" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Groups</NavLink>
          {isAdmin && <NavLink to="/admin/seed-groups" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Admin</NavLink>}
        </nav>

        {/* Actions */}
        <div className="flex md:justify-end items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-text2 hidden md:inline">Hi{greetingName ? `, ${greetingName}` : ""}</span>
              <button className="btn btn-outline" onClick={() => signOut(auth)}>Sign out</button>
            </>
          ) : (
            loc.pathname !== "/login" && <Link to="/login" className="btn btn-outline">Sign in</Link>
          )}
        </div>
      </div>
    </header>
  );
}
