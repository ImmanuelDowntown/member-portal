import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import mainLogo from "@/assets/Header_Logo.png";

function firstNameFrom(full?: string | null) {
  if (!full) return null;
  const parts = full.trim().split(/\s+/);
  return parts[0] || null;
}

function useStandalone() {
  const [standalone, setStandalone] = useState(false);
  useEffect(() => {
    const mm = window.matchMedia && window.matchMedia('(display-mode: standalone)');
    const isiOSStandalone = (navigator as any).standalone === true; // iOS Safari
    const update = () => setStandalone(Boolean((mm && mm.matches) || isiOSStandalone));
    update();
    mm && mm.addEventListener && mm.addEventListener('change', update);
    return () => { mm && mm.removeEventListener && mm.removeEventListener('change', update); };
  }, []);
  return standalone;
}

export default function HeaderAuth(){
  const { user, isAdmin } = useAuth();
  const loc = useLocation();
  const [greetingName, setGreetingName] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const isStandalone = useStandalone();
  const navigate = useNavigate();

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

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [loc.pathname]);

  return (
    <>
      {/* Notch-safe padding ONLY when installed as a PWA */}
      {isStandalone && (
        <style>{`
          [data-app-header] {
            padding-top: env(safe-area-inset-top);
            /* Safari < 11.2 fallback (rare now) */
            padding-top: constant(safe-area-inset-top);
          }
        `}</style>
      )}

      <header data-app-header className="w-full border-b border-border bg-[var(--bg)]">
        {/* Mobile: Row1 logo + hamburger; Row2 centered nav. Desktop: single row. */}
        <div className="container py-2 md:py-3 grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-1 items-center gap-x-3 gap-y-2">
          {/* Logo */}
          <div className="col-start-1 row-start-1 md:col-span-1 flex items-center min-w-0">
            <Link to="/dashboard" aria-label="Immanuel Members Home" className="shrink-0">
              <img src={mainLogo} alt="Immanuel Downtown" className="h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain" />
            </Link>
          </div>

          {/* Mobile hamburger (top-right) */}
          <div className="col-start-2 row-start-1 md:hidden flex justify-end">
            <button
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="p-2 rounded-md border border-border/70 bg-surface/40 hover:bg-surface/60 active:scale-[0.98] transition"
              onClick={() => setMenuOpen(o => !o)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Nav */}
          <nav className="col-span-2 row-start-2 md:row-start-1 md:col-span-1 flex justify-center gap-4 text-sm">
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Dashboard</NavLink>
            <NavLink to="/groups" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Groups</NavLink>
            {isAdmin && <NavLink to="/admin/seed-groups" className={({isActive}) => isActive ? "navlink active" : "navlink"}>Admin</NavLink>}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex md:col-start-3 md:row-start-1 justify-end items-center gap-2">
            {user ? (
              <>
                <span className="text-sm text-text2">Hi{greetingName ? `, ${greetingName}` : ""}</span>
                <Link to="/profile" className="btn btn-outline btn-md">Profile</Link>
                <button className="btn btn-outline btn-md" onClick={async () => { await signOut(auth); navigate("/login", { replace: true }); }}>Sign out</button>
              </>
            ) : (
              loc.pathname !== "/login" && <Link to="/login" className="btn btn-outline btn-md">Sign in</Link>
            )}
          </div>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50">
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute top-2 right-2 w-64 rounded-xl border border-border bg-[var(--bg)] shadow-xl p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-text2">Menu</div>
                <button
                  className="p-2 rounded-md hover:bg-surface/60"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="mt-2 border-t border-border/60 pt-2 grid gap-2">
                {user ? (
                  <>
                    <Link to="/profile" className="btn btn-outline btn-sm" onClick={() => setMenuOpen(false)}>Profile</Link>
                    {isAdmin && <Link to="/admin/seed-groups" className="btn btn-outline btn-sm" onClick={() => setMenuOpen(false)}>Admin</Link>}
                    <button className="btn btn-outline btn-sm" onClick={async () => { setMenuOpen(false); await signOut(auth); navigate("/login", { replace: true }); }}>Sign out</button>
                  </>
                ) : (
                  loc.pathname !== "/login" && <Link to="/login" className="btn btn-outline btn-sm" onClick={() => setMenuOpen(false)}>Sign in</Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
