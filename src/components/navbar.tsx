
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
    orientation, 
    getContainerClasses,
    deviceType 
  } = useResponsive();
  const isTouchDevice = useTouchDevice();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = isMobile ? 30 : 50;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    return isScrolled ? 'py-2' : 'py-6';
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-out animate-fade-in ${
        isScrolled 
          ? 'glass backdrop-blur-xl shadow-lg border-b border-border/50' 
          : 'bg-transparent'
      } ${getNavbarPadding()}`}
      style={{ animationDelay: '0s' }}
    >
      <div className={`${getContainerClasses()} flex items-center justify-between`}>
        <button 
          onClick={() => handleNavClick("#hero")}
          className={`${
            isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
          } font-bold font-heading animate-fade-in hover:scale-105 transition-transform duration-300 ${
            isTouchDevice ? 'touch-manipulation' : ''
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-gradient">Mann</span>
          <span className="mx-2">Maheshwari</span>
        </button>

        {/* Enhanced desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-all duration-300 animated-underline animate-fade-in hover:scale-105 ${
                isTouchDevice ? 'touch-manipulation' : ''
              } ${
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

        {/* Enhanced mobile navigation */}
        <div className="lg:hidden flex items-center space-x-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`mobile-menu-trigger p-2 hover:bg-accent/10 ${
              isTouchDevice ? 'touch-manipulation min-h-[44px] min-w-[44px]' : ''
            }`}
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

      {/* Enhanced mobile menu overlay with improved responsiveness */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg animate-fade-in">
          <div 
            className={`mobile-menu fixed left-0 right-0 bottom-0 bg-card/98 backdrop-blur-xl border-t border-border/50 shadow-2xl ${
              isMobile ? 'rounded-t-2xl' : 'rounded-t-3xl'
            }`}
            style={{ 
              top: isScrolled ? (isMobile ? '64px' : '72px') : (isMobile ? '76px' : '88px'),
              maxHeight: `calc(100vh - ${isScrolled ? (isMobile ? '64px' : '72px') : (isMobile ? '76px' : '88px')})`
            }}
          >
            <div className={`${
              getContainerClasses()
            } h-full overflow-y-auto ${isMobile ? 'py-4' : 'py-6'}`}>
              <div className={`flex flex-col ${isMobile ? 'space-y-2' : 'space-y-4'}`}>
                {navLinks.map((link, index) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left ${
                      isMobile ? 'text-base py-3 px-4' : 'text-lg py-4 px-6'
                    } font-medium rounded-2xl transition-all duration-300 animate-fade-in ${
                      isTouchDevice ? 'touch-manipulation min-h-[56px]' : ''
                    } hover:scale-[1.02] ${
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
