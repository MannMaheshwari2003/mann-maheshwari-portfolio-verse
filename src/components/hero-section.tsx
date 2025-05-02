
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted pt-16">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Mann Maheshwari
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Aspiring Web Developer | Tech Enthusiast
          </p>
          
          <div className="flex justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <Avatar className="w-32 h-32 border-4 border-secondary shadow-xl hover:scale-105 transition-all duration-300">
              <AvatarImage src="/profile.jpg" alt="Mann Maheshwari" />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="px-6 hover:scale-105 transition-transform">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="px-6 hover:scale-105 transition-transform" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
          <div className="animate-bounce mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 text-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <span className="sr-only">Scroll down</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
