'use client';
import { experienceSection } from '@/lib/content/experience';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Icon from '@/components/Icon';
import Link from 'next/link';

const Experience = () => {
  const { title, experiences } = experienceSection;

  return (
    <motion.section
      id="experience"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-20">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
        <div className="h-[2px] bg-blue-600 flex-grow max-w-[100px]" />
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 hidden md:block" />

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-white hover:bg-blue-50/50 border-4 border-blue-600 rounded-full -translate-x-1/2 z-10 shadow group-hover:scale-125 transition-transform duration-500 hidden md:block" />

              <div className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Date Side */}
                <div className={`w-full md:w-1/2 flex flex-col ${
                  index % 2 === 0 ? 'md:items-end text-left md:text-right' : 'md:items-start text-left'
                }`}>
                   <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block md:block shadow-sm border border-blue-100">
                    {exp.started} — {exp.upto}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {exp.role}
                  </h3>
                  <Link 
                    href={exp.companyUrl} 
                    target="_blank" 
                    className="text-lg font-bold text-gray-400 hover:text-blue-500 transition-colors inline-flex items-center gap-2"
                  >
                    {exp.company}
                    <Icon icon="akar-icons:link-out" width={14} />
                  </Link>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white hover:bg-blue-50/50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow transition-all duration-500 group-hover:border-blue-100 relative overflow-hidden"
                  >
                    {/* Role Icon Overlay */}
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <Icon icon={exp.logo || 'mdi:briefcase-outline'} width={120} />
                    </div>

                    {/* Task List */}
                    <ul className="space-y-4 relative z-10">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                          <span className="text-blue-600 mt-1 shrink-0 text-xs">✦</span>
                          {task}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Tags */}
                    {exp.tags && (
                      <div className="mt-8 pt-6 border-t border-gray-50 flex flex-wrap gap-2 relative z-10">
                        {exp.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-gray-50 text-gray-500 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
