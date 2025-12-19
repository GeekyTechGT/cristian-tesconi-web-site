import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/layout/CookieConsent';
import Home from '@/pages/Home';
import BooksPage from '@/pages/BooksPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Initialize with dark theme on first load
    const storedTheme = localStorage.getItem('theme-storage');
    if (!storedTheme) {
      setTheme('dark');
    }

    // Apply theme to document (Tailwind uses only 'dark' class)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, setTheme]);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-text-primary dark:text-light-text transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
