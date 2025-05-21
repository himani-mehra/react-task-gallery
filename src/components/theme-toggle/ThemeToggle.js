import React, { useContext } from "react";
import { ToggleContext } from "../../utils/ToggleContext";
import "./ThemeToggle.css"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ToggleContext);

  return (
    <button className="toggle-button" onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default ThemeToggle;
