'use client';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
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
        style={{ x, y }} // The Parallax effect
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-12 md:px-24 z-20"
      >
        {/* Status Tag */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white-500"></span>
          </span>
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-bold text-white-400">
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
          <p className="max-w-md text-lg md:text-xl text-white/50 leading-relaxed font-normal">
            I bridge the gap between <span className="text-white">design & logic</span> by building intuitive interfaces and robust, full-stack web architectures.
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
            {['React', 'HTML', 'CSS', 'Javascript','Typescript'].map((skill) => (
              <span key={skill} className="text-[11px] font-mono uppercase tracking-widest text-white/30">
                 {skill}
              </span>
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