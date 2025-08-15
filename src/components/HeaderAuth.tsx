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
      const fromAuth = firstNameFrom(user.displayName);
      if (fromAuth) { if (isMounted) setGreetingName(fromAuth); return; }
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          const data = snap.data() as any;
          const composite = data?.name || [data?.firstName, data?.lastName].filter(Boolean).join(" ").trim();
          const fromDoc = firstNameFrom(composite);
          if (fromDoc) { if (isMounted) setGreetingName(fromDoc); return; }
        }
      } catch {}
      if (isMounted) setGreetingName("there");
    }
    resolveName();
    return () => { isMounted = false; };
  }, [user]);

  return (
    <header data-app-header className="w-full border-b border-border bg-[var(--bg)]">
      <div className="container py-2 md:py-3 grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-1 items-center gap-x-3 gap-y-2">
        {/* Logo */}
        <div className="flex items-center min-w-0 col-span-2 md:col-span-1">
          <Link to="/dashboard" aria-label="Immanuel Members Home" className="shrink-0">
            <img src={mainLogo} alt="Immanuel Downtown" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain" />
          </Link>
        </div>

        {/* Nav */}
        <nav className="col-span-2 md:col-span-1 order-2 md:order-none flex justify-center gap-4 text-sm">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Dashboard</NavLink>
          <NavLink to="/groups" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Groups</NavLink>
          {isAdmin && <NavLink to="/admin/seed-groups" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Admin</NavLink>}
        </nav>

        {/* Actions */}
        <div className="col-span-2 md:col-span-1 order-3 md:order-none flex justify-end items-center gap-2">
          {user ? (
            <>
              <span className="text-xs sm:text-sm text-text2 hidden sm:inline">Hi{greetingName ? `, ${greetingName}` : ""}</span>
              <button className="btn btn-outline btn-sm sm:btn-md" onClick={() => signOut(auth)}>Sign out</button>
            </>
          ) : (
            loc.pathname !== "/login" && <Link to="/login" className="btn btn-outline btn-sm sm:btn-md">Sign in</Link>
          )}
        </div>
      </div>
    </header>
  );
}
