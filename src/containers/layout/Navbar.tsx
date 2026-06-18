'use client';
import { navbarSection } from '@/lib/content/navbar';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import Icon from '@/components/Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { navLinks, cta } = navbarSection;
  const lenis = useLenis();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll state for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver — tracks which section is in the viewport
  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.url.replace('/#', ''))
      .filter((id) => id.length > 0);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is intersecting AND closest to the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Trigger when a section crosses the upper 25% of the viewport
        rootMargin: '-10% 0px -65% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [navLinks]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('#') || url.startsWith('/#')) {
      e.preventDefault();
      setIsOpen(false);
      const hash = url.startsWith('/#') ? url.slice(1) : url;
      if (lenis) {
        lenis.scrollTo(hash, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
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

  const getLinkId = (url: string) => url.replace('/#', '').replace('#', '');

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
        {/* Logo */}
        <Link href="/" className="group shrink-0 relative z-30" onClick={handleLogoClick}>
          <span className="text-3xl font-signature text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap">
            Mehrab Hasan
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-20">
          <div className="max-w-7xl w-full flex items-center justify-end gap-6 pointer-events-auto px-6">
            {navLinks.map((link) => {
              const id = getLinkId(link.url);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={(e) => handleNavLinkClick(e, link.url)}
                  className={cn(
                    'relative text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer whitespace-nowrap',
                    isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  )}
                >
                  {link.name}
                  {/* Active underline indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                    />
                  )}
                </a>
              );
            })}
            <Button
              href={cta.url}
              variant="outline"
              className="px-5 py-2 text-xs font-black uppercase tracking-widest rounded-xl border-2 whitespace-nowrap"
              sameTab={cta.sameTab}
            >
              {cta.title}
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
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
            {navLinks.map((link) => {
              const id = getLinkId(link.url);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className={cn(
                    'font-black text-sm uppercase tracking-widest cursor-pointer transition-colors',
                    isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  )}
                  onClick={(e) => handleNavLinkClick(e, link.url)}
                >
                  {link.name}
                </a>
              );
            })}
            <Button
              href={cta.url}
              variant="primary"
              className="w-full py-4 text-sm font-black uppercase tracking-widest rounded-xl shadow"
              sameTab={cta.sameTab}
              onClick={() => setIsOpen(false)}
            >
              {cta.title}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
