import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, actualTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10 border-2 border-foreground bg-muted" aria-hidden="true" />;
  }

  const isDark = actualTheme === "dark";
  const next = isDark ? "light" : "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      onClick={() => setTheme(next)}
      aria-label={label}
      className="press-effect focus-ring relative w-10 h-10 md:w-11 md:h-11 border-2 border-foreground bg-[hsl(var(--accent))] text-foreground shadow-bauhaus-sm flex items-center justify-center"
      type="button"
    >
      {isDark ? <Sun className="h-5 w-5" strokeWidth={2.5} /> : <Moon className="h-5 w-5" strokeWidth={2.5} />}
    </button>
  );
}
