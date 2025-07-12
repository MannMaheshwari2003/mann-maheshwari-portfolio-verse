
import Section from "./section";
import SectionHeader from "./ui/section-header";
import GlassCard from "./ui/glass-card";
import InteractiveBadge from "./ui/interactive-badge";
import { Award, Calendar, Star, Trophy } from "lucide-react";

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
  return (
    <Section id="achievements" className="bg-card/30 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-primary/8 rounded-full filter blur-3xl animate-float-orb"></div>
      <div className="absolute bottom-0 right-1/4 w-24 sm:w-40 h-24 sm:h-40 bg-secondary/8 rounded-full filter blur-3xl animate-float-orb" style={{ animationDelay: '10s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-32 h-20 sm:h-32 bg-accent/5 rounded-full filter blur-3xl animate-breathe"></div>
      
      <div className="relative z-10">
        <SectionHeader 
          title="Roles & Achievements" 
          subtitle="Leadership roles and professional accomplishments"
        />
        
        <div className="max-w-6xl mx-auto">
          {/* First two achievements in a row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {achievements.slice(0, 2).map((achievement, index) => (
              <GlassCard key={index} variant="primary" className="p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <InteractiveBadge variant="primary" size="sm">
                    <Trophy className="h-3 w-3" />
                    {achievement.type}
                  </InteractiveBadge>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{achievement.title}</h3>
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
            ))}
          </div>

          {/* Second row with certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {/* Accenture certification */}
            <GlassCard variant="secondary" className="p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <InteractiveBadge variant="secondary" size="sm">
                  <Trophy className="h-3 w-3" />
                  {achievements[2].type}
                </InteractiveBadge>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{achievements[2].title}</h3>
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

            {/* Featured Deloitte achievement */}
            <GlassCard variant="accent" className="p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <InteractiveBadge variant="accent" size="sm">
                  <Star className="h-3 w-3" />
                  Featured
                </InteractiveBadge>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl animate-breathe"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-accent">
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
    </Section>
  );
};

export default AchievementsSection;
