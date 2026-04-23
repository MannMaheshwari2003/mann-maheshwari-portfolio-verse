import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import GeometricLogo from "./ui/geometric-logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 140;
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(el.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-background border-b-2 md:border-b-4 border-foreground"
      role="banner"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="focus-ring flex items-center gap-3 group"
          aria-label="Go to top"
        >
          <GeometricLogo size={26} />
          <span className="hidden sm:flex flex-col text-left leading-none">
            <span className="font-black uppercase tracking-tight text-base md:text-lg">Mann</span>
            <span className="font-medium uppercase text-[10px] tracking-[0.25em] text-muted-foreground">Maheshwari</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center" aria-label="Primary">
          <ul className="flex items-center border-2 border-foreground bg-card">
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);
              return (
                <li key={link.href} className="border-r-2 border-foreground last:border-r-0">
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`focus-ring px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-150 ${
                      active
                        ? "bg-foreground text-background"
                        : "text-foreground hover:bg-[hsl(var(--accent))]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden press-effect focus-ring w-10 h-10 border-2 border-foreground bg-card text-foreground shadow-bauhaus-sm flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-background border-t-2 border-foreground z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link, i) => {
              const active = activeSection === link.href.substring(1);
              const accents = ["bg-[hsl(var(--primary))]", "bg-[hsl(var(--secondary))]", "bg-[hsl(var(--accent))]"];
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`press-effect text-left flex items-center justify-between gap-4 px-5 py-4 border-2 border-foreground shadow-bauhaus-sm font-bold uppercase tracking-widest text-sm ${
                    active
                      ? "bg-foreground text-background"
                      : "bg-card text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className={`w-3 h-3 border-2 border-foreground ${accents[i % 3]} ${i % 3 === 0 ? "rounded-full" : ""}`}
                  />
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
