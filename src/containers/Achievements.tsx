'use client';
import { achievementsSection } from '@/lib/content/achievements';
import { motion } from 'framer-motion';
import { getSectionAnimation, projectVariants } from '@/lib/utils/animations';
import Icon from '@/components/Icon';

const Achievements = () => {
  const { title, achievements } = achievementsSection;

  return (
    <motion.section
      id="achievements"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={projectVariants}
            className="p-8 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <Icon icon="akar-icons:ribbon" width={28} />
            </div>
            <span className="text-xs font-mono text-blue-600 mb-2 block">{ach.date}</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{ach.title}</h3>
            {ach.issuer && (
              <p className="text-sm font-medium text-gray-500 mb-4">{ach.issuer}</p>
            )}
            <p className="text-gray-600 text-sm leading-relaxed">{ach.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;
