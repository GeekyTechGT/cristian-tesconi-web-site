import { useTranslation } from 'react-i18next';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '@/components/shared/Card';
import { books } from '@/data/portfolio';

export default function Books() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  return (
    <section id="books" className="section bg-surface dark:bg-dark-bg-subtle pt-16 sm:pt-20 pb-16 sm:pb-20 border-b-2 border-border-subtle dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            {t('books.title')}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
        </div>
        <p className="text-center text-sm sm:text-base text-text-muted dark:text-text-light mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
          {t('books.subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {books.slice(0, 3).map((book, index) => (
            <Card key={index} className="bg-surface dark:bg-dark-bg-elevated border-2 border-border dark:border-primary/20 shadow-xl dark:shadow-primary/10 hover:border-primary dark:hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden relative">
                {book.coverImage && (
                  <img
                    src={book.coverImage}
                    alt={book.title[currentLang]}
                    className="w-full h-full object-cover absolute inset-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
                <span className="text-5xl sm:text-6xl">📚</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 text-text-primary dark:text-surface">
                {book.title[currentLang]}
              </h3>

              <p className="text-xs sm:text-sm text-text-muted dark:text-text-light mb-3 sm:mb-4">
                {book.description[currentLang]}
              </p>

              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold text-sm sm:text-base"
              >
                {t('books.viewOnAmazon')}
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/books"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white dark:text-darkBg font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105 text-sm sm:text-base"
          >
            {t('books.learnMore')}
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
