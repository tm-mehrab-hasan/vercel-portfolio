'use client';
import { heroSection } from '@/lib/content/hero';
import { socialSection } from '@/lib/content/social';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import ShowLottie from '@/components/ShowLottie';
import { fadeIn, slideUp } from '@/lib/utils/animations';
import Typewriter from '@/components/Typewriter';
import { useLenis } from 'lenis/react';
import Icon from '@/components/Icon';
import Link from 'next/link';

const Hero = () => {
  const { title, tagline, description, ctas } = heroSection;
  const { socialLinks } = socialSection;
  const lenis = useLenis();

  const handleCtaClick = (e: React.MouseEvent, url: string) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(url, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 lg:pt-20 px-6 relative overflow-hidden bg-white">
      {/* Dynamic Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Visual Content - Shown on mobile above text for impact */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn(0.5)}
          className="lg:col-span-5 relative order-first lg:order-last w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
        >
          {/* Decorative HUD Circle */}
          <div className="absolute inset-0 border-[10px] md:border-[20px] border-blue-50 rounded-full animate-[spin_20s_linear_infinite] opacity-50" />
          <div className="absolute inset-2 md:inset-4 border-[1px] md:border-[2px] border-dashed border-blue-200 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-50" />
          
          <div className="relative z-10 scale-100 lg:scale-110 drop-shadow-[0_15px_15px_rgba(37,99,235,0.1)] lg:drop-shadow-[0_35px_35px_rgba(37,99,235,0.15)]">
            <ShowLottie path="/lotties/coding.json" className="w-full" />
          </div>

          {/* Floating Tech Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 lg:top-10 lg:right-0 bg-white p-2 md:p-4 rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-50 flex items-center gap-2 md:gap-4 z-20"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                <Icon icon="mdi:robot" width={20} />
            </div>
            <div className="min-w-0">
                <p className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Status</p>
                <p className="text-gray-900 font-bold text-[10px] md:text-xs mt-1 uppercase truncate">Systems_Online</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideUp({ delay: 0.2 })}
          className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <div className="space-y-6">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center lg:justify-start gap-3"
            >
                <span className="w-12 h-[2px] bg-blue-600 rounded-full" />
                <h2 className="text-blue-600 font-black text-xs md:text-sm tracking-[0.4em] uppercase">
                    Architecting the Future
                </h2>
            </motion.div>
            
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tighter">
                T. M.
              </h1>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-none tracking-tighter">
                Mehrab Hasan
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 text-blue-600 font-sans text-xl md:text-2xl font-black mx-auto lg:mx-0">
                <span className="text-blue-400">$</span>
                <Typewriter 
                  words={tagline} 
                  className="text-blue-600 font-black" 
                  typingSpeed={40} 
                  deletingSpeed={20} 
                  pauseTime={1000}
                />
                <span className="w-2.5 h-6 bg-blue-600 animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
          </div>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed text-center lg:text-justify font-medium mx-auto lg:mx-0">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-center gap-8 pt-4">
            <div className="flex flex-wrap justify-center gap-4">
                {ctas?.map((cta, i) => (
                <Button
                    key={cta.title}
                    href={cta.url}
                    variant={i === 0 ? 'primary' : 'outline'}
                    sameTab={cta.sameTab}
                    onClick={(e) => handleCtaClick(e, cta.url)}
                    className="px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform"
                >
                    {cta.title}
                </Button>
                ))}
            </div>

            {/* Integrated Socials */}
            <div className="flex items-center gap-4 py-2 border-t-2 sm:border-t-0 sm:border-l-2 border-gray-100 pt-6 sm:pt-2 sm:pl-8">
                {socialLinks.slice(0, 3).map((social) => (
                    <Link 
                        key={social.name} 
                        href={social.url} 
                        target="_blank"
                        className="text-gray-400 hover:text-blue-600 transition-all hover:scale-125 p-2 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg"
                        title={social.name}
                    >
                        <Icon icon={social.icon} width={22} />
                    </Link>
                ))}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
