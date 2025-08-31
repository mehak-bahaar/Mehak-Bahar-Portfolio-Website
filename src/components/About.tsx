import React from 'react';

const About: React.FC = () => {
    return (
        <section id='about' className="scroll-mt-16 py-20 bg-background text-text">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-accent">Me</span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Placeholder for photo area - abstract design instead */}
        <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-secondary to-accent/30 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">👨‍💻</div>
            <p className="text-primary font-medium">Frontend Developer</p>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 text-white">Passionate about creating beautiful, functional web experiences</h3>
          <p className="mb-6">
            I'm a frontend developer with expertise in modern JavaScript frameworks. After a brief hiatus, 
            I'm returning to the field with renewed focus on Next.js, TypeScript, and creating performant, 
            accessible web applications.
          </p>
          <p className="mb-8">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying a good cup of coffee while reading about the latest web development trends.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-white mb-2">Location</h4>
              <p>Remote</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Availability</h4>
              <p>Weekends</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Experience</h4>
              <p>6+ months</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Focus</h4>
              <p>Frontend Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default About;