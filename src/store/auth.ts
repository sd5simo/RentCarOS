import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  pseudo: string | null;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  setAuth: (user: User) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      
      // We no longer verify passwords here. The API does that.
      // This simply saves the real user to the browser session.
      setAuth: (user) => set({ isAuthenticated: true, user }),
      
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    { 
      name: "RentCar-auth",
    }
  )
);