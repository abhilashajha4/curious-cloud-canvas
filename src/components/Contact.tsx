import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Github, Heart } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 gradient-primary opacity-20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 gradient-primary opacity-20 rounded-full blur-3xl animate-float" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground">
            Always open to meaningful conversations and new opportunities
          </p>
        </div>
        
        <Card className="p-10 bg-white/90 backdrop-blur-sm border-2 border-primary/20 shadow-elegant">
          <div className="text-center mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              I'm passionate about technology, learning, and building meaningful connections. 
              Whether you want to discuss <span className="font-semibold text-primary">cloud computing</span>, 
              <span className="font-semibold text-primary"> IoT projects</span>, 
              <span className="font-semibold text-primary"> AI innovations</span>, or simply want to connect — 
              I'd love to hear from you!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="gradient-primary text-white font-semibold px-8 shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 border-0"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/abhilasha-jha-a54971276" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 transition-smooth hover:scale-105"
              asChild
            >
              <a 
                href="mailto:abhilashajha@example.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
          </div>
        </Card>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Abhilasha Jha
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 • Curious Cloud Explorer & Tech Enthusiast
          </p>
        </div>
      </div>
    </section>
  );
};
