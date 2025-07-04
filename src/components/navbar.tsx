
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Scroll spy functionality
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') as string;
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 animate-fade-in ${
        isScrolled ? 'glass backdrop-blur-xl py-2 sm:py-3' : 'bg-transparent py-3 sm:py-4 lg:py-6'
      }`}
      style={{ animationDelay: '0s' }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-lg md:text-xl font-bold font-heading animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-gradient">Mann</span>
          <span className="mx-2">Maheshwari</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 animated-underline animate-fade-in ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          
          <div
            className="animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-3 sm:space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 sm:p-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 sm:w-6 sm:h-5 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''
                }`}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden glass-card shadow-lg fixed left-0 right-0 border-t border-border/50 animate-fade-in"
          style={{ top: isScrolled ? '56px' : '64px' }}
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-3 px-4 rounded-md transition-all duration-300 animate-fade-in ${
                  activeSection === link.href.substring(1)
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'hover:bg-foreground/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
