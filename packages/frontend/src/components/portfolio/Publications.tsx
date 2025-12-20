import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Users, Tag } from 'lucide-react';
import { useState } from 'react';
import publicationsConfig from '@/../../../config/publications.config.json';

interface Publication {
  id: string;
  title: {
    en: string;
    it: string;
  };
  authors: string[];
  year: number;
  conference?: string;
  journal?: string;
  abstract: {
    en: string;
    it: string;
  };
  url: string;
  tags: string[];
  category: string;
}

export default function Publications() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const publications = publicationsConfig.publications as Publication[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="publications" className="section bg-surface dark:bg-dark-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-50">
        <motion.div
          className="absolute w-96 h-96 top-0 right-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-80 h-80 bottom-0 left-0 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-primary/10 rounded-full border border-primary/30">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-4xl font-bold text-gradient">
              {t('publications.title')}
            </h2>
          </div>
          <p className="text-text-muted dark:text-text-light mt-6 max-w-3xl mx-auto text-lg">
            {t('publications.subtitle')}
          </p>
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {publications.map((pub) => (
            <motion.article
              key={pub.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(pub.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.05, y: -10, rotate: [0, -1, 1, 0] }}
              className="group relative bg-white/90 dark:bg-gradient-to-br dark:from-surface-dark/70 dark:to-surface-dark/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50 dark:border-primary/30 hover:border-primary hover:border-3 dark:hover:border-primary transition-all duration-500 overflow-hidden cursor-pointer shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(22,255,187,0.5)] dark:shadow-[0_0_40px_rgba(22,255,187,0.15)] dark:hover:shadow-[0_0_80px_rgba(22,255,187,0.4)]"
              style={{
                boxShadow: '0 10px 50px -12px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={hoveredId === pub.id ? {
                  background: [
                    'linear-gradient(135deg, rgba(22,255,187,0.05) 0%, transparent 50%, rgba(41,221,218,0.05) 100%)',
                    'linear-gradient(225deg, rgba(22,255,187,0.05) 0%, transparent 50%, rgba(41,221,218,0.05) 100%)',
                    'linear-gradient(135deg, rgba(22,255,187,0.05) 0%, transparent 50%, rgba(41,221,218,0.05) 100%)'
                  ]
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-xs font-black rounded-full shadow-lg shadow-primary/50"
                  >
                    {pub.category.toUpperCase()}
                  </motion.span>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm font-semibold">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{pub.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {pub.title[currentLang]}
                </h3>

                {/* Authors */}
                <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-200">
                  <Users className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">{pub.authors.join(', ')}</p>
                </div>

                {/* Venue (Conference/Journal) */}
                {pub.conference && (
                  <p className="text-sm text-primary dark:text-primary mb-4 font-semibold">
                    📍 {pub.conference}
                  </p>
                )}
                {pub.journal && (
                  <p className="text-sm text-primary dark:text-primary mb-4 font-semibold">
                    📰 {pub.journal}
                  </p>
                )}

                {/* Abstract */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3 font-normal">
                  {pub.abstract[currentLang]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 dark:bg-surface-darker/50 text-primary text-xs rounded-lg border border-primary/30 font-medium"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <motion.a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl shadow-2xl shadow-primary/50 hover:shadow-primary/80 dark:shadow-[0_0_30px_rgba(22,255,187,0.4)] dark:hover:shadow-[0_0_50px_rgba(22,255,187,0.7)] transition-all duration-300"
                >
                  <ExternalLink className="h-5 w-5 group-hover:rotate-45 dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-transform" />
                  <span className="dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {t('publications.readPaper')}
                  </span>
                </motion.a>
              </div>

              {/* Corner Accent */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
                animate={hoveredId === pub.id ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {publications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <BookOpen className="h-20 w-20 text-primary/30 mx-auto mb-4" />
            <p className="text-text-muted text-lg">
              {t('publications.noPublications')}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
