import { Link } from "react-router-dom";
import mainLogo from "@/assets/Header_Logo.png";

export default function Header(){
  return (
    <header className="w-full border-b border-border bg-[var(--bg)]">
      <div className="container py-2 md:py-3 flex items-center">
        <Link to="/login" aria-label="Immanuel Members Home" className="shrink-0">
          <img
            src={mainLogo}
            alt="Immanuel Downtown"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
