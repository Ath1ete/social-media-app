import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  user: null | { id: string; name: string };
  login: (user: { id: string; name: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
