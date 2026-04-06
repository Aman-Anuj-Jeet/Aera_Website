'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Layers, ShieldCheck, Terminal } from 'lucide-react';

export default function ArchitectureSection() {
  return (
    <section className="py-40 px-8 flex flex-col items-center bg-background border-t border-white/5" id="architecture">
      <div className="w-full max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Under the Hood</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">Scope & Architecture</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-12">
              {/* Reality Check */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Terminal className="text-primary w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">An Experimental Agent Environment</h3>
                </div>
                <p className="text-muted text-base leading-relaxed max-w-xl">
                  Aera is built to pioneer the future of autonomous web interaction, not to replace your daily driver. While it features a fully functional Chromium-based rendering engine, it is designed strictly as an experimental sandbox for agentic workflows. It prioritizes AI-driven DOM manipulation and semantic perception over traditional enterprise browser features.
                </p>
              </div>

              {/* Isolated Chromium */}
              <div className="group border-t border-white/5 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                    <Layers className="text-secondary w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Isolated Chromium Architecture</h3>
                </div>
                <p className="text-muted text-base leading-relaxed max-w-xl">
                  Aera's interface is structurally divided for maximum security and performance. The top navigation and unified tab bar run on a secure, sandboxed React UI layer. Underneath, each active tab is rendered as a strictly isolated Electron <code className="text-secondary font-mono bg-white/5 px-2 py-0.5 rounded">BrowserView</code>. This means the AI orchestrator can inject contextual commands into specific tabs via the Chrome DevTools Protocol (CDP) without ever compromising the stability of the main application thread.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Screenshot 2 Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass rounded-[2.5rem] overflow-hidden p-3 border border-white/5 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-[1.8rem] overflow-hidden bg-surface">
                <Image 
                   src="/ss2.png" 
                   alt="Aera Cross-Tab Memory Feature Showcase" 
                   fill 
                   className="object-cover"
                   sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                
                {/* Float Badge */}
                <div className="absolute bottom-6 left-6 glass px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/10">
                  <ShieldCheck className="text-primary w-5 h-5" />
                  <span className="text-white text-sm font-bold uppercase tracking-wider">Local RAG Context</span>
                </div>
              </div>
            </div>
            
            {/* Background Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
