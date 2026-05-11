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

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      suppressHydrationWarning
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4',
        scrolled || isOpen 
          ? 'bg-white/90 backdrop-blur-xl shadow shadow-blue-900/5 border-b border-blue-100' 
          : 'bg-transparent'
      )}
    >
      <div className="w-full flex items-center relative min-h-[40px] px-4 md:px-12" suppressHydrationWarning>
        {/* Logo moved slightly to the right with container padding */}
        <Link href="/" className="group shrink-0 relative z-30" onClick={handleLogoClick}>
          <span className="text-3xl font-signature text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap">
            Mehrab Hasan
          </span>
        </Link>

        {/* Desktop Nav - Centered to the screen boundary (original max-w-7xl behavior) */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-20">
            <div className="max-w-7xl w-full flex items-center justify-end gap-6 pointer-events-auto px-6">
                {navLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.url}
                    onClick={(e) => handleNavLinkClick(e, link.url)}
                    className="text-gray-600 hover:text-blue-600 transition-colors font-bold text-xs uppercase tracking-widest cursor-pointer whitespace-nowrap"
                    >
                    {link.name}
                    </a>
                ))}
                <Button href={cta.url} variant="outline" className="px-5 py-2 text-xs font-black uppercase tracking-widest rounded-xl border-2 whitespace-nowrap" sameTab={cta.sameTab}>
                    {cta.title}
                </Button>
            </div>
        </div>

        {/* Mobile Toggle - Pushed to the right */}
        <div className="flex-grow flex justify-end lg:hidden relative z-30">
            <button
                className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-xl shadow focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <Icon icon={isOpen ? 'akar-icons:cross' : 'akar-icons:three-line-horizontal'} width={20} />
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-blue-100 shadow py-8 px-6 flex flex-col gap-6"
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
            <Button href={cta.url} variant="primary" className="w-full py-4 text-sm font-black uppercase tracking-widest rounded-xl shadow" sameTab={cta.sameTab} onClick={() => setIsOpen(false)}>
              {cta.title}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
