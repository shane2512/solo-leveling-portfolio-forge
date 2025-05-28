
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Solo Leveling System",
      description: "Interactive React components inspired by the Solo Leveling manhwa, featuring dynamic stat displays and level progression systems.",
      tech: ["React", "TypeScript", "CSS Animations"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "3D Portfolio Showcase",
      description: "Immersive Three.js portfolio with interactive 3D models, particle systems, and real-time lighting effects.",
      tech: ["Three.js", "React", "WebGL"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Machine learning dashboard with real-time data visualization and predictive analytics capabilities.",
      tech: ["Python", "React", "TensorFlow"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Blockchain DApp",
      description: "Decentralized application built on Ethereum with smart contracts and Web3 integration.",
      tech: ["Solidity", "Web3.js", "React"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, and video calling features.",
      tech: ["Node.js", "Socket.io", "React"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Stripe", "MongoDB"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-primary neon-glow">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-effect rounded-lg p-6 hover:scale-105 transition-all duration-300 group slide-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-orbitron font-bold mb-3 text-primary group-hover:neon-glow transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-md text-sm font-rajdhani font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-rajdhani font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-rajdhani font-medium"
                  >
                    <ExternalLink size={18} />
                    Demo
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

export default Projects;
