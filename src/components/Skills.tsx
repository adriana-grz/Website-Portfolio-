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
  const containerWidth = "max-w-7xl"; 

  return (
    <section id="skills" className="py-0 px-6 md:px-12 lg:px-20 flex items-center justify-center bg-transparent">
      <motion.div 
        className={`${containerWidth} mx-auto w-full`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        
        {/* --- HEADER --- */}
        <div className="mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Skills & Experience</h2>
      
        </div>
        
        {/* --- TECH STACK GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="relative p-10 rounded-3xl overflow-hidden group/card 
                         bg-black/40 backdrop-blur-xl border border-white/10 
                         hover:bg-black/60 hover:border-fuchsia-500/40 
                         min-h-[340px] flex flex-col transition-all duration-300 ease-out"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-fuchsia-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-10 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]" />
                <h3 className="font-mono text-xs tracking-[0.25em] text-gray-300 uppercase font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-y-10 gap-x-4 relative z-10 my-auto">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <motion.div 
                      className="grayscale-[30%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon icon={skill.icon} className={`text-5xl ${skill.name === "GitHub" ? "text-white" : ""}`} />
                    </motion.div>
                    
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom pointer-events-none z-50">
                      <div className="bg-fuchsia-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-xl whitespace-nowrap">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- EXPERIENCE SECTION --- */}
        <div className="w-full relative z-10">
          <div className="grid grid-cols-1 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 
                           hover:border-fuchsia-500/30 min-h-[200px] flex flex-col items-center justify-center text-center
                           transition-all duration-300 group overflow-hidden"
              >
                <div className="mb-6 text-fuchsia-500/80 group-hover:text-fuchsia-400 transition-colors duration-300">
                  <Icon icon={step.icon} className="text-4xl" />
                </div>
                <h4 className="text-white font-bold text-3xl mb-1 tracking-tight">{step.title}</h4>
                <p className="text-fuchsia-500 font-mono text-[20px] mb-4 uppercase tracking-widest">{step.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">{step.description}</p>
                
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