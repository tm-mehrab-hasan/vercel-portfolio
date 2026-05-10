'use client';
import { achievementsSection } from '@/lib/content/achievements';
import { motion, AnimatePresence } from 'framer-motion';
import { getSectionAnimation, projectVariants } from '@/lib/utils/animations';
import Icon from '@/components/Icon';
import { useState, useMemo } from 'react';
import Button from '@/components/Button';

const Achievements = () => {
  const { title, achievements } = achievementsSection;
  const [showAll, setShowAll] = useState(false);

  const sortedAchievements = useMemo(() => {
    return [...achievements].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [achievements]);

  const displayedAchievements = showAll ? sortedAchievements : sortedAchievements.slice(0, 6);

  return (
    <motion.section
      id="achievements"
      {...getSectionAnimation}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 whitespace-nowrap">{title}</h2>
        <div className="h-[1px] bg-gray-300 flex-grow max-w-xs" />
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedAchievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon icon="akar-icons:ribbon" width={32} />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full uppercase tracking-widest border border-blue-100 shadow-sm">
                        {ach.date}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {ach.title}
                </h3>
                
                {ach.issuer && (
                  <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-tighter italic">
                    {ach.issuer}
                  </p>
                )}
                
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More Button */}
      {sortedAchievements.length > 6 && (
        <div className="mt-16 flex justify-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="group px-10 py-4 rounded-2xl flex items-center gap-3 font-bold border-2 border-gray-100 hover:border-blue-600 hover:text-blue-600 transition-all duration-500"
          >
            {showAll ? (
              <>
                Show Less <Icon icon="akar-icons:chevron-up" width={18} className="group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                See All Achievements <Icon icon="akar-icons:chevron-down" width={18} className="group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </Button>
        </div>
      )}
    </motion.section>
  );
};

export default Achievements;
