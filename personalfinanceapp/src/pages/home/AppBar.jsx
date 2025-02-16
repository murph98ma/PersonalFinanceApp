import React, { useState } from "react";
import "./AppBar.css"; // Import the CSS file

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="app-bar">
      <div className="app-bar-container">
        {/* Logo Section */}
        <div className="logo">Personal Finance</div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(isOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default AppBar;
