import React from 'react';

const Skills: React.FC = () => {
    return (
        <section id='skills' className="scroll-mt-24 py-20 bg-primary text-foreground">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-accent">Skills</span>
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'React', level: 90 },
                            { name: 'Next.js', level: 85 },
                            { name: 'TypeScript', level: 80 },
                            { name: 'JavaScript', level: 90 },
                            { name: 'HTML/CSS', level: 95 },
                            { name: 'Tailwind CSS', level: 85 },
                            { name: 'Git', level: 80 },
                            { name: 'Responsive Design', level: 90 },
                            // Non-technical skills
                            { name: 'Project Management', level: 88 },
                            { name: 'Communication', level: 92 },
                            { name: 'Team Collaboration', level: 90 },
                            { name: 'Problem Solving', level: 93 },
                            { name: 'Time Management', level: 89 },
                            { name: 'Adaptability', level: 91 },
                            { name: 'Critical Thinking', level: 87 },
                        ].map((skill, index) => (
                            <div key={index} className="bg-card p-6 rounded-xl">
                                <h3 className="font-bold text-foreground mb-3">{skill.name}</h3>
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <div 
                                        className="bg-accent h-2.5 rounded-full" 
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="text-right mt-1 text-sm text-accent">{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;