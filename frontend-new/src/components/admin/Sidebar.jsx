import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Newspaper,
  Users,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { useUIStore } from "@/store/ui.store";
import { useAuthStore } from "@/store/auth.store";
import { useLogout } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    title: "Tours",
    icon: Map,
    path: "/admin/tours",
  },
  {
    title: "News",
    icon: Newspaper,
    path: "/admin/news",
  },
  {
    title: "Users",
    icon: Users,
    path: "/admin/users",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  const user = useAuthStore((state) => state.user);
  const { mutate: logout } = useLogout();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-gray-900 text-white transition-all duration-300",
        sidebarCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between border-b border-gray-800 px-4">
        {!sidebarCollapsed && (
          <h1 className="text-xl font-bold text-blue-400">Admin Panel</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 hover:bg-gray-800 transition-colors"
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* User Info */}
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold">
            {user?.email?.[0]?.toUpperCase() || "A"}
          </div>
          {!sidebarCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{user?.email}</p>
              <p className="text-xs text-gray-400 capitalize">{user?.role}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white",
                sidebarCollapsed && "justify-center"
              )}
              title={sidebarCollapsed ? item.title : ""}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!sidebarCollapsed && (
                <span className="font-medium">{item.title}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-800 p-4">
        <button
          onClick={() => logout()}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-gray-300 transition-colors hover:bg-red-600 hover:text-white",
            sidebarCollapsed && "justify-center"
          )}
          title={sidebarCollapsed ? "Logout" : ""}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!sidebarCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
