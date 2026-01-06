import React from 'react';

// Define the shape of our data
type SkillCategory = {
  title: string;
  skills: string[];
};

const skillData: SkillCategory[] = [
  {
    title: "Technical Expertise",
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript", 
      "HTML/CSS", "Tailwind CSS", "Git", "Responsive Design"
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      "Project Management", "Communication", "Team Collaboration", 
      "Problem Solving", "Time Management", "Adaptability", "Critical Thinking"
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id='skills' className="scroll-mt-24 py-20 bg-primary text-foreground relative overflow-hidden">
      {/* Optional: Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
            My <span className="text-accent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {skillData.map((category, idx) => (
              <div 
                key={idx} 
                className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                  {/* Decorative dot for the header */}
                  <span className="w-2 h-8 bg-accent rounded-full inline-block"></span>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="
                        px-4 py-2 
                        bg-gray-800/50 hover:bg-accent/10 
                        border border-gray-700 hover:border-accent/50
                        rounded-lg 
                        transition-all duration-300 ease-in-out
                        cursor-default
                        group
                      "
                    >
                      <span className="text-gray-300 group-hover:text-accent font-medium text-sm md:text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;