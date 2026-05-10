'use client';
import { testimonialsSection } from '@/lib/content/testimonials';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Icon from '@/components/Icon';

const Testimonials = () => {
  const { title, testimonials } = testimonialsSection;

  return (
    <motion.section
      id="testimonials"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
        <div className="h-[2px] bg-blue-600 flex-grow max-w-[100px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between ${
              i === 0 || i === 3 ? 'md:col-span-7' : 'md:col-span-5'
            }`}
          >
            {/* Quote Icon Background */}
            <div className="absolute -top-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700">
                <Icon icon="ri:double-quotes-r" width={180} />
            </div>

            <div className="relative z-10">
              {test.relationship && (
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 border border-blue-100 shadow-sm">
                    {test.relationship}
                </span>
              )}
              <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-8 text-justify font-medium">
                "{test.feedback}"
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-gray-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Icon icon="mdi:account-circle-outline" width={28} />
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-base">{test.name}</h4>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-tighter">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
