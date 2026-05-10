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
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { navLinks, cta } = navbarSection;
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['hero', 'about', 'education', 'experience', 'skills', 'projects', 'publications', 'achievements', 'testimonials', 'activities', 'contact'];
    
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
    };
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('/#')) {
      e.preventDefault();
      const id = url.split('#')[1];
      setIsOpen(false);
      if (lenis) {
        lenis.scrollTo(`#${id}`, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    }
  };

  return (
    <div className="fixed top-0 w-full z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <nav
        className={cn(
          'w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 pointer-events-auto border relative overflow-hidden',
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-gray-200 shadow-2xl shadow-blue-900/5 py-3' 
            : 'bg-white/40 backdrop-blur-sm border-white/20 py-4 shadow-none'
        )}
      >
        <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-blue-600 z-50"
            style={{ width: `${scrollProgress}%` }}
        />

        <Link href="/" className="group">
          <span className="text-3xl font-signature text-blue-600 hover:text-blue-700 transition-colors">
            Mehrab Hasan
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 bg-gray-100/50 p-1 rounded-xl border border-gray-200/50">
          {navLinks.map((link) => {
            const id = link.url.split('#')[1];
            const isActive = activeSection === id;
            
            return (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={(e) => handleNavLinkClick(e, link.url)}
                  className={cn(
                    'px-4 py-1.5 rounded-lg transition-all duration-300 font-bold text-[11px] uppercase tracking-widest relative',
                    isActive 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-900'
                  )}
                >
                  {link.name}
                </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
            <Button 
                href={cta.url} 
                variant="primary" 
                className="px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl hidden sm:flex shadow-blue-200" 
                sameTab={cta.sameTab}
            >
                {cta.title}
            </Button>

            <button
                className="lg:hidden w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-xl shadow-lg focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <Icon icon={isOpen ? 'akar-icons:cross' : 'akar-icons:three-line-horizontal'} width={20} />
            </button>
        </div>

        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl border border-gray-200 shadow-2xl rounded-3xl p-8 flex flex-col gap-4 overflow-y-auto max-h-[80vh]"
            >
                <div className="grid grid-cols-2 gap-3">
                    {navLinks.map((link) => {
                        const id = link.url.split('#')[1];
                        const isActive = activeSection === id;
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                className={cn(
                                    'p-4 rounded-2xl transition-all duration-300 font-black text-xs uppercase tracking-widest text-center border',
                                    isActive 
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-100' 
                                        : 'bg-gray-50 text-gray-500 border-gray-100 hover:bg-white hover:text-blue-600 hover:border-blue-100'
                                )}
                                onClick={(e) => handleNavLinkClick(e, link.url)}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
                <Button 
                    href={cta.url} 
                    variant="primary" 
                    className="w-full py-5 text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-100 mt-4" 
                    sameTab={cta.sameTab} 
                    onClick={() => setIsOpen(false)}
                >
                    {cta.title}
                </Button>
            </motion.div>
            )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
