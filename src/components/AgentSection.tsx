'use client';

import { motion } from 'framer-motion';
import { Bot, Sparkles, Wand2 } from 'lucide-react';

export default function AgentSection() {
  return (
    <section className="relative py-32 px-8 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Animated Gradient */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-secondary/10 to-transparent blur-[120px] rounded-full pointer-events-none opacity-40"
      />

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="text-secondary w-4 h-4" />
            <span className="text-secondary text-[10px] font-bold tracking-[0.2em] uppercase">THE AGENTIC LOOP</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Think. Act. <br />
            <span className="text-primary text-glow">Recover.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-muted text-sm md:text-base max-w-md mb-8 leading-relaxed"
          >
            The web is hostile and unpredictable. If a pop-up blocks the screen or a click fails, Aera doesn't crash. It seamlessly triggers Vision AI to physically inspect the screen, dismiss the blockage, and recover the task.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {['Fast Intent Triage (8B Model)', 'Vision AI Auto-Recovery', 'Semantic Fingerprint Tracking'].map((item) => (
              <div key={item} className="flex items-center gap-3 group">
                <div className="p-2.5 bg-surface rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Wand2 size={16} className="text-muted group-hover:text-primary transition-colors" />
                </div>
                <span className="text-white text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex-1 relative z-10 w-full max-w-lg">
          <div className="relative aspect-square flex items-center justify-center">
            {/* The Orb */}
            <motion.div 
              animate={{ 
                boxShadow: [
                  "0 0 40px rgba(0, 111, 240, 0.2)",
                  "0 0 100px rgba(0, 111, 240, 0.5)",
                  "0 0 40px rgba(0, 111, 240, 0.2)"
                ]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-64 h-64 bg-primary rounded-full relative z-20 overflow-hidden"
            >
              {/* Inner core animation */}
              <motion.div 
                animate={{ 
                  y: [-100, 100],
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-white opacity-20 blur-3xl pointer-events-none"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <Bot size={80} className="text-white drop-shadow-2xl" />
              </div>
            </motion.div>

            {/* Orbiting glass shards */}
            {[0, 1, 2].map((i) => (
              <motion.div 
                key={i}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20 + i * 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <motion.div 
                   animate={{ 
                     y: [0, 20 * (i+1), 0],
                     scale: [1, 1.1, 1] 
                   }}
                   transition={{ 
                     duration: 5, 
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: i
                   }}
                   className="w-24 h-40 glass rounded-[2rem] absolute"
                   style={{ 
                     top: `${20 + i * 15}%`, 
                     left: `${5 + i * 30}%`,
                     opacity: 0.6 - i * 0.1
                   }}
                />
              </motion.div>
            ))}

            {/* Ambient shadow/glow */}
            <div className="absolute w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
