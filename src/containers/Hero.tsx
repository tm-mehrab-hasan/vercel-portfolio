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
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden bg-white">
      {/* Dynamic Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideUp({ delay: 0.2 })}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-6">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3"
            >
                <span className="w-12 h-[2px] bg-blue-600 rounded-full" />
                <h2 className="text-blue-600 font-black text-xs md:text-sm tracking-[0.4em] uppercase">
                    Architecting the Future
                </h2>
            </motion.div>
            
            <div className="space-y-2">
                <div className="flex flex-col items-start gap-4">
                  <h1 className="text-4xl md:text-6xl font-black bg-blue-600 text-white px-6 py-2 rounded-2xl shadow-xl shadow-blue-100 w-fit leading-tight">
                    T. M.
                  </h1>
                  <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-none tracking-tighter">
                    Mehrab Hasan
                  </h1>
                </div>
            </div>
          </div>

          <div className="h-[60px] md:h-[80px] flex items-center bg-gray-900 px-6 rounded-2xl w-fit shadow-2xl border-b-4 border-blue-600">
            <div className="flex items-center gap-3 text-blue-400 font-mono text-lg md:text-2xl">
                <span className="text-gray-500">$</span>
                <Typewriter words={tagline} />
                <span className="w-3 h-6 bg-blue-500 animate-pulse" />
            </div>
          </div>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed text-justify font-medium">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
            <div className="flex flex-wrap gap-4">
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
            <div className="flex items-center gap-4 py-2 border-l-2 border-gray-100 pl-8">
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

        {/* Visual Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn(0.5)}
          className="lg:col-span-5 relative hidden lg:block"
        >
          {/* Decorative HUD Circle */}
          <div className="absolute inset-0 border-[20px] border-blue-50 rounded-full animate-[spin_20s_linear_infinite] opacity-50" />
          <div className="absolute inset-4 border-[2px] border-dashed border-blue-200 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-50" />
          
          <div className="relative z-10 scale-110 drop-shadow-[0_35px_35px_rgba(37,99,235,0.15)]">
            <ShowLottie path="/lotties/coding.json" className="w-full max-w-lg" />
          </div>

          {/* Floating Tech Badges */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 bg-white p-4 rounded-[2rem] shadow-2xl border border-gray-50 flex items-center gap-4 z-20"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Icon icon="mdi:robot" width={24} />
            </div>
            <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Status</p>
                <p className="text-gray-900 font-bold text-xs mt-1 uppercase">Engineering_Intelligent_Systems</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] rotate-90 mb-8 origin-left">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
