import Section from "./section";
import SectionHeader from "./ui/section-header";
import GlassCard from "./ui/glass-card";
import InteractiveBadge from "./ui/interactive-badge";
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
    <Section id="achievements" className="bg-card/30 relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-conic from-primary/25 via-primary/5 to-transparent rounded-full filter blur-3xl animate-float-orb"></div>
      <div className="absolute bottom-0 right-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-conic from-secondary/25 via-secondary/5 to-transparent rounded-full filter blur-3xl animate-float-orb" style={{ animationDelay: '10s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-32 h-20 sm:w-32 bg-gradient-radial from-accent/20 via-accent/5 to-transparent rounded-full filter blur-3xl animate-breathe"></div>
      
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
                className={`transition-all duration-800 ease-out ${
                  firstRowInView 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 translate-y-8 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <GlassCard variant="primary" className="p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 right-4 z-10">
                    <InteractiveBadge variant="primary" size="sm">
                      <Trophy className="h-3 w-3" />
                      {achievement.type}
                    </InteractiveBadge>
                  </div>
                  
                  <div className="mb-4 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/20 shadow-sm">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{achievement.title}</h3>
                    </div>
                    
                    <InteractiveBadge variant="secondary" size="sm" className="mb-4">
                      <Calendar className="h-3 w-3" />
                      {achievement.event}
                    </InteractiveBadge>
                    
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </GlassCard>
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
              className={`transition-all duration-800 ease-out ${
                secondRowInView 
                  ? 'opacity-100 translate-y-0 translate-x-0' 
                  : 'opacity-0 translate-y-8 -translate-x-8'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <GlassCard variant="secondary" className="p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-4 right-4 z-10">
                  <InteractiveBadge variant="secondary" size="sm">
                    <Trophy className="h-3 w-3" />
                    {achievements[2].type}
                  </InteractiveBadge>
                </div>
                
                <div className="mb-4 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/20 shadow-sm">
                      <Award className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{achievements[2].title}</h3>
                  </div>
                  
                  <InteractiveBadge variant="secondary" size="sm" className="mb-4">
                    <Calendar className="h-3 w-3" />
                    {achievements[2].event}
                  </InteractiveBadge>
                  
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {achievements[2].description}
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Featured Deloitte achievement */}
            <div
              className={`transition-all duration-800 ease-out ${
                secondRowInView 
                  ? 'opacity-100 translate-y-0 translate-x-0' 
                  : 'opacity-0 translate-y-8 translate-x-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <GlassCard variant="accent" className="p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                <div className="absolute top-4 right-4 z-20">
                  <InteractiveBadge variant="accent" size="sm">
                    <Star className="h-3 w-3" />
                    Featured
                  </InteractiveBadge>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent/5 to-primary/10 rounded-xl animate-breathe"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-accent/30 to-primary/20 shadow-sm">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-accent to-accent/80 bg-clip-text">
                      {achievements[3].title}
                    </h3>
                  </div>
                  
                  <InteractiveBadge variant="accent" size="sm" className="mb-4">
                    <Calendar className="h-3 w-3" />
                    {achievements[3].event}
                  </InteractiveBadge>
                  
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {achievements[3].description}
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AchievementsSection;
