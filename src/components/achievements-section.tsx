import Section from "./section";
import SectionHeader from "./ui/section-header";
import GlassCard from "./ui/glass-card";
import InteractiveBadge from "./ui/interactive-badge";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Star, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const achievements = [
  {
    title: "Coordinator",
    event: "Surkshetra 2k23",
    description: "Led a team in organizing and managing the technical fest, ensuring smooth execution of various events.",
    type: "leadership"
  },
  {
    title: "Core Coordinator",
    event: "TECHSPAN 2k24",
    description: "Played a key role in planning and implementing the annual tech symposium, coordinating with multiple department heads.",
    type: "leadership"
  },
  {
    title: "Software Engineering Job Simulation",
    event: "Accenture Nordics (Forage)",
    description: "Completed Accenture software engineering solution involving development and coding, following agile methods, debugging.",
    type: "certification"
  },
  {
    title: "Technology Job Simulation",
    event: "Deloitte - Australia (Forage)",
    description: "Completed a job simulation involving development and coding. Wrote a proposal for creating a dashboard.",
    featured: true,
    type: "certification"
  }
];

const AchievementsSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: firstRowRef, inView: firstRowInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: secondRowRef, inView: secondRowInView } = useScrollAnimation({ threshold: 0.2, delay: 200 });

  return (
    <Section id="achievements" className="bg-muted/20 relative overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-background"></div>
      
      <div className="relative z-10">
        <div 
          ref={headerRef}
          className={`transition-all duration-1000 ease-out ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionHeader 
            title="Roles & Achievements" 
            subtitle="Leadership roles and professional accomplishments"
          />
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* First two achievements in a row */}
          <div 
            ref={firstRowRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8"
          >
            {achievements.slice(0, 2).map((achievement, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  firstRowInView 
                    ? 'opacity-100 translate-y-0' 
                    : `opacity-0 translate-y-6`
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="glass border border-border hover:border-primary/20 p-5 sm:p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300 rounded-lg h-full">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20">
                      {achievement.type}
                    </Badge>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                        <Award className="h-4 w-4 text-primary/80" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">{achievement.title}</h3>
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/50 border border-border/50 mb-3">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{achievement.event}</span>
                    </div>
                    
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row with certifications */}
          <div 
            ref={secondRowRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8"
          >
            {/* Accenture certification */}
            <div
              className={`transition-all duration-700 ease-out ${
                secondRowInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="glass border border-border hover:border-primary/20 p-5 sm:p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300 rounded-lg h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20">
                    {achievements[2].type}
                  </Badge>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                      <Award className="h-4 w-4 text-primary/80" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">{achievements[2].title}</h3>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/50 border border-border/50 mb-3">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{achievements[2].event}</span>
                  </div>
                  
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {achievements[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Deloitte achievement */}
            <div
              className={`transition-all duration-700 ease-out ${
                secondRowInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="glass border-2 border-primary/30 hover:border-primary/40 p-5 sm:p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-300 rounded-lg h-full">
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="text-xs px-2 py-1 bg-accent/90 text-accent-foreground border-0">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5 group-hover:from-primary/10 group-hover:to-accent/8 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/15 group-hover:bg-accent/20 transition-colors duration-300">
                      <Award className="h-4 w-4 text-accent/90" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {achievements[3].title}
                    </h3>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 mb-3">
                    <Calendar className="h-3 w-3 text-accent/80" />
                    <span className="text-xs text-accent/90 font-medium">{achievements[3].event}</span>
                  </div>
                  
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {achievements[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AchievementsSection;
