import { create } from 'zustand';

const useFavouritesStore = create((set) => ({
  favourites: [],

  toggleFavourite: (item) =>
    set((state) => {
      const exists = state.favourites.some((fav) => fav.id === item.id);
      if (exists) {
        return { favourites: state.favourites.filter((fav) => fav.id !== item.id) };
      } else {
        return { favourites: [...state.favourites, item] };
      }
    }),
}));

export default useFavouritesStore;