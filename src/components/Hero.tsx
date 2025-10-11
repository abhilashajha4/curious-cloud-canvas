import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import butterflyBg from "@/assets/butterfly-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";
import heroVideo from "@/assets/hero-video.mp4";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video Section at Top */}
      <div className="relative w-full pt-8 px-6 z-10">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200/50 bg-gradient-to-br from-pink-50/20 to-purple-50/20 backdrop-blur-sm p-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      
      {/* Hero Content Below */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Gradient background */}
        <div className="absolute inset-0 gradient-hero opacity-90" />
        
        {/* Butterfly background overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${butterflyBg})` }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-pink-300/40"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            {/* Profile Photo Circle */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-pink-200/60 shadow-glow backdrop-blur-sm group hover:scale-105 transition-smooth">
                <img 
                  src={profilePhoto} 
                  alt="Abhilasha Jha - Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-soft">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white font-medium">Cloud Explorer & Data Enthusiast</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Abhilasha Jha
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            A curious and determined CS student exploring the intersection of{" "}
            <span className="font-semibold">Cloud Computing</span>,{" "}
            <span className="font-semibold">Data Analysis</span>, and{" "}
            <span className="font-semibold">Data Visualization</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-white/90 text-primary font-semibold px-8 py-6 text-lg shadow-elegant transition-smooth hover:scale-105"
              onClick={scrollToAbout}
            >
              Explore My Journey
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/90 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg transition-smooth hover:scale-105 backdrop-blur-sm"
              asChild
            >
              <a href="https://www.linkedin.com/in/abhilasha-jha-a54971276" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};
