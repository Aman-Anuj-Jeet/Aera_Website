'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? 'p-0' : 'p-6'}`}>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex items-center justify-between w-full max-w-7xl px-8 py-4 transition-all duration-500 ${
          isScrolled 
            ? 'glass border-b border-white/5 rounded-2xl shadow-2xl' 
            : 'bg-transparent border-b border-transparent rounded-none'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative overflow-hidden rounded-lg">
            <Image 
              src="/aera.jpg" 
              alt="Aera Logo" 
              fill 
              className="object-cover"
              sizes="32px"
            />
          </div>
          <span className="text-lg font-bold tracking-tighter text-white uppercase">Aera</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Features', 'Transparency', 'GitHub'].map((item) => (
            <a 
              key={item} 
              href={item === 'GitHub' ? 'https://github.com/Aman-Anuj-Jeet/Aera' : `#${item.toLowerCase()}`}
              target={item === 'GitHub' ? '_blank' : undefined}
              rel={item === 'GitHub' ? 'noopener noreferrer' : undefined}
              className="text-muted hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
          <a 
            href="#download" 
            className="group relative bg-surface border border-white/5 hover:border-primary/50 text-white px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 overflow-hidden shadow-2xl active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Download (Beta)</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-primary" />
            
            {/* Inner Glow */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-muted hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 glass p-6 rounded-2xl md:hidden flex flex-col gap-4"
        >
          {['Features', 'Transparency', 'GitHub'].map((item) => (
            <a 
              key={item} 
              href={item === 'GitHub' ? 'https://github.com/Aman-Anuj-Jeet/Aera' : `#${item.toLowerCase()}`}
              target={item === 'GitHub' ? '_blank' : undefined}
              rel={item === 'GitHub' ? 'noopener noreferrer' : undefined}
              className="text-muted hover:text-white text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#download" 
            className="bg-primary text-white w-full py-4 rounded-xl text-lg font-bold text-center flex items-center justify-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            Download (Beta)
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </nav>
  );
}
