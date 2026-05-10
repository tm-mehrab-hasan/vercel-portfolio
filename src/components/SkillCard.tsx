'use client';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';

const SkillCard = ({ 
  name, 
  icon, 
  level, 
  experience, 
  description, 
  featured 
}: { 
  name: string; 
  icon: string; 
  level: number; 
  experience: string; 
  description: string;
  featured?: boolean;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`group relative bg-white rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
        featured ? 'ring-2 ring-blue-500/20' : ''
      }`}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
      
      <div className="relative">
        <div className="flex justify-between items-start mb-3">
          <div className="p-2 bg-blue-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Icon icon={icon} width={24} />
          </div>
          {featured && (
            <span className="bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Specialty
            </span>
          )}
        </div>

        <h4 className="text-sm font-bold text-gray-900 mb-2">{name}</h4>

        <div className="space-y-1.5 mb-3">
          <div className="flex justify-between text-[10px] font-bold text-gray-500">
            <span>Proficiency</span>
            <span>{level}%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium">
          <Icon icon="mdi:clock-outline" width={12} />
          <span>{experience}</span>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[10px] text-gray-500 leading-tight italic">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
