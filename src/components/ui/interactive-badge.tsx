
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InteractiveBadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const InteractiveBadge = ({ 
  children, 
  variant = "default", 
  size = "md",
  className 
}: InteractiveBadgeProps) => {
  const variants = {
    default: "bg-muted/50 text-foreground border-border/50",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20"
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium transition-all duration-300",
        "hover:scale-105 hover:shadow-md cursor-default",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default InteractiveBadge;
