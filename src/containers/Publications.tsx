'use client';
import { publicationsSection } from '@/lib/content/publications';
import { motion, AnimatePresence } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Icon from '@/components/Icon';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/Button';

const Publications = () => {
  const { title, publications } = publicationsSection;
  const [showAll, setShowAll] = useState(false);

  const displayedPublications = showAll ? publications : publications.slice(0, 4);

  return (
    <motion.section
      id="publications"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 whitespace-nowrap">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedPublications.map((pub, i) => (
            <motion.div
              key={pub.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative bg-white hover:bg-blue-50/50 rounded-xl border border-gray-100 p-8 transition-all duration-500 hover:shadow hover:border-blue-100 flex flex-col h-full"
            >
              {/* Status & Year Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm ${
                    pub.status === 'Published' 
                      ? 'bg-green-50 text-green-600 border border-green-100' 
                      : 'bg-yellow-50 text-yellow-600 border border-yellow-100'
                  }`}>
                    {pub.status || 'Published'}
                  </span>
                  <span className="text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest bg-blue-50 text-blue-600 border border-blue-100">
                    {pub.type}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-400">{pub.year}</span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                  {pub.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg shrink-0">
                      <Icon icon="mdi:account-group-outline" width={18} className="text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{pub.authors}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg shrink-0">
                      <Icon icon="mdi:bank-outline" width={18} className="text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 italic leading-relaxed">
                      {pub.conference}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                {pub.url && pub.url !== '#' ? (
                  <Link
                    href={pub.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Publication
                    <Icon icon="akar-icons:arrow-right" width={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <span className="text-sm font-bold text-gray-300 italic">
                    Link Coming Soon
                  </span>
                )}
                
                <div className="p-2 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="mdi:file-document-outline" width={20} className="text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More Button */}
      {publications.length > 4 && (
        <div className="mt-16 flex justify-center">
          <Button
            onClick={() => {
              if (showAll) {
                setShowAll(false);
                setTimeout(() => {
                  const element = document.getElementById('publications');
                  if (element) {
                    const rect = element.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    window.scrollTo({
                      top: scrollTop + rect.bottom - window.innerHeight + 100,
                      behavior: 'smooth'
                    });
                  }
                }, 100);
              } else {
                setShowAll(true);
              }
            }}
            variant="outline"
            className="group px-10 py-4 rounded-xl flex items-center gap-3 font-bold border-2 border-gray-100 hover:border-blue-600 hover:text-blue-600 transition-all duration-500"
          >
            {showAll ? (
              <>
                Show Less <Icon icon="akar-icons:chevron-up" width={18} className="group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                See More Publications <Icon icon="akar-icons:chevron-down" width={18} className="group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      )}
    </motion.section>
  );
};

export default Publications;
