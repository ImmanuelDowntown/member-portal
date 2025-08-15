import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mainLogo from "@/assets/Header_Logo.png";

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

export default function Header(){
  const isStandalone = useStandalone();

  return (
    <>
      {/* Add safe-area padding only when the app is installed/standalone */}
      {isStandalone && (
        <style>{`
          [data-app-header]{
            padding-top: env(safe-area-inset-top);
            padding-top: constant(safe-area-inset-top);
          }
        `}</style>
      )}

      <header data-app-header className="w-full border-b border-border bg-[var(--bg)]">
        <div className="container py-2 md:py-3 flex items-center">
          <Link to="/login" aria-label="Immanuel Members Home" className="shrink-0">
            <img
              src={mainLogo}
              alt="Immanuel Downtown"
              className="h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>
        </div>
      </header>
    </>
  );
}
