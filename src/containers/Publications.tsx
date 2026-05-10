'use client';
import { publicationsSection } from '@/lib/content/publications';
import { motion } from 'framer-motion';
import { getSectionAnimation, projectVariants } from '@/lib/utils/animations';
import Icon from '@/components/Icon';
import Link from 'next/link';

const Publications = () => {
  const { title, publications } = publicationsSection;

  return (
    <motion.section
      id="publications"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <div className="space-y-6">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={projectVariants}
            className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div className="space-y-2 flex-grow">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  pub.type === 'Journal' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                }`}>
                  {pub.type}
                </span>
                <span className="text-xs font-mono text-gray-400">{pub.year}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-snug">{pub.title}</h3>
              <p className="text-gray-500 text-sm font-medium">{pub.conference}</p>
              <p className="text-gray-400 text-xs italic">{pub.authors}</p>
            </div>

            {pub.url && pub.url !== '#' && (
              <Link
                href={pub.url}
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm transition-colors group/link self-start md:self-center"
              >
                Read Paper 
                <Icon icon="akar-icons:link-out" width={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Publications;
