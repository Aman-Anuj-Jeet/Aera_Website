'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center gap-10">
        {/* Integrated Footer Meta */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 opacity-80">
              <div className="w-6 h-6 relative overflow-hidden rounded-md">
                <Image 
                  src="/aera.jpg" 
                  alt="Aera Logo" 
                  fill 
                  className="object-cover"
                  sizes="24px"
                />
              </div>
              <span className="text-sm font-bold tracking-tight text-white uppercase">Aera</span>
            </div>
            <div className="text-[10px] uppercase font-black tracking-[0.3em] text-muted opacity-40">
              All rights reserved
            </div>
          </div>

          <div className="text-[10px] uppercase font-black tracking-[0.3em] text-muted opacity-40 italic">
            Intelligence Refined — 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
