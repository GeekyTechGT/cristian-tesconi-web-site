import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import Button from '@/components/shared/Button';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShow(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie-consent', 'declined', { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-dark-bg/95 via-dark-bg/98 to-dark-bg/95 backdrop-blur-md border-t border-primary/40 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-base font-semibold text-surface">🍪 {t('cookies.title')}</h3>
              </div>
              <p className="text-sm text-light-text/90 leading-relaxed">
                {t('cookies.message')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="min-w-[120px] justify-center hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 transition-all"
              >
                {t('cookies.decline')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAccept}
                className="min-w-[120px] justify-center shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                ✓ {t('cookies.accept')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
