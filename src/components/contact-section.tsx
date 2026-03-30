
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Section from "./section";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SectionHeader from "./ui/section-header";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: formRef, inView: formInView } = useScrollAnimation({ delay: 200 });
  const { ref: infoRef, inView: infoInView } = useScrollAnimation({ delay: 300 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim() }
      });
      if (error) throw new Error(error.message || "Failed to send message");
      if (data && !data.success) throw new Error(data.error || "Failed to send email");
      toast({ title: "Message sent!", description: "Thank you. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Something went wrong.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { icon: <Mail className="h-4 w-4" />, title: "Email", value: "mannmaheshwari2003@gmail.com", link: "mailto:mannmaheshwari2003@gmail.com" },
    { icon: <Phone className="h-4 w-4" />, title: "Phone", value: "+91 82872 98398", link: "tel:+918287298398" },
    { icon: <Linkedin className="h-4 w-4" />, title: "LinkedIn", value: "linkedin.com/in/mann-maheshwari", link: "https://www.linkedin.com/in/mann-maheshwari-3714b82a1/" },
  ];

  return (
    <Section id="contact" className="bg-muted/20 relative">
      <SectionHeader title="Get In Touch" subtitle="Feel free to reach out for opportunities or collaboration" />
      
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Form */}
        <div ref={formRef} className={`order-2 lg:order-1 transition-all duration-700 ease-out ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 sm:p-8">
            <h3 className="text-lg font-semibold font-heading text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                <Input id="name" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required className="h-11 bg-background/50 border-border/50 focus:border-primary/50" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                <Input id="email" type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required className="h-11 bg-background/50 border-border/50 focus:border-primary/50" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea id="message" placeholder="Type your message here..." className="min-h-[130px] bg-background/50 border-border/50 focus:border-primary/50 resize-none" name="message" value={formData.message} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full h-11" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Sending...</> : <><Send className="h-4 w-4 mr-2" />Send Message</>}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Info */}
        <div ref={infoRef} className={`order-1 lg:order-2 transition-all duration-700 ease-out ${infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-semibold font-heading text-foreground mb-2">Contact Information</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              I'm always eager to connect, collaborate, or chat about exciting opportunities.
            </p>
            
            <div className="space-y-3 flex-1">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/15 transition-colors duration-300">
                  <div className="p-2.5 rounded-lg bg-primary/8 text-primary">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{item.title}</p>
                    <a 
                      href={item.link} 
                      target={item.title === "LinkedIn" ? "_blank" : undefined}
                      rel={item.title === "LinkedIn" ? "noreferrer" : undefined}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-xl border border-border/50 bg-card/30 text-center">
              <p className="text-xs text-muted-foreground">
                Interested in working together? Let's turn your ideas into reality!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
