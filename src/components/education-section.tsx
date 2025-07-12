
import Section from "./section";
import SectionHeader from "./ui/section-header";
import GlassCard from "./ui/glass-card";
import InteractiveBadge from "./ui/interactive-badge";
import { Calendar, GraduationCap, BookOpen, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const educationData = [
  {
    year: "2024 - 2026",
    title: "M.C.A - Master of Computer Applications",
    subtitle: "Guru Gobind Singh Indraprastha University",
    description: "Pursuing",
    status: "current",
    level: "postgraduate"
  },
  {
    year: "2024 - 2026",
    title: "P.G.D.M - Post Graduate Diploma in Management",
    subtitle: "Tecnia Institute of Advanced Studies, Delhi",
    description: "Pursuing",
    status: "current",
    level: "diploma"
  },
  {
    year: "2021 - 2024",
    title: "B.C.A - Bachelor of Computer Applications",
    subtitle: "Bharati Vidyapeeth University, Delhi",
    description: "CGPA: 7.81",
    status: "completed",
    level: "undergraduate"
  },
  {
    year: "2021",
    title: "CBSE XII - Senior Secondary",
    subtitle: "DAV Public School",
    description: "Percentage: 65.4%",
    status: "completed",
    level: "secondary"
  },
  {
    year: "2019",
    title: "CBSE X - Secondary",
    subtitle: "DAV Public School",
    description: "Percentage: 80.4%",
    status: "completed",
    level: "secondary"
  }
];

const EducationSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: timelineRef, inView: timelineInView } = useScrollAnimation({ threshold: 0.2 });

  const getStatusVariant = (status: string) => {
    return status === "current" ? "accent" : "primary";
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "postgraduate":
        return <Award className="h-5 w-5 text-accent" />;
      case "diploma":
        return <BookOpen className="h-5 w-5 text-secondary" />;
      case "undergraduate":
        return <GraduationCap className="h-5 w-5 text-primary" />;
      default:
        return <BookOpen className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <Section id="education" className="relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background"></div>
      <div className="absolute top-40 right-10 sm:right-20 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-float-orb"></div>
      <div className="absolute bottom-20 left-10 sm:left-20 w-32 sm:w-60 h-32 sm:h-60 bg-gradient-radial from-secondary/15 via-secondary/5 to-transparent rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '15s' }}></div>
      
      <div className="relative z-10">
        <div 
          ref={headerRef}
          className={`transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionHeader 
            title="Education" 
            subtitle="Academic journey and continuous learning path"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            ref={timelineRef}
            className="space-y-6 sm:space-y-8"
          >
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-700 ease-out ${
                  timelineInView 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 translate-y-8 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline connector with gradient */}
                {index !== educationData.length - 1 && (
                  <div className="absolute left-4 sm:left-6 top-16 w-px h-16 bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent"></div>
                )}
                
                <GlassCard 
                  variant={getStatusVariant(item.status)}
                  className="p-6 sm:p-8 relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Timeline dot with gradient */}
                  <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background shadow-lg"></div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-background to-card border border-white/10 shadow-sm">
                        {getLevelIcon(item.level)}
                      </div>
                      <InteractiveBadge variant="primary" size="sm">
                        <Calendar className="h-3 w-3" />
                        {item.year}
                      </InteractiveBadge>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{item.title}</h3>
                        {item.status === "current" && (
                          <InteractiveBadge variant="accent" size="sm">
                            Current
                          </InteractiveBadge>
                        )}
                      </div>
                      
                      <p className="text-sm sm:text-base text-muted-foreground mb-2">
                        {item.subtitle}
                      </p>
                      
                      {item.description && (
                        <InteractiveBadge variant="secondary" size="sm">
                          {item.description}
                        </InteractiveBadge>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
