import Section from "./section";
import SectionHeader from "./ui/section-header";
import { Calendar, GraduationCap, BookOpen, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const educationData = [
  { year: "2024 – 2026", title: "M.C.A — Master of Computer Applications", subtitle: "Guru Gobind Singh Indraprastha University", description: "Pursuing", status: "current", level: "postgraduate" },
  { year: "2024 – 2026", title: "P.G.D.M — Post Graduate Diploma in Management", subtitle: "Tecnia Institute of Advanced Studies, Delhi", description: "Pursuing", status: "current", level: "diploma" },
  { year: "2021 – 2024", title: "B.C.A — Bachelor of Computer Applications", subtitle: "Bharati Vidyapeeth University, Delhi", description: "CGPA: 7.81", status: "completed", level: "undergraduate" },
  { year: "2021", title: "CBSE XII — Senior Secondary", subtitle: "DAV Public School", description: "Percentage: 65.4%", status: "completed", level: "secondary" },
  { year: "2019", title: "CBSE X — Secondary", subtitle: "DAV Public School", description: "Percentage: 80.4%", status: "completed", level: "secondary" },
];

const levelIcon = (level: string) => {
  switch (level) {
    case "postgraduate": return Award;
    case "diploma": return BookOpen;
    case "undergraduate": return GraduationCap;
    default: return BookOpen;
  }
};

const accents = [
  "bg-[hsl(var(--primary))] text-primary-foreground",
  "bg-[hsl(var(--secondary))] text-secondary-foreground",
  "bg-[hsl(var(--accent))] text-foreground",
];

const EducationSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: timelineRef, inView: timelineInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Section id="education" className="bg-muted/40">
      <div ref={headerRef} className={`transition-all duration-500 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <SectionHeader number="02" accent="blue" title="Education" subtitle="A constructed academic timeline." />
      </div>

      <div ref={timelineRef} className="relative max-w-4xl mx-auto">
        {/* Vertical thick black line */}
        <div className="absolute left-5 md:left-7 top-3 bottom-3 w-1 md:w-1.5 bg-foreground" aria-hidden="true" />

        <ol className="space-y-6">
          {educationData.map((item, i) => {
            const Icon = levelIcon(item.level);
            const accent = accents[i % 3];
            return (
              <li
                key={i}
                className={`relative pl-16 md:pl-20 transition-all duration-500 ${
                  timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Marker */}
                <span
                  className={`absolute left-0 top-1 w-11 h-11 md:w-14 md:h-14 border-2 md:border-4 border-foreground flex items-center justify-center shadow-bauhaus-sm ${accent} ${
                    i % 2 === 0 ? "rounded-full" : ""
                  }`}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.5} />
                </span>

                {/* Card */}
                <div className="bg-card border-2 md:border-4 border-foreground p-4 md:p-5 shadow-bauhaus lift-hover">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest">
                      <Calendar className="h-3 w-3" strokeWidth={2.75} />
                      {item.year}
                    </span>
                    {item.status === "current" && (
                      <span className="px-2 py-0.5 bg-[hsl(var(--primary))] text-primary-foreground text-[10px] font-bold uppercase tracking-widest border-2 border-foreground">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-black uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.subtitle}</p>
                  {item.description && (
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-foreground">{item.description}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
};

export default EducationSection;
