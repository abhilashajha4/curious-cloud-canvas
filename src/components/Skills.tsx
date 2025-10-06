import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      category: "Languages & Frameworks",
      skills: ["Java", "HTML", "CSS", "SQL", "Python", "JavaScript"],
      color: "hsl(330 85% 45%)"
    },
    {
      icon: Database,
      category: "Data & Algorithms",
      skills: ["Data Structures", "Algorithms", "Pandas", "Data Engineering", "SQL Databases"],
      color: "hsl(320 90% 55%)"
    },
    {
      icon: Cloud,
      category: "Cloud & DevOps",
      skills: ["Cloud Computing", "AWS Basics", "System Design", "Architecture"],
      color: "hsl(300 80% 60%)"
    },
    {
      icon: Cpu,
      category: "Data Analysis & Visualization",
      skills: ["Data Analysis", "Data Modelling", "Visualization Tools", "Python Analytics", "Pandas"],
      color: "hsl(280 75% 65%)"
    },
    {
      icon: Users,
      category: "Leadership & Community",
      skills: ["Event Management", "LinkedIn Promotion", "Community Building", "Team Collaboration"],
      color: "hsl(340 80% 50%)"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            A multidimensional blend of technical and soft skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category}
              className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-2 border-2 border-border group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div 
                className="p-4 rounded-2xl inline-block mb-4 shadow-soft group-hover:scale-110 transition-smooth"
                style={{ background: category.color }}
              >
                <category.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
