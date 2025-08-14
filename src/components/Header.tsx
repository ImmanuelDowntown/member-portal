import { Link } from "react-router-dom";
import mainLogo from "@/assets/Header_Logo.png";

export default function Header(){
  return (
    <header className="w-full border-b border-border bg-[var(--bg)]">
      <div className="container py-4 md:py-5 flex items-center">
        <Link to="/login" aria-label="Immanuel Members Home" className="shrink-0">
          <img
            src={mainLogo}
            alt="Immanuel Downtown"
            className="max-h-17 md:max-h-20 h-auto w-auto object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
