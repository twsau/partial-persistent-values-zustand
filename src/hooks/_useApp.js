import create from "zustand";
import { persist } from "zustand/middleware";

export const useApp = create(
  persist(
    (set) => ({
      count: 0,
      storedCount: 0,
      incrementCount: () => set((state) => ({ count: state.count + 1 })),
      incrementStoredCount: () =>
        set((state) => ({ storedCount: state.storedCount + 1 }))
    }),
    {
      partialize: (state) => ({ storedCount: state.storedCount })
    }
  )
);
