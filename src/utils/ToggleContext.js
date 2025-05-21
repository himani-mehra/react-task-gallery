import { createContext, useState, useEffect } from "react";
export const ToggleContext = createContext(null);

export const ToggleProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ToggleContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
};