import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full h-15 bg-white">
      <div className="flex items-center justify-between px-30 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* Logo Icon - Placeholder for actual logo image */}
          <div className="w-[35px] h-[35px] flex items-center justify-center">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17.5" cy="17.5" r="17.5" fill="#F27052" />
              <path
                d="M17.5 8L20 14L26 14L21 18L23 24L17.5 20L12 24L14 18L9 14L15 14L17.5 8Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Logo Text */}
          <div className="flex flex-col justify-center">
            <div className="text-[#00315C] font-bold text-base leading-none uppercase tracking-wide">
              V-TRAVEL
            </div>
            <div className="text-[#00315C] text-[9px] leading-none mt-1">
              mọi chuyến đi bắt đầu từ đây
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navigation />
      </div>
    </header>
  );
}
