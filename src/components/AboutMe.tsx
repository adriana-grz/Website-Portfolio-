import React from 'react';

const AboutMe = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 flex items-center justify-center bg-transparent  ">
      {/* Container width must match your other sections (max-w-7xl) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr,2.5fr] gap-x-12 gap-y-8 items-start">
        
        {/* Left Side: Name and Location (Fashionable contrast) */}
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Hi, I&apos;m <span className="hidden md:inline"> </span>
            <span className="text-fuchsia-400 font-medium">Adriana.</span>
          </h2>
        
        </div>

        {/* Right Side: Straightforward but meaningful Bio */}
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-white font-medium leading-snug">
            I’m a graduating student who loves building websites and exploring online.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 text-lg leading-relaxed">
            <p>
              Honestly, coding isn’t always easy for me—it’s often hard work. 
              But I love seeing the final outcome after all that effort. 
              I am hardworking, flexible, and always ready to learn.
            </p>
            
            <div className="flex flex-col justify-between items-start pt-2">
              <p className="border-l border-fuchsia-500/30 pl-6 italic">
                Currently open to opportunities where I can grow as a developer and collaborate with a great team.
              </p>
              
              {/* Optional dynamic contact link */}
              <a 
                href="#contact me" 
                className="mt-6 text-fuchsia-400 font-semibold text-lg hover:text-fuchsia-300 transition-colors inline-flex items-center gap-2 group pl-6"
              >
                Let&apos;s create something!
                <span className="group-hover:translate-x-1 transition-transform"></span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;