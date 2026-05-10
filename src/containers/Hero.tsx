'use client';
import { heroSection } from '@/lib/content/hero';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import ShowLottie from '@/components/ShowLottie';
import { fadeIn, slideUp } from '@/lib/utils/animations';
import Typewriter from '@/components/Typewriter';
import { useLenis } from 'lenis/react';

const Hero = () => {
  const { title, tagline, description, ctas } = heroSection;
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
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideUp({ delay: 0.2 })}
          className="space-y-6"
        >
          <h2 className="text-blue-600 font-medium text-lg tracking-wider uppercase">
            Hi, my name is
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <div className="h-[80px] md:h-[120px] flex items-center">
            <Typewriter words={tagline} />
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed text-justify">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            {ctas?.map((cta, i) => (
              <Button
                key={cta.title}
                href={cta.url}
                variant={i === 0 ? 'primary' : 'outline'}
                sameTab={cta.sameTab}
                onClick={(e) => handleCtaClick(e, cta.url)}
              >
                {cta.title}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn(0.5)}
          className="hidden lg:block relative"
        >
          <ShowLottie path="/lotties/coding.json" className="w-full max-w-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
