
import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: "dark" | "light";
  isSystemTheme: boolean;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  actualTheme: "light",
  isSystemTheme: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    
    const stored = localStorage.getItem(storageKey) as Theme;
    return stored || defaultTheme;
  });

  const [actualTheme, setActualTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "light";
    
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const hour = new Date().getHours();
    const timeBasedTheme = (hour >= 18 || hour < 6) ? "dark" : "light";
    
    return theme === "system" ? systemTheme : timeBasedTheme;
  });

  const applyTheme = useCallback((resolvedTheme: "dark" | "light") => {
    const root = window.document.documentElement;
    
    // Smooth transition
    root.style.setProperty('transition', 'background-color 0.3s ease, color 0.3s ease');
    
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    
    setActualTheme(resolvedTheme);

    // Update meta theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', resolvedTheme === 'dark' ? 'hsl(222.2 84% 4.9%)' : 'hsl(0 0% 100%)');
    }

    // Clean up transition after animation
    setTimeout(() => {
      root.style.removeProperty('transition');
    }, 300);
  }, []);

  // Handle theme changes and system preferences
  useEffect(() => {
    let resolvedTheme: "dark" | "light";

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      resolvedTheme = systemTheme;
    } else {
      resolvedTheme = theme;
    }

    applyTheme(resolvedTheme);
  }, [theme, applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme, applyTheme]);

  const optimizedSetTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  }, [storageKey]);

  const value = {
    theme,
    actualTheme,
    isSystemTheme: theme === "system",
    setTheme: optimizedSetTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
