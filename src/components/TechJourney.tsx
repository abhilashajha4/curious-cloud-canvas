import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Cpu, Brain, Rocket } from "lucide-react";

export const TechJourney = () => {
  const timeline = [
    {
      icon: Code2,
      phase: "Foundations",
      year: "Year 1",
      color: "hsl(330 85% 45%)",
      skills: ["HTML", "CSS", "Java", "SQL", "Data Structures"],
      description: "Built strong fundamentals with hands-on projects in Apache NetBeans"
    },
    {
      icon: Database,
      phase: "Data & Algorithms",
      year: "Current",
      color: "hsl(320 90% 55%)",
      skills: ["DSA", "Pandas", "Data Engineering", "System Design"],
      description: "Mastering problem-solving through consistent practice and structured learning"
    },
    {
      icon: Cloud,
      phase: "Cloud & IoT",
      year: "Exploring",
      color: "hsl(300 80% 60%)",
      skills: ["Cloud Computing", "IoT Architecture", "Arduino", "Edge Computing"],
      description: "Bridging software and hardware to understand connected systems"
    },
    {
      icon: Brain,
      phase: "AI & Innovation",
      year: "Learning",
      color: "hsl(280 75% 65%)",
      skills: ["Generative AI", "ML Basics", "AI Integration"],
      description: "Exploring how AI shapes tomorrow's technology landscape"
    },
    {
      icon: Rocket,
      phase: "Full-Stack Future",
      year: "Year 3 Goal",
      color: "hsl(270 70% 70%)",
      skills: ["MERN Stack", "DevOps", "Cloud Deployment", "Production Apps"],
      description: "Building end-to-end solutions that make an impact"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
            My Tech Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            A structured path of continuous learning and growth
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 gradient-primary transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={item.phase}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <Card className="flex-1 p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 border-2 border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="p-3 rounded-2xl shadow-soft"
                      style={{ background: item.color }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-heading font-semibold text-foreground">
                          {item.phase}
                        </h3>
                        <Badge variant="secondary">{item.year}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
                
                {/* Timeline dot */}
                <div className="hidden md:block w-4 h-4 rounded-full bg-white border-4 shadow-lg z-10"
                  style={{ borderColor: item.color }}
                />
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
