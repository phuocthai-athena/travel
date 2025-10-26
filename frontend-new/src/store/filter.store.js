import { create } from "zustand";

export const useFilterStore = create((set) => ({
  searchTerm: "",
  category: "all",
  priceRange: [0, 10000],
  sortBy: "newest",

  setSearchTerm: (searchTerm) => set({ searchTerm }),

  setCategory: (category) => set({ category }),

  setPriceRange: (priceRange) => set({ priceRange }),

  setSortBy: (sortBy) => set({ sortBy }),

  resetFilters: () =>
    set({
      searchTerm: "",
      category: "all",
      priceRange: [0, 10000],
      sortBy: "newest",
    }),
}));
