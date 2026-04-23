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
  const { ref: infoRef, inView: infoInView } = useScrollAnimation({ delay: 250 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim() },
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
    { icon: Mail, title: "Email", value: "mannmaheshwari2003@gmail.com", link: "mailto:mannmaheshwari2003@gmail.com", bg: "bg-[hsl(var(--primary))]", text: "text-primary-foreground" },
    { icon: Phone, title: "Phone", value: "+91 82872 98398", link: "tel:+918287298398", bg: "bg-[hsl(var(--secondary))]", text: "text-secondary-foreground" },
    { icon: Linkedin, title: "LinkedIn", value: "linkedin.com/in/mann-maheshwari", link: "https://www.linkedin.com/in/mann-maheshwari-3714b82a1/", bg: "bg-[hsl(var(--accent))]", text: "text-foreground" },
  ];

  return (
    <Section id="contact" className="bg-[hsl(var(--secondary))] text-secondary-foreground">
      <SectionHeader number="07" accent="yellow" title="Get in Touch" subtitle="Tell me about your project, role, or idea." inverse />

      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Form */}
        <div
          ref={formRef}
          className={`order-2 lg:order-1 transition-all duration-500 ${formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="bg-card text-card-foreground border-2 md:border-4 border-foreground p-6 sm:p-8 shadow-bauhaus-xl">
            <h3 className="mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-foreground">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-none border-2 border-foreground bg-background text-foreground font-medium focus-visible:ring-0 focus-visible:border-[hsl(var(--primary))]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-foreground">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-none border-2 border-foreground bg-background text-foreground font-medium focus-visible:ring-0 focus-visible:border-[hsl(var(--primary))]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-foreground">Message</label>
                <Textarea
                  id="message"
                  placeholder="Type your message..."
                  className="min-h-[140px] rounded-none border-2 border-foreground bg-background text-foreground font-medium resize-none focus-visible:ring-0 focus-visible:border-[hsl(var(--primary))]"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="press-effect focus-ring w-full h-12 inline-flex items-center justify-center gap-2 border-2 border-foreground bg-[hsl(var(--primary))] text-primary-foreground font-bold uppercase tracking-widest text-xs shadow-bauhaus disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.75} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" strokeWidth={2.75} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Info */}
        <div
          ref={infoRef}
          className={`order-1 lg:order-2 transition-all duration-500 ${infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="h-full flex flex-col">
            <h3 className="mb-3 text-background">Contact Information</h3>
            <p className="text-base text-background/85 mb-6 max-w-md">
              Open to opportunities, collaborations, and conversations about modern web work.
            </p>

            <div className="space-y-4 flex-1">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                const isExternal = item.title === "LinkedIn";
                return (
                  <a
                    key={i}
                    href={item.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="lift-hover flex items-center gap-4 p-4 border-2 md:border-4 border-foreground bg-card text-foreground shadow-bauhaus"
                  >
                    <span className={`w-12 h-12 border-2 border-foreground flex items-center justify-center ${item.bg} ${item.text}`}>
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.title}</p>
                      <p className="text-sm font-bold text-foreground truncate">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 p-5 border-2 md:border-4 border-foreground bg-[hsl(var(--accent))] text-foreground shadow-bauhaus">
              <p className="text-sm font-bold uppercase tracking-wide leading-snug">
                Got an idea? Let's build something with backbone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
