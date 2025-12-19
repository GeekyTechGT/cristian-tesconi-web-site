import { useLanguageStore } from '@/store/languageStore';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex items-center gap-2 bg-hover dark:bg-hover-dark rounded-lg p-1">
      <button
        onClick={() => setLanguage('it')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
          language === 'it'
            ? 'bg-primary text-white dark:text-dark-bg font-bold'
            : 'text-text-secondary dark:text-text-light hover:text-text-primary dark:hover:text-surface hover:font-bold'
        }`}
      >
        IT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-primary text-white dark:text-dark-bg font-bold'
            : 'text-text-secondary dark:text-text-light hover:text-text-primary dark:hover:text-surface hover:font-bold'
        }`}
      >
        EN
      </button>
    </div>
  );
}
