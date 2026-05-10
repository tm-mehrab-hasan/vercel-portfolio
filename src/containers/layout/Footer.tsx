'use client';
import { footerSection } from '@/lib/content/footer';
import { socialSection } from '@/lib/content/social';
import Icon from '@/components/Icon';

const Footer = () => {
  const { title, link } = footerSection;
  const { socialLinks } = socialSection;

  return (
    <footer className="py-12 px-6 text-center border-t border-gray-100 mt-20">
      <div className="flex justify-center gap-6 mb-8 lg:hidden">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Icon icon={social.icon} width={24} />
          </a>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        className="text-gray-500 hover:text-blue-600 transition-colors font-mono text-sm"
      >
        {title}
      </a>
    </footer>
  );
};

export default Footer;
