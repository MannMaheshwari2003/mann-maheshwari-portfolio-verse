
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Section from "./section";
import SectionHeader from "./ui/section-header";
import { CalendarIcon, MapPinIcon, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useResponsive } from "@/hooks/use-responsive";

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
  const { 
    getContainerClasses, 
    getSectionSpacing, 
    getCardLayout, 
    isMobile, 
    isTablet, 
    orientation 
  } = useResponsive();

  const cardLayout = getCardLayout();

  return (
    <Section 
      id="experience" 
      className={`bg-background/95 backdrop-blur-sm relative overflow-hidden ${getSectionSpacing()}`}
    >
      {/* Enhanced gradient backgrounds with better visibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-card/30 via-background to-card/20"></div>
      <div className={`absolute ${
        isMobile 
          ? 'top-10 right-5 w-16 h-16' 
          : isTablet 
            ? 'top-20 right-10 w-24 h-24' 
            : 'top-20 right-20 w-32 h-32'
      } bg-gradient-conic from-primary/30 via-secondary/20 to-accent/25 rounded-full blur-3xl animate-float-orb`}></div>
      <div className={`absolute ${
        isMobile 
          ? 'bottom-5 left-5 w-20 h-20' 
          : isTablet 
            ? 'bottom-10 left-10 w-32 h-32'
            : 'bottom-10 left-20 w-48 h-48'
      } bg-gradient-conic from-secondary/30 via-accent/20 to-primary/25 rounded-full blur-3xl animate-float-orb`} 
      style={{ animationDelay: '8s' }}></div>
      
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
        
        <div className={getContainerClasses()}>
          <div 
            ref={cardsRef}
            className={`${
              isMobile || (isTablet && orientation === 'portrait')
                ? 'space-y-6' 
                : 'grid grid-cols-1 lg:grid-cols-2 gap-8'
            } max-w-7xl mx-auto`}
          >
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`transition-all duration-800 ease-out ${
                  cardsInView 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 translate-y-10 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className={`glass-premium overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-500 group relative h-full ${cardLayout.cardPadding} shadow-xl hover:shadow-2xl`}>
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className={`${isMobile ? 'pb-3 pt-4' : 'pb-4 pt-6'} relative z-10`}>
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-secondary to-accent shadow-lg"></div>
                    
                    <div className={`${isMobile ? 'ml-4' : 'ml-6'}`}>
                      <div className={`flex ${isMobile || orientation === 'portrait' ? 'flex-col gap-3' : 'flex-row justify-between items-start gap-4'}`}>
                        <div className="flex-1">
                          <div className="mb-2 flex items-center">
                            <div className={`p-2 rounded-md bg-gradient-to-br from-primary/30 to-secondary/20 mr-3 shadow-md ${
                              isMobile ? 'p-1.5' : 'p-2'
                            }`}>
                              <Briefcase className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'} text-primary`} />
                            </div>
                            <h3 className={`${
                              isMobile ? 'text-base' : 'text-lg'
                            } font-heading font-bold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-foreground`}>
                              {exp.title}
                            </h3>
                          </div>
                          <p className={`${
                            isMobile ? 'text-sm ml-8' : 'text-base ml-10'
                          } text-gradient font-semibold`}>
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className={`flex ${
                          isMobile ? 'flex-row gap-2 ml-8' : 'flex-col lg:flex-row gap-2'
                        } text-sm text-muted-foreground`}>
                          <div className={`flex items-center glass-premium ${
                            isMobile ? 'py-1 px-2' : 'py-1 px-3'
                          } rounded-full hover:bg-primary/20 transition-colors duration-300 shadow-md`}>
                            <CalendarIcon className="h-3 w-3 mr-1.5 text-primary" />
                            <span className="text-xs font-medium">{exp.period}</span>
                          </div>
                          <div className={`flex items-center glass-premium ${
                            isMobile ? 'py-1 px-2' : 'py-1 px-3'
                          } rounded-full hover:bg-secondary/20 transition-colors duration-300 shadow-md`}>
                            <MapPinIcon className="h-3 w-3 mr-1.5 text-primary" />
                            <span className="text-xs font-medium">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className={`${isMobile ? 'pt-2' : 'pt-3'} relative z-10`}>
                    <ul className={`space-y-3 ${isMobile ? 'ml-4' : 'ml-6'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-sm"></span>
                          <span className={`${
                            isMobile ? 'text-xs' : 'text-sm'
                          } text-foreground/90 group-hover/item:text-foreground transition-colors duration-300 leading-relaxed font-medium`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
