import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    // 1. Check if user explicitly set a preference previously
    const manualChoice = localStorage.getItem("theme_mode_manual");
    if (manualChoice) {
      return manualChoice;
    }
    // 2. Otherwise follow system theme, or default to light
    if (typeof window !== "undefined" && window.matchMedia) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  const darkMode = themeMode === "dark" || themeMode === "red";
  const isRedGate = themeMode === "red";

  // Listen to OS system theme changes when user hasn't explicitly locked a preference
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (e) => {
      const hasManualChoice = localStorage.getItem("theme_mode_manual");
      if (!hasManualChoice) {
        setThemeMode(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "red-gate-active");
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (themeMode === "red") {
      document.documentElement.classList.add("dark", "red-gate-active");
    }
    localStorage.setItem("theme_mode", themeMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [themeMode, darkMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme_mode_manual", next);
      return next;
    });
  };

  const toggleRedGate = () => {
    setThemeMode((prev) => {
      const next = prev === "red" ? "dark" : "red";
      localStorage.setItem("theme_mode_manual", next);
      return next;
    });
  };

  const resetToSystemTheme = () => {
    localStorage.removeItem("theme_mode_manual");
    if (typeof window !== "undefined" && window.matchMedia) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeMode(prefersDark ? "dark" : "light");
    } else {
      setThemeMode("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        darkMode,
        isRedGate,
        isSystemTheme: typeof window !== "undefined" && !localStorage.getItem("theme_mode_manual"),
        setThemeMode: (mode) => {
          localStorage.setItem("theme_mode_manual", mode);
          setThemeMode(mode);
        },
        toggleTheme,
        toggleRedGate,
        resetToSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);