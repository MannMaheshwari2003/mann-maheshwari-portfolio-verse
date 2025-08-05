
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { useEffect, useState, useCallback } from "react";

export function ThemeToggle() {
  const { theme, setTheme, actualTheme, isSystemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = useCallback(() => {
    if (isAnimating) return; // Prevent rapid clicking
    
    setIsAnimating(true);
    
    let nextTheme: "dark" | "light" | "system";
    
    if (theme === "system") {
      nextTheme = actualTheme === "dark" ? "light" : "dark";
    } else if (theme === "dark") {
      nextTheme = "light";
    } else {
      nextTheme = "dark";
    }
    
    setTheme(nextTheme);
    
    // Reset animation state
    setTimeout(() => setIsAnimating(false), 300);
  }, [theme, actualTheme, setTheme, isAnimating]);

  if (!mounted) {
    return (
      <div className="w-11 h-11 rounded-full bg-muted/50 animate-pulse" />
    );
  }

  const getIcon = () => {
    if (isSystemTheme) {
      return <Monitor className="h-[1.3rem] w-[1.3rem]" />;
    }
    return actualTheme === "dark" 
      ? <Moon className="h-[1.3rem] w-[1.3rem]" />
      : <Sun className="h-[1.3rem] w-[1.3rem]" />;
  };

  const getTooltipText = () => {
    if (isSystemTheme) return "Using system theme";
    return actualTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  };

  return (
    <div className="group relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleThemeToggle}
        disabled={isAnimating}
        className={`
          relative rounded-full w-11 h-11 
          bg-background/80 backdrop-blur-md border border-border/50
          hover:border-primary/50 hover:bg-primary/5 hover:shadow-md
          transition-all duration-300 hover:scale-105 active:scale-95 
          shadow-sm hover:shadow-primary/20 
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isAnimating ? 'animate-pulse' : ''}
        `}
        aria-label={getTooltipText()}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon container with smooth rotation */}
        <div className={`
          relative w-full h-full flex items-center justify-center 
          transition-transform duration-300 ease-out
          ${actualTheme === 'dark' ? 'rotate-180' : 'rotate-0'}
          ${isSystemTheme ? 'scale-110' : 'scale-100'}
        `}>
          <div className="text-foreground/90 group-hover:text-primary transition-colors duration-200">
            {getIcon()}
          </div>
        </div>

        {/* Subtle pulse ring on hover */}
        <div className="absolute inset-0 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
        
        <span className="sr-only">{getTooltipText()}</span>
      </Button>

      {/* Enhanced tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                      bg-popover/95 backdrop-blur-md border border-border/50 
                      px-3 py-2 rounded-lg text-sm text-popover-foreground 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      pointer-events-none shadow-lg whitespace-nowrap font-medium
                      before:absolute before:-top-1 before:left-1/2 before:transform before:-translate-x-1/2 
                      before:w-2 before:h-2 before:bg-popover before:border-l before:border-t 
                      before:border-border/50 before:rotate-45">
        {getTooltipText()}
      </div>
    </div>
  );
}
