import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Make Cents",
    description: "A smart mobile budgeting application built with Flutter and Dart, featuring AI-driven expense tracking and financial insights.",
    link: "https://github.com/neiljosephdelrosario/MakeCents",
    thumbnail: "/images/makecents-project.png" 
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "A streamlined web-based solution for tracking stock levels, managing suppliers, and generating real-time inventory reports.",
    link: "https://github.com/adriana-grz/Inventory-Management-System",
    thumbnail: "/images/inventory-system.png"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity suite featuring categorized task lists, automated deadline alerts, an integrated Pomodoro timer, and a calendar view.",
    link: "https://github.com/adriana-grz/Task-Managing-System",
    thumbnail: "/images/taskmanger.png"
  },
];

const Projects: React.FC = () => {
  return (
    // Changed py-35 to pt-12 (top) and pb-24 (bottom)
    <section id="projects" className="text-white pt-12 pb-24 px-6 md:px-12 lg:px-20">
      {/* Changed to max-w-5xl to match the Skills component */}
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section - Reduced mb-16 to mb-10 */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            My Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-pink-500">Works.</span>
          </h2>
        </div>

        {/* Projects Grid - Adjusted gap for a tighter look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#0D0D0D] border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] group/link"
                >
                  <span className="relative">
                    View Project
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-pink-500 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <svg 
                    className="w-3.5 h-3.5 ml-2 transform group-hover/link:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Archive Link - Reduced mt-24 to mt-16 */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8">
          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500">Full Project Archive</h4>
            <p className="text-gray-500 text-[10px] mt-1">Explore all repositories and side projects.</p>
          </div>
          <a 
            href="https://github.com/adriana-grz" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-0 px-6 py-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-[10px] font-bold uppercase tracking-widest"
          >
            Go to GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;