
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Section from "./section";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/api/trpc";

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
    setIsSubmitting(true);
    
    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-background">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="grid md:grid-cols-2 gap-10 mt-8">
        {/* Contact Form */}
        <div className="animate-fade-in opacity-0 hover:shadow-lg p-6 rounded-lg transition-all duration-300" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input 
                placeholder="Your Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-secondary"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full transition-all duration-300 hover:scale-105" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href="mailto:mannmaheshwari2003@gmail.com" 
                  className="text-primary hover:underline"
                >
                  mannmaheshwari2003@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a 
                  href="tel:+918287298398" 
                  className="text-primary hover:underline"
                >
                  +91 82872 98398
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/mann-maheshwari-3714b82a1/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/mann-maheshwari
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
