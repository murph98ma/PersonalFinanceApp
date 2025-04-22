import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link> 
            <Link to="/transactions">Transactions</Link>
            <Link to="/settings">Settings</Link>
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
