import React from 'react';

const Contacts: React.FC = () => {
  return (
    <section id="contact" className="min-h-[70vh] text-white py-10 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Engaging Copy */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
             
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              Got a project <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-600">
                in mind?
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
              I’m always looking for new challenges and people to learn from. 
              Whether you have a question, a project idea, or just want to say hi, 
              my inbox is always open.
            </p>
          </div>

          {/* Social Links / Direct Contact */}
          <div className="space-y-4">
            <a 
              href="mailto:your.email@example.com" 
              className="group block text-2xl md:text-3xl font-medium hover:text-fuchsia-400 transition-colors"
            >
              adrianajoygutierrez@gmail.com
              <span className="block h-[1px] w-12 bg-fuchsia-500 mt-2 group-hover:w-full transition-all duration-500"></span>
            </a>
            
            <div className="flex space-x-6 pt-4 text-gray-400 font-bold uppercase tracking-widest text-xs">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        {/* Right Side: "Personal" Contact Card/Box */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#0D0D0D] border border-white/10 p-8 md:p-12 rounded-3xl space-y-6">
            <h3 className="text-xl font-semibold italic text-gray-300">
            &quot;Building the web isn&apos;t always easy, but doing it together makes it worth it.&quot;
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500/50 transition-colors"
                />
              </div>
              <textarea 
                rows={4} 
                placeholder="What are we creating?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500/50 transition-colors resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all active:scale-[0.98]"
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