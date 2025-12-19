import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import HeroNew from '@/components/portfolio/HeroNew';
import AboutNew from '@/components/portfolio/AboutNew';
import ExperienceNew from '@/components/portfolio/ExperienceNew';
import SkillsNew from '@/components/portfolio/SkillsNew';
import Books from '@/components/portfolio/Books';
import Contact from '@/components/portfolio/Contact';
import { personalInfo } from '@/data/portfolioConfig';

export default function Home() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  return (
    <>
      <Helmet>
        <title>Cristian Tesconi - {personalInfo.title[currentLang]}</title>
        <meta name="description" content={personalInfo.bio[currentLang]} />
        <meta name="keywords" content="cristian tesconi, cristian.tesconi, ingegnere robotico, robotics engineer, automation engineer, SIL engineer, embedded software" />
        <link rel="canonical" href={window.location.href} />

        {/* Open Graph */}
        <meta property="og:title" content={`Cristian Tesconi - ${personalInfo.title[currentLang]}`} />
        <meta property="og:description" content={personalInfo.bio[currentLang]} />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": personalInfo.name,
            "jobTitle": personalInfo.title.en,
            "email": personalInfo.email,
            "telephone": personalInfo.phone,
            "url": window.location.origin,
            "sameAs": [
              personalInfo.linkedin,
              personalInfo.github
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": personalInfo.location.en
            }
          })}
        </script>
      </Helmet>

      <div>
        <HeroNew />
        <AboutNew />
        <ExperienceNew />
        <SkillsNew />
        <Books />
        <Contact />
      </div>
    </>
  );
}
