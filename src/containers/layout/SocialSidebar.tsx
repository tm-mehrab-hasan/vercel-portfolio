'use client';
import { socialSection } from '@/lib/content/social';
import Icon from '@/components/Icon';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const SocialIcon = ({ 
  social, 
  index, 
  scrollY 
}: { 
  social: any, 
  index: number, 
  scrollY: MotionValue<number> 
}) => {
  // Stagger the reveal based on index
  const start = 100 + index * 50;
  const end = 250 + index * 50;

  const opacity = useTransform(scrollY, [start, end], [0, 1]);
  const y = useTransform(scrollY, [start, end], [20, 0]);

  return (
    <motion.a
      href={social.url}
      target="_blank"
      style={{ opacity, y }}
      className="text-gray-500 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"
    >
      <Icon icon={social.icon} width={22} />
    </motion.a>
  );
};

const SocialSidebar = () => {
  const { socialLinks } = socialSection;
  const { scrollY } = useScroll();

  // The vertical line appears after the icons
  const lineOpacity = useTransform(scrollY, [350, 500], [0, 1]);
  const lineScaleY = useTransform(scrollY, [350, 500], [0, 1]);

  return (
    <div className="hidden lg:flex fixed left-12 bottom-0 flex-col items-center gap-6 z-40">
      <div className="flex flex-col gap-6 mb-4">
        {socialLinks.map((social, index) => (
          <SocialIcon 
            key={social.name} 
            social={social} 
            index={index} 
            scrollY={scrollY} 
          />
        ))}
      </div>
      <motion.div 
        style={{ opacity: lineOpacity, scaleY: lineScaleY, originY: 1 }}
        className="w-[1px] h-32 bg-gray-400" 
      />
    </div>
  );
};

export default SocialSidebar;

