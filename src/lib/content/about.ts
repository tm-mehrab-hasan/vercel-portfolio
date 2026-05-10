import { AboutSectionType } from '../types/sections';

export const aboutSection: AboutSectionType = {
  title: 'About Me',
  paragraphs: [
    'I am an IoT and Robotics Engineer with a deep passion for bridging the gap between physical hardware and intelligent software systems. My journey in engineering began with a curiosity for how things work, which led me to specialize in intelligent systems, web development, and machine learning solutions.',
    'I thrive on building technology-driven solutions that don’t just work, but improve efficiency and human experience. Whether I’m designing resilient ESP32 architectures or architecting scalable backend systems with Django and Next.js, my focus is always on solving real-world problems through integrated engineering.',
    'Currently, I am a Jr. Software Developer at BFIN IT PVT. LTD., where I specialize in building enterprise-grade security software. My unique dual-background allows me to approach development with a unique perspective—seeing the system from the low-level firmware up to the high-level cloud architecture.',
  ],
  list: {
    title: 'Strategic Focus Areas:',
    items: [
      'Hardware-Software Integration',
      'Intelligent System Design',
      'Scalable Web Architectures',
      'AI & Machine Learning',
      'Cybersecurity & Device Protection',
      'Real-time Data Processing',
    ],
  },
  img: '/images/profile-picture.jpg',
};
