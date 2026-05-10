import { FeaturedProjectsSectionType } from '../types/sections';

export const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: 'Featured Projects',
  projects: [
    {
      id: 'vwar',
      name: 'BITSS VWAR Software',
      category: 'web',
      url: 'https://bitss.one/',
      repo: 'https://github.com/TM-Mehrab-Hasan/BITSS-VWAR-Software',
      img: '/images/projects/vwar.png',
      projectSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'Security', icon: 'mdi:security' },
      ],
      description: 'Advanced software for vulnerability research and system analysis.',
    },
    {
      id: 'baazar-x',
      name: 'BAAZAR X',
      category: 'web ml',
      url: 'https://baazarx.netlify.app/',
      repo: 'https://github.com/TM-Mehrab-Hasan/baazarx-ai-ecommerce',
      img: '/images/projects/baazar-x.png',
      projectSkills: [
        { name: 'Django', icon: 'logos:django-icon' },
        { name: 'React', icon: 'logos:react' },
      ],
      description: 'Intelligent e-commerce platform with AI recommendations.',
    },
  ],
};
