
import Section from "./section";
import SectionHeader from "./ui/section-header";
import GlassCard from "./ui/glass-card";
import AnimatedCounter from "./ui/animated-counter";
import { CheckCircle, Code, Lightbulb, Users, Trophy, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useResponsive } from "@/hooks/use-responsive";

const AboutSection = () => {
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: statsRef, inView: statsInView } = useScrollAnimation({ delay: 200 });
  const { ref: contentRef, inView: contentInView } = useScrollAnimation({ delay: 400 });
  const { ref: featuresRef, inView: featuresInView } = useScrollAnimation({ delay: 600 });
  
  const { 
    getContainerClasses, 
    getSectionSpacing, 
    getCardLayout,
    getOptimalColumns,
    isMobile, 
    isTablet, 
    orientation,
    isDesktop
  } = useResponsive();

  const cardLayout = getCardLayout();
  const statsColumns = getOptimalColumns(4);

  const features = [
    {
      icon: <Code className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} text-primary`} />,
      title: "Technical Expertise",
      description: "Proficient in full-stack web development with strong foundation in modern technologies and frameworks."
    },
    {
      icon: <Users className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} text-secondary`} />,
      title: "Leadership & Coordination",
      description: "Experienced in leading teams and coordinating events, with proven track record in organizing technical fests."
    },
    {
      icon: <Lightbulb className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} text-accent`} />,
      title: "Problem Solving",
      description: "Strong analytical and problem-solving abilities with focus on creating scalable, user-friendly solutions."
    },
    {
      icon: <CheckCircle className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} text-primary`} />,
      title: "Continuous Learning",
      description: "Passionate about staying current with emerging technologies and contributing to open-source projects."
    }
  ];

  const stats = [
    { number: 3, suffix: "+", label: "Internships" },
    { number: 10, suffix: "+", label: "Personal Projects" },
    { number: 8, suffix: "+", label: "Technologies" },
    { number: 100, suffix: "%", label: "Dedication" }
  ];

  return (
    <Section 
      id="about" 
      className={`bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden ${getSectionSpacing()}`}
    >
      {/* Enhanced responsive decorative elements */}
      <div className={`absolute top-0 right-0 ${
        isMobile ? 'w-1/4 h-1/4' : isTablet ? 'w-1/3 h-1/3' : 'w-1/3 h-1/3'
      } bg-gradient-radial from-primary/12 via-primary/4 to-transparent rounded-full blur-3xl animate-float-orb`}></div>
      <div className={`absolute bottom-0 left-0 ${
        isMobile ? 'w-1/5 h-1/5' : 'w-1/4 h-1/4'
      } bg-gradient-radial from-secondary/12 via-secondary/4 to-transparent rounded-full blur-3xl animate-float-orb`} 
      style={{ animationDelay: '10s' }}></div>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        isMobile ? 'w-20 h-20' : 'w-32 h-32'
      } bg-gradient-radial from-accent/8 to-transparent rounded-full blur-3xl animate-breathe`}></div>
      
      <div className="relative z-10">
        <div 
          ref={headerRef}
          className={`transition-all duration-1000 ease-out ${
            headerInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionHeader 
            title="About Me" 
            subtitle="Passionate developer creating innovative solutions with modern technologies"
          />
        </div>
        
        <div className={getContainerClasses()}>
          {/* Enhanced responsive stats section */}
          <div 
            ref={statsRef}
            className={`grid ${
              isMobile 
                ? 'grid-cols-2 gap-3' 
                : isTablet 
                  ? 'grid-cols-4 gap-4' 
                  : 'grid-cols-4 gap-6 lg:gap-8'
            } mb-12 lg:mb-16 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
              statsInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => (
              <GlassCard 
                key={index} 
                variant="primary" 
                className={`${
                  isMobile ? 'p-3' : isTablet ? 'p-4' : 'p-6'
                } text-center hover:scale-105 transition-all duration-500 animate-fade-in-scale group relative overflow-hidden border border-primary/20 hover:border-primary/40`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`${
                    isMobile ? 'text-xl' : isTablet ? 'text-2xl' : 'text-3xl lg:text-4xl'
                  } font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2`}>
                    {statsInView && <AnimatedCounter end={stat.number} suffix={stat.suffix} />}
                  </div>
                  <div className={`${
                    isMobile ? 'text-xs' : 'text-sm'
                  } font-medium text-muted-foreground uppercase tracking-wide leading-tight`}>
                    {stat.label}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          
          <div className={`grid ${
            isMobile || (isTablet && orientation === 'portrait') 
              ? 'gap-6' 
              : 'lg:grid-cols-3 gap-8 lg:gap-12'
          }`}>
            <div 
              ref={contentRef}
              className={`${
                isMobile || (isTablet && orientation === 'portrait') 
                  ? 'order-2' 
                  : 'lg:col-span-2 order-2 lg:order-1'
              } transition-all duration-1000 ease-out ${
                contentInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <GlassCard className={`${
                isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8'
              } h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden border border-primary/20 hover:border-primary/30`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`space-y-4 ${
                    isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
                  }`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`${
                        isMobile ? 'w-10 h-10' : 'w-12 h-12'
                      } rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Trophy className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} text-white`} />
                      </div>
                      <div>
                        <h3 className={`${
                          isMobile ? 'text-lg' : 'text-xl'
                        } font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text`}>
                          Mann Maheshwari
                        </h3>
                        <p className={`${
                          isMobile ? 'text-sm' : 'text-base'
                        } text-muted-foreground`}>
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                    
                    <p className="leading-relaxed text-foreground/90">
                      I'm a motivated and detail-oriented MCA student with a strong foundation in full-stack web development. Currently honing skills in the MERN stack, I'm experienced in contributing to open-source projects and working on modern technologies like React, Node.js, and implementing emerging problem-solving abilities through various technical projects.
                    </p>
                    
                    <p className="leading-relaxed text-foreground/90">
                      Passionate about building scalable, user-friendly web solutions and continuously exploring emerging tech trends. I have hands-on experience with modern development tools and frameworks through internships and personal projects, coupled with strong leadership abilities demonstrated through coordinating major technical events.
                    </p>
                    
                    <div className="flex items-center gap-2 pt-4 border-t border-border/30">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className={`${
                        isMobile ? 'text-xs' : 'text-sm'
                      } text-muted-foreground`}>
                        Available for opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
            
            <div 
              ref={featuresRef}
              className={`space-y-4 ${
                isMobile || (isTablet && orientation === 'portrait') 
                  ? 'order-1' 
                  : 'order-1 lg:order-2'
              } transition-all duration-1000 ease-out ${
                featuresInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}
            >
              {features.map((feature, index) => (
                <GlassCard 
                  key={index}
                  variant={index % 2 === 0 ? "primary" : "secondary"}
                  className={`${
                    isMobile ? 'p-3' : isTablet ? 'p-4' : 'p-5'
                  } hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-scale group relative overflow-hidden border border-primary/20 hover:border-primary/30`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className={`flex items-start ${isMobile ? 'gap-2' : 'gap-4'}`}>
                      <div className={`${
                        isMobile ? 'p-1.5' : 'p-2'
                      } rounded-lg bg-gradient-to-br from-background to-card flex-shrink-0 border border-white/10 hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className={`font-medium ${
                          isMobile ? 'text-sm' : 'text-lg'
                        } mb-1`}>
                          {feature.title}
                        </h3>
                        <p className={`${
                          isMobile ? 'text-xs' : 'text-sm'
                        } text-foreground/70 leading-relaxed`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
