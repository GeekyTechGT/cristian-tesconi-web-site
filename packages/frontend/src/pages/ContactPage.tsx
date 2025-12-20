import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin, Send, Home } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Card from '@/components/shared/Card';
import { personalInfo } from '@/data/portfolioConfig';
import { emailJsConfig, isEmailJsConfigured } from '@/config/emailjs.config';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'it' | 'en';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Check if EmailJS is configured
    if (!isEmailJsConfigured()) {
      console.error('EmailJS non è configurato. Controlla il file .env.local');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'cristiantesco@gmail.com', // Your email
        },
        emailJsConfig.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Errore nell\'invio dell\'email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Cristian Tesconi - {t('contact.title')}</title>
        <meta name="description" content={t('contact.description')} />
      </Helmet>

      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <section className="section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-4 sm:mb-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm sm:text-base"
              >
                <Home className="h-4 w-4 flex-shrink-0" />
                <span>{t('common.back')} Home</span>
              </Link>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-primary px-4">
              {t('contact.title')}
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
              {t('contact.subtitle')}
            </p>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6">
                <Card>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t('contact.email')}</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm sm:text-lg font-semibold text-primary hover:underline truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t('contact.linkedin')}</p>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-lg font-semibold text-primary hover:underline truncate block"
                      >
                        {personalInfo.linkedin.replace('https://www.', '')}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t('contact.location')}</p>
                      <p className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">{personalInfo.location[currentLang]}</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
                    >
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t('contact.form.subjectPlaceholder')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-primary to-secondary text-white dark:text-darkBg font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      t('contact.form.sending')
                    ) : (
                      <>
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                        {t('contact.form.send')}
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-center text-xs sm:text-sm">
                      {t('contact.form.success')}
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-3 sm:p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg text-center text-xs sm:text-sm">
                      {t('contact.form.error')}
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
