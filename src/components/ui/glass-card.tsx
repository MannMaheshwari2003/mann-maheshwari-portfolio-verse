
import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

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

const GlassCard = ({ 
  children, 
  className, 
  variant = "default", 
  hover = true, 
  interactive = false,
  style 
}: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl border bg-card/50 backdrop-blur-sm transition-all duration-300",
        variant === "default" && "border-border/50 hover:border-border",
        variant === "primary" && "border-primary/15 hover:border-primary/25",
        variant === "secondary" && "border-border/50 hover:border-border",
        variant === "accent" && "border-accent/15 hover:border-accent/25",
        variant === "premium" && "border-primary/20 hover:border-primary/30",
        hover && "hover:shadow-lg hover:shadow-foreground/[0.03]",
        interactive && "cursor-pointer active:scale-[0.98]",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
