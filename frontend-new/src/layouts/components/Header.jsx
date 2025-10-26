import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center px-[120px] py-4">
        {/* Logo */}
        <Link to="/" className="flex items-end gap-2">
          <div className="flex flex-col items-center gap-2">
            <div className="text-[#00315C] font-bold text-xl">V-TRAVEL</div>
            <div className="text-[#00315C] text-xs">YOUR JOURNEY PARTNER</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
