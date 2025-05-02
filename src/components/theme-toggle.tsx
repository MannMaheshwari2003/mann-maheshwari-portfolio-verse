
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full w-9 h-9 bg-card hover:bg-primary/10"
        aria-label="Toggle theme"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center"
        >
          {theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
          )}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
