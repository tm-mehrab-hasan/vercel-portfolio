'use client';
import { experienceSection } from '@/lib/content/experience';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Experience = () => {
  const { title, experiences } = experienceSection;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      id="experience"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-gray-200">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'px-6 py-3 text-left whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 font-medium text-sm',
                activeIndex === index
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-blue-600'
              )}
            >
              {exp.company.split(',')[0]}
            </button>
          ))}
        </div>

        <div className="flex-grow py-2">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={cn(activeIndex === index ? 'block' : 'hidden', 'space-y-4')}
            >
              <h3 className="text-xl font-bold text-gray-900">
                {exp.role}{' '}
                <span className="text-blue-600">
                  @{' '}
                  <a href={exp.companyUrl} target="_blank" className="hover:underline">
                    {exp.company}
                  </a>
                </span>
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {exp.started} — {exp.upto}
              </p>
              <ul className="space-y-4 pt-4">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-justify leading-relaxed">
                    <span className="text-blue-600 mt-1.5 flex-shrink-0">▹</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
