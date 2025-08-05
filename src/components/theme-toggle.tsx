
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set theme based on time of day
    const hour = new Date().getHours();
    // Dark mode from 6 PM to 6 AM
    if ((hour >= 18 || hour < 6) && theme !== "dark") {
      setTheme("dark");
    } else if (hour >= 6 && hour < 18 && theme !== "light") {
      setTheme("light");
    }
  }, [setTheme, theme]);

  if (!mounted) return null;

  return (
    <div className="group relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative rounded-full w-11 h-11 bg-card/60 backdrop-blur-md border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-500 hover:scale-110 active:scale-95 shadow-lg hover:shadow-primary/30 group-hover:shadow-xl overflow-hidden"
        aria-label="Toggle theme"
      >
        {/* Enhanced background glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-pulse"></div>
        
        {/* Rotating background disc */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:rotate-180"></div>
        
        {/* Icon container with enhanced rotation and scaling */}
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-700 ease-out ${
          theme === 'dark' 
            ? 'rotate-180 scale-110' 
            : 'rotate-0 scale-100'
        }`}>
          {theme === "dark" ? (
            <Moon className="h-[1.3rem] w-[1.3rem] text-primary drop-shadow-lg transition-all duration-300 group-hover:text-accent" />
          ) : (
            <Sun className="h-[1.3rem] w-[1.3rem] text-primary drop-shadow-lg transition-all duration-300 group-hover:text-accent animate-pulse" />
          )}
        </div>

        {/* Enhanced pulse animation rings */}
        <div className="absolute inset-0 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
        <div className="absolute inset-2 rounded-full border border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '0.2s' }}></div>
        
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Enhanced tooltip with gradient background */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-card/95 via-card/90 to-card/95 backdrop-blur-lg border border-primary/30 px-3 py-2 rounded-lg text-sm text-foreground/90 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl whitespace-nowrap font-medium">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card border-l border-t border-primary/30 rotate-45"></div>
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </div>
    </div>
  );
}
