'use client';
import { testimonialsSection } from '@/lib/content/testimonials';
import { motion } from 'framer-motion';
import { getSectionAnimation, projectVariants } from '@/lib/utils/animations';
import Icon from '@/components/Icon';

const Testimonials = () => {
  const { title, testimonials } = testimonialsSection;

  return (
    <motion.section
      id="testimonials"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={projectVariants}
            className="p-10 bg-blue-50/50 rounded-2xl border border-blue-100/50 relative"
          >
            <Icon
              icon="ri:double-quotes-l"
              className="absolute top-6 left-6 text-blue-200"
              width={40}
            />
            <div className="relative z-10">
              <p className="text-gray-700 text-lg italic leading-relaxed mb-8 text-justify">
                {test.feedback}
              </p>
              <div>
                <h4 className="font-bold text-gray-900">{test.name}</h4>
                <p className="text-blue-600 text-sm font-medium">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
