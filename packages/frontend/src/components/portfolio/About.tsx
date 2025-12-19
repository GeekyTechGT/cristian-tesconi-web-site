import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          {t('about.title')}
        </h2>

        <Card>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-darkBg flex items-center justify-center text-6xl font-bold text-primary">
                  CT
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-text-secondary dark:text-text-light">
                {t('about.bio')}
              </p>

              <Button variant="primary" onClick={() => window.open('/personal/CV_CristianTesconi.pdf', '_blank')}>
                <Download className="mr-2 h-5 w-5" />
                {t('about.downloadCV')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
