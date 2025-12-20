import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail, Linkedin, Phone, Sparkles, Cpu, Cog, Zap, GitBranch } from 'lucide-react';
import { personalInfo } from '@/data/portfolioConfig';
import uiConfig from '@/../../../config/ui.config.json';

export default function HeroNew() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';
  const { scrollY } = useScroll();

  // Force reload of config - timestamp: 2025-12-20
  console.log('Background Image URL:', uiConfig.hero.backgroundImage);

  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
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
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface dark:bg-dark-bg tech-grid-bg">
      {/* Background image for simulation/FMI/complex systems */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-25"
        style={{ backgroundImage: `url('${uiConfig.hero.backgroundImage}')` }}
      />

      {/* Vibrant gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-black/60 dark:via-black/30 dark:to-black/60" />

      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute w-96 h-96 -top-48 -left-48 bg-gradient-to-br from-emerald-500/20 via-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute w-96 h-96 -bottom-48 -right-48 bg-gradient-to-tl from-cyan-500/20 via-secondary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { Icon: Cpu, x: '10%', y: '20%', delay: 0, duration: 8 },
          { Icon: Cog, x: '85%', y: '15%', delay: 1, duration: 10 },
          { Icon: Zap, x: '15%', y: '70%', delay: 0.5, duration: 7 },
          { Icon: GitBranch, x: '80%', y: '75%', delay: 1.5, duration: 9 },
        ].map(({ Icon, x, y, delay, duration }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.15, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: 'easeInOut'
            }}
          >
            <Icon className="h-16 w-16 sm:h-24 sm:w-24 text-primary" />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting with icon */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-3 sm:mb-4 w-full px-4">
            <motion.div
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <Sparkles className="h-5 w-5 text-primary" />
            </motion.div>
            <p className="text-primary font-bold text-base sm:text-lg whitespace-nowrap">
              {t('hero.greeting')}
            </p>
          </motion.div>

          {/* Name with dramatic entrance */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 px-2"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.7), 0 4px 20px rgba(0, 0, 0, 0.5)' }}
          >
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>

          {/* Title with typing effect appearance */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-text-light mb-4 sm:mb-6 px-4 drop-shadow-lg"
          >
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 1, delay: 0.8 }}
              className="inline-block px-4 py-2 bg-white/90 dark:bg-transparent backdrop-blur-md rounded-2xl border-2 border-white/50 dark:border-transparent shadow-xl dark:shadow-none"
            >
              {personalInfo.title[currentLang]}
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-text-light max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
          >
            <span className="inline-block px-6 py-4 bg-white/95 dark:bg-transparent backdrop-blur-lg rounded-2xl border-2 border-white/60 dark:border-transparent shadow-2xl dark:shadow-none font-semibold leading-relaxed">
              {personalInfo.subtitle[currentLang]}
            </span>
          </motion.p>

          {/* Quick Stats - Key highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 px-4"
          >
            {uiConfig.hero.stats.map((stat, index) => {
              const gradients = [
                'from-primary to-secondary',
                'from-secondary to-primary',
                'from-primary via-cyan-400 to-secondary',
                'from-cyan-500 to-primary'
              ];
              const shadows = [
                'hover:shadow-primary/50',
                'hover:shadow-secondary/50',
                'hover:shadow-primary/50',
                'hover:shadow-cyan-500/50'
              ];
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15, y: -8, rotate: [0, -2, 2, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex flex-col items-center gap-1 px-5 py-4 bg-white/80 dark:bg-gradient-to-br dark:from-surface-darker/80 dark:to-surface-darker/60 backdrop-blur-xl rounded-2xl border-2 border-white/40 dark:border-primary/50 hover:border-transparent dark:hover:border-primary transition-all shadow-2xl dark:shadow-[0_0_30px_rgba(22,255,187,0.3)] dark:hover:shadow-[0_0_50px_rgba(22,255,187,0.6)] ${shadows[index % shadows.length]}`}
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                  }}
                >
                  <span className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${gradients[index % gradients.length]} bg-clip-text text-transparent drop-shadow-lg group-hover:drop-shadow-2xl dark:drop-shadow-[0_0_20px_rgba(22,255,187,0.8)] transition-all`}>
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-800 dark:text-text-light font-bold text-center group-hover:text-gray-900 dark:group-hover:text-primary dark:group-hover:drop-shadow-[0_0_10px_rgba(22,255,187,0.8)] transition-all">
                    {stat.label[currentLang]}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact info quick links with stagger */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-4"
          >
            {[
              { icon: Mail, text: personalInfo.email, shortText: 'Email', href: `mailto:${personalInfo.email}` },
              { icon: Linkedin, text: 'LinkedIn', href: personalInfo.linkedin, external: true },
              { icon: Phone, text: personalInfo.phone, shortText: 'Chiama', href: `tel:${personalInfo.phone}` }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white/90 dark:bg-surface-darker/80 backdrop-blur-lg hover:bg-gradient-to-r hover:from-white hover:to-primary/10 dark:hover:bg-gradient-to-r dark:hover:from-surface-darker dark:hover:to-primary/20 border-2 border-gray-200 dark:border-primary/30 hover:border-primary dark:hover:border-primary hover:shadow-2xl hover:shadow-primary/40 dark:hover:shadow-[0_0_30px_rgba(22,255,187,0.5)] transition-all text-gray-800 dark:text-primary hover:text-primary dark:hover:text-white text-sm sm:text-base font-semibold"
                style={{
                  boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.1)'
                }}
              >
                <item.icon className="h-4 w-4 flex-shrink-0 group-hover:rotate-12 group-hover:scale-125 dark:group-hover:drop-shadow-[0_0_8px_rgba(22,255,187,0.8)] transition-all" />
                <span className="hidden md:inline truncate dark:group-hover:drop-shadow-[0_0_8px_rgba(22,255,187,0.6)]">{item.text}</span>
                {item.shortText && <span className="md:hidden dark:group-hover:drop-shadow-[0_0_8px_rgba(22,255,187,0.6)]">{item.shortText}</span>}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
          >
            <motion.button
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 60px rgba(22, 255, 187, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl overflow-hidden shadow-2xl shadow-primary/60 text-sm sm:text-base hover:shadow-primary/80 transition-all"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 8px rgba(255,255,255,0.5)',
                      '0 0 12px rgba(255,255,255,0.8)',
                      '0 0 8px rgba(255,255,255,0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t('hero.viewPortfolio')}
                </motion.span>
              </span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-45 transition-transform" />
              </motion.div>
            </motion.button>

            <motion.a
              href={personalInfo.cvDownloadUrl}
              download
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 border-2 border-primary bg-white/90 dark:bg-surface-darker/80 text-primary font-black rounded-2xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent dark:hover:border-primary transition-all backdrop-blur-lg shadow-xl hover:shadow-2xl hover:shadow-primary/60 dark:shadow-[0_0_30px_rgba(22,255,187,0.2)] dark:hover:shadow-[0_0_50px_rgba(22,255,187,0.6)] text-sm sm:text-base"
            >
              <Download className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <span className="dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">{t('about.downloadCV')}</span>
            </motion.a>
          </motion.div>

          {/* Scroll indicator with magnetic pull */}
          <motion.button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
            className="mt-4 sm:mt-6 md:mt-8 hidden sm:block mx-auto cursor-pointer group"
            aria-label="Scroll to content"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-primary/50 group-hover:border-primary rounded-full mx-auto flex items-start justify-center p-2 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-primary rounded-full shadow-lg shadow-primary/50"
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}


 

