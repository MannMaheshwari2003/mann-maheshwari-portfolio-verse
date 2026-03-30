
import Section from "./section";
import SectionHeader from "./ui/section-header";
import { CalendarIcon, MapPinIcon, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
      "Utilized modern web technologies to develop robust and scalable applications",
    ],
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
      "Facilitated team meetings and coordinated development efforts to meet project deadlines",
    ],
  },
];

const ExperienceSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: cardsRef, inView: cardsInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="experience" className="bg-muted/20 relative">
      <div ref={headerRef} className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader title="Work Experience" subtitle="Professional journey showcasing leadership and technical expertise" variant="minimal" />
      </div>
      
      <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`transition-all duration-600 ease-out ${
              cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="h-full rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-foreground/[0.02] transition-all duration-300 group">
              {/* Left accent */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/8">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground font-heading text-base">{exp.title}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-muted/50 border border-border/50">
                  <CalendarIcon className="h-3 w-3" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-muted/50 border border-border/50">
                  <MapPinIcon className="h-3 w-3" />
                  {exp.location}
                </span>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
