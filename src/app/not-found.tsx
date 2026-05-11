'use client';
import Button from '@/components/Button';
import ShowLottie from '@/components/ShowLottie';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <ShowLottie path="/lotties/404.json" className="w-full mb-8" />
        
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">
          SYSTEM_FAILURE: 404
        </h1>
        
        <p className="text-gray-500 mb-10 leading-relaxed font-medium">
          The requested coordinate does not exist in the current system. 
          The drone has been dispatched to investigate this anomaly.
        </p>

        <Button href="/" variant="primary" sameTab className="px-8 py-4 rounded-xl font-black uppercase tracking-widest shadow hover:scale-105 transition-transform">
          Return to Command Center
        </Button>
      </motion.div>

      {/* Technical Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-[0.03] pointer-events-none">
        <span className="text-9xl font-black">ERR_NULL</span>
      </div>
      <div className="absolute bottom-10 right-10 opacity-[0.03] pointer-events-none text-right">
        <p className="font-mono text-xs uppercase tracking-[0.5em]">Anomaly detected at root_node</p>
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] mt-2 italic text-blue-600">Re-routing to home...</p>
      </div>
    </div>
  );
}
