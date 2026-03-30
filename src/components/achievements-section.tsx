
import Section from "./section";
import SectionHeader from "./ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const achievements = [
  { title: "Coordinator", event: "Surkshetra 2k23", description: "Led a team in organizing and managing the technical fest, ensuring smooth execution of various events.", type: "leadership" },
  { title: "Core Coordinator", event: "TECHSPAN 2k24", description: "Played a key role in planning and implementing the annual tech symposium, coordinating with multiple department heads.", type: "leadership" },
  { title: "Software Engineering Job Simulation", event: "Accenture Nordics (Forage)", description: "Completed Accenture software engineering solution involving development and coding, following agile methods, debugging.", type: "certification" },
  { title: "Technology Job Simulation", event: "Deloitte - Australia (Forage)", description: "Completed a job simulation involving development and coding. Wrote a proposal for creating a dashboard.", featured: true, type: "certification" },
];

const AchievementsSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, inView: gridInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="achievements" className="relative">
      <div ref={headerRef} className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader title="Roles & Achievements" subtitle="Leadership roles and professional accomplishments" />
      </div>
      
      <div ref={gridRef} className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ease-out ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className={`h-full rounded-xl p-5 border transition-all duration-300 hover:shadow-lg hover:shadow-foreground/[0.02] group ${
              item.featured 
                ? 'border-primary/25 bg-primary/[0.03] hover:border-primary/35' 
                : 'border-border/50 bg-card/50 hover:border-primary/15'
            }`}>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-md ${item.featured ? 'bg-primary/10' : 'bg-muted/50'}`}>
                    <Award className={`h-4 w-4 ${item.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground font-heading">{item.title}</h3>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.featured && (
                    <Badge className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary border-primary/20 font-medium">
                      <Star className="h-2.5 w-2.5 mr-0.5" />
                      Featured
                    </Badge>
                  )}
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 font-normal capitalize">
                    {item.type}
                  </Badge>
                </div>
              </div>
              
              {/* Event */}
              <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                <Calendar className="h-3 w-3" />
                {item.event}
              </div>
              
              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AchievementsSection;
