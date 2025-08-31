"use client";
import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id='projects' className="scroll-mt-20 py-20 bg-background text-text">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-accent">Projects</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1: Restaurant Application */}
                        <div
                          className="bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition-colors cursor-pointer block group"
                          onClick={() => window.open("https://restaurant-application-mu.vercel.app/", "_blank")}
                          tabIndex={0}
                          role="button"
                          onKeyPress={e => {
                            if (e.key === "Enter") window.open("https://restaurant-application-mu.vercel.app/", "_blank");
                          }}
                        >
                          <div className="h-48 flex items-center justify-center bg-gradient-to-r from-secondary to-accent/30 group-hover:scale-105 transition-transform duration-200">
                            <img
                                src="/Restraunt web.jpg"
                                alt="Restaurant Application"
                                className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">Restaurant Application</h3>
                            <p className="mb-4">
                                Crafted a fully responsive restaurant website with React.js and Next.js to showcase menus, ambiance, and contact features.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['React', 'Next.js', 'CSS'].map((tech, i) => (
                                    <span key={i} className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a
                                    href="https://github.com/mehak-bahaar/restaurant-application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                                    onClick={e => e.stopPropagation()}
                                >
                                    SOURCE CODE
                                </a>
                                <a
                                    href="https://restaurant-application-mu.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                                    onClick={e => e.stopPropagation()}
                                >
                                    VIEW
                                </a>
                            </div>
                          </div>
                        </div>

                        {/* Project 2: Text Analyzer */}
                        <a
                            href="https://mehak-bahaar.github.io/textAnalyzer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition-colors cursor-pointer block group"
                        >
                            <div className="h-48 flex items-center justify-center bg-gradient-to-r from-secondary to-accent/30 group-hover:scale-105 transition-transform duration-200">
                                <img
                                    src="/Text Utils.jpg"
                                    alt="Text Analyzer"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Text Analyzer</h3>
                                <p className="mb-4">
                                    Built a tool to manipulate and clean up text—capitalization, space removal, and clipboard copying.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['React', 'React Bootstrap'].map((tech, i) => (
                                        <span key={i} className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <a href="https://github.com/mehak-bahaar/textAnalyzer" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-medium" onClick={e => e.stopPropagation()}>
                                        SOURCE CODE
                                    </a>
                                    <a href="https://mehak-bahaar.github.io/textAnalyzer/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors font-medium" onClick={e => e.stopPropagation()}>
                                        VIEW
                                    </a>
                                </div>
                            </div>
                        </a>

                        {/* Project 3: Blog App */}
                        <div className="bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent transition-colors cursor-not-allowed flex flex-col group">
                            <div className="h-48 flex items-center justify-center bg-gradient-to-r from-secondary to-accent/30">
                                <span className="text-2xl text-white font-bold">Coming Soon</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Personal Blog</h3>
                                <p className="mb-4">A markdown-based blog with Next.js and dynamic routing.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['Next.js', 'MDX', 'TypeScript', 'Tailwind CSS'].map((tech, i) => (
                                        <span key={i} className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded">{tech}</span>
                                    ))}
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