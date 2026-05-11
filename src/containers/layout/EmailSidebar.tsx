'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

const EmailSidebar = () => {
  const { scrollY } = useScroll();

  // Email link appears first (delayed), then the line
  const emailOpacity = useTransform(scrollY, [500, 700], [0, 1]);
  const emailY = useTransform(scrollY, [500, 700], [20, 0]);
  
  const lineOpacity = useTransform(scrollY, [700, 900], [0, 1]);
  const lineScaleY = useTransform(scrollY, [700, 900], [0, 1]);

  return (
    <div className="hidden lg:flex fixed right-12 bottom-0 flex-col items-center gap-6 z-40">
      <motion.div 
        style={{ opacity: emailOpacity, y: emailY }}
        className="mb-4"
      >
        <a
          href="mailto:mehrabratul210524@gmail.com"
          className="text-gray-500 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 font-mono text-sm [writing-mode:vertical-rl]"
        >
          mehrabratul210524@gmail.com
        </a>
      </motion.div>
      <motion.div 
        style={{ opacity: lineOpacity, scaleY: lineScaleY, originY: 1 }}
        className="w-[1px] h-32 bg-gray-400" 
      />
    </div>
  );
};

export default EmailSidebar;
