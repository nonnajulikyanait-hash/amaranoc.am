import { create } from 'zustand';

const useFavoritesStore = create((set) => ({
  favoritesCount: 0,
  
  increment: () => set((state) => ({ favoritesCount: state.favoritesCount + 1 })),
  
  decrement: () => set((state) => ({ favoritesCount: Math.max(0, state.favoritesCount - 1) })),
}));

export default useFavoritesStore;