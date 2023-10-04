import React from "react";
import "./darkMode.css";
const DarkMode = ({ theme, options, setTheme }) => {
  return (
    <div className="dark__mode">
      <button
        className="dark__mode_btn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? options[1].icon : options[0].icon}
      </button>
    </div>
  );
};

export default DarkMode;
