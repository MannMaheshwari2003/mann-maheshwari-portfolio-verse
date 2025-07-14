
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Section from "./section";
import SectionHeader from "./ui/section-header";
import { CalendarIcon, MapPinIcon, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, inView: cardsInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="experience" className="bg-background relative overflow-hidden" compact>
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-tr from-card/20 via-background to-card/10"></div>
      <div className="absolute top-20 right-10 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-conic from-primary/20 via-secondary/10 to-accent/15 rounded-full blur-3xl animate-float-orb"></div>
      <div className="absolute bottom-10 left-10 sm:left-20 w-28 sm:w-48 h-28 sm:h-48 bg-gradient-conic from-secondary/20 via-accent/10 to-primary/15 rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '8s' }}></div>
      
      <div className="relative z-10">
        <div 
          ref={headerRef}
          className={`transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionHeader
            title="Work Experience"
            subtitle="Professional journey showcasing leadership, technical expertise, and successful project delivery across diverse development environments."
            variant="minimal"
          />
        </div>
        
        <div 
          ref={cardsRef}
          className="max-w-5xl mx-auto px-4 sm:px-0"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`mb-6 sm:mb-8 last:mb-0 transition-all duration-800 ease-out ${
                cardsInView 
                  ? 'opacity-100 translate-y-0 translate-x-0' 
                  : `opacity-0 translate-y-10 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="glass-card overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 group relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-2 pt-4 sm:pt-5 relative z-10">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
                  
                  <div className="ml-3 sm:ml-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center">
                          <div className="p-1.5 rounded-md bg-gradient-to-br from-primary/20 to-secondary/10 mr-3 shadow-sm">
                            <Briefcase className="h-4 w-4 text-primary" />
                          </div>
                          <h3 className="text-lg font-heading font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{exp.title}</h3>
                        </div>
                        <p className="text-base text-gradient font-medium ml-10">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground ml-10 sm:ml-0">
                        <div className="flex items-center glass py-1 px-2 sm:px-3 rounded-full hover:bg-primary/10 transition-colors duration-300">
                          <CalendarIcon className="h-3 w-3 mr-1.5 text-primary" />
                          <span className="text-xs">{exp.period}</span>
                        </div>
                        <div className="flex items-center glass py-1 px-2 sm:px-3 rounded-full hover:bg-secondary/10 transition-colors duration-300">
                          <MapPinIcon className="h-3 w-3 mr-1.5 text-primary" />
                          <span className="text-xs">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-3 relative z-10">
                  <ul className="space-y-2 ml-3 sm:ml-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                        <span className="text-sm group-hover/item:text-foreground transition-colors duration-300">{item}</span>
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
