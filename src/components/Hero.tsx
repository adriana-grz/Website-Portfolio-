'use client';
import { motion, useMotionValue, useTransform, useSpring, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center overflow-hidden bg-transparent"
    >
      <motion.div 
        style={{ x, y }} 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        
        className="container mx-auto px-6 sm:px-12 lg:pl-40 xl:pl-56 z-20 max-w-7xl"
      >
        {/* Status Tag */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[9px] uppercase tracking-[0.2em] font-bold text-white/70">
            Open for Collaboration
          </span>
        </motion.div>

        {/* Scaled Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]"
        >
          WEB <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500">
            DEVELOPER.
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="flex flex-col gap-5">
          <div className="max-w-xl space-y-3">
            <p className="text-lg md:text-xl text-white/90 font-medium tracking-tight">
              Hi, I&apos;m Adi.
            </p>
            <p className="text-sm md:text-base text-white/40 leading-relaxed font-normal">
              I’m a graduating student who finds joy in the challenge of building. 
              While coding requires <span className="text-white/60">hard work and persistence</span>, 
              I love the process of turning effort into something that actually works.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6 mt-2 relative z-30 pointer-events-auto">
            {[
              { name: 'Github', icon: 'line-md:github-loop', url: 'https://github.com/adriana-grz' },
              { name: 'LinkedIn', icon: 'line-md:linkedin', url: 'https://www.linkedin.com/in/adriana-gutierrez-581a633a2/' },
              { name: 'Discord', icon: 'line-md:discord', url: '#' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 cursor-pointer"
              >
                <Icon 
                  icon={link.icon} 
                  className="text-lg text-white/20 group-hover:text-white transition-all duration-300" 
                />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 group-hover:text-white/70 transition-all duration-300">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-400 to-indigo-500 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8 pointer-events-auto">
          <button className="group relative px-6 py-3 rounded-full overflow-hidden transition-all bg-white hover:scale-105 active:scale-95">
            <span className="relative text-black font-bold text-xs uppercase tracking-wider">Explore Projects</span>
          </button>
          
          <button className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-lg text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            Get in touch
          </button>
        </motion.div>
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full z-10" />
    </div>
  );
}