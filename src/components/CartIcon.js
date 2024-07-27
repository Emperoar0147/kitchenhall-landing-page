import React from 'react';
import './CartIcon.css'; // Create this CSS file for styling

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <img src="path/to/cart-icon.png" alt="Cart" />
      <span className="cart-count">0</span> {/* Replace 0 with dynamic cart count if needed */}
    </div>
  );
};

export default CartIcon;
