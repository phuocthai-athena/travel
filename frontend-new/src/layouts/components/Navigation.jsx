import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "TRANG CHỦ" },
    { path: "/tours", label: "TOUR" },
    { path: "/hotels", label: "KHÁCH SẠN" },
    { path: "/travel-guide", label: "CẨM NANG DU LỊCH" },
    { path: "/contact", label: "LIÊN HỆ" },
  ];

  return (
    <nav className="flex items-center gap-[60px]">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`text-base font-bold transition-colors ${
            location.pathname === item.path
              ? "text-[#F27052]"
              : "text-[#00315C] hover:text-[#F27052]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
