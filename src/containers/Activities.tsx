'use client';
import { activitiesSection } from '@/lib/content/activities';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Icon from '@/components/Icon';

const Activities = () => {
  const { title, activities } = activitiesSection;

  return (
    <motion.section
      id="activities"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-20">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
        <div className="h-[2px] bg-blue-600 flex-grow max-w-[100px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-blue-100 overflow-hidden flex flex-col h-full"
          >
            {/* Background Icon Glow */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700">
                <Icon icon={act.icon || 'mdi:account-group-outline'} width={100} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <Icon icon={act.icon || 'mdi:account-group-outline'} width={28} />
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2">
                    {act.duration}
                </span>
              </div>

              <div className="flex-grow">
                <div className="mb-4">
                    <span className="bg-gray-900 text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter shadow-xl shadow-gray-200">
                        {act.role}
                    </span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {act.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {act.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Leadership Milestone</span>
                <Icon icon="akar-icons:arrow-right" width={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Activities;
