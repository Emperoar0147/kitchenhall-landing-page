import React, { useState } from 'react';
import './Header.css';
import Login from './Login';
import Signup from './Signup';
import CartIcon from './CartIcon';
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
      <div className="logo">
        <span className="logo-text">Kitchen</span>
        <img src={logo} alt="KitchenHall Logo" className="logo-img" />
        <span className="logo-text">Hall</span>
      </div>
      <div className="header-right">
        <CartIcon />
      </div>
      {isLoginOpen && <Login closeModal={closeLoginModal} />}
      {isSignupOpen && <Signup closeModal={closeSignupModal} />}
    </header>
  );
};

export default Header;
