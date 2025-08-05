
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Set theme based on time of day
    const hour = new Date().getHours();
    // Dark mode from 6 PM to 6 AM
    if ((hour >= 18 || hour < 6) && theme !== "dark") {
      setTheme("dark");
    } else if (hour >= 6 && hour < 18 && theme !== "light") {
      setTheme("light");
    }
  }, []);

  return (
    <div className="group relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative rounded-full w-10 h-10 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-primary/25"
        aria-label="Toggle theme"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        
        {/* Icon container with smooth rotation */}
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ${
          theme === 'dark' ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
        }`}>
          {theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] text-primary drop-shadow-sm" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary drop-shadow-sm" />
          )}
        </div>

        {/* Subtle pulse animation */}
        <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Tooltip on hover */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-primary/20 px-2 py-1 rounded-md text-xs text-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg">
        {theme === "dark" ? "Switch to light" : "Switch to dark"}
      </div>
    </div>
  );
}
