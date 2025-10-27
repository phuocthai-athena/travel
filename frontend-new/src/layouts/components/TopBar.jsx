import { Phone, Mail, Facebook, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="w-full h-10 bg-[#00315C]">
      <div className="flex justify-between items-center px-[120px] py-3.5 h-full">
        {/* Contact Section */}
        <div className="flex items-center gap-10">
          {/* Hotline */}
          <div className="flex items-center gap-3">
            <Phone className="w-[18px] h-[18px] shrink-0 text-white" />
            <span className="text-sm leading-[130%] text-white font-normal">
              1800 10 11 21
            </span>
          </div>
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-[18px] h-[18px] shrink-0 text-white" />
            <span className="text-sm leading-[130%] text-white font-normal">
              InformationVtravel@gmail.com
            </span>
          </div>
        </div>

        {/* Account Section */}
        <div className="flex items-center gap-5">
          {/* Social Media */}
          <div className="flex items-center gap-3">
            <Facebook className="w-[18px] h-[18px] shrink-0 text-white" />
            <Youtube className="w-[18px] h-[18px] shrink-0 text-white" />
            <Instagram className="w-[18px] h-[18px] shrink-0 text-white" />
          </div>
          {/* Account Link */}
          <Link
            to="/login"
            className="font-bold text-base leading-[140%] text-white uppercase"
          >
            TÀI KHOẢN
          </Link>
        </div>
      </div>
    </div>
  );
}
