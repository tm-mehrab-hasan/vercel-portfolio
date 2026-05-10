import { NavbarSectionType } from '../types/sections';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Education', url: '/#education' },
    { name: 'Experience', url: '/#experience' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Research', url: '/#publications' },
    { name: 'Awards', url: '/#achievements' },
    { name: 'Testimonials', url: '/#testimonials' },
    { name: 'Activities', url: '/#activities' },
    { name: 'Contact', url: '/#contact' },
  ],
  cta: {
    title: 'Resume',
    url: '/resume.pdf',
    sameTab: false,
  },
};
