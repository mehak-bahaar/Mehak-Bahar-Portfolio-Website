"use client";
import React from "react";
import Project from "./Project";

const Projects: React.FC = () => {

    const myProjects = [
  {
    title: "Restaurant App",
    isLive: true,
    websiteLink: "https://restaurant-application-mu.vercel.app/",
    sourceCodeLink: "https://github.com/mehak-bahaar/restaurant-application",
    description: `Crafted a fully responsive restaurant website with React.js and Next.js to showcase menus ambiance, and contact features.`, 
    imageSrc: "/Restraunt web.jpg",
    tags: ["React", "Next.js"]
  },
  {
    title: "Text Analyzer",
    isLive: true,
    websiteLink: "https://mehak-bahaar.github.io/textAnalyzer/",
    sourceCodeLink: "https://github.com/mehak-bahaar/textAnalyzer",
    // ADD THESE TWO:
    description: `Built a tool to manipulate and clean up text—capitalization, space removal, and clipboard copying.`,
    imageSrc: "/Text Utils.jpg", 
    tags: ["React", "React Bootstrap"]
  },
  {
    title: "MailMind AI",
    isLive: true,
    websiteLink: "https://saas-landing-page-jeaf.vercel.app/",
    sourceCodeLink: "https://github.com/mehak-bahaar/SAAS-Landing-Page",
    // ADD THESE TWO:
    description: `A modern, responsive SaaS landing page explaining key features of a SAAS Email sorting tool.`,
    imageSrc: "/MailmindAI.png", 
    tags: ["NextJs", "TypeScript", "TailwindCSS", "Vercel Deployment"]
  },
  {
    title: "Number Guessing Game",
    isLive: true,
    websiteLink: "https://number-guessing-game-gamma.vercel.app/#/",
    sourceCodeLink: "https://github.com/mehak-bahaar/number-guessing-game",
    // ADD THESE TWO:
    description: `A simple number guessing game built with React where users guess a random number between 1 and 100.`,
    imageSrc: "/NumberGuessingGame.png", 
    tags: ["Vite", "React", "PNPM", "Vercel Deployment"]
  },
  {
    title: "Design Agency Landing Page",
    isLive: true,
    websiteLink: "https://mehak-bahaar.github.io/SMIT-Assignment-4-Design-Agency-website/",
    sourceCodeLink: "https://github.com/mehak-bahaar/SMIT-Assignment-4-Design-Agency-website",
    // ADD THESE TWO:
    description: `The site features a portfolio section with interactive elements and an image gallery that adapts to different screen sizes.`,
    imageSrc: "/DesignAgency.png", 
    tags: ["HTML", "CSS",  "GitHub Pages"]
  }
];
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 bg-background text-text"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-accent">Projects</span>
          </h2>

        


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((proj, i) => (
   <Project key={i} {...proj} />
))}

            {/* Project 3: Blog App */}
            <div className="bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition-colors cursor-not-allowed flex flex-col group">
              <div className="h-48 flex items-center justify-center bg-linear-to-r from-secondary to-accent/30">
                <span className="text-2xl text-white font-bold">
                  Coming Soon
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Personal Blog
                </h3>
                <p className="mb-4">
                  A markdown-based blog with Next.js and dynamic routing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "MDX", "TypeScript", "Tailwind CSS"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="text-accent font-medium opacity-50 cursor-not-allowed">
                    SOURCE CODE
                  </span>
                  <span className="text-accent font-medium opacity-50 cursor-not-allowed">
                    VIEW
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-secondary hover:bg-secondary/80 transition-colors rounded-lg font-medium">
                            View All Projects
                        </button>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
