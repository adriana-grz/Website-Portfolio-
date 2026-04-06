"use client";
import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import DarkVeil from '@/components/DarkVeil';
import Header, { Tab, tabs } from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe'; // Added this import

const Lanyard = dynamic(() => import('@/components/Lanyard'), { ssr: false });

const MainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("About");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          const currentTab = tabs.find(
            (tab) => tab.toLowerCase() === entry.target.id
          );
          if (currentTab) setActiveTab(currentTab as Tab);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto bg-black text-white selection:bg-purple-500/30">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DarkVeil hueShift={285} speed={0.3} />
      </div>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* SECTION 1: About */}
      <section id="about" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Hero />
        </div>
        
        <div className="absolute inset-0 left-190 z-30 pointer-events-none">
          <Suspense fallback={null}>
             <Lanyard position={[7, 0, 15]} gravity={[0, -40, 0]} />
          </Suspense>
        </div>
      </section>


    <br></br>
      {/* SECTION 2: Skills */}
      <section id="skills" className="relative z-20 min-h-screen">
        <Skills />
      </section>

      <section id="projects" className="relative z-20 min-h-screen">
        {/* <Projects /> */}
      </section>

      {/* BIO SECTION */}
      <section className="relative z-20">
        
      </section>

      <section id="contact me" className="relative z-20 min-h-screen">
        <AboutMe />
        {/* <Contact /> */}
      </section>

    </main>
  );
};

export default MainPage;