import { useTranslation } from 'react-i18next';
import { Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-bg text-light-text py-8 border-t border-border/10 dark:border-border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Cristian Tesconi. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/cristian-tesconi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-hover-dark transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a
              href="mailto:cristian.tesconi@example.com"
              className="p-2 rounded-lg hover:bg-hover-dark transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://github.com/cristiantesconi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-hover-dark transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
