// Portfolio data for Cristian Tesconi

export const professionalExperience = [
  {
    company: 'Dumarey Softronix',
    role: {
      it: 'Team Leader - Software Tools & Applications',
      en: 'Team Leader - Software Tools & Applications'
    },
    period: '2024 - Presente',
    description: {
      it: 'Coordinamento team di sviluppo software per applicazioni automotive, con focus su automazione intelligente e strategie di controllo predittivo.',
      en: 'Leading software development team for automotive applications, focusing on intelligent automation and predictive control strategies.'
    }
  },
  {
    company: 'Dumarey Softronix',
    role: {
      it: 'Ingegnere Modellazione e Simulazione',
      en: 'Modeling and Simulation Engineer'
    },
    period: '2023 - 2024',
    description: {
      it: 'Sviluppo di modelli di simulazione per sistemi automotive, implementazione di algoritmi di controllo avanzati.',
      en: 'Developed simulation models for automotive systems, implementing advanced control algorithms.'
    }
  },
  {
    company: 'Punch Torino',
    role: {
      it: 'Ingegnere SIL',
      en: 'SIL Engineer'
    },
    period: '2021 - 2023',
    description: {
      it: 'Testing e validazione Software-in-the-Loop per sistemi di controllo automotive.',
      en: 'Software-in-the-Loop testing and validation for automotive control systems.'
    }
  },
  {
    company: 'FCA',
    role: {
      it: 'Ingegnere Software Embedded',
      en: 'Embedded Software Engineer'
    },
    period: '2019 - 2021',
    description: {
      it: 'Sviluppo software embedded per ECU automotive e sistemi di controllo.',
      en: 'Development of embedded software for automotive ECUs and control systems.'
    }
  },
  {
    company: 'Università di Pisa / RoboTeam Italia',
    role: {
      it: 'Ingegnere Sistemi di Controllo',
      en: 'Control Systems Engineer'
    },
    period: '2017 - 2019',
    description: {
      it: 'Ricerca e sviluppo di algoritmi di controllo per sistemi robotici autonomi.',
      en: 'Research and development of control algorithms for autonomous robotic systems.'
    }
  }
];

export const skills = [
  { name: 'Python', level: 95 },
  { name: 'C/C++', level: 90 },
  { name: 'Robotics', level: 95 },
  { name: 'Automation', level: 90 },
  { name: 'Artificial Intelligence', level: 85 },
  { name: 'Linux Administration', level: 90 },
  { name: 'Windows Administration', level: 90 },
  { name: 'Embedded Systems', level: 85 },
  { name: 'Control Systems', level: 90 },
  { name: 'Simulation & Modeling', level: 88 }
];

// Import books from centralized location
export { booksData as books } from './books';
