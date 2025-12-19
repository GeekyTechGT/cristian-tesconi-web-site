import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import { professionalExperience } from '@/data/portfolio';

export default function Experience() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  return (
    <section id="experience" className="section bg-light-bg dark:bg-surface-darker">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          {t('experience.title')}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-8">
            {professionalExperience.map((exp, index) => (
              <div key={index} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-darkBg dark:border-surface-darker" />

                <div className="glass p-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-text-primary dark:text-surface">
                        {exp.role[currentLang]}
                      </h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-text-muted dark:text-text-light">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary dark:text-text-light">{exp.description[currentLang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
