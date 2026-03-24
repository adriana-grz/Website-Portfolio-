"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const tabs = ["About", "Skills", "Projects", "Contact Me"] as const;
export type Tab = (typeof tabs)[number];

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const scrollToSection = (tab: Tab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-7 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => scrollToSection(tab)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeTab === tab ? "text-white" : "text-white/60 hover:text-white/80"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/20 rounded-full"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;