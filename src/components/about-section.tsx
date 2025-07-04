
import Section from "./section";
import SectionHeader from "./ui/section-header";
import GlassCard from "./ui/glass-card";
import AnimatedCounter from "./ui/animated-counter";
import { CheckCircle, Code, Lightbulb, Users, Trophy, Calendar } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Technical Expertise",
      description: "Proficient in full-stack web development with strong foundation in modern technologies and frameworks."
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />,
      title: "Leadership & Coordination",
      description: "Experienced in leading teams and coordinating events, with proven track record in organizing technical fests."
    },
    {
      icon: <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />,
      title: "Problem Solving",
      description: "Strong analytical and problem-solving abilities with focus on creating scalable, user-friendly solutions."
    },
    {
      icon: <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Continuous Learning",
      description: "Passionate about staying current with emerging technologies and contributing to open-source projects."
    }
  ];

  const stats = [
    { number: 2, suffix: "+", label: "Years Experience" },
    { number: 15, suffix: "+", label: "Projects" },
    { number: 5, suffix: "+", label: "Technologies" },
    { number: 100, suffix: "%", label: "Dedication" }
  ];

  return (
    <Section id="about" className="bg-background relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl animate-float-orb"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary/8 to-transparent rounded-full blur-3xl animate-float-orb" style={{ animationDelay: '10s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-breathe"></div>
      
      <div className="relative z-10">
        <SectionHeader 
          title="About Me" 
          subtitle="Passionate developer creating innovative solutions with modern technologies"
        />
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <GlassCard key={index} variant="primary" className="p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <GlassCard className="p-6 sm:p-8 h-full">
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Mann Maheshwari</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
                
                <p className="leading-relaxed">
                  I'm a motivated and detail-oriented MCA student with a strong foundation in full-stack web development. Currently honing skills in the MERN stack, I'm experienced in contributing to open-source projects and working on modern technologies like React, Node.js, and implementing emerging problem-solving abilities through various technical projects.
                </p>
                
                <p className="leading-relaxed">
                  Passionate about building scalable, user-friendly web solutions and continuously exploring emerging tech trends. I have hands-on experience with modern development tools and frameworks, coupled with strong leadership abilities demonstrated through coordinating major technical events.
                </p>
                
                <div className="flex items-center gap-2 pt-4 border-t border-border/30">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Available for opportunities</span>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <GlassCard 
                key={index}
                variant={index % 2 === 0 ? "primary" : "secondary"}
                className="p-4 sm:p-5"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-background to-card flex-shrink-0 border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-base sm:text-lg mb-1">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
