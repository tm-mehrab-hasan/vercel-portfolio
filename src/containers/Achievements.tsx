'use client';
import { achievementsSection } from '@/lib/content/achievements';
import { motion, AnimatePresence } from 'framer-motion';
import { getSectionAnimation } from '@/lib/utils/animations';
import Icon from '@/components/Icon';
import { useState, useMemo } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

const Achievements = () => {
  const { title, achievements } = achievementsSection;
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const sortedAchievements = useMemo(() => {
    return [...achievements].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [achievements]);

  const displayedAchievements = showAll ? sortedAchievements : sortedAchievements.slice(0, 6);

  const handleViewCertificate = (certPath: string, title: string) => {
    if (certPath.toLowerCase().endsWith('.pdf')) {
      window.open(certPath, '_blank');
    } else {
      setSelectedImage({ src: certPath, title });
    }
  };

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
          {displayedAchievements.map((ach) => (
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
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Visual Header (Thumbnail or Icon) */}
                <div className="mb-6 relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:shadow-lg transition-all duration-500">
                  {ach.certificate ? (
                    ach.certificate.toLowerCase().endsWith('.pdf') ? (
                      <div className="flex flex-col items-center gap-2">
                        <Icon icon="mdi:file-pdf-box" width={64} className="text-red-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PDF Certificate</span>
                      </div>
                    ) : (
                      <Image
                        src={ach.certificate}
                        alt={ach.title}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    )
                  ) : (
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:rotate-12 transition-transform duration-500">
                      <Icon icon="akar-icons:ribbon" width={32} />
                    </div>
                  )}
                  
                  {/* Overlay for items with certificates */}
                  {ach.certificate && (
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <button 
                            onClick={() => handleViewCertificate(ach.certificate!, ach.title)}
                            className="bg-white text-blue-600 px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                        >
                            <Icon icon="akar-icons:eye" width={14} />
                            View Certificate
                        </button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full uppercase tracking-widest border border-blue-100 shadow-sm">
                        {ach.date}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {ach.title}
                </h3>
                
                {ach.issuer && (
                  <p className="text-[11px] font-bold text-gray-400 mb-4 uppercase tracking-tighter italic">
                    {ach.issuer}
                  </p>
                )}
                
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {ach.desc}
                </p>

                {ach.certificate && (
                    <div className="mt-auto pt-4 border-t border-gray-50">
                        <button 
                            onClick={() => handleViewCertificate(ach.certificate!, ach.title)}
                            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-2 group/btn"
                        >
                            <Icon icon={ach.certificate.toLowerCase().endsWith('.pdf') ? "mdi:file-pdf-outline" : "mdi:image-outline"} width={16} />
                            {ach.certificate.toLowerCase().endsWith('.pdf') ? 'Open PDF Document' : 'View Image Certificate'}
                            <Icon icon="akar-icons:arrow-right" width={12} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More Button */}
      {sortedAchievements.length > 6 && (
        <div className="mt-16 flex justify-center">
          <Button
            onClick={() => {
              if (showAll) {
                document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
              }
              setShowAll(!showAll);
            }}
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

      {/* Image Modal for View */}
      <ImageModal 
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        title={selectedImage?.title || ''}
      />
    </motion.section>
  );
};

export default Achievements;
