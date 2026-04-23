import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <button
      onClick={() => {
        const el = document.querySelector("#about");
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      aria-label="Scroll to about section"
      className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 group focus-ring"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
      <span className="w-9 h-9 border-2 border-foreground bg-[hsl(var(--accent))] text-foreground shadow-bauhaus-sm flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
        <ArrowDown className="w-4 h-4" strokeWidth={2.75} />
      </span>
    </button>
  );
};

export default ScrollIndicator;
