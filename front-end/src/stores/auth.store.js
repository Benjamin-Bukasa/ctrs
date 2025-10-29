import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      // Connexion : recevoir user + token depuis ton backend
      login: (data) =>
        set({
          user: data.user,
          token: data.token,
          isAuthenticated: true,
        }),

      // Déconnexion : reset store
      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage", // nom dans localStorage
    }
  )
);
