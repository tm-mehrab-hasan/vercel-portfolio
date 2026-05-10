'use client';
import { navbarSection } from '@/lib/content/navbar';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import Icon from '@/components/Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { navLinks, cta } = navbarSection;
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      if (lenis) {
        lenis.scrollTo(url, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4',
        scrolled || isOpen 
          ? 'bg-blue-50/90 backdrop-blur-xl shadow-lg shadow-blue-900/5 border-b border-blue-100' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-signature text-blue-600 hover:text-blue-700 transition-colors">
          Mehrab Hasan
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              onClick={(e) => handleNavLinkClick(e, link.url)}
              className="text-gray-600 hover:text-blue-600 transition-colors font-bold text-xs uppercase tracking-widest cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <Button href={cta.url} variant="outline" className="px-5 py-2 text-xs font-black uppercase tracking-widest rounded-xl border-2" sameTab={cta.sameTab}>
            {cta.title}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-xl shadow-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Icon icon={isOpen ? 'akar-icons:cross' : 'akar-icons:three-line-horizontal'} width={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-blue-50/95 backdrop-blur-2xl border-t border-blue-100 shadow-2xl py-8 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-600 hover:text-blue-600 transition-colors font-black text-sm uppercase tracking-widest cursor-pointer"
                onClick={(e) => handleNavLinkClick(e, link.url)}
              >
                {link.name}
              </a>
            ))}
            <Button href={cta.url} variant="primary" className="w-full py-4 text-sm font-black uppercase tracking-widest rounded-2xl shadow-xl" sameTab={cta.sameTab} onClick={() => setIsOpen(false)}>
              {cta.title}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
