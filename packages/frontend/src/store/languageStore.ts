import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '../types';
import i18n from '../i18n/config';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'it',
      setLanguage: (language) => {
        set({ language });
        i18n.changeLanguage(language);
      },
    }),
    {
      name: 'language-storage',
    }
  )
);
