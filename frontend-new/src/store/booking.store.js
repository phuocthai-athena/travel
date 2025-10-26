import { create } from "zustand";

export const useBookingStore = create((set) => ({
  selectedTour: null,
  numberOfPeople: 1,
  selectedDate: null,
  extras: [],

  setSelectedTour: (tour) => set({ selectedTour: tour }),

  setNumberOfPeople: (numberOfPeople) => set({ numberOfPeople }),

  setSelectedDate: (selectedDate) => set({ selectedDate }),

  addExtra: (extra) =>
    set((state) => ({
      extras: [...state.extras, extra],
    })),

  removeExtra: (extraId) =>
    set((state) => ({
      extras: state.extras.filter((e) => e.id !== extraId),
    })),

  clearBooking: () =>
    set({
      selectedTour: null,
      numberOfPeople: 1,
      selectedDate: null,
      extras: [],
    }),
}));
