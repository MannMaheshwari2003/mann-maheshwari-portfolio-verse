import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

/**
 * Backward-compat shim. Renders Bauhaus-styled card so older imports keep working.
 * Prefer importing `BauhausCard` directly in new code.
 */
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "accent" | "premium";
  hover?: boolean;
  interactive?: boolean;
  glow?: boolean;
  blur?: "sm" | "md" | "lg" | "xl";
  style?: CSSProperties;
}

const GlassCard = ({ children, className, hover = true, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-card text-card-foreground border-2 md:border-4 border-foreground shadow-bauhaus-lg transition-transform duration-200",
        hover && "hover:-translate-y-1",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
