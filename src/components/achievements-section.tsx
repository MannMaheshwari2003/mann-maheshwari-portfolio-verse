import Section from "./section";
import SectionHeader from "./ui/section-header";
import { Award, Calendar, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const achievements = [
  { title: "Coordinator", event: "Surkshetra 2k23", description: "Led a team in organizing and managing the technical fest, ensuring smooth execution of various events.", type: "leadership" },
  { title: "Core Coordinator", event: "TECHSPAN 2k24", description: "Played a key role in planning and implementing the annual tech symposium, coordinating with multiple department heads.", type: "leadership" },
  { title: "Software Engineering Job Simulation", event: "Accenture Nordics (Forage)", description: "Completed Accenture software engineering solution involving development and coding, agile methods, and debugging.", type: "certification" },
  { title: "Technology Job Simulation", event: "Deloitte — Australia (Forage)", description: "Completed a job simulation involving development and coding. Wrote a proposal for creating a dashboard.", featured: true, type: "certification" },
];

const palette = [
  { bg: "bg-[hsl(var(--primary))]", text: "text-primary-foreground" },
  { bg: "bg-[hsl(var(--secondary))]", text: "text-secondary-foreground" },
  { bg: "bg-[hsl(var(--accent))]", text: "text-foreground" },
  { bg: "bg-foreground", text: "text-background" },
];

const AchievementsSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, inView: gridInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="achievements" className="bg-[hsl(var(--primary))] text-primary-foreground">
      <div ref={headerRef} className={`transition-all duration-500 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <SectionHeader number="06" accent="yellow" title="Achievements" subtitle="Roles, certifications, and proofs of work." inverse />
      </div>

      <div ref={gridRef} className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {achievements.map((item, i) => {
          const swatch = palette[i % palette.length];
          return (
            <article
              key={i}
              className={`relative bg-card text-card-foreground border-2 md:border-4 border-foreground shadow-bauhaus-lg lift-hover transition-all duration-500 ${
                gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Big number stamp */}
              <span
                aria-hidden="true"
                className={`absolute -top-4 -left-4 w-12 h-12 border-2 md:border-4 border-foreground flex items-center justify-center font-black text-base ${swatch.bg} ${swatch.text} ${i % 2 === 0 ? "rounded-full" : ""}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="p-5 md:p-6 pt-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-foreground" strokeWidth={2.5} />
                    <h3 className="text-base md:text-lg font-black uppercase tracking-tight leading-tight">{item.title}</h3>
                  </div>
                  {item.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-foreground text-background border-2 border-foreground text-[10px] font-bold uppercase tracking-widest">
                      <Star className="h-2.5 w-2.5" strokeWidth={3} />
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 border-2 border-foreground bg-muted text-foreground text-[10px] font-bold uppercase tracking-widest">
                    <Calendar className="h-3 w-3" strokeWidth={2.75} />
                    {item.event}
                  </span>
                  <span className="px-2 py-1 border-2 border-foreground bg-card text-foreground text-[10px] font-bold uppercase tracking-widest capitalize">
                    {item.type}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-foreground font-medium">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default AchievementsSection;
