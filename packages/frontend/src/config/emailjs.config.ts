/**
 * EmailJS Configuration
 *
 * To set up EmailJS:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Add an email service (e.g., Gmail)
 * 3. Create an email template
 * 4. Get your Public Key from Account settings
 * 5. Create a .env.local file with your credentials
 */

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Validate configuration
export const isEmailJsConfigured = () => {
  return !!(
    emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey
  );
};
