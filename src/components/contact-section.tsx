
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Section from "./section";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: titleRef, inView: titleInView } = useScrollAnimation();
  const { ref: formRef, inView: formInView } = useScrollAnimation({ delay: 200 });
  const { ref: infoRef, inView: infoInView } = useScrollAnimation({ delay: 400 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Submitting contact form with data:", formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      });

      console.log("Supabase function response:", { data, error });

      if (error) {
        console.error("Supabase function error:", error);
        throw new Error(error.message || "Failed to send message");
      }

      if (data && !data.success) {
        console.error("Email service error:", data.error);
        throw new Error(data.error || "Failed to send email");
      }

      console.log("Message sent successfully:", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { 
      icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: "Email",
      value: "mannmaheshwari2003@gmail.com",
      link: "mailto:mannmaheshwari2003@gmail.com" 
    },
    { 
      icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: "Phone",
      value: "+91 82872 98398",
      link: "tel:+918287298398" 
    },
    { 
      icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/mann-maheshwari",
      link: "https://www.linkedin.com/in/mann-maheshwari-3714b82a1/" 
    }
  ];

  return (
    <Section id="contact" className="bg-background relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-secondary/5 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-accent/3 rounded-full filter blur-3xl animate-breathe"></div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`transition-all duration-1000 ease-out ${
            titleInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-title mb-8 sm:mb-12 lg:mb-16 text-center">
            Get In Touch
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`relative order-2 lg:order-1 transition-all duration-1000 ease-out ${
              formInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="glass-premium rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/15 hover:border-primary/25 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 interactive-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading text-gradient">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium block">Your Name</label>
                  <Input 
                    id="name"
                    placeholder="Enter your name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gradient-to-r from-card/60 to-card/40 border-primary/15 focus:border-primary/50 focus-visible:ring-primary/30 transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/10 h-11 sm:h-12 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium block">Email Address</label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gradient-to-r from-card/60 to-card/40 border-primary/15 focus:border-primary/50 focus-visible:ring-primary/30 transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/10 h-11 sm:h-12 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block">Your Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Type your message here..." 
                    className="min-h-[120px] sm:min-h-[140px] bg-gradient-to-br from-card/60 to-card/40 border-primary/15 focus:border-primary/50 focus-visible:ring-primary/30 resize-none transition-all duration-300 hover:border-primary/25 hover:shadow-md hover:shadow-primary/10 rounded-lg"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-gradient h-11 sm:h-12 text-sm sm:text-base font-medium hover:scale-[1.02] transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div 
            ref={infoRef}
            className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${
              infoInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="h-full flex flex-col">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-secondary/20 to-accent/20">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading text-gradient-2">Contact Information</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Feel free to reach out through any of these channels. I'm always eager to connect, collaborate, or simply chat about exciting opportunities.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6 flex-1">
                {contactDetails.map((item, index) => (
                  <div
                    key={index}
                    className="glass-premium rounded-xl p-4 sm:p-6 hover-translate border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group interactive-glow hover:scale-[1.02]"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      transform: infoInView ? 'none' : 'translateY(20px)',
                      opacity: infoInView ? 1 : 0,
                      transition: `all 0.6s ease-out ${index * 100}ms`
                    }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-base sm:text-lg mb-1">{item.title}</h4>
                        <a 
                          href={item.link} 
                          target={item.title === "LinkedIn" ? "_blank" : undefined}
                          rel={item.title === "LinkedIn" ? "noreferrer" : undefined}
                          className="text-primary hover:underline group/link flex items-center text-sm sm:text-base break-all sm:break-normal"
                        >
                          <span className="truncate sm:whitespace-normal">{item.value}</span>
                          <span className="inline-block transition-transform group-hover/link:translate-x-1 ml-2 flex-shrink-0">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 sm:mt-12">
                <div className="glass-elegant rounded-xl p-4 sm:p-6 border border-accent/15 text-center hover:border-accent/35 transition-all duration-500 hover:shadow-xl hover:shadow-accent/15 interactive-glow">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Interested in working together? Let's turn your ideas into reality!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
