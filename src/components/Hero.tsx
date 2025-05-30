
import VideoBackground from './VideoBackground';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <VideoBackground />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-primary neon-glow">
              SYSTEM
            </h1>
            <p className="text-xl md:text-2xl font-rajdhani text-muted-foreground">
              Digital Portfolio Interface
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-24 h-24 object-contain filter drop-shadow-xl opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
