'use client';
import { educationSection } from '@/lib/content/education';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';

const Education = () => {
  const { title, education } = educationSection;

  return (
    <motion.section
      id="education"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-100 hover:border-blue-600 transition-colors duration-300">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1.5 border-4 border-white shadow-sm" />
            <div className="space-y-2">
              <span className="text-sm font-mono text-blue-600">{edu.duration}</span>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">{edu.degree}</h3>
              <h4 className="text-lg font-medium text-gray-700">{edu.schoolName}</h4>
              <p className="text-gray-600 leading-relaxed max-w-2xl text-justify">{edu.desc}</p>
              {edu.grade && (
                <span className="inline-block px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Grade: {edu.grade}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
