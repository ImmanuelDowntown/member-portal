import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import mainLogo from "@/assets/Main_Logo.png";

export default function HeaderAuth(){
  const { user, isAdmin } = useAuth();
  const loc = useLocation();

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
          <NavLink to="/forums" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Forums</NavLink>
          <NavLink to="/resources" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Resources</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Events</NavLink>
          {isAdmin && <NavLink to="/admin/seed-groups" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Admin</NavLink>}
        </nav>

        {/* Actions */}
        <div className="flex md:justify-end items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-text2 hidden md:inline">Hi, {user.email}</span>
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
