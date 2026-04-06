'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] pt-40 pb-20 overflow-hidden bg-background">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary blur-[160px] rounded-full pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary blur-[200px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
        {/* Branding & Headline */}
        <div className="mb-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[60px] md:text-[90px] lg:text-[120px] font-black tracking-[0.2em] leading-none mb-6 bg-gradient-to-b from-white via-white to-primary/40 bg-clip-text text-transparent select-none uppercase inline-block pb-2"
          >
            Aera
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl font-bold tracking-[0.5em] text-white/30 uppercase"
          >
            Intelligence, Refined.
          </motion.div>
        </div>

        {/* Subheader */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-muted text-base md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Stop clicking. Aera is a desktop-native autonomous browser that shifts the web from reactive browsing to agentic execution. State your goal, and let the agent navigate.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <a 
            href="#download" 
            className="group relative bg-surface border border-white/10 hover:border-primary/50 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3 overflow-hidden shadow-2xl active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Download Beta</span>
            <ArrowUpRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-primary" />
            
            {/* CTA Inner Glow */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </a>
        </motion.div>
      </div>

      {/* Abstract Background Element (Orb or Gradient) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}
