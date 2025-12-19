// Portfolio configuration loaded from JSON
import portfolioData from '../../config/portfolio.config.json';

export const {
  personalInfo,
  education,
  experiences,
  skills,
  languages,
  interests,
  certifications,
  projects
} = portfolioData;

// Export individual categories for easy access
export const programmingSkills = skills.programming.items;
export const roboticsSkills = skills.roboticsAutomation.items;
export const toolsFrameworks = skills.toolsFrameworks.items;
export const automotiveSkills = skills.automotive.items;
export const hardwareSkills = skills.hardware.items;
export const operatingSystems = skills.operatingSystems.items;
export const methodologies = skills.methodologies.items;

// Helper to get all skills as flat array
export const getAllSkills = () => [
  ...skills.programming.items.map(s => ({ ...s, category: 'programming' })),
  ...skills.roboticsAutomation.items.map(s => ({ ...s, category: 'roboticsAutomation' })),
  ...skills.toolsFrameworks.items.map(s => ({ ...s, category: 'toolsFrameworks' })),
  ...skills.automotive.items.map(s => ({ ...s, category: 'automotive' })),
  ...skills.hardware.items.map(s => ({ ...s, category: 'hardware' })),
  ...skills.operatingSystems.items.map(s => ({ ...s, category: 'operatingSystems' })),
  ...skills.methodologies.items.map(s => ({ ...s, category: 'methodologies' }))
];

export default portfolioData;
