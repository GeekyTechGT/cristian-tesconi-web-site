import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import HeroNew from '@/components/portfolio/HeroNew';
import AboutNew from '@/components/portfolio/AboutNew';
import ExperienceNew from '@/components/portfolio/ExperienceNew';
import SkillsNew from '@/components/portfolio/SkillsNew';
import Publications from '@/components/portfolio/Publications';
import Books from '@/components/portfolio/Books';
import Contact from '@/components/portfolio/Contact';
import { personalInfo } from '@/data/portfolioConfig';

export default function Home() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';

  return (
    <>
      <Helmet>
        <title>Cristian Tesconi - {personalInfo.title[currentLang]} | FMI & ASAM Simulation Expert</title>
        <meta name="description" content={`${personalInfo.bio[currentLang]} - Specialista in simulazione multifisica, standard FMI (Functional Mock-up Interface) e conformità ASAM per l'automotive.`} />
        <meta name="keywords" content="cristian tesconi, cristian.tesconi, ingegnere robotico, robotics engineer, automation engineer, SIL engineer, embedded software, FMI standard, ASAM, multi-physics simulation, co-simulation, automotive simulation, model-based design, Modelica, Simulink, dSPACE, vehicle dynamics, control systems, robotica, automazione" />
        <meta name="author" content="Cristian Tesconi" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={currentLang} />
        <link rel="canonical" href="https://cristiantesconi.it" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cristiantesconi.it" />
        <meta property="og:title" content={`Cristian Tesconi - ${personalInfo.title[currentLang]}`} />
        <meta property="og:description" content={`${personalInfo.bio[currentLang]} - Expert in FMI, ASAM standards, and multi-physics simulation.`} />
        <meta property="og:site_name" content="Cristian Tesconi - Portfolio" />
        <meta property="og:locale" content={currentLang === 'it' ? 'it_IT' : 'en_US'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Cristian Tesconi - ${personalInfo.title[currentLang]}`} />
        <meta name="twitter:description" content={`${personalInfo.bio[currentLang]} - FMI & ASAM Simulation Expert`} />

        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Cristian Tesconi",
            "givenName": "Cristian",
            "familyName": "Tesconi",
            "alternateName": "cristian.tesconi",
            "jobTitle": personalInfo.title.en,
            "description": personalInfo.bio.en,
            "email": personalInfo.email,
            "telephone": personalInfo.phone,
            "url": "https://cristiantesconi.it",
            "sameAs": [
              personalInfo.linkedin,
              personalInfo.github,
              "https://cristiantesconi.it"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": personalInfo.location.en,
              "addressCountry": "IT"
            },
            "knowsAbout": [
              "Robotics Engineering",
              "Automation Engineering",
              "FMI Standard (Functional Mock-up Interface)",
              "ASAM Standards",
              "Multi-Physics Simulation",
              "Co-Simulation",
              "Model-Based Design",
              "Automotive Software",
              "Control Systems",
              "Embedded Systems",
              "Python Programming",
              "C/C++ Programming",
              "Artificial Intelligence"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Robotics and Automation Engineer",
              "occupationLocation": {
                "@type": "City",
                "name": personalInfo.location.en
              },
              "skills": "FMI, ASAM, Multi-Physics Simulation, Robotics, Automation, AI"
            }
          })}
        </script>

        {/* BreadcrumbList for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cristiantesconi.it"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://cristiantesconi.it#about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Experience",
                "item": "https://cristiantesconi.it#experience"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Skills",
                "item": "https://cristiantesconi.it#skills"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Publications",
                "item": "https://cristiantesconi.it#publications"
              }
            ]
          })}
        </script>
      </Helmet>

      <div>
        <HeroNew />
        <AboutNew />
        <ExperienceNew />
        <SkillsNew />
        <Publications />
        <Books />
        <Contact />
      </div>
    </>
  );
}
