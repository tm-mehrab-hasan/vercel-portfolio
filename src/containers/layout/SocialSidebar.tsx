'use client';
import { socialSection } from '@/lib/content/social';
import Icon from '@/components/Icon';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/utils/animations';

const SocialSidebar = () => {
  const { socialLinks } = socialSection;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn(1)}
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
