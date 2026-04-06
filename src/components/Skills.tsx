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
    title: "Agile / Scrum",
    description: "Collaborative development focused on sprint-based task management.",
    icon: "teenyicons:users-outline",
  },
  {
    title: "Legacy Modernization",
    description: "Refactoring legacy code and upgrading dependencies to modern standards.",
    icon: "mdi:wrench-clock",
  },
  {
    title: "Version Control",
    description: "Disciplined use of GitHub for branching and clean commit histories.",
    icon: "mdi:github",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-1 px-6 md:px-12 flex items-center justify-center bg-transparent">
      <motion.div 
        className="max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        
        {/* --- HEADER --- */}
        <div className="mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">My Tech Stack.</h2>
        </div>
        
        {/* --- TECH STACK GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title} 
              variants={cardVariants}
              whileHover={{ 
                rotateX: 2, 
                rotateY: -2,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="relative p-8 rounded-3xl overflow-hidden group/card 
                         bg-black/50 backdrop-blur-2xl border border-white/20 
                         hover:bg-black/70 hover:border-fuchsia-500/40 
                         hover:shadow-[0_20px_80px_-20px_rgba(217,70,239,0.25)]
                         transition-all duration-500 ease-out"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-fuchsia-600/15 to-purple-600/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-12 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_12px_#d946ef]" />
                <h3 className="font-mono text-sm tracking-widest text-gray-100 uppercase font-semibold">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-y-10 gap-x-4 place-items-center relative z-10">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className={`group relative ${(catIndex === 1 && index === 3) || (catIndex === 2 && index === 6) ? "col-start-2" : ""}`}>
                    <motion.div className="grayscale-[30%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300" whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}>
                      <Icon icon={skill.icon} className={`text-4xl ${skill.name === "GitHub" ? "text-white" : ""}`} />
                    </motion.div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 origin-bottom pointer-events-none z-50">
                      <div className="bg-white text-black text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter whitespace-nowrap shadow-xl">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- WORKFLOW SECTION --- */}
        <div className="w-full relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-10 bg-fuchsia-500" />
            <span className="text-fuchsia-500 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Workflow</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative p-6 rounded-2xl bg-black/60 backdrop-blur-3xl border border-white/10 hover:border-fuchsia-500/40 transition-all duration-500 group overflow-hidden"
              >
                <div className="mb-4 text-fuchsia-500 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <Icon icon={step.icon} className="text-4xl" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2 tracking-tight">{step.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">{step.description}</p>
                
                {/* Visual Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-fuchsia-500 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Skills;