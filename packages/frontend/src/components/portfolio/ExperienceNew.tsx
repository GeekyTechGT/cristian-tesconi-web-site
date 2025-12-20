import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import Card from '@/components/shared/Card';
import { experiences } from '@/data/portfolioConfig';

export default function ExperienceNew() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section id="experience" className="section bg-surface dark:bg-dark-bg border-b-2 border-border-subtle dark:border-border-dark">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            {t('experience.title')}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
        </div>
        <p className="text-center text-sm sm:text-base text-text-muted dark:text-text-light mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
          {t('experience.subtitle', 'Il mio percorso professionale nel settore automotive e robotica')}
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line on the left */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-0 top-0 w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30 shadow-lg shadow-primary/20"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 sm:space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                  className="absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-primary to-primary-dark rounded-full border-3 border-dark-bg shadow-xl shadow-primary/50 z-10 animate-pulse-slow"
                />

                {/* Content */}
                <div className="w-full">
                  <Card className={`bg-surface dark:bg-dark-bg-elevated border-2 border-l-4 text-sm sm:text-base transition-all ${exp.current ? 'border-primary dark:border-primary/60 border-l-primary bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent shadow-2xl shadow-primary/40 ring-2 ring-primary/20 dark:ring-primary/30' : 'border-border dark:border-primary/30 border-l-primary/60 dark:border-l-primary/40 hover:border-primary/60 dark:hover:border-primary/50 shadow-lg dark:shadow-primary/10 hover:shadow-xl hover:shadow-primary/20'}`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                          <h3 className="text-lg sm:text-xl font-bold text-text-primary dark:text-surface">
                            {exp.role[currentLang]}
                          </h3>
                        </div>
                        <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-text-secondary dark:text-text-light">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-primary" />
                            <span>{exp.location}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-primary" />
                            <span>{exp.period}</span>
                          </span>
                        </div>
                      </div>
                      {exp.current && (
                        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                          <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary via-primary-light to-primary text-white dark:text-dark-bg text-xs sm:text-sm font-bold rounded-full whitespace-nowrap shadow-xl shadow-primary/60 animate-pulse-slow border-2 border-primary-light">
                            ✦ {t('experience.current', 'Posizione Attuale')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary dark:text-text-light mb-4 leading-relaxed">
                      {exp.description[currentLang]}
                    </p>

                    {/* Responsibilities */}
                    {exp.responsibilities && (
                      <div className="mb-4">
                        <p className="font-semibold text-text-primary dark:text-surface mb-3 text-sm flex items-center gap-2">
                          <span className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                          {t('experience.responsibilities', 'Responsabilità principali')}:
                        </p>
                        <ul className="space-y-2">
                          {exp.responsibilities[currentLang].slice(0, 3).map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary dark:text-text-light">
                              <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies && (
                      <div>
                        <p className="font-semibold text-text-primary dark:text-surface mb-3 text-sm flex items-center gap-2">
                          <span className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                          {t('experience.technologies', 'Tecnologie')}:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 border border-primary/30 dark:border-primary/40 rounded-lg text-xs font-semibold text-text-secondary dark:text-text-light hover:from-primary/30 hover:to-secondary/30 dark:hover:from-primary/40 dark:hover:to-secondary/40 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
