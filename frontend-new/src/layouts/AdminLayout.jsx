import { Outlet } from "react-router-dom";
import Sidebar from "@/components/admin/Sidebar";
import { useUIStore } from "@/store/ui.store";
import { cn } from "@/lib/utils";

export default function AdminLayout() {
  const sidebarCollapsed = useUIStore((state) => state.sidebarCollapsed);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main
        className={cn(
          "transition-all duration-300",
          sidebarCollapsed ? "ml-20" : "ml-64"
        )}
      >
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-16 border-b border-gray-200 bg-white px-6 shadow-sm">
          <div className="flex h-full items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              Travel Management System
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
