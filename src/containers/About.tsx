'use client';
import { aboutSection } from '@/lib/content/about';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Image from 'next/image';

const About = () => {
  const { title, paragraphs, list, img } = aboutSection;

  return (
    <motion.section
      id="about"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div>
            <p className="font-semibold mb-4 text-gray-800">{list.title}</p>
            <ul className="grid grid-cols-2 gap-2 text-base">
              {list.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-blue-600">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2 relative group max-w-sm mx-auto">
          <div className="relative z-10 rounded-lg overflow-hidden border-2 border-blue-600/20 shadow-xl grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src={img}
              alt="Profile"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-2 border-blue-600 rounded-lg -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300" />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
