"use client";
import React from 'react';

const Hero: React.FC = () => {
  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id='hero' className="scroll-mt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-background text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Updated logo */}
          <div className="flex justify-center items-center mb-4">
            <span className="text-primary text-2xl font-bold tracking-tight">{"<"}</span>
            <span className="mx-2 text-2xl font-bold tracking-tight">mehak.dev</span>
            <span className="text-primary text-2xl font-bold tracking-tight">{"/>"}</span>
          </div>
          {/* Full name */}
          <div className="mb-2 text-lg text-accent font-semibold">Mehak Bahar</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-accent">Frontend</span> Developer
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-10">
            Crafting modern web experiences with React, Next.js, and TypeScript
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-8 py-3 bg-secondary hover:bg-secondary/80 transition-colors rounded-lg font-medium"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
            <button
              className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 transition-colors rounded-lg font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;