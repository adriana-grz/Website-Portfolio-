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
    link: "https://github.com/yourusername/make-cents",
    thumbnail: "/images/makecents-project.png" 
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "A streamlined web-based solution for tracking stock levels, managing suppliers, and generating real-time inventory reports.",
    link: "https://github.com/yourusername/inventory-system",
    thumbnail: "/images/inventory-system.png"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity suite featuring categorized task lists, automated deadline alerts, an integrated Pomodoro timer, and a calendar view.",
    link: "https://github.com/yourusername/task-manager",
    thumbnail: "/images/taskmanger.png"
  },
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen text-white py-35 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-pink-500">Works.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#0D0D0D] border border-white/5 rounded-3xl overflow-hidden hover:border-pink-500/40 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-xs font-bold uppercase tracking-[0.2em] group/link"
                >
                  <span className="relative">
                    View Project
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-pink-500 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <svg 
                    className="w-4 h-4 ml-3 transform group-hover/link:translate-x-2 transition-transform" 
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

        {/* Bottom Archive Link */}
        <div className="mt-24 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-10">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-pink-500">Full Project Archive</h4>
            <p className="text-gray-500 text-xs mt-2">Explore all repositories and side projects.</p>
          </div>
          <a 
            href="#" 
            className="mt-6 sm:mt-0 px-8 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-sm font-bold uppercase tracking-widest"
          >
            Go to GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;