import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Java GUI Application",
      description: "Built interactive desktop application using Apache NetBeans, implementing object-oriented design principles and user-friendly interfaces.",
      tech: ["Java", "Apache NetBeans", "Swing", "OOP"],
      category: "Development"
    },
    {
      title: "Data Analysis Projects",
      description: "Working with data visualization and analysis tools to transform raw data into meaningful insights using Python and modern analytics libraries.",
      tech: ["Python", "Pandas", "Data Visualization", "Analytics"],
      category: "Data Science"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Consistent practice solving DSA problems, implementing classic algorithms like Kadane's Algorithm and optimizing solutions.",
      tech: ["DSA", "Java", "Problem Solving", "Optimization"],
      category: "Algorithms"
    },
    {
      title: "Tech Event Coordination",
      description: "Handled LinkedIn promotions and event coordination for college tech events, showcasing organizational and communication skills.",
      tech: ["Event Management", "Social Media", "Communication"],
      category: "Leadership"
    }
  ];

  const achievements = [
    {
      title: "DevFest Noida 2024",
      description: "Active participant in the developer community event"
    },
    {
      title: "Tech Community Leader",
      description: "Contributing to college tech community initiatives"
    },
    {
      title: "Consistent Problem Solver",
      description: "Regular practice in data structures and algorithms"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
            Projects & Achievements
          </h2>
          <p className="text-xl text-muted-foreground">
            Building, learning, and growing through hands-on experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-2 border-2 border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Badge 
                variant="secondary" 
                className="mb-3"
              >
                {project.category}
              </Badge>
              
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="outline"
                    className="border-primary/30 text-primary text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-3xl font-heading font-semibold text-center text-foreground mb-8">
            Achievements & Community Involvement
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="p-6 text-center hover:shadow-elegant transition-smooth hover:-translate-y-2 border-2 border-primary/20 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 gradient-primary rounded-full mb-4 shadow-soft">
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {achievement.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
