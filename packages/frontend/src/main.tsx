import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './i18n/config';
import './styles/index.css';

// Initialize dark theme immediately
const storedTheme = localStorage.getItem('theme-storage');
if (!storedTheme) {
  // First time user - set dark theme as default
  document.documentElement.classList.add('dark');
} else {
  // Existing user - apply stored theme
  try {
    const { state } = JSON.parse(storedTheme);
    if (state?.theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    // If parsing fails, default to dark
    document.documentElement.classList.add('dark');
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
