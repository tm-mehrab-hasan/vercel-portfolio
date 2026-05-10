'use client';
import { activitiesSection } from '@/lib/content/activities';
import { motion } from 'framer-motion';
import { getSectionAnimation, projectVariants } from '@/lib/utils/animations';
import Icon from '@/components/Icon';

const Activities = () => {
  const { title, activities } = activitiesSection;

  return (
    <motion.section
      id="activities"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <div className="space-y-8">
        {activities.map((act, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={projectVariants}
            className="flex gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <Icon icon="akar-icons:person" width={24} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-blue-600">{act.duration}</span>
              <h3 className="text-xl font-bold text-gray-900">{act.role}</h3>
              <h4 className="text-lg font-medium text-gray-600">{act.title}</h4>
              <p className="text-gray-500 leading-relaxed max-w-2xl text-justify">{act.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Activities;
