import create from "zustand";

const getStored = (key) => localStorage.getItem(key);

export const usePartialPersistentStore = create((set) => ({
  firstCount: 0,
  incrementFirstCount: () =>
    set((state) => ({ firstCount: state.firstCount + 1 })),
  secondCount: parseInt(getStored("secondCount"), 10) || 0,
  incrementSecondCount: () =>
    set((state) => {
      const newValue = state.secondCount + 1;
      localStorage.setItem("secondCount", newValue);
      return { secondCount: state.secondCount + 1 };
    })
}));
