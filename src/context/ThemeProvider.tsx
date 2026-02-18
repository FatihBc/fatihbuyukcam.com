import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const stored = localStorage.getItem("darkTheme");
    return stored ? (JSON.parse(stored) ? "dark" : "light") : "light";
  });

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(theme === "dark"));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
