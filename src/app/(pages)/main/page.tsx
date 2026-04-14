"use client";
import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import DarkVeil from '@/components/DarkVeil';
import Header, { Tab, tabs } from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer'; // Import the new Footer

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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-purple-500/30">
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DarkVeil hueShift={285} speed={0.3} />
      </div>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* SECTION 1: About / Hero */}
      <section 
        id="about" 
        className="relative min-h-screen w-full flex flex-col lg:flex-row items-start justify-between pt-32 lg:pt-1"
      >
        <div className="relative w-full lg:w-1/2 z-20">
          <Hero />
        </div>
        
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen z-30 pointer-events-none">
          <Suspense fallback={null}>
            <div className="w-full h-full flex items-center justify-center lg:justify-end">
               <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </Suspense>
        </div>
      </section>

      {/* SECTION 2: Skills */}
      <section id="skills" className="relative z-20 min-h-screen py-20">
        <div className="container mx-auto px-6">
          <Skills />
        </div>
      </section>

      {/* SECTION 3: Projects */}
      <section id="projects" className="relative z-20 min-h-screen py-20">
        <div className="container mx-auto px-6">
          <Projects />
        </div>
      </section>

      {/* SECTION 4: Contacts */}
      <section id="contacts" className="relative z-20 min-h-screen py-1">
        <div className="container mx-auto px-6">
          <Contacts />
        </div>
      </section>

      {/* FOOTER: Placed outside of sections but with relative z-index */}
      <div className="relative z-20">
        <Footer />
      </div>

    </main>
  );
};

export default MainPage;