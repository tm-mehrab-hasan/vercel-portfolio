import { HeroSectionType } from '../types/sections';

export const heroSection: HeroSectionType = {
  title: 'T. M. Mehrab Hasan',
  subtitle: 'Computer Science Engineer & Data Scientist.',
  tagline: [
    'Software Engineer & Data Scientist',
    'AI-Driven Systems Architect',
    'Full-Stack Developer',
    'Research Enthusiast',
    'Cyber-Physical Systems Expert',
  ],
  description:
    'Bridging Computer Science with Data Science to engineer intelligent, scalable, and secure systems. I specialize in integrating AI and Machine Learning into robust software architectures and Cyber-Physical Systems (CPS) to solve complex real-world challenges.',
  specialText: 'Currently focused on Enterprise Security & AI-driven Research.',
  ctas: [
    {
      title: 'View My Work',
      url: '#projects',
      sameTab: true,
    },
    {
      title: 'Download CV',
      url: '/resume.pdf',
      sameTab: false,
    },
  ],
};
