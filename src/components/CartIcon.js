import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './CartIcon.css';

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <FaCartPlus />
      <span className="cart-count">3</span> {/* Replace with dynamic cart count if needed */}
    </div>
  );
};

export default CartIcon;
