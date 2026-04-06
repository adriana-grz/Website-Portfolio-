'use client';
import { motion, useMotionValue, useTransform, useSpring, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Hero() {
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize values between -0.5 and 0.5
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative h-full w-full flex items-center overflow-hidden"
    >
      <motion.div 
        style={{ x, y }} 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-12 md:px-24 z-20"
      >
        {/* Status Tag */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-300"></span>
          </span>
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-bold text-white-100">
            Open for Collaboration
          </span>
        </motion.div>

        {/* Professional Portfolio Copy */}
        <motion.h1 
          variants={itemVariants}
          className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tighter leading-[0.85]"
        >
          FRONT-END <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500">
            DEVELOPER.
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <p className="max-w-xl text-lg md:text-xl text-white/40 leading-relaxed font-normal">
            I focus on creating <span className="text-white/80">web experiences</span> that actually make sense.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-8 mt-2 relative z-30 pointer-events-auto">
          {[
          { name: 'Github', icon: 'line-md:github-loop', url: 'https://github.com/adriana-grz' },
          { name: 'LinkedIn', icon: 'line-md:linkedin', url: '#' },
          { name: 'Discord', icon: 'line-md:discord', url: '#' }
    ].map((link) => (
    <a
      key={link.name}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-2.5 cursor-pointer"
      >
      <Icon 
        icon={link.icon} 
        className="text-xl text-white/20 group-hover:text-white transition-all duration-300" 
      />
      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/20 group-hover:text-white/70 transition-all duration-300">
        {link.name}
      </span>
      {/* Hover Underline */}
      <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-400 to-indigo-500 transition-all duration-500 group-hover:w-full" />
    </a>
    ))}
    </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex gap-5 mt-12 pointer-events-auto">
          <button className="group relative px-8 py-4 rounded-full overflow-hidden transition-all">
            <div className="absolute inset-0 bg-white group-hover:bg-blue-50 transition-colors" />
            <span className="relative text-black font-bold text-sm uppercase tracking-wider">Explore Projects</span>
          </button>
          
          <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-lg text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all">
            Contact
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}