import { Github, Instagram, Linkedin } from "lucide-react";
import GeometricLogo from "./ui/geometric-logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mann-maheshwari-3714b82a1/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/MannMaheshwari2003", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/_mannkmaheshwari_/", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden" role="contentinfo">
      {/* Decorative shapes */}
      <span aria-hidden="true" className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[hsl(var(--primary))] opacity-30" />
      <span aria-hidden="true" className="absolute -bottom-16 left-12 w-40 h-40 bg-[hsl(var(--secondary))] opacity-25 rotate-12" />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16 relative">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GeometricLogo size={28} />
              <span className="text-xl font-black uppercase tracking-tight">Mann Maheshwari</span>
            </div>
            <p className="text-sm text-background/75 max-w-sm leading-relaxed">
              Full Stack Developer crafting bold, functional web experiences. Built on geometry, color, and care.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm font-medium">
              {["About", "Education", "Work", "Projects", "Skills", "Contact"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase() === "work" ? "experience" : label.toLowerCase()}`}
                    className="text-background/80 hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    → {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="press-effect focus-ring w-11 h-11 border-2 border-background bg-foreground text-background hover:bg-[hsl(var(--accent))] hover:text-foreground flex items-center justify-center shadow-[3px_3px_0_0_hsl(var(--background))]"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-background/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="font-bold uppercase tracking-widest text-background/70">
            © {currentYear} Mann Maheshwari. All rights reserved.
          </p>
          <p className="font-bold uppercase tracking-widest text-background/60">
            Form follows function.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
