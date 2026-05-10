'use client';
import { aboutSection } from '@/lib/content/about';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Image from 'next/image';
import Icon from '@/components/Icon';

const About = () => {
  const { title, paragraphs, list, img } = aboutSection;

  return (
    <motion.section
      id="about"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
        <div className="h-[2px] bg-blue-600 flex-grow max-w-[100px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Story Side */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-justify first-letter:text-4xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-2">
                {p}
              </p>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-100">
            <h4 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-6">
              {list.title}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {list.items.map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon icon="mdi:check-bold" width={14} />
                  </div>
                  <span className="text-gray-700 font-bold text-sm group-hover:text-blue-600 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:col-span-5 relative group">
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
            {/* Main Image Frame */}
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-10" />
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-2 border-white shadow-2xl z-10 bg-white">
              <Image
                src={img}
                alt="Mehrab Hasan"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              
              {/* HUD Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest">T. M. Mehrab Hasan</span>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-bold">ACTIVE_SYSTEM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-600 rounded-tl-2xl z-20 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-blue-600 rounded-br-2xl z-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          </div>

          {/* Quick Metrics (Floating Badges) */}
          <div className="absolute -right-8 top-1/4 hidden xl:flex flex-col gap-4 z-30">
            {[
              { label: 'IoT Expert', icon: 'mdi:microchip' },
              { label: 'Full Stack', icon: 'mdi:code-braces' },
              { label: 'Security', icon: 'mdi:shield-lock' }
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 hover:scale-110 transition-transform cursor-default group/metric"
              >
                <Icon icon={metric.icon} width={18} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-700 group-hover/metric:text-blue-600">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Integrated Engineering',
            desc: 'Viewing systems as a whole, from low-level firmware to scalable cloud architecture.',
            icon: 'mdi:source-branch'
          },
          {
            title: 'Problem-First Logic',
            desc: 'Prioritizing efficiency and user experience over arbitrary technical complexity.',
            icon: 'mdi:brain'
          },
          {
            title: 'Continuous Evolution',
            desc: 'Constantly exploring cutting-edge technologies like Next.js, Framer Motion, and AI.',
            icon: 'mdi:flash-outline'
          }
        ].map((phi, i) => (
          <motion.div
            key={phi.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * i }}
            className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
              <Icon icon={phi.icon} width={24} />
            </div>
            <h5 className="text-lg font-bold text-gray-900 mb-3">{phi.title}</h5>
            <p className="text-sm text-gray-500 leading-relaxed italic">{phi.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
