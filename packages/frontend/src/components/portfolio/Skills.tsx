import { useTranslation } from 'react-i18next';
import { skills } from '@/data/portfolio';
import { Code, Cpu, Brain, Server, Gauge, Settings } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skillIcons: Record<string, React.ElementType> = {
  'Python': Code,
  'C/C++': Code,
  'Robotics': Cpu,
  'Automation': Settings,
  'Artificial Intelligence': Brain,
  'Linux Administration': Server,
  'Windows Administration': Server,
  'Embedded Systems': Cpu,
  'Control Systems': Gauge,
  'Simulation & Modeling': Brain
};

export default function Skills() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          {t('skills.title')}
        </h2>
        <p className="text-center text-text-muted dark:text-text-light mb-12 max-w-2xl mx-auto">
          {t('skills.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.name] || Code;
            return (
              <div
                key={index}
                className="group relative glass p-6 rounded-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary dark:text-surface">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-primary font-bold">{skill.level}%</span>
                  </div>
                </div>

                <div className="relative w-full bg-hover dark:bg-hover-dark rounded-full h-2.5 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out rounded-full"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
