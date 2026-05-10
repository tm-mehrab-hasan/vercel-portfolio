import { AboutSectionType } from '../types/sections';

export const aboutSection: AboutSectionType = {
  title: 'About Me',
  paragraphs: [
    'I am an IoT and Robotics Engineer specializing in intelligent systems, web development, and machine learning solutions. My goal is to build technology-driven solutions that improve efficiency and user experience.',
    'I have experience in building responsive web applications using Django and React, and I am deeply interested in exploring new technologies like Next.js and Framer Motion.',
  ],
  list: {
    title: 'A few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Python (Django)',
      'Robotics (ROS)',
      'Embedded Systems',
    ],
  },
  img: '/images/profile-picture.jpg',
};
