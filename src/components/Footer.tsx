import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080808] text-white py-12 px-6 md:px-12 border-t border-white/5">
      {/* Using grid-cols-3 on desktop ensures the middle item is 
          mathematically centered in the viewport.
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        
        {/* 1. Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold tracking-tighter">
            Adriana<span className="text-pink-500">.</span>
          </span>
          <p className="text-gray-500 text-[10px] font-medium tracking-widest uppercase">
            Frontend Developer & Designer
          </p>
        </div>

        {/* 2. Center: The Copyright (Freaking Centered) */}
        <div className="flex justify-center order-3 md:order-none">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">
            © {currentYear} All Rights Reserved
          </p>
        </div>

        {/* 3. Right: Status */}
        <div className="flex items-center justify-center md:justify-end gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">
            Available for projects
          </span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;