'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';
import Image from 'next/image';
import { useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
};

const ImageModal = ({ isOpen, onClose, imageSrc, title }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            {/* Header */}
            <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent z-20">
              <h3 className="text-white font-bold text-lg drop-shadow-md truncate pr-8">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
              >
                <Icon icon="akar-icons:cross" width={20} />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-[80vh] bg-gray-100 flex items-center justify-center p-4">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Footer Actions */}
            <div className="p-4 bg-white flex justify-end gap-4 border-t border-gray-100">
                <a 
                    href={imageSrc} 
                    download 
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                    <Icon icon="mdi:download-outline" width={18} />
                    Download
                </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
