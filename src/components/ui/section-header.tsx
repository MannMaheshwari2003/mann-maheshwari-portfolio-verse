import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Section number (e.g. "01") */
  number?: string;
  /** Accent color for the title underline / number block */
  accent?: "red" | "blue" | "yellow";
  className?: string;
  /** Use light text — for use inside dark/colored sections */
  inverse?: boolean;
  centered?: boolean;
  /** Legacy prop kept for backward compatibility — ignored */
  variant?: string;
}

const accentBg = {
  red: "bg-[hsl(var(--primary))]",
  blue: "bg-[hsl(var(--secondary))]",
  yellow: "bg-[hsl(var(--accent))]",
};

const SectionHeader = ({
  title,
  subtitle,
  number,
  accent = "red",
  className,
  inverse = false,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <div className={cn("flex items-end gap-4 md:gap-6 mb-4", centered && "justify-center")}>
        {number && (
          <span
            className={cn(
              "inline-flex items-center justify-center px-3 py-1 border-2 border-foreground font-black text-sm md:text-base",
              accentBg[accent],
              accent === "yellow" ? "text-foreground" : "text-primary-foreground",
            )}
          >
            {number}
          </span>
        )}
        <div
          aria-hidden="true"
          className={cn("h-2 md:h-3 flex-1 max-w-[80px] md:max-w-[120px] border-2 border-foreground", accentBg[accent])}
        />
      </div>

      <h2
        className={cn(
          "font-black uppercase tracking-tighter leading-[0.9]",
          inverse ? "text-background" : "text-foreground",
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 md:mt-6 max-w-2xl text-base md:text-lg font-medium leading-relaxed",
            inverse ? "text-background/85" : "text-muted-foreground",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
