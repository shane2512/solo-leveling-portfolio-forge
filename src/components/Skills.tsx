
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js / WebGL", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 82 }
      ]
    },
    {
      title: "AI/ML & Blockchain",
      skills: [
        { name: "Machine Learning", level: 78 },
        { name: "Solidity", level: 75 },
        { name: "Web3.js", level: 80 },
        { name: "TensorFlow", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-primary neon-glow">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-effect rounded-lg p-6 slide-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-orbitron font-bold mb-6 text-secondary">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-rajdhani font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-primary font-rajdhani font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full skill-bar rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
