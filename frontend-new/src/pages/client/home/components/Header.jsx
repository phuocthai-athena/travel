import { Phone, Mail, Facebook, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#00315C] text-white">
        <div className="container mx-auto px-30 py-3.5">
          <div className="flex items-center justify-between">
            {/* Contact Info */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <Phone className="size-4.5" />
                <span className="text-sm">1800 10 11 21</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4.5" />
                <span className="text-sm">InformationVtravel@gmail.com</span>
              </div>
            </div>

            {/* Account & Social */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Facebook className="size-4.5" />
                <Youtube className="size-4.5" />
                <Instagram className="size-4.5" />
              </div>
              <Link to="/login" className="font-bold text-base">
                TÀI KHOẢN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-30 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-end gap-2">
              <div className="flex flex-col items-center gap-2">
                <div className="text-[#00315C] font-bold text-xl">V-TRAVEL</div>
                <div className="text-[#00315C] text-xs">
                  YOUR JOURNEY PARTNER
                </div>
              </div>
            </Link>

            {/* Menu Items */}
            <nav className="flex items-center gap-15">
              <Link
                to="/"
                className="text-[#F27052] font-bold text-base hover:text-[#F27052] transition-colors"
              >
                TRANG CHỦ
              </Link>
              <Link
                to="/tours"
                className="text-[#00315C] font-bold text-base hover:text-[#F27052] transition-colors"
              >
                TOUR
              </Link>
              <Link
                to="/hotels"
                className="text-[#00315C] font-bold text-base hover:text-[#F27052] transition-colors"
              >
                KHÁCH SẠN
              </Link>
              <Link
                to="/travel-guide"
                className="text-[#00315C] font-bold text-base hover:text-[#F27052] transition-colors"
              >
                CẨM NANG DU LỊCH
              </Link>
              <Link
                to="/contact"
                className="text-[#00315C] font-bold text-base hover:text-[#F27052] transition-colors"
              >
                LIÊN HỆ
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
