import { Mail } from "lucide-react";
import ResumeDownloadButton from "./resume-download-button";

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-2xl">
      {/* Status pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border-2 border-foreground bg-card shadow-bauhaus-sm">
        <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-blink" />
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">Available for work</span>
      </div>

      {/* Tag — section number style */}
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block px-2 py-1 border-2 border-foreground bg-[hsl(var(--accent))] text-foreground text-xs font-black uppercase tracking-widest">
          00 — Intro
        </span>
        <span aria-hidden="true" className="h-2 w-12 bg-foreground" />
      </div>

      {/* Name */}
      <h1 className="mb-2">
        <span className="block">Mann</span>
        <span className="block text-[hsl(var(--primary))]">Maheshwari.</span>
      </h1>

      {/* Tagline */}
      <p className="mt-6 mb-10 text-lg md:text-xl max-w-xl text-foreground">
        Full-stack developer building bold, functional web experiences.
        I write clean code and compose interfaces like Bauhaus posters —{" "}
        <span className="bg-[hsl(var(--accent))] px-1.5 text-foreground font-bold">form follows function.</span>
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <ResumeDownloadButton />
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#contact");
            if (el) {
              const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
          className="press-effect focus-ring inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 border-2 border-foreground bg-card text-foreground font-bold uppercase tracking-widest text-xs md:text-sm shadow-bauhaus"
        >
          <Mail className="h-4 w-4" strokeWidth={2.75} />
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
