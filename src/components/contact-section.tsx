import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Section from "./section";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "mannmaheshwari2003@gmail.com",
      link: "mailto:mannmaheshwari2003@gmail.com" 
    },
    { 
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 82872 98398",
      link: "tel:+918287298398" 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/mann-maheshwari",
      link: "https://www.linkedin.com/in/mann-maheshwari-3714b82a1/" 
    }
  ];

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

  return (
    <Section id="contact" className="bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <motion.h2 
          className="section-title mb-16 text-center"
          variants={fadeIn}
          custom={0}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            custom={1}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-heading mb-6 text-gradient">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <Input 
                    id="name"
                    placeholder="Enter your name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card/50 border-primary/10 focus:border-primary focus-visible:ring-primary/20 transition-all"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card/50 border-primary/10 focus:border-primary focus-visible:ring-primary/20"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Type your message here..." 
                    className="min-h-[120px] bg-card/50 border-primary/10 focus:border-primary focus-visible:ring-primary/20 resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-gradient"
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
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            variants={fadeIn}
            custom={2}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="mb-8">
                <h3 className="text-2xl font-heading mb-2 text-gradient">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I'm always eager to connect, collaborate, or simply chat about exciting opportunities.
                </p>
              </div>
              
              <div className="space-y-8">
                {contactDetails.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    custom={index + 3}
                    className="glass rounded-xl p-6 hover-translate"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{item.title}</h4>
                        <a 
                          href={item.link} 
                          target={item.title === "LinkedIn" ? "_blank" : undefined}
                          rel={item.title === "LinkedIn" ? "noreferrer" : undefined}
                          className="text-primary hover:underline group flex items-center"
                        >
                          {item.value}
                          <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <div className="glass-card rounded-xl p-6 border border-primary/10">
                  <p className="text-sm text-center">
                    Interested in working together? Let's turn your ideas into reality!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default ContactSection;
