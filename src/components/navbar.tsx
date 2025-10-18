
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useResponsive } from "@/hooks/use-responsive";
import { useTouchDevice } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  const { 
    isMobile, 
    isTablet, 
    getContainerClasses,
  } = useResponsive();
  const isTouchDevice = useTouchDevice();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = isMobile ? 20 : 40;
      setIsScrolled(window.scrollY > scrollThreshold);
      
      // Enhanced scroll spy functionality
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + (isMobile ? 80 : 100);
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') as string;
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Enhanced mobile menu handling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-trigger')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
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
      const offset = isMobile ? 80 : 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const getNavbarPadding = () => {
    if (isMobile) return 'py-3';
    if (isTablet) return 'py-4';
    return isScrolled ? 'py-3' : 'py-6';
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-out animate-fade-in ${
        isScrolled 
          ? 'glass-premium shadow-lg border-b border-border/50 backdrop-blur-xl' 
          : 'bg-transparent'
      } ${getNavbarPadding()}`}
      style={{ animationDelay: '0s' }}
    >
      <div className={`${getContainerClasses()} flex items-center justify-between`}>
        <button 
          onClick={() => handleNavClick("#hero")}
          className={`${
            isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'
          } font-semibold font-heading animate-fade-in transition-all duration-200 focus-ring ${
            isTouchDevice ? 'touch-manipulation' : ''
          } group rounded-lg px-2 py-1`}
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-gradient">Mann</span>
          <span className="mx-2 text-foreground/80 group-hover:text-foreground transition-colors font-normal">Maheshwari</span>
        </button>

        {/* Enhanced desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm xl:text-base font-medium transition-all duration-200 animate-fade-in focus-ring rounded-lg px-3.5 py-2 ${
                isTouchDevice ? 'touch-manipulation' : ''
              } ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary bg-primary/8 border border-primary/20' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted/40 border border-transparent hover:border-border/30'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {link.label}
            </button>
          ))}
          
          <div
            className="animate-fade-in ml-4"
            style={{ animationDelay: '0.8s' }}
          >
            <ThemeToggle />
          </div>
        </nav>

        {/* Enhanced mobile navigation */}
        <div className="lg:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`mobile-menu-trigger p-3 hover:bg-primary/5 border border-border/30 hover:border-primary/30 rounded-xl focus-ring interactive-glow ${
              isTouchDevice ? 'touch-manipulation min-h-[48px] min-w-[48px]' : ''
            } transition-all duration-300 hover:shadow-lg hover:shadow-primary/20`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-5">
              <Menu className={`h-5 w-5 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`h-5 w-5 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </Button>
        </div>
      </div>

      {/* Enhanced mobile menu overlay with improved design */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-xl animate-fade-in">
          <div 
            className={`mobile-menu fixed left-0 right-0 bottom-0 glass-premium border-t border-border/30 ${
              isMobile ? 'rounded-t-3xl' : 'rounded-t-[2rem]'
            } shadow-2xl`}
            style={{ 
              top: isScrolled ? (isMobile ? '72px' : '80px') : (isMobile ? '84px' : '96px'),
              maxHeight: `calc(100vh - ${isScrolled ? (isMobile ? '72px' : '80px') : (isMobile ? '84px' : '96px')})`
            }}
          >
            <div className={`${
              getContainerClasses()
            } h-full overflow-y-auto ${isMobile ? 'py-6' : 'py-8'}`}>
              <div className={`flex flex-col ${isMobile ? 'space-y-3' : 'space-y-4'}`}>
                {navLinks.map((link, index) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left ${
                      isMobile ? 'text-lg py-4 px-6' : 'text-xl py-5 px-8'
                    } font-medium rounded-2xl transition-all duration-300 animate-fade-in focus-ring ${
                      isTouchDevice ? 'touch-manipulation min-h-[64px]' : ''
                    } hover:scale-[1.02] ${
                      activeSection === link.href.substring(1)
                        ? 'bg-primary/15 text-primary font-semibold border-2 border-primary/30 shadow-lg shadow-primary/10' 
                        : 'hover:bg-accent/10 hover:text-foreground border-2 border-transparent hover:border-border/30'
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
