import React, { useState } from 'react';
import './Navbar.css'; 
import './Button.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleDropdown}>
        {/* Hamburger Icon */}
        <div className="hamburger-icon">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            <a href="/" onClick={toggleDropdown}>Home</a>
            <a href="/userDashboard" onClick={toggleDropdown}>Dashboard</a>
            <a href="/book-interview" onClick={toggleDropdown}>Book an Interview</a>
            <a href="/resources" onClick={toggleDropdown}>Resources</a>
            <a href="/interview-prompts" onClick={toggleDropdown}>Interview Prompts</a>
          </div>
        )}
      </div>

      <div className="logo">Acelt</div>

      <div className="login-signup">
        <a href="/login-signup" className="button login-signup-button">LOGIN / SIGN UP</a>
      </div>
    </nav>
  );
};

export default Navbar;
