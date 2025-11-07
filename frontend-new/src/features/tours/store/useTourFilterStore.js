import { create } from "zustand";

export const useTourFilterStore = create((set) => ({
  filters: {
    departure: "",
    destination: "",
    days: "",
    categories: {
      all: true,
      holiday: false,
      oneDay: false,
      short: false,
      experience: false,
      relax: false,
    },
    date: null,
    priceRange: [0, 22000000],
    rating: null,
  },
  pagination: {
    page: 1,
    limit: 12,
  },

  // Actions
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),
  setCategory: (key) =>
    set((state) => ({
      filters: {
        ...state.filters,
        categories: Object.fromEntries(
          Object.keys(state.filters.categories).map((k) => [k, k === key])
        ),
      },
    })),
  resetFilters: () =>
    set((state) => ({
      filters: {
        ...state.filters,
        departure: "",
        destination: "",
        days: "",
        categories: Object.fromEntries(
          Object.keys(state.filters.categories).map((k) => [k, false])
        ),
        date: null,
        priceRange: [0, 22000000],
        rating: null,
      },
      pagination: { ...state.pagination, page: 1 },
    })),
  setPage: (page) =>
    set((state) => ({
      pagination: { ...state.pagination, page },
    })),
}));
