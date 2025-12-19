import { useTranslation } from 'react-i18next';
import { ArrowRight, Download, Mail, Linkedin, Phone } from 'lucide-react';
import { personalInfo } from '@/data/portfolioConfig';

export default function HeroNew() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface dark:bg-dark-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-primary font-semibold text-base sm:text-lg mb-3 sm:mb-4 animate-fade-in">
            {t('hero.greeting')}
          </p>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 animate-slide-up px-2">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-text-light mb-4 sm:mb-6 px-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {personalInfo.title[currentLang]}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-text-light max-w-3xl mx-auto mb-6 sm:mb-8 px-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {personalInfo.subtitle[currentLang]}
          </p>

          {/* Contact info quick links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-surface-darker/50 hover:bg-surface-darker border border-border-dark hover:border-primary/50 transition-all text-text-light hover:text-white dark:hover:text-primary hover:font-bold text-sm sm:text-base"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="hidden md:inline truncate">{personalInfo.email}</span>
              <span className="md:hidden">Email</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-surface-darker/50 hover:bg-surface-darker border border-border-dark hover:border-primary/50 transition-all text-text-light hover:text-white dark:hover:text-primary hover:font-bold text-sm sm:text-base"
            >
              <Linkedin className="h-4 w-4 flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-surface-darker/50 hover:bg-surface-darker border border-border-dark hover:border-primary/50 transition-all text-text-light hover:text-white dark:hover:text-primary hover:font-bold text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span className="hidden sm:inline">{personalInfo.phone}</span>
              <span className="sm:hidden">Chiama</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white dark:text-darkBg font-semibold rounded-lg hover:opacity-90 hover:font-bold transition-all hover:scale-105 shadow-lg shadow-primary/50 text-sm sm:text-base"
            >
              {t('hero.viewPortfolio')}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <a
              href={personalInfo.cvDownloadUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:text-dark-bg hover:font-bold transition-all hover:scale-105 bg-surface-darker/50 backdrop-blur-sm text-sm sm:text-base"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              {t('about.downloadCV')}
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="mt-12 sm:mt-14 md:mt-16 animate-bounce hidden sm:block mx-auto hover:scale-110 transition-transform cursor-pointer group"
            aria-label="Scroll to content"
          >
            <div className="w-6 h-10 border-2 border-primary/50 group-hover:border-primary rounded-full mx-auto flex items-start justify-center p-2 transition-colors">
              <div className="w-1 h-2 bg-primary rounded-full" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
