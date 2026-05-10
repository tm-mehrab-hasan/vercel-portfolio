'use client';
import { educationSection } from '@/lib/content/education';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Icon from '@/components/Icon';

const Education = () => {
  const { title, education } = educationSection;

  return (
    <motion.section
      id="education"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
        <div className="h-[2px] bg-blue-600 flex-grow max-w-[100px]" />
      </div>

      <div className="grid grid-cols-1 gap-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:border-blue-100 flex flex-col md:flex-row gap-10 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 opacity-50" />
            
            {/* Left Side: School Info & Icon */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:w-1/3 shrink-0">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-blue-100">
                    <Icon icon={edu.icon || 'mdi:school-outline'} width={40} />
                </div>
                <div>
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] mb-2 block">
                        {edu.duration}
                    </span>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight mb-2">
                        {edu.schoolName}
                    </h3>
                    {edu.grade && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-2xl text-white shadow-xl shadow-gray-200">
                            <Icon icon="mdi:star-circle" width={18} className="text-yellow-400" />
                            <span className="text-xs font-black uppercase tracking-wider">{edu.grade}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Side: Degree & Specialization */}
            <div className="flex-grow space-y-8 relative z-10">
                <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 rounded-full" />
                        {edu.degree}
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        {edu.desc}
                    </p>
                </div>

                {/* Specialization Tech Pills */}
                {edu.specialization && (
                    <div className="pt-6 border-t border-gray-50">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-4">
                            Core Focus & Coursework
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {edu.specialization.map((item) => (
                                <span 
                                    key={item} 
                                    className="bg-blue-50/50 text-blue-600 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-blue-100/50 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
