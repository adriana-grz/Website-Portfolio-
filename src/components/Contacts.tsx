import React from 'react';
import { Download } from 'lucide-react'; 

const Contacts: React.FC = () => {
  return (

    <section id="contacts" className="text-white pt-60 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Engaging Copy */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.9]">
              Got a project <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-500">
                in mind?
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
              I’m always looking for new challenges and people to learn from. 
              Drop a message or grab my resume below.
            </p>
          </div>

          <div className="space-y-8">
            <a 
              href="mailto:adrianajoygutierrez@gmail.com" 
              className="group inline-block"
            >
              <span className="text-2xl md:text-3xl font-bold group-hover:text-fuchsia-400 transition-colors duration-300">
                adrianajoygutierrez@gmail.com
              </span>
              <span className="block h-[2px] w-12 bg-fuchsia-500 mt-2 group-hover:w-full transition-all duration-500"></span>
            </a>

            <div className="flex flex-wrap gap-4">
              <a 
                href="public/AdrianaGutierrez_CV.pdf" 
                download
                className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-xs"
              >
                <Download size={18} />
                Download CV
              </a>

              <div className="flex items-center space-x-6 text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Contact Form */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          <div className="relative bg-[#080808] border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
            <div className="mb-8">
              <span className="text-fuchsia-500 font-mono text-sm mb-2 block">// Say hello</span>
              <h3 className="text-xl font-medium text-gray-200">
                &quot;Building the web isn&apos;t always easy, but doing it together makes it worth it.&quot;
              </h3>
            </div>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-fuchsia-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-fuchsia-500/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Let's talk about..." 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-fuchsia-500/50 transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-pink-600 to-rose-600 text-white font-bold uppercase tracking-[0.3em] text-xs hover:shadow-[0_20px_40px_rgba(217,70,239,0.25)] transition-all active:scale-[0.98] mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacts;