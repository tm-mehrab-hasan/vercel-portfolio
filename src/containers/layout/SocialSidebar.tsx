'use client';
import { socialSection } from '@/lib/content/social';
import Icon from '@/components/Icon';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const SocialSidebar = () => {
  const { socialLinks } = socialSection;
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
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="hidden lg:flex fixed left-12 bottom-0 flex-col items-center gap-6 z-40"
    >
      <div className="flex flex-col gap-6 mb-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            className="text-gray-500 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
          >
            <Icon icon={social.icon} width={22} />
          </a>
        ))}
      </div>
      <div className="w-[1px] h-32 bg-gray-400" />
    </motion.div>
  );
};

export default SocialSidebar;
