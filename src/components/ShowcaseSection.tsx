'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Eye, MemoryStick as Memory, MessageSquare, Zap } from 'lucide-react';

const features = [
  {
    badge: "The Command Center",
    title: "Adaptive Intelligence. True Ownership.",
    description: "Aera is a multi-model powerhouse that learns who you are. Bring your own keys, choose your reasoning engine, and let the browser adapt to your preferences. Your API keys and personal memory vectors never leave your local device.",
    image: "/ss1.png",
    imageAlt: "Aera AI Command Center showing Multi-Model Selection and local key validation.",
    isReversed: false,
    icon: <Memory className="text-primary w-8 h-8" />
  },
  {
    badge: "Hands-Free Navigation",
    title: "Hands-Free Digital Accessibility.",
    description: "Navigate the entire internet without touching your mouse or keyboard. Speak your intent, and Aera translates it into native browser actions directly through the accessibility tree for instant execution.",
    image: "/ss2.png",
    imageAlt: "Aera Browser with active voice-waveform visualizer responding to a navigation command.",
    isReversed: true,
    icon: <MessageSquare className="text-secondary w-8 h-8" />
  },
  {
    badge: "Autonomous Systems",
    title: "Proactive Background Agents.",
    description: "Transform your browser into a 24/7 worker. Deploy independent agents to monitor the web, extract data, and alert you only when your exact goal is met—from price trackers to daily news blogs.",
    image: "/ss3.png",
    imageAlt: "Aera's Autonomous Workflows Dashboard showing active monitoring tasks and status badges.",
    isReversed: false,
    icon: <Zap className="text-primary w-8 h-8" />
  },
  {
    badge: "Intelligence & RAG",
    title: "Cross-Tab Vector Synthesis.",
    description: "Stop copying and pasting. Aera’s local memory engine reads and understands all of your open tabs simultaneously to perform deep, multi-source research into a single, unified answer.",
    image: "/ss4.png",
    imageAlt: "Aera Browser generating a unified research report from multiple open tabs using local RAG.",
    isReversed: true,
    icon: <Cpu className="text-secondary w-8 h-8" />
  }
];

export default function ShowcaseSection() {
  return (
    <section id="features" className="py-20 bg-background overflow-hidden">
      <div className="w-full">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 min-h-[55vh] lg:min-h-[76vh] py-10 lg:py-12 relative ${
              feature.isReversed ? 'lg:flex-row-reverse text-right' : 'text-left'
            }`}
          >
            {/* Image Content - "Attached to Border" & Shown Fully */}
            <motion.div
              initial={{ opacity: 0, x: feature.isReversed ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full lg:w-[55%] flex-none relative ${
                feature.isReversed ? 'lg:ml-auto' : 'lg:mr-auto'
                }`}
            >
              <div className={`relative aspect-video overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5 ${
                feature.isReversed 
                  ? 'rounded-l-[2rem] rounded-r-none'
                  : 'rounded-r-[2rem] rounded-l-none'
                }`}>
                <div className="relative w-full h-full">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-1000"
                    sizes="55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* Text Content - Anchored & Balanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`w-full lg:w-[45%] flex flex-col justify-center px-8 lg:px-24 py-8 lg:py-0 ${
                feature.isReversed ? 'lg:pr-32 lg:pl-0 lg:items-end' : 'lg:pl-32 lg:pr-0 lg:items-start'
                }`}
            >
              <div className="max-w-md">
                <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/[0.05]">
                  {feature.icon}
                </div>

                <div className="space-y-4">
                  <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase block">
                    {feature.badge}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1]">
                    {feature.title}
                  </h2>
                  <p className="text-[#a1a1a1] text-base lg:text-lg leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
