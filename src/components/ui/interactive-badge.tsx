
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
    default: "bg-muted/80 text-muted-foreground border-border/50 hover:bg-muted/90 hover:border-border/70 hover:text-foreground",
    primary: "bg-primary/20 text-primary-foreground border-primary/40 hover:bg-primary/30 hover:border-primary/60 hover:shadow-primary/25",
    secondary: "bg-secondary/20 text-secondary-foreground border-secondary/40 hover:bg-secondary/30 hover:border-secondary/60 hover:shadow-secondary/25",
    accent: "bg-accent/20 text-accent-foreground border-accent/40 hover:bg-accent/30 hover:border-accent/60 hover:shadow-accent/25",
    gradient: "bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-foreground border-primary/30 hover:from-primary/30 hover:via-secondary/30 hover:to-accent/30 hover:border-primary/50"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs font-medium",
    md: "px-4 py-2 text-sm font-semibold",
    lg: "px-5 py-2.5 text-base font-bold"
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      {glow && (
        <div className={cn(
          "absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300",
          variant === "primary" && "bg-primary/40",
          variant === "secondary" && "bg-secondary/40",
          variant === "accent" && "bg-accent/40",
          variant === "gradient" && "bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40"
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
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </span>
    </div>
  );
};

export default InteractiveBadge;
