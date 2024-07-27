import React, { useState } from 'react';

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
          <a href="#home" className="dropdown-item">Home</a>
          <a href="#about" className="dropdown-item">About</a>
          <a href="#services" className="dropdown-item">Services</a>
          <a href="#contact" className="dropdown-item">Contact</a>
          <button className="dropdown-item" onClick={openLoginModal}>Login</button>
          <button className="dropdown-item" onClick={openSignupModal}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;



