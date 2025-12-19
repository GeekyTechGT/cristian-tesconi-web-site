import { useTranslation } from 'react-i18next';
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
  expert: 'from-primary to-primary-dark',
  proficient: 'from-primary-dark to-primary-dimmed',
  intermediate: 'from-primary-dimmed to-primary-dark',
  basic: 'from-text-muted to-text-light'
};

export default function SkillsNew() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  const skillCategories = [
    { key: 'roboticsAutomation', data: skills.roboticsAutomation },
    { key: 'programming', data: skills.programming },
    { key: 'automotive', data: skills.automotive },
    { key: 'toolsFrameworks', data: skills.toolsFrameworks },
    { key: 'operatingSystems', data: skills.operatingSystems },
    { key: 'hardware', data: skills.hardware },
    { key: 'methodologies', data: skills.methodologies }
  ];

  return (
    <section id="skills" className="section bg-surface dark:bg-dark-bg-subtle pt-16 sm:pt-20 pb-16 sm:pb-20 border-b-2 border-border-subtle dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4">
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

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {skillCategories.map(({ key, data }) => {
            const Icon = categoryIcons[key] || Code;
            return (
              <div key={key} className="bg-surface dark:bg-dark-bg-elevated rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-border dark:border-primary/20 shadow-xl dark:shadow-primary/10">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-primary/30 to-primary/20 rounded-lg sm:rounded-xl">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-light-text">
                    {data.title[currentLang]}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {data.items.map((skill: any, index: number) => {
                    const skillName = typeof skill.name === 'object' ? skill.name[currentLang] : skill.name;
                    const skillDesc = typeof skill.description === 'object'
                      ? skill.description[currentLang]
                      : skill.description;
                    const proficiency = skill.proficiency || 'proficient';
                    const colorClass = proficiencyColors[proficiency] || proficiencyColors.proficient;

                    return (
                      <div
                        key={index}
                        className="group relative bg-surface dark:bg-surface-dark rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-border dark:border-primary/20 hover:border-primary dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/30 sm:hover:-translate-y-1"
                      >
                        {/* Proficiency badge */}
                        {skill.proficiency && (
                          <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${colorClass} text-white shadow-md`}>
                            {proficiency}
                          </div>
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
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

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
