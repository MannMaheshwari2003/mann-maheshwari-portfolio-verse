import Section from "./section";
import SectionHeader from "./ui/section-header";
import { CalendarIcon, MapPinIcon, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
  {
    title: "Web Developer",
    company: "Labmentix",
    location: "Bengaluru",
    period: "Feb 2025 – Apr 2025",
    accent: "red" as const,
    description: [
      "Managed client projects, ensuring timely delivery and high-quality outcomes",
      "Analyzed client requirements and executed tailored web solutions",
      "Collaborated with cross-functional teams for seamless implementation",
      "Built robust, scalable applications with modern web technologies",
    ],
  },
  {
    title: "Frontend Developer & Team Leader",
    company: "Future Core Innovations",
    location: "Delhi",
    period: "Jun 2024 – Sep 2024",
    accent: "blue" as const,
    description: [
      "Led a developer team to ship high-quality web applications",
      "Crafted responsive UIs ensuring optimal display across devices",
      "Implemented best practices for cross-browser compatibility",
      "Facilitated team meetings and coordinated to meet deadlines",
    ],
  },
];

const accentBg = {
  red: "bg-[hsl(var(--primary))] text-primary-foreground",
  blue: "bg-[hsl(var(--secondary))] text-secondary-foreground",
};
const accentBullet = {
  red: "bg-[hsl(var(--primary))]",
  blue: "bg-[hsl(var(--secondary))]",
};

const ExperienceSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, inView: cardsInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="experience">
      <div ref={headerRef} className={`transition-all duration-500 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <SectionHeader number="03" accent="yellow" title="Work" subtitle="Where craft meets responsibility." />
      </div>

      <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
        {experiences.map((exp, i) => (
          <article
            key={i}
            className={`relative bg-card border-2 md:border-4 border-foreground shadow-bauhaus-lg lift-hover transition-all duration-500 ${
              cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Header strip */}
            <div className={`flex items-center gap-3 px-5 py-4 border-b-2 md:border-b-4 border-foreground ${accentBg[exp.accent]}`}>
              <span className="w-9 h-9 border-2 border-foreground bg-card text-foreground flex items-center justify-center">
                <Briefcase className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-black uppercase tracking-tight leading-tight truncate">{exp.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest opacity-90 truncate">{exp.company}</p>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 border-2 border-foreground bg-card text-foreground text-[10px] font-bold uppercase tracking-widest">
                  <CalendarIcon className="h-3 w-3" strokeWidth={2.75} />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 border-2 border-foreground bg-card text-foreground text-[10px] font-bold uppercase tracking-widest">
                  <MapPinIcon className="h-3 w-3" strokeWidth={2.75} />
                  {exp.location}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-foreground font-medium">
                    <span className={`mt-2 w-2 h-2 flex-shrink-0 ${accentBullet[exp.accent]} border border-foreground`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
