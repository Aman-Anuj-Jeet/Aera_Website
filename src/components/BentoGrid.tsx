'use client';

import { motion } from 'framer-motion';
import { Bot, Cpu, Globe, Infinity as InfinityIcon, Layers, Shield } from 'lucide-react';

const features = [
  {
    title: 'Semantic Perception Engine.',
    description: 'Aera bypasses fragile CSS selectors. It reads the raw Accessibility Tree to interact with dynamic web apps like a human would.',
    icon: <Bot className="text-primary w-10 h-10" />,
    className: 'md:col-span-1',
    delay: 0.1
  },
  {
    title: 'Deterministic Task Routing.',
    description: 'Guarantees zero-latency precision for critical workflows like Gmail and GCal by shifting from probabilistic reasoning to deterministic execution.',
    icon: <Cpu className="text-secondary w-10 h-10" />,
    className: 'md:col-span-1',
    delay: 0.2
  },
  {
    title: 'Isolated Chromium Core.',
    description: 'Structural division for security. Each tab runs as a strictly isolated Electron BrowserView, keeping agentic injections safe and stable.',
    icon: <Shield className="text-primary w-10 h-10" />,
    className: 'md:col-span-1',
    delay: 0.3
  },
  {
    title: 'Experimental Sandbox.',
    description: 'Built to pioneer autonomous web interaction. Aera is designed as a secure, local-first environment for agentic experimentation.',
    icon: <Globe className="text-secondary w-10 h-10" />,
    className: 'md:col-span-1',
    delay: 0.4
  },
  {
    title: 'Cross-Tab Memory RAG.',
    description: 'Aera silently embeds your active tabs into a local vector database, synthesizing context across your entire workspace in real-time.',
    icon: <Layers className="text-primary w-10 h-10" />,
    className: 'md:col-span-1',
    delay: 0.5
  },
  {
    title: 'Intelligent Monitoring.',
    description: 'No arbitrary timers. Aera monitors network idle states down to the millisecond, executing actions the exact moment the UI settles.',
    icon: <Bot className="text-secondary w-10 h-10" />,
    className: 'md:col-span-1',
    delay: 0.6
  }
];

export default function BentoGrid() {
  return (
    <section className="py-24 px-8 flex flex-col items-center bg-background" id="features">
      <div className="w-full max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">Architected for <br /> Execution.</h2>
          <p className="text-muted text-sm md:text-base max-w-lg">Advanced tools for those who refuse to wait. Aera is the intelligence layer for the modern web.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative p-10 bg-surface rounded-[2.5rem] hover:bg-surface-high transition-colors overflow-hidden ${feature.className}`}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-0 blur-[100px] group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>

              {/* Ghost Border (only visible on hover) */}
              <div className="absolute inset-0 border border-ghost-border opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
