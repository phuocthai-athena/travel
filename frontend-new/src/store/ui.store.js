import { create } from "zustand";

export const useUIStore = create((set) => ({
  sidebarOpen: true,
  loading: false,
  notification: null,

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  setLoading: (loading) => set({ loading }),

  showNotification: (notification) => set({ notification }),

  clearNotification: () => set({ notification: null }),
}));
