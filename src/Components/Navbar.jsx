import React, { useState, useContext, useEffect } from 'react';
import './Navbar.css'; 
import './Button.css'
import { signInWithGoogle, logOut } from "../Services/Firebase.js";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const user = useContext(UserContext);
  const navigate  = useNavigate();
 
  
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
            <a href="/prompts" onClick={toggleDropdown}>Interview Prompts</a>
          </div>
        )}
      </div>

      <div className="logo">Acelt</div>

      <div className="login-signup">
        <button href="/login-signup" onClick={signInWithGoogle} className="button login-signup-button">LOGIN / SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
