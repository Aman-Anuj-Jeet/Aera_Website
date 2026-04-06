'use client';

import { motion } from 'framer-motion';
import { Key, Lock, ShieldCheck, Zap } from 'lucide-react';

export default function APIKeySection() {
  return (
    <section className="py-16 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden" id="transparency">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-primary w-5 h-5" />
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">User Sovereignty</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Zero-Knowledge Privacy. <br />
              <span className="text-glow">Vaulted Locally.</span>
            </h2>
            
            <p className="text-muted text-sm lg:text-base leading-relaxed max-w-xl mb-8 italic opacity-80">
              &ldquo;We don’t want your data, and we don’t host your AI. You hold the keys, and we keep them locked on your machine.&rdquo;
            </p>

            <div className="space-y-10">
              {/* Feature Items */}
              <div className="flex gap-6 group">
                <div className="p-4 bg-surface rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <Key className="text-muted group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Bring Your Own Brain</h4>
                  <p className="text-muted leading-relaxed max-w-md">
                    To power Aera’s dual-engine triage and execution loops, simply connect your own Google Gemini and NVIDIA NIM API keys. You pay only for the exact compute you use.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="p-4 bg-surface rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <Lock className="text-muted group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Native Local Storage</h4>
                  <p className="text-muted leading-relaxed max-w-md">
                    Your credentials never touch our servers. Aera utilizes native <code className="text-primary font-mono px-2 py-0.5 bg-primary/5 rounded">electron-store</code> to vault your API keys and personal vector memory (<code className="text-primary font-mono bg-primary/5 px-2 py-0.5 rounded">user-preferences.json</code>) directly onto your local hard drive.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="p-4 bg-surface rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <Zap className="text-muted group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-tight">Air-Tight Security</h4>
                  <p className="text-muted leading-relaxed max-w-md">
                    No cloud syncing, no telemetry, and no hidden databases. Your keys stay exactly where they belong—on your device, strictly under your control.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Graphical Mockup: API Key Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="glass p-8 rounded-[2.5rem] border border-white/5 shadow-inner scale-95 origin-right">
               <div className="space-y-8">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Lock className="text-primary w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-base">Secure Onboarding</p>
                        <p className="text-muted text-[10px] uppercase tracking-widest font-bold">Encrypted Local Vault</p>
                    </div>
                 </div>

                 {/* Mock Input Fields */}
                 <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-muted text-[10px] uppercase font-bold tracking-wider">Gemini API Key</label>
                        <div className="bg-surface-high p-4 rounded-xl border border-white/5 flex items-center justify-between">
                            <span className="text-muted/40 font-mono tracking-widest text-xs">••••••••••••••••••••••••••••••</span>
                            <ShieldCheck className="text-primary w-4 h-4 opacity-50" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-muted text-[10px] uppercase font-bold tracking-wider">NVIDIA NIM Endpoint</label>
                        <div className="bg-surface-high p-4 rounded-xl border border-white/5 flex items-center justify-between">
                            <span className="text-muted/40 font-mono tracking-widest text-xs">••••••••••••••••••••••••••••••</span>
                            <ShieldCheck className="text-primary w-4 h-4 opacity-50" />
                        </div>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Background Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[140px] pointer-events-none -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
