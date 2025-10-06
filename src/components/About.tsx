import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Target, Sparkles } from "lucide-react";

export const About = () => {
  const traits = [
    {
      icon: Target,
      title: "Determined",
      description: "Driven by purpose and a growth mindset, turning challenges into learning opportunities"
    },
    {
      icon: Lightbulb,
      title: "Analytical",
      description: "Understanding the 'why' behind every concept, from algorithms to cloud architecture"
    },
    {
      icon: Heart,
      title: "Empathetic",
      description: "Balancing technical excellence with human connection and meaningful communication"
    },
    {
      icon: Sparkles,
      title: "Creative",
      description: "Blending logic and imagination to build technology that's purposeful and human"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
            The Curious Explorer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where curiosity meets determination, and creativity fuels innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {traits.map((trait, index) => (
            <Card 
              key={trait.title}
              className="p-8 hover:shadow-elegant transition-smooth hover:-translate-y-2 border-2 border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-2xl shadow-soft">
                  <trait.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-10 bg-white/80 backdrop-blur-sm border-2 border-primary/20 shadow-elegant">
          <p className="text-lg text-foreground leading-relaxed text-center max-w-4xl mx-auto">
            I'm a <span className="font-semibold text-primary">third-year CSE student at NIET</span>, 
            passionate about understanding not just the "how" but the "why" of technology.
            From building Java GUI projects to exploring <span className="font-semibold text-accent">cloud computing</span>, 
            <span className="font-semibold text-accent"> data analysis</span>, and 
            <span className="font-semibold text-accent"> data visualization</span> — I'm constantly evolving. 
            As an active community member, I believe in growing through meaningful connections and shared learning experiences.
          </p>
        </Card>
      </div>
    </section>
  );
};
