import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '@/components/shared/Card';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section bg-surface dark:bg-dark-bg pt-16 sm:pt-20 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            {t('contact.title')}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
        </div>
        <p className="text-center text-sm sm:text-base text-text-muted dark:text-text-light mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
          {t('contact.subtitle')}
        </p>

        <Card className="max-w-2xl mx-auto bg-surface dark:bg-dark-bg-elevated border-2 border-border dark:border-primary/20 shadow-2xl dark:shadow-primary/20">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-text-muted dark:text-text-light">{t('contact.email')}</p>
                <a href="mailto:cristian.tesconi@example.com" className="text-sm sm:text-lg font-semibold text-primary hover:text-primary-dark hover:font-bold hover:underline truncate block transition-all">
                  cristian.tesconi@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm text-text-muted dark:text-text-light">{t('contact.linkedin')}</p>
                <a
                  href="https://www.linkedin.com/in/cristian-tesconi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-lg font-semibold text-primary hover:text-primary-dark hover:font-bold hover:underline truncate block transition-all"
                >
                  linkedin.com/in/cristian-tesconi
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-text-muted dark:text-text-light">{t('contact.location')}</p>
                <p className="text-sm sm:text-lg font-semibold text-text-primary dark:text-surface">Italy</p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-border dark:border-border-dark">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white dark:text-darkBg font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105 text-sm sm:text-base"
              >
                {t('contact.getInTouch')}
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
