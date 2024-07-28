import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './CartIcon.css'; // Ensure this CSS file is created for styling

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <FaCartPlus />
      <span className="cart-count">0</span> {/* Replace 0 with dynamic cart count if needed */}
    </div>
  );
};

export default CartIcon;
