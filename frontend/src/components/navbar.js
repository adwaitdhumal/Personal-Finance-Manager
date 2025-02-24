import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Finance Manager</h1>
      <div>
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
