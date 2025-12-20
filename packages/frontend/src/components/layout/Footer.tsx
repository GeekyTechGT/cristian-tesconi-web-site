import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, Github } from 'lucide-react';
import { personalInfo } from '@/data/portfolioConfig';

export default function Footer() {
  const { t } = useTranslation();

  const socialIcons = [
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-400',
      shadow: 'hover:shadow-blue-500/50',
      external: true
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      gradient: 'from-purple-600 to-pink-500',
      shadow: 'hover:shadow-purple-500/50',
      external: false
    },
    {
      icon: Github,
      href: personalInfo.github,
      label: 'GitHub',
      gradient: 'from-gray-800 to-gray-600',
      shadow: 'hover:shadow-gray-500/50',
      external: true
    }
  ];

  return (
    <footer className="relative bg-surface dark:bg-dark-bg text-gray-900 dark:text-light-text py-12 border-t-4 border-primary/20 dark:border-primary/40 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 dark:from-primary/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-secondary/20 dark:from-secondary/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            © {new Date().getFullYear()} {personalInfo.name}. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                className={`group p-4 rounded-2xl bg-white/90 dark:bg-surface-darker backdrop-blur-lg border-2 border-white/50 dark:border-border-dark hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-xl ${social.shadow}`}
                aria-label={social.label}
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                }}
              >
                <social.icon className={`h-6 w-6 text-gray-700 dark:text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${social.gradient} group-hover:bg-clip-text transition-all duration-300 group-hover:rotate-12`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

