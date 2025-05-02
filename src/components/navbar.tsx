
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <a href="#hero" className="text-lg md:text-xl font-bold text-primary">
          Mann <span className="text-secondary">Maheshwari</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-secondary transition-colors hover:scale-105 transition-transform">
            About
          </a>
          <a href="#education" className="text-sm font-medium hover:text-secondary transition-colors hover:scale-105 transition-transform">
            Education
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-secondary transition-colors hover:scale-105 transition-transform">
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-secondary transition-colors hover:scale-105 transition-transform">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-secondary transition-colors hover:scale-105 transition-transform">
            Skills
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-secondary transition-colors hover:scale-105 transition-transform">
            Contact
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-sm font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#education" 
              className="text-sm font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a 
              href="#experience" 
              className="text-sm font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-sm font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
