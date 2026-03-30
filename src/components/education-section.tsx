
import Section from "./section";
import SectionHeader from "./ui/section-header";
import { Calendar, GraduationCap, BookOpen, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const educationData = [
  { year: "2024 - 2026", title: "M.C.A - Master of Computer Applications", subtitle: "Guru Gobind Singh Indraprastha University", description: "Pursuing", status: "current", level: "postgraduate" },
  { year: "2024 - 2026", title: "P.G.D.M - Post Graduate Diploma in Management", subtitle: "Tecnia Institute of Advanced Studies, Delhi", description: "Pursuing", status: "current", level: "diploma" },
  { year: "2021 - 2024", title: "B.C.A - Bachelor of Computer Applications", subtitle: "Bharati Vidyapeeth University, Delhi", description: "CGPA: 7.81", status: "completed", level: "undergraduate" },
  { year: "2021", title: "CBSE XII - Senior Secondary", subtitle: "DAV Public School", description: "Percentage: 65.4%", status: "completed", level: "secondary" },
  { year: "2019", title: "CBSE X - Secondary", subtitle: "DAV Public School", description: "Percentage: 80.4%", status: "completed", level: "secondary" },
];

const getLevelIcon = (level: string) => {
  const cls = "h-4 w-4";
  switch (level) {
    case "postgraduate": return <Award className={`${cls} text-primary`} />;
    case "diploma": return <BookOpen className={`${cls} text-primary`} />;
    case "undergraduate": return <GraduationCap className={`${cls} text-primary`} />;
    default: return <BookOpen className={`${cls} text-muted-foreground`} />;
  }
};

const EducationSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: timelineRef, inView: timelineInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <Section id="education" className="relative">
      <div ref={headerRef} className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader title="Education" subtitle="Academic journey and continuous learning path" />
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
          
          <div className="space-y-1">
            {educationData.map((item, index) => (
              <div 
                key={index}
                className={`relative flex gap-4 p-4 transition-all duration-500 ease-out ${
                  timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className={`w-[10px] h-[10px] rounded-full border-2 ${
                    item.status === 'current' ? 'border-primary bg-primary/30' : 'border-border bg-background'
                  }`} />
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.year}
                    </span>
                    {item.status === "current" && (
                      <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Current</span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-0.5 font-heading">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{item.subtitle}</p>
                  {item.description && (
                    <span className="text-xs text-muted-foreground/80 font-medium">{item.description}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
