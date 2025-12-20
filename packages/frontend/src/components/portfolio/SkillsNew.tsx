import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Cpu, Wrench, Car, Microchip, Monitor, GitBranch } from 'lucide-react';
import { skills } from '@/data/portfolioConfig';

const categoryIcons: Record<string, React.ElementType> = {
  programming: Code,
  roboticsAutomation: Cpu,
  toolsFrameworks: Wrench,
  automotive: Car,
  hardware: Microchip,
  operatingSystems: Monitor,
  methodologies: GitBranch
};

const proficiencyColors: Record<string, string> = {
  expert: 'from-emerald-400 via-green-500 to-teal-500',
  proficient: 'from-cyan-400 via-blue-500 to-indigo-500',
  intermediate: 'from-amber-400 via-orange-500 to-yellow-500',
  basic: 'from-slate-400 via-gray-500 to-zinc-500'
};

const proficiencyGlow: Record<string, string> = {
  expert: 'shadow-emerald-500/50',
  proficient: 'shadow-cyan-500/50',
  intermediate: 'shadow-orange-500/50',
  basic: 'shadow-gray-500/30'
};

export default function SkillsNew() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  // Function to translate proficiency levels
  const translateProficiency = (level: string) => {
    return t(`skills.proficiency.${level}`, level);
  };

  const skillCategories = [
    { key: 'roboticsAutomation', data: skills.roboticsAutomation },
    { key: 'programming', data: skills.programming },
    { key: 'automotive', data: skills.automotive },
    { key: 'toolsFrameworks', data: skills.toolsFrameworks },
    { key: 'operatingSystems', data: skills.operatingSystems },
    { key: 'hardware', data: skills.hardware },
    { key: 'methodologies', data: skills.methodologies }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="section bg-surface dark:bg-dark-bg-subtle border-b-2 border-border-subtle dark:border-border-dark">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            {t('skills.title')}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
        </div>
        <p className="text-center text-sm sm:text-base text-text-muted dark:text-text-light mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
          {t('skills.subtitle')}
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 sm:space-y-8 md:space-y-12"
        >
          {skillCategories.map(({ key, data }) => {
            const Icon = categoryIcons[key] || Code;
            return (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-surface dark:bg-dark-bg-elevated rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-border dark:border-primary/20 shadow-xl dark:shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-primary/30 to-primary/20 rounded-lg sm:rounded-xl">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-light-text">
                    {data.title[currentLang]}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {data.items.map((skill: any, index: number) => {
                    const skillName = typeof skill.name === 'object' ? skill.name[currentLang] : skill.name;
                    const skillDesc = typeof skill.description === 'object'
                      ? skill.description[currentLang]
                      : skill.description;
                    const proficiency = skill.proficiency || 'proficient';
                    const colorClass = proficiencyColors[proficiency] || proficiencyColors.proficient;
                    const glowClass = proficiencyGlow[proficiency] || proficiencyGlow.proficient;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, type: 'spring', stiffness: 150 }}
                        whileHover={{ scale: 1.08, y: -8, rotateZ: 1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-surface dark:bg-surface-dark rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-border dark:border-primary/20 hover:border-primary dark:hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-primary/40 cursor-pointer"
                      >
                        {/* Proficiency badge */}
                        {skill.proficiency && (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`absolute top-2 sm:top-3 right-2 sm:right-3 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold bg-gradient-to-r ${colorClass} text-white shadow-lg ${glowClass} uppercase tracking-wider`}
                          >
                            {translateProficiency(proficiency)}
                          </motion.div>
                        )}

                        <h4 className="font-bold text-sm sm:text-base text-text-primary dark:text-surface mb-1 sm:mb-2 pr-16 sm:pr-20">
                          {skillName}
                        </h4>

                        {skillDesc && (
                          <p className="text-xs sm:text-sm text-text-secondary dark:text-text-light">
                            {skillDesc}
                          </p>
                        )}

                        {/* Decorative gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 dark:via-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-4">
          <div className="text-xs sm:text-sm text-text-muted dark:text-text-light w-full sm:w-auto text-center sm:text-left">
            <span className="font-semibold">{t('skills.legend', 'Livelli di competenza')}:</span>
          </div>
          {Object.entries(proficiencyColors).map(([level, colorClass]) => (
            <div key={level} className="flex items-center gap-1.5 sm:gap-2">
              <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${colorClass}`} />
              <span className="text-xs sm:text-sm text-text-muted dark:text-text-light capitalize">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
