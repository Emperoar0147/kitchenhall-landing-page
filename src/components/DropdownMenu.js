import React, { useState } from 'react';
import './DropdownMenu.css'; // Import the CSS file
import homeIcon from './home.jpeg';
import aboutIcon from './abtu.png';
import servicesIcon from './sv.png';
import contactIcon from './cnt.png';
import loginIcon from './lg.png';
import signupIcon from './signup.png';

const DropdownMenu = ({ openLoginModal, openSignupModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-toggle">
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#home" className="dropdown-item">
            <img src={homeIcon} alt="Home Icon" className="dropdown-icon" /> Home
          </a>
          <a href="#about" className="dropdown-item">
            <img src={aboutIcon} alt="About Icon" className="dropdown-icon" /> About
          </a>
          <a href="#services" className="dropdown-item">
            <img src={servicesIcon} alt="Services Icon" className="dropdown-icon" /> Services
          </a>
          <a href="#contact" className="dropdown-item">
            <img src={contactIcon} alt="Contact Icon" className="dropdown-icon" /> Contact
          </a>
          <button className="dropdown-item" onClick={openLoginModal}>
            <img src={loginIcon} alt="Login Icon" className="dropdown-icon" /> Login
          </button>
          <button className="dropdown-item" onClick={openSignupModal}>
            <img src={signupIcon} alt="Signup Icon" className="dropdown-icon" /> Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
