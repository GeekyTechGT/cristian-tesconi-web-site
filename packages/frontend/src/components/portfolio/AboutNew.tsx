import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, MapPin, Languages } from 'lucide-react';
import Card from '@/components/shared/Card';
import { personalInfo, education, languages as langs } from '@/data/portfolioConfig';

export default function AboutNew() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  return (
    <section id="about" className="section bg-surface dark:bg-dark-bg-subtle pt-16 sm:pt-20 pb-16 sm:pb-20 border-b-2 border-border-subtle dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            {t('about.title')}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Main bio */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-surface dark:bg-dark-bg-elevated border-2 border-border dark:border-primary/20 shadow-xl dark:shadow-primary/5">
              <p className="text-sm sm:text-base text-text-secondary dark:text-text-light leading-relaxed mb-4 sm:mb-6">
                {personalInfo.bio[currentLang]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary/40 dark:to-secondary/40 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary dark:text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary dark:text-text-light">{t('contact.location')}</p>
                    <p className="font-semibold text-text-primary dark:text-surface">
                      {personalInfo.location[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary/40 dark:to-secondary/40 rounded-lg">
                    <Languages className="h-5 w-5 text-primary dark:text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary dark:text-text-light">{t('about.languages', 'Lingue')}</p>
                    <p className="font-semibold text-text-primary dark:text-surface">
                      {langs.map(l => l.name).join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick stats */}
          <div className="space-y-4">
            <Card className="bg-surface dark:bg-dark-bg-elevated bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40 dark:border-primary/30 shadow-lg shadow-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-text-primary dark:text-light-text">{t('about.education', 'Formazione')}</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">
                {education[0].degree[currentLang].split(' ')[0]}
              </p>
              <p className="text-sm text-text-muted dark:text-text-light">
                {education[0].institution[currentLang]}
              </p>
              <p className="text-xs text-primary font-semibold mt-2">
                {education[0].grade}
              </p>
            </Card>

            <Card className="bg-surface dark:bg-dark-bg-elevated bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40 dark:border-primary/30 shadow-lg shadow-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-text-primary dark:text-light-text">{t('about.experience', 'Esperienza')}</h3>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">6+</p>
              <p className="text-sm text-text-muted dark:text-text-light">
                {t('about.yearsExperience', 'Anni di esperienza')}
              </p>
            </Card>
          </div>
        </div>

        {/* Education details */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-light-text">
              {t('about.educationDetails', 'Percorso Formativo')}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
          </div>

          {education.map((edu, index) => (
            <Card key={index} className="bg-surface dark:bg-dark-bg-elevated border-2 border-border dark:border-primary/30 border-l-4 border-l-primary dark:border-l-primary text-sm sm:text-base hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/50 transition-all shadow-lg dark:shadow-primary/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-text-primary dark:text-surface mb-1">
                    {edu.degree[currentLang]}
                  </h4>
                  <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                    {edu.institution[currentLang]}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-sm text-text-secondary dark:text-text-light">{edu.period}</p>
                  {edu.grade && (
                    <p className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{edu.grade}</p>
                  )}
                </div>
              </div>

              {edu.thesis && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-text-secondary dark:text-text-light mb-1 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                    {t('about.thesis', 'Tesi')}:
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-light italic">
                    "{edu.thesis[currentLang]}"
                  </p>
                </div>
              )}

              {edu.courses && edu.courses[currentLang] && (
                <div>
                  <p className="text-sm font-semibold text-text-secondary dark:text-text-light mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                    {t('about.mainCourses', 'Principali corsi seguiti')}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses[currentLang].slice(0, 6).map((course, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-gradient-to-r from-hover to-hover dark:from-surface-dark dark:to-surface-dark rounded-lg text-text-secondary dark:text-text-light font-medium border border-border dark:border-border-dark"
                      >
                        {course}
                      </span>
                    ))}
                    {edu.courses[currentLang].length > 6 && (
                      <span className="text-xs px-3 py-1.5 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/40 dark:to-secondary/40 rounded-lg text-primary dark:text-secondary font-bold border border-primary/40 dark:border-secondary/40">
                        +{edu.courses[currentLang].length - 6} {t('about.more', 'altri')}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
