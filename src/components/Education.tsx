"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- DATA & TYPES ---
interface EducationItem {
  id: string;
  navLabel: string;
  institution: string;
  degree: string;
  period: string;
  description: string[];
  color: string;
}

const educationData: EducationItem[] = [
  {
    id: 'university-1',
    navLabel: 'College',
    institution: 'La Consolacion University Philippines',
    degree: 'Bachelor of Science in Information Technology',
    period: '2022 — Present',
    color: '#b36cf5', 
    description: [
      'Currently pursuing Information Technology with focus on software development, UI/UX, databases, and networking.',
      'Consistent Dean\'s Lister and a Scholar in the University.',
      'With a GPA of 1.15.'
    ],
  },
  {
    id: 'shs',
    navLabel: 'Senior High ',
    institution: 'La Consolacion University Philippines',
    degree: 'TVL - Computer Programming',
    period: '2020 — 2022',
    color: '#b36cf5', 
    description: [
      'Specialized in Information and Communications Technology, gaining practical skills in programming, design, and hardware.',
      'Graduated with High Honors.',
      'Awarded Best in Research.'
    ],
  },
  {
    id: 'jhs',
    navLabel: 'Junior High ',
    institution: 'Guiguinto National Vocational High School',
    degree: 'Specialized in Computer Technology',
    period: '2016 — 2020',
    color: '#b36cf5', 
    description: [
      'Developed strong academic foundation in the field of technology and leadership skills through extracurricular activities.',
      'Learned Microsoft Office tools and basic programming languages including HTML, CSS, and JavaScript.',
      'Graduated with High Honors.',
    ],
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// --- MAIN COMPONENT ---
const Education = () => {
  const [activeTab, setActiveTab] = useState(educationData[0].id);
  const activeContent = educationData.find((item) => item.id === activeTab)!;

  // Mouse Tracking Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform mouse position into rotation (-10 to 10 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-15 relative overflow-hidden ">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[800px] h-[800px] bg-purple-900/20 blur-[150px] rounded-full -z-10" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[300px_1fr] gap-16 items-start z-10"
      >
        
        {/* LEFT NAV */}
        <div className="space-y-10">
          <motion.h2 
            variants={itemVariants}
            className="text-6xl font-black text-white leading-none tracking-tighter"
          >
            Academic <br/>
            <span className="text-transparent bg-clip-text bg-[#b36cf5]">History</span>
          </motion.h2>

          <motion.nav variants={itemVariants} className="flex flex-col gap-3">
            {educationData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="relative p-6 text-left group outline-none"
              >
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="navShadow"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl"
                  />
                )}
                <div className="relative z-10">
                  <p className={`text-xs font-bold transition-colors mb-1 ${activeTab === item.id ? 'text-purple-400' : 'text-gray-400'}`}>
                    {item.period}
                  </p>
                  <h4 className={`text-xl font-bold transition-colors ${activeTab === item.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {item.navLabel}
                  </h4>
                </div>
              </button>
            ))}
          </motion.nav>
        </div>

        {/* RIGHT CONTENT STAGE with 3D PERSPECTIVE */}
        <motion.div 
          variants={itemVariants}
          style={{ perspective: "1000px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-auto min-h-[600px] w-full group"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full bg-white/[0.02] border border-white/12 rounded-[2rem] backdrop-blur-2xl p-10 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Internal Float Effect: Content pops "out" from the card */}
              <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                <header>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm mb-8"
                  >
                    {activeContent.period}
                  </motion.div>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {activeContent.degree}
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold mb-10" style={{ color: activeContent.color }}>
                    {activeContent.institution}
                  </p>
                </header>

                <ul className="space-y-6">
                  {activeContent.description.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-start gap-4 text-gray-400 text-lg md:text-xl leading-relaxed"
                    >
                      <span className="mt-2.5 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: activeContent.color }} />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Glowing Mouse Follower (Light source inside card) */}
              <motion.div 
                style={{ 
                  x: useTransform(mouseXSpring, [-0.5, 0.5], ["-30%", "30%"]),
                  y: useTransform(mouseYSpring, [-0.5, 0.5], ["-30%", "30%"]),
                  backgroundColor: activeContent.color 
                }}
                className="absolute inset-0 opacity-15 blur-[120px] rounded-full pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Education;