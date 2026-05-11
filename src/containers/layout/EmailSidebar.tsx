'use client';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const EmailSidebar = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Show sidebar only after scrolling down a bit (past Hero section)
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="hidden lg:flex fixed right-12 bottom-0 flex-col items-center gap-6 z-40"
    >
      <div className="mb-4">
        <a
          href="mailto:mehrabratul210524@gmail.com"
          className="text-gray-500 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 font-mono text-sm [writing-mode:vertical-rl]"
        >
          mehrabratul210524@gmail.com
        </a>
      </div>
      <div className="w-[1px] h-32 bg-gray-400" />
    </motion.div>
  );
};

export default EmailSidebar;
