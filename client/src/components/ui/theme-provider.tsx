import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Helper to get the system theme
  const getSystemTheme = (): Theme => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, _setTheme] = useState<Theme>(getSystemTheme);

  // Function to update the DOM classes
  const applyTheme = (currentTheme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(currentTheme);
  };

  // Wrapper for setTheme that also applies the theme
  const setTheme = (newTheme: Theme) => {
    _setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Effect to apply the initial theme on mount
  useEffect(() => {
    applyTheme(theme);
    // removed: system change listener to keep toggled theme until reload
  }, []);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
