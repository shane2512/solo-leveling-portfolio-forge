
const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-primary neon-glow">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <div className="w-56 h-56 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-6xl">
                      👤
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed slide-in">
                I'm a passionate developer specializing in modern web technologies, 
                AI/ML integration, and immersive user experiences. With expertise in 
                React, Three.js, and blockchain technologies, I create innovative 
                solutions that push the boundaries of what's possible on the web.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed slide-in" style={{ animationDelay: '0.2s' }}>
                My journey spans from crafting elegant user interfaces to developing 
                complex 3D visualizations and AI-powered applications. I'm constantly 
                exploring new technologies and methodologies to deliver exceptional 
                digital experiences.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'TypeScript', 'Three.js', 'AI/ML', 'Blockchain', 'Node.js'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-primary font-rajdhani font-medium neon-border slide-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
