import { create } from 'zustand';

export const useLanguageStore = create((set) => ({
  language: localStorage.getItem('app_lang') || 'hy', // Սկզբնականը հայերենն է
  setLanguage: (lang) => {
    localStorage.setItem('app_lang', lang);
    set({ language: lang });
  },
}));