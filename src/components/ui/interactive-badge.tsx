
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InteractiveBadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent" | "gradient";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  glow?: boolean;
  className?: string;
  onClick?: () => void;
}

const InteractiveBadge = ({ 
  children, 
  variant = "default", 
  size = "md",
  animate = false,
  glow = false,
  className,
  onClick
}: InteractiveBadgeProps) => {
  const variants = {
    default: "bg-muted/60 text-foreground/90 border-border/50 hover:bg-muted/80 hover:border-border/70",
    primary: "bg-primary/15 text-primary border-primary/30 hover:bg-primary/25 hover:border-primary/50 hover:shadow-primary/20",
    secondary: "bg-secondary/15 text-secondary border-secondary/30 hover:bg-secondary/25 hover:border-secondary/50 hover:shadow-secondary/20",
    accent: "bg-accent/15 text-accent border-accent/30 hover:bg-accent/25 hover:border-accent/50 hover:shadow-accent/20",
    gradient: "bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 text-foreground border-primary/20 hover:from-primary/25 hover:via-secondary/25 hover:to-accent/25"
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs font-medium",
    md: "px-3.5 py-1.5 text-sm font-semibold",
    lg: "px-4 py-2 text-base font-bold"
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      {glow && (
        <div className={cn(
          "absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300",
          variant === "primary" && "bg-primary/30",
          variant === "secondary" && "bg-secondary/30",
          variant === "accent" && "bg-accent/30",
          variant === "gradient" && "bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30"
        )} />
      )}
      
      <span 
        className={cn(
          "relative inline-flex items-center gap-2 rounded-full border backdrop-blur-sm transition-all duration-300",
          "hover:scale-105 hover:shadow-lg",
          animate && "animate-pulse hover:animate-none",
          onClick && "cursor-pointer hover:scale-110 active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        onClick={onClick}
      >
        {/* Inner shimmer effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </span>
    </div>
  );
};

export default InteractiveBadge;
