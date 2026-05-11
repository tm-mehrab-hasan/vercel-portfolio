import { ActivitiesSectionType } from '../types/sections';

export const activitiesSection: ActivitiesSectionType = {
  title: 'Extracurricular Activities',
  activities: [
    {
      title: 'UFTB Robotics Club',
      role: 'Deputy Organizing Secretary',
      duration: 'May 2023 - Dec 2024',
      icon: '/images/uftbrc.jpg',
      desc: 'Assisted in planning and coordinating robotics events and workshops, while managing team logistics for smooth execution of technical programs.',
      points: [
        'Organized 5+ workshops on Arduino and Embedded Systems for 200+ students.',
        'Coordinated logistics and team management for the university annual robotics fest.',
        'Facilitated collaboration between technical teams for hardware project development.'
      ],
    },
    {
      title: 'UFTB Programming Club',
      role: 'Executive Officer',
      duration: 'Jan 2023 - Dec 2024',
      icon: '/images/uftbpc.png',
      desc: 'Led coding competitions and coordinated with team members to organize regular coding sessions and webinars for skill development.',
      points: [
        'Managed bi-weekly competitive programming contests on platforms like Codeforces.',
        'Mentored junior students in data structures and algorithm fundamentals.',
        'Organized webinars featuring industry professionals to bridge the academia-industry gap.'
      ],
    },
    {
      title: 'UFTB Cultural Club',
      role: 'Program Secretary',
      duration: 'Jan 2023 - Dec 2024',
      icon: 'mdi:theater',
      desc: 'Organized and managed cultural events, facilitating collaboration between student groups for successful execution of university programs.',
      points: [
        'Led the planning and execution of large-scale university cultural festivals.',
        'Managed budget allocation and sponsorship procurement for club events.',
        'Supervised a team of 30+ volunteers for venue management and program scheduling.'
      ],
    },
    {
      title: 'UFTB Language Club',
      role: 'Korean Language Secretary',
      duration: 'May 2023 - Dec 2024',
      icon: 'mdi:translate',
      desc: 'Managed communication and coordinated activities between club members and external partners, organizing Korean language learning sessions.',
      points: [
        'Curated and organized structured Korean language learning programs for club members.',
        'Maintained communication with external language experts for guest lectures.',
        'Developed interactive study materials and hosted cultural exchange sessions.'
      ],
    },
    {
      title: 'Notre Dame English Club',
      role: 'Vice President (Field)',
      duration: 'Previous',
      icon: '/images/ndec.jpg',
      desc: 'Led field activities and coordinated club events, fostering an environment for English language proficiency and cultural exchange.',
      points: [
        'Directed outdoor English proficiency workshops and language immersion camps.',
        'Oversaw club membership drives and field-level coordination for national-level events.',
        'Ensured smooth logistics for club activities through effective team delegation.'
      ],
    },
  ],
};
