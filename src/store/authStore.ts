import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types/auth.types";
import { useTaskStore } from "./taskStore";

interface AuthState {
  user: User | null;
  isHydrated: boolean;

  setUser: (user: User) => void;
  logout: () => void;
  setHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isHydrated: false,

      setUser: (user) => set({ user }),

      logout: () => {
        set({ user: null });

        // Clear tasks on logout (clean UX decision)
        useTaskStore.getState().clearTasks();
      },

      setHydrated: (state) => set({ isHydrated: state }),
    }),
    {
      name: "auth-storage",

      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
