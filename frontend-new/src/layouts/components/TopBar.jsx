import { Phone, Mail, Facebook, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="container mx-auto flex justify-between items-center px-[120px] py-3.5">
      <div className="flex space-x-10 items-center">
        <div className="flex items-center space-x-3">
          <Phone className="w-[18px] h-[18px] shrink-0" />
          <span className="text-sm">1800 10 11 21</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-[18px] h-[18px] shrink-0" />
          <span className="text-sm">InformationVtravel@gmail.com</span>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-3">
          <Facebook className="w-[18px] h-[18px] shrink-0" />
          <Youtube className="w-[18px] h-[18px] shrink-0" />
          <Instagram className="w-[18px] h-[18px] shrink-0" />
        </div>
        <Link to="/login" className="font-bold text-base uppercase">
          TÀI KHOẢN
        </Link>
      </div>
    </div>
  );
}
