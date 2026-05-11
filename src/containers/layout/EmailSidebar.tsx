'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/utils/animations';

const EmailSidebar = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn(1.2)}
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
