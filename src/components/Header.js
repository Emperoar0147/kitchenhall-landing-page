import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './Header.css';
import Login from './Login';
import Signup from './Signup';
import './CartIcon.css'; // Create this CSS file for styling
import DropdownMenu from './DropdownMenu';
import logo from '../components/kitchenhall.png'; // Adjust the path as needed

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openSignupModal = () => setIsSignupOpen(true);
  const closeSignupModal = () => setIsSignupOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <DropdownMenu openLoginModal={openLoginModal} openSignupModal={openSignupModal} />
      </div>
      <div className="logo-container">
        <span className="logo-text">Kitchen</span>
        <img src={logo} alt="KitchenHall Logo" className="logo-img" />
        <span className="logo-text">Hall</span>
      </div>
      <div className="header-right">
        <div className="cart-icon" style={{ fontSize: '2rem', color: 'black' }}>
          <FaCartPlus />
          <span className="cart-count">3</span> {/* Example cart count */}
        </div>
      </div>
      {isLoginOpen && <Login closeModal={closeLoginModal} />}
      {isSignupOpen && <Signup closeModal={closeSignupModal} />}
    </header>
  );
};

export default Header;
