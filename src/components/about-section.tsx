
import Section from "./section";
import { motion } from "framer-motion";
import { CheckCircle, Code, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };

  const features = [
    {
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Technical Expertise",
      description: "Proficient in full-stack web development with strong foundation in modern technologies and frameworks."
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Leadership & Coordination",
      description: "Experienced in leading teams and coordinating events, with proven track record in organizing technical fests."
    },
    {
      icon: <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Problem Solving",
      description: "Strong analytical and problem-solving abilities with focus on creating scalable, user-friendly solutions."
    },
    {
      icon: <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Continuous Learning",
      description: "Passionate about staying current with emerging technologies and contributing to open-source projects."
    }
  ];

  return (
    <Section id="about" className="bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <motion.h2 
          className="section-title mb-8 sm:mb-12 text-center"
          variants={fadeIn}
          custom={0}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-1"
            variants={fadeIn}
            custom={1}
          >
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg px-4 sm:px-0">
              <p className="leading-relaxed">
                I'm Mann Maheshwari, a motivated and detail-oriented MCA student with a strong foundation in full-stack web development. Currently honing skills in the MERN stack, I'm experienced in contributing to open-source projects and working on modern technologies like React, Node.js, and implementing emerging problem-solving abilities through various technical projects.
              </p>
              
              <p className="leading-relaxed">
                Passionate about building scalable, user-friendly web solutions and continuously exploring emerging tech trends. I have hands-on experience with modern development tools and frameworks, coupled with strong leadership abilities demonstrated through coordinating major technical events.
              </p>
              
              <p className="leading-relaxed">
                My approach combines technical expertise with effective communication and teamwork skills. I believe in continuous learning and staying updated with the latest industry practices while contributing meaningfully to collaborative projects and team success.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            custom={2}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <div className="grid gap-4 sm:gap-6 px-4 sm:px-0">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="glass p-4 sm:p-5 rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  variants={fadeIn}
                  custom={index + 3}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-foreground/70">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default AboutSection;
