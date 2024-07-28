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
            <img src={homeIcon} alt="Home Icon" /> Home
          </a>
          <a href="#about" className="dropdown-item">
            <img src={aboutIcon} alt="About Icon" /> About
          </a>
          <a href="#services" className="dropdown-item">
            <img src={servicesIcon} alt="Services Icon" /> Services
          </a>
          <a href="#contact" className="dropdown-item">
            <img src={contactIcon} alt="Contact Icon" /> Contact
          </a>
          <button className="dropdown-item" onClick={openLoginModal}>
            <img src={loginIcon} alt="Login Icon" /> Login
          </button>
          <button className="dropdown-item" onClick={openSignupModal}>
            <img src={signupIcon} alt="Signup Icon" /> Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
