'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import { motion, Variants } from 'framer-motion';

const skillCategories = [
  {
    title: "Core Stack",
    skills: [
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "PHP", icon: "logos:php" },
      { name: "Java", icon: "logos:java" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "jQuery", icon: "logos:jquery" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", icon: "logos:figma" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "MS Office", icon: "logos:microsoft-icon" },
      { name: "XAMPP", icon: "logos:xampp" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Android Studio", icon: "logos:android-icon" },
    ],
  }
];

const workflowSteps = [
  {
    title: "Xentra Info Tech Solutions, Inc.",
    subtitle: "FrontEnd/Web Developer Intern 2026",
    description: "Refactored and modernized a legacy front-end project by updating its codebase to current standards, improving structure, maintainability, and performance. Enhanced UI components, and applied development practices to ensure better scalability and user experience.",
    icon: "mdi:office-building-community",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 18 },
  },
};

const Skills = () => {
  const containerWidth = "max-w-5xl"; 

  return (
    <section id="skills" className="pt-12 pb-16 px-6 md:px-12 flex items-center justify-center bg-transparent">
      <motion.div 
        className={`${containerWidth} mx-auto w-full`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        
        {/* --- HEADER (Adjusted mb and text size) --- */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">Skills & Experience</h2>
        </div>
        
        {/* --- TECH STACK GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative p-6 rounded-2xl overflow-hidden group/card 
                         bg-black/40 backdrop-blur-xl border border-white/10 
                         hover:bg-black/60 hover:border-fuchsia-500/40 
                         min-h-[260px] flex flex-col transition-all duration-300 ease-out"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-fuchsia-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]" />
                <h3 className="font-mono text-[10px] tracking-[0.2em] text-gray-300 uppercase font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-y-6 gap-x-3 relative z-10 my-auto justify-items-center">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <motion.div 
                      className="grayscale-[30%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon icon={skill.icon} className={`text-4xl ${skill.name === "GitHub" ? "text-white" : ""}`} />
                    </motion.div>
                    
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom pointer-events-none z-50">
                      <div className="bg-fuchsia-600 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-xl whitespace-nowrap">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER / EXPERIENCE SECTION (Adjusted Padding and min-h) --- */}
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 
                           hover:border-fuchsia-500/30 min-h-[140px] flex flex-col items-center justify-center text-center
                           transition-all duration-300 group overflow-hidden"
              >
                <div className="mb-3 text-fuchsia-500/80 group-hover:text-fuchsia-400 transition-colors duration-300">
                  <Icon icon={step.icon} className="text-3xl" />
                </div>
                <h4 className="text-white font-bold text-2xl mb-1 tracking-tight">{step.title}</h4>
                <p className="text-fuchsia-500 font-mono text-[13px] mb-3 uppercase tracking-widest">{step.subtitle}</p>
                <p className="text-gray-400 text-[11px] leading-relaxed max-w-xl">{step.description}</p>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-fuchsia-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Skills;