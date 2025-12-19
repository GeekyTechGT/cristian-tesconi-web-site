import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, BookOpen } from 'lucide-react';
import Button from '@/components/shared/Button';

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-light-bg dark:bg-dark-bg">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-light-bg to-primary/10 dark:from-dark-bg dark:via-dark-bg dark:to-primary/20 animate-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-text-primary dark:text-light-text">Cristian </span>
          <span className="text-primary-dark dark:text-primary">Tesconi</span>
        </h1>

        <p className="text-2xl md:text-3xl text-text-secondary dark:text-light-text mb-8 animate-fade-in-delay">
          {t('hero.title')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <Button variant="primary" size="lg" onClick={scrollToAbout}>
            {t('hero.viewPortfolio')}
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate('/blog')}>
            <BookOpen className="mr-2 h-5 w-5" />
            {t('hero.viewBlog')}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
}
