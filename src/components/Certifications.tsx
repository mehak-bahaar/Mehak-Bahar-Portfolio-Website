import React from 'react';

// Define the data shape
type Certification = {
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  credentialLink: string;
  description: string; // Added a description field for the wider layout
};

// Your certification data
const certData: Certification[] = [
  {
    title: "Legacy Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "January 6, 2026",
    imageSrc: "/ffc-cert.png", 
    credentialLink: "https://www.freecodecamp.org/certification/mehak-bahar/responsive-web-design-v9",
    description: "Successfully completed approximately 300 hours of coursework, covering HTML5, CSS3, Flexbox, Grid, and responsive design principles to build mobile-first websites."
  },
  // If you add more later, they will stack beautifully one below the other
];

const Certifications: React.FC = () => {
  return (
    <section id='certifications' className="py-20 bg-primary text-foreground">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Certifications</span>
          </h2>
        </div>

        {/* Certifications List - Single Column */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {certData.map((cert, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col md:flex-row"
            >
              {/* LEFT: Image Section (Half Width) */}
              <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-white/5 bg-gray-900/50">
                 {/* Overlay Link wrapper */}
                 <a 
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 block"
                 >
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium border border-white px-5 py-2 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors">
                            View Certificate
                        </span>
                    </div>
                 </a>

                <img 
                  src={cert.imageSrc} 
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* RIGHT: Content Section (Half Width) */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest text-accent uppercase">
                            {cert.issuer}
                        </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {cert.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 font-mono mb-4 border-l-2 border-accent/30 pl-3">
                        Issued: {cert.date}
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        {cert.description}
                    </p>
                </div>

                {/* Button */}
                <div className="pt-6 border-t border-gray-800/50">
                    <a 
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)] hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.5)]"
                    >
                        Verify Credential
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;