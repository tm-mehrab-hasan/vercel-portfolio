'use client';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';

const SkillCard = ({ 
  name, 
  icon,
  featured 
}: { 
  name: string; 
  icon: string;
  featured?: boolean;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col items-center justify-center p-6 rounded-xl bg-white hover:bg-blue-50/50 border border-gray-100 transition-all duration-300 hover:shadow hover:-translate-y-1 ${
        featured ? 'ring-2 ring-blue-500/10' : ''
      }`}
    >
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-500">
          <Icon icon={icon} width={40} className="text-gray-700 group-hover:text-blue-600" />
        </div>
        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">
          {name}
        </span>
      </div>

      {featured && (
        <div className="absolute top-2 right-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;
