import Section from "./section";
import SectionHeader from "./ui/section-header";
import AnimatedCounter from "./ui/animated-counter";
import { Code, Lightbulb, Users, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  { icon: Code, title: "Technical Expertise", description: "Full-stack web development across modern frameworks and databases.", color: "red" as const },
  { icon: Users, title: "Leadership", description: "Coordinated large technical events and led cross-functional dev teams.", color: "blue" as const },
  { icon: Lightbulb, title: "Problem Solving", description: "Analytical, scalable solutions with a sharp focus on usability.", color: "yellow" as const },
  { icon: CheckCircle, title: "Always Learning", description: "Curious about emerging tech and contributing to open source.", color: "red" as const },
];

const stats = [
  { number: 3, suffix: "+", label: "Internships", bg: "bg-[hsl(var(--accent))]", text: "text-foreground" },
  { number: 10, suffix: "+", label: "Projects", bg: "bg-[hsl(var(--primary))]", text: "text-primary-foreground" },
  { number: 8, suffix: "+", label: "Technologies", bg: "bg-[hsl(var(--secondary))]", text: "text-secondary-foreground" },
  { number: 100, suffix: "%", label: "Dedication", bg: "bg-foreground", text: "text-background" },
];

const colorBg = {
  red: "bg-[hsl(var(--primary))] text-primary-foreground",
  blue: "bg-[hsl(var(--secondary))] text-secondary-foreground",
  yellow: "bg-[hsl(var(--accent))] text-foreground",
};

const AboutSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: statsRef, inView: statsInView } = useScrollAnimation({ delay: 150 });
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ delay: 250 });

  return (
    <Section id="about">
      <div ref={headerRef} className={`transition-all duration-500 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <SectionHeader number="01" accent="red" title="About Me" subtitle="Constructed from curiosity, code, and continuous learning." />
      </div>

      {/* Stats — divided geometric strip */}
      <div
        ref={statsRef}
        className={`grid grid-cols-2 lg:grid-cols-4 border-2 md:border-4 border-foreground shadow-bauhaus-xl mb-16 transition-all duration-500 ${
          statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative ${stat.bg} ${stat.text} p-6 md:p-8 text-center border-foreground ${
              i < 2 ? "border-b-2 md:border-b-4 lg:border-b-0" : ""
            } ${i % 2 === 0 ? "border-r-2 md:border-r-4" : ""} ${
              i === 1 ? "lg:border-r-2 lg:border-r-foreground lg:md:border-r-4" : ""
            } ${i === 2 ? "lg:border-r-2 lg:md:border-r-4" : ""}`}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-black tabular-nums leading-none">
              {statsInView ? <AnimatedCounter end={stat.number} suffix={stat.suffix} /> : "0"}
            </div>
            <div className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Bio + features */}
      <div
        ref={contentRef}
        className={`grid lg:grid-cols-5 gap-6 md:gap-8 transition-all duration-500 ${
          contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Bio panel */}
        <div className="lg:col-span-3 relative bg-card text-card-foreground border-2 md:border-4 border-foreground p-6 md:p-10 shadow-bauhaus-lg">
          <span aria-hidden="true" className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[hsl(var(--primary))] border-2 border-foreground" />
          <h3 className="mb-1">Mann Maheshwari</h3>
          <p className="inline-block px-2 py-1 mb-6 bg-foreground text-background text-xs font-bold uppercase tracking-widest">
            Full Stack Developer
          </p>
          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p>
              MCA student with a strong foundation in full-stack web development. Currently sharpening MERN-stack
              skills, contributing to open-source, and shipping projects with React, Node.js, and modern tooling.
            </p>
            <p>
              I care about scalable, user-friendly web solutions. Hands-on experience from internships and personal
              projects, paired with leadership from coordinating major technical events.
            </p>
          </div>
        </div>

        {/* Feature tiles */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="lift-hover bg-card border-2 md:border-4 border-foreground p-4 shadow-bauhaus-sm"
              >
                <div className={`w-10 h-10 mb-3 border-2 border-foreground flex items-center justify-center ${colorBg[f.color]}`}>
                  <Icon className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-tight mb-1">{f.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground font-medium">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
