import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme_mode") || "dark";
  });

  const darkMode = themeMode === "dark" || themeMode === "red";
  const isRedGate = themeMode === "red";

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
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleRedGate = () => {
    setThemeMode((prev) => (prev === "red" ? "dark" : "red"));
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        darkMode,
        isRedGate,
        setThemeMode,
        toggleTheme,
        toggleRedGate,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);