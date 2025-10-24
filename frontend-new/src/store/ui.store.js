import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUIStore = create(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      loading: false,
      notification: null,

      toggleSidebar: () =>
        set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

      setLoading: (loading) => set({ loading }),

      showNotification: (notification) => set({ notification }),

      clearNotification: () => set({ notification: null }),
    }),
    {
      name: "ui-storage",
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
      }),
    }
  )
);
