
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Section from "./section";
import { CalendarIcon, MapPinIcon, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "Labmentix",
    location: "Bengaluru",
    period: "Feb 2025 - Apr 2025",
    description: [
      "Managed client projects, ensuring timely delivery and high-quality outcomes",
      "Analyzed client requirements and executed web solutions to meet their specific needs",
      "Collaborated with cross-functional teams to ensure seamless implementation",
      "Utilized modern web technologies to develop robust and scalable applications"
    ]
  },
  {
    title: "Frontend Developer & Team Leader",
    company: "Future Core Innovations",
    location: "Delhi",
    period: "Jun 2024 - Sep 2024",
    description: [
      "Led a team of developers to create high-quality web applications",
      "Developed responsive user interfaces that ensured optimal display across devices",
      "Implemented best practices for cross-browser compatibility",
      "Facilitated team meetings and coordinated development efforts to meet project deadlines"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <Section id="experience" className="bg-background relative overflow-hidden" compact>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-10 left-10 sm:left-20 w-28 sm:w-48 h-28 sm:h-48 rounded-full bg-gradient-to-br from-secondary/10 to-transparent blur-3xl"></div>
      
      <div className="relative z-10">
        <h2 className="section-title mb-8 sm:mb-10 text-center">
          Work Experience
        </h2>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-0">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-6 sm:mb-8 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="glass-card overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-2 pt-4 sm:pt-5 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
                  
                  <div className="ml-3 sm:ml-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center">
                          <div className="p-1.5 rounded-md bg-primary/10 mr-3">
                            <Briefcase className="h-4 w-4 text-primary" />
                          </div>
                          <h3 className="text-lg font-heading font-semibold">{exp.title}</h3>
                        </div>
                        <p className="text-base text-gradient font-medium ml-10">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground ml-10 sm:ml-0">
                        <div className="flex items-center glass py-1 px-2 sm:px-3 rounded-full">
                          <CalendarIcon className="h-3 w-3 mr-1.5 text-primary" />
                          <span className="text-xs">{exp.period}</span>
                        </div>
                        <div className="flex items-center glass py-1 px-2 sm:px-3 rounded-full">
                          <MapPinIcon className="h-3 w-3 mr-1.5 text-primary" />
                          <span className="text-xs">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-3">
                  <ul className="space-y-2 ml-3 sm:ml-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
