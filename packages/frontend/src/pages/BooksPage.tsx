import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ExternalLink, Home } from 'lucide-react';
import Card from '@/components/shared/Card';
import { booksData } from '@/data/books';

export default function BooksPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  console.log('BooksPage - booksData:', booksData);
  console.log('BooksPage - currentLang:', currentLang);

  return (
    <>
      <Helmet>
        <title>Cristian Tesconi - {t('books.title')}</title>
        <meta name="description" content={t('books.description')} />
      </Helmet>

      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <section className="section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-4 sm:mb-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm sm:text-base"
              >
                <Home className="h-4 w-4 flex-shrink-0" />
                <span>{t('common.back')} Home</span>
              </Link>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-primary px-4">
              {t('books.title')}
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
              {t('books.subtitle')}
            </p>

            {booksData.length === 0 && (
              <div className="text-center py-8 sm:py-12">
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                  Nessun libro disponibile
                </p>
              </div>
            )}

            {booksData.length > 0 && (
              <div className="text-center py-3 sm:py-4 mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-500">
                  Trovati {booksData.length} libri
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {booksData && booksData.map((book, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden relative">
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

                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {book.title[currentLang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 flex-grow">
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
          </div>
        </section>
      </div>
    </>
  );
}
