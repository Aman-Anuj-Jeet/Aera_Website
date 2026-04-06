'use client';

import { motion } from 'framer-motion';
import { Apple, Download } from 'lucide-react';

const platforms = [
  {
    name: "Windows",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M0 3.449L9.75 2.1V11.7H0V3.449zm0 9.151h9.75v9.6L0 20.551V12.6zm10.55-10.749L24 0v11.7h-13.45V1.851zM24 12.6v11.4l-13.45-1.851V12.6H24z"/>
      </svg>
    ),
    url: "/downloads/aera-windows.exe"
  },
  {
    name: "macOS",
    icon: <Apple className="w-5 h-5" />,
    url: "/downloads/aera-macos.dmg"
  },
  {
    name: "Linux",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM9 13a1.5 1.5 0 1 0-1.5-1.5A1.5 1.5 0 0 0 9 13zm6 0a1.5 1.5 0 1 0-1.5-1.5A1.5 1.5 0 0 0 15 13zm-3 4a3.5 3.5 0 0 0 3.5-3.5h-7A3.5 3.5 0 0 0 12 17z"/>
      </svg>
    ),
    url: "/downloads/aera-linux.AppImage"
  }
];

export default function DownloadSection() {
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

          {/* Minimalist Horizontal Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-6 w-full max-w-5xl"
          >
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
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

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-[10px] text-muted uppercase tracking-[0.2em] font-bold opacity-30"
          >
            Release 1.0.0
          </motion.p>
        </div>
      </div>
    </section>
  );
}
