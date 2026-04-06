'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWindows } from 'react-icons/fa';
import {  SiApple, SiLinux } from 'react-icons/si';

const platforms = [
  {
    name: "Windows",
    icon: <FaWindows className="w-4 h-4" />,
    url: "https://github.com/Aman-Anuj-Jeet/Aera/releases/download/v1.0.0/Aera.Browser.Setup.1.0.0.exe"
  },
  {
    name: "macOS (ARM64)",
    icon: <SiApple className="w-4.5 h-4.5" />,
    url: "https://github.com/Aman-Anuj-Jeet/Aera/releases/download/v1.0.0/Aera.Browser-1.0.0-arm64.dmg"
  },
  {
    name: "Linux",
    icon: <SiLinux className="w-5 h-5" />,
    url: "https://github.com/Aman-Anuj-Jeet/Aera/releases/download/v1.0.0/Aera.Browser-1.0.0.AppImage"
  }
];

export default function DownloadSection() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
    }, 5000);
  };

  return (
    <section id="download" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Available Everywhere.</h2>
            <p className="text-muted text-sm max-w-lg mx-auto">
              Download the latest release for your operating system or explore the source.
            </p>
          </motion.div>

          {/* Minimalist Horizontal Bar with Animation */}
          <div className="relative w-full max-w-5xl flex justify-center min-h-[64px]">
            <AnimatePresence mode="wait">
              {!isDownloaded ? (
                <motion.div 
                  key="platforms-bar"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-wrap justify-center items-center gap-6 w-full"
                >
                  {platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      onClick={handleDownload}
                      className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-surface border border-white/10 hover:border-primary/50 hover:bg-surface-high transition-all group active:scale-95 shadow-lg"
                    >
                      <div className="text-white opacity-60 group-hover:opacity-100 transition-opacity">
                        {platform.icon}
                      </div>
                      <span className="text-xs uppercase font-black tracking-widest text-white/50 group-hover:text-white transition-colors">
                        {platform.name}
                      </span>
                    </a>
                  ))}

                  <div className="w-px h-8 bg-white/10 mx-2 hidden md:block" />

                  <a
                    href="https://github.com/Aman-Anuj-Jeet/Aera"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownload}
                    className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group active:scale-95 shadow-lg"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-5 h-5 text-white opacity-40 group-hover:opacity-100 transition-opacity"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span className="text-xs uppercase font-black tracking-widest text-white/40 group-hover:text-white transition-colors">GitHub</span>
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="thank-you-message"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex items-center justify-center w-full"
                >
                  <div className="px-12 py-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                    <span className="text-sm font-black uppercase tracking-[0.4em] text-white/80 animate-pulse bg-clip-text">
                      Thank you for downloading Aera.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-[10px] text-muted tracking-[0.2em] font-bold opacity-30"
          >
            RELEASE v1.0.0
          </motion.p>
        </div>
      </div>
    </section>
  );
}
