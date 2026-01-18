import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: { name: '', email: '' },
  setUser: (newUser) => set({ user: newUser }),
}));
