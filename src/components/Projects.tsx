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
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "A streamlined web-based solution for tracking stock levels, managing suppliers, and generating real-time inventory reports.",
    link: "https://github.com/yourusername/inventory-system",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity suite featuring categorized task lists, automated deadline alerts, an integrated Pomodoro timer, and a calendar view.",
    link: "https://github.com/yourusername/task-manager",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2344&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Godot 2D Game",
    description: "An immersive 2D side-scroller developed in the Godot Engine, featuring custom physics, pixel art aesthetics, and dynamic combat mechanics.",
    link: "https://github.com/yourusername/godot-game",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen text-white py-1 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Slightly tighter margins */}
        <div className="mb-10">
        
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-pink-500">Works.</span>
          </h2>
        </div>

        {/* Projects Grid - Moved to 4 columns on large screens for smaller boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#0D0D0D] border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/40 transition-all duration-500"
            >
              {/* Thumbnail - Reduced height from h-56 to h-40 */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Card Content - Reduced padding from p-8 to p-5 */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-pink-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[10px] font-bold uppercase tracking-widest group/link"
                >
                  <span className="relative">
                    View Project
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-pink-500 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <svg 
                    className="w-3 h-3 ml-2 transform group-hover/link:translate-x-1 transition-transform" 
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

        {/* Bottom Archive Link - Scaled down slightly */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500">Full Project Archive</h4>
            <p className="text-gray-500 text-[11px] mt-1">Explore all repositories and side projects.</p>
          </div>
          <a 
            href="#" 
            className="mt-4 sm:mt-0 px-6 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-xs font-medium"
          >
            Go to GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;