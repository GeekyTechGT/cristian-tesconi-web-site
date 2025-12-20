import appConfig from '../../config/app.config.json';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors - using CSS variables for light/dark mode switch
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-light': 'rgb(var(--color-primary-light) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
        'primary-dimmed': 'rgb(var(--color-primary-dimmed) / <alpha-value>)',
        'primary-light-mode': appConfig.theme.colors.primaryLightMode,
        'primary-light-mode-dark': appConfig.theme.colors.primaryLightModeDark,
        'primary-light-mode-light': appConfig.theme.colors.primaryLightModeLight,
        secondary: 'rgb(var(--color-primary) / <alpha-value>)',
        'secondary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',

        // Background colors - Sistema a 3 livelli
        'dark-bg': appConfig.theme.colors.darkBg,
        'dark-bg-elevated': appConfig.theme.colors.darkBgElevated,
        'dark-bg-subtle': appConfig.theme.colors.darkBgSubtle,
        'light-bg': appConfig.theme.colors.lightBg,
        'light-bg-elevated': appConfig.theme.colors.lightBgElevated,
        'light-bg-subtle': appConfig.theme.colors.lightBgSubtle,
        darkBg: appConfig.theme.colors.darkBg,
        lightBg: appConfig.theme.colors.lightBg,

        // Text colors
        'light-text': appConfig.theme.colors.lightText,
        'dark-text': appConfig.theme.colors.darkText,
        'text-primary': appConfig.theme.colors.textPrimary,
        'text-secondary': appConfig.theme.colors.textSecondary,
        'text-muted': appConfig.theme.colors.textMuted,
        'text-light': appConfig.theme.colors.textLight,
        lightText: appConfig.theme.colors.lightText,

        // Surface colors
        surface: appConfig.theme.colors.surface,
        'surface-dark': appConfig.theme.colors.surfaceDark,
        'surface-darker': appConfig.theme.colors.surfaceDarker,

        // Border colors
        border: appConfig.theme.colors.border,
        'border-dark': appConfig.theme.colors.borderDark,
        'border-subtle': appConfig.theme.colors.borderSubtle,
        'border-light': appConfig.theme.colors.borderLight,
        'light-border': appConfig.theme.colors.borderLight,

        // Hover states
        hover: appConfig.theme.colors.hover,
        'hover-dark': appConfig.theme.colors.hoverDark,

        // Semantic colors
        accent: appConfig.theme.colors.accent,
        error: appConfig.theme.colors.error,
        warning: appConfig.theme.colors.warning,
        info: appConfig.theme.colors.info,
        success: appConfig.theme.colors.success,
      },
      fontFamily: {
        sans: appConfig.theme.fonts.sans,
        mono: appConfig.theme.fonts.mono,
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
