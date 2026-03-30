
import Section from "./section";
import SectionHeader from "./ui/section-header";
import AnimatedCounter from "./ui/animated-counter";
import { Code, Lightbulb, Users, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useResponsive } from "@/hooks/use-responsive";

const AboutSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: statsRef, inView: statsInView } = useScrollAnimation({ delay: 200 });
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ delay: 300 });
  const { isMobile, isTablet } = useResponsive();

  const features = [
    { icon: <Code className="h-5 w-5 text-primary" />, title: "Technical Expertise", description: "Proficient in full-stack web development with modern technologies and frameworks." },
    { icon: <Users className="h-5 w-5 text-primary" />, title: "Leadership", description: "Experienced in leading teams and coordinating large-scale technical events." },
    { icon: <Lightbulb className="h-5 w-5 text-primary" />, title: "Problem Solving", description: "Strong analytical abilities focused on scalable, user-friendly solutions." },
    { icon: <CheckCircle className="h-5 w-5 text-primary" />, title: "Continuous Learning", description: "Passionate about emerging technologies and open-source contributions." },
  ];

  const stats = [
    { number: 3, suffix: "+", label: "Internships" },
    { number: 10, suffix: "+", label: "Projects" },
    { number: 8, suffix: "+", label: "Technologies" },
    { number: 100, suffix: "%", label: "Dedication" },
  ];

  return (
    <Section id="about" className="relative">
      <div 
        ref={headerRef}
        className={`transition-all duration-700 ease-out ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader title="About Me" subtitle="Passionate developer creating innovative solutions with modern technologies" />
      </div>
      
      {/* Stats */}
      <div 
        ref={statsRef}
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto transition-all duration-700 ease-out ${
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/20 transition-colors duration-300">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
              {statsInView && <AnimatedCounter end={stat.number} suffix={stat.suffix} />}
            </div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div 
        ref={contentRef}
        className={`grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto transition-all duration-700 ease-out ${
          contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Bio */}
        <div className="lg:col-span-3 p-6 md:p-8 rounded-xl bg-card/50 border border-border/50">
          <h3 className="text-lg font-semibold text-foreground mb-1 font-heading">Mann Maheshwari</h3>
          <p className="text-sm text-primary mb-4">Full Stack Developer</p>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              I'm a motivated and detail-oriented MCA student with a strong foundation in full-stack web development. Currently honing skills in the MERN stack, I'm experienced in contributing to open-source projects and working on modern technologies like React, Node.js, and implementing emerging problem-solving abilities through various technical projects.
            </p>
            <p>
              Passionate about building scalable, user-friendly web solutions and continuously exploring emerging tech trends. I have hands-on experience with modern development tools and frameworks through internships and personal projects, coupled with strong leadership abilities demonstrated through coordinating major technical events.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="lg:col-span-2 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/15 transition-colors duration-300">
              <div className="p-2 rounded-lg bg-primary/8 flex-shrink-0">{feature.icon}</div>
              <div>
                <h4 className="font-medium text-sm text-foreground mb-0.5">{feature.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
