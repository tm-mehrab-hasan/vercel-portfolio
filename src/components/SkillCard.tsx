'use client';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';

const SkillCard = ({ 
  name, 
  icon, 
  experience, 
  description, 
  featured 
}: { 
  name: string; 
  icon: string; 
  experience: string; 
  description: string;
  featured?: boolean;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${
        featured ? 'ring-2 ring-blue-500/20 shadow-sm' : ''
      }`}
    >
      {/* Background Glow on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      
      <div className="relative flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-500">
            <Icon icon={icon} width={40} className="text-gray-700 group-hover:text-blue-600" />
          </div>
          {featured && (
            <div className="flex flex-col items-end">
              <span className="bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-blue-200">
                Core
              </span>
            </div>
          )}
        </div>

        <div className="space-y-2 flex-grow">
          <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
            <Icon icon="mdi:calendar-check" width={14} className="text-blue-500" />
            <span>{experience}</span>
          </div>
          <Icon 
            icon="mdi:arrow-right" 
            width={16} 
            className="text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
