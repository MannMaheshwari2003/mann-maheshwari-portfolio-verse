
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-trigger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-out animate-fade-in ${
        isScrolled ? 'glass backdrop-blur-xl py-2 shadow-lg border-b border-border/50' : 'bg-transparent py-3 lg:py-6'
      }`}
      style={{ animationDelay: '0s' }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <button 
          onClick={() => handleNavClick("#hero")}
          className="text-lg md:text-xl font-bold font-heading animate-fade-in hover:scale-105 transition-transform duration-300 touch-manipulation"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-gradient">Mann</span>
          <span className="mx-2">Maheshwari</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-all duration-300 animated-underline animate-fade-in hover:scale-105 touch-manipulation ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {link.label}
            </button>
          ))}
          
          <div
            className="animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-trigger p-2 hover:bg-accent/10 touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 transition-transform duration-300" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-md animate-fade-in">
          <div 
            className="mobile-menu fixed top-16 left-0 right-0 bottom-0 bg-card/95 backdrop-blur-xl border-t border-border/50 shadow-2xl"
            style={{ top: isScrolled ? '60px' : '80px' }}
          >
            <div className="container mx-auto py-8 px-6 h-full overflow-y-auto">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left text-lg font-medium py-4 px-6 rounded-xl transition-all duration-300 animate-fade-in touch-manipulation hover:scale-105 ${
                      activeSection === link.href.substring(1)
                        ? 'bg-primary/20 text-primary font-semibold border border-primary/30 shadow-lg' 
                        : 'hover:bg-accent/10 hover:text-foreground border border-transparent'
                    }`}
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
