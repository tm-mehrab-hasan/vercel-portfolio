'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';
import Image from 'next/image';
import { ActivityType } from '@/lib/types';
import { useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  activity: ActivityType | null;
};

const ActivityModal = ({ isOpen, onClose, activity }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!activity) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all duration-300 z-20 shadow-sm"
            >
              <Icon icon="akar-icons:cross" width={20} />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Left Side - Visual */}
              <div className="w-full md:w-2/5 bg-gray-50 p-10 flex flex-col items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">
                <div className="absolute inset-0 opacity-[0.03]">
                    <Icon icon="mdi:robot-confused-outline" width={200} className="absolute -bottom-10 -left-10" />
                    <Icon icon="mdi:certificate-outline" width={150} className="absolute -top-10 -right-10" />
                </div>
                
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-6 mb-6 z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    {activity.icon && activity.icon.startsWith('/') ? (
                        <Image
                            src={activity.icon}
                            alt={activity.title}
                            fill
                            className="object-contain p-4"
                        />
                    ) : (
                        <Icon icon={activity.icon || 'mdi:account-group-outline'} width={64} className="text-blue-600" />
                    )}
                </div>
                <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-200 z-10">
                    {activity.duration}
                </span>
              </div>

              {/* Right Side - Details */}
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col max-h-[70vh] md:max-h-none overflow-y-auto">
                <div className="mb-8">
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
                        {activity.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                        {activity.title}
                    </h3>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Icon icon="mdi:star-four-points" width={14} className="text-blue-600" />
                            Key Accomplishments
                        </h4>
                        <ul className="space-y-4">
                            {activity.points?.map((point, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 group-hover:scale-150 transition-transform" />
                                    <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                                </motion.li>
                            )) || (
                                <li className="text-gray-400 text-sm italic">Detailed accomplishments coming soon...</li>
                            )}
                        </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-50 mt-auto">
                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                            <p className="text-[11px] text-blue-600 font-bold leading-relaxed">
                                {activity.desc}
                            </p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ActivityModal;
