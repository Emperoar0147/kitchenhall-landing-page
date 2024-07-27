// Example of a cart icon component (CartIcon.js)
import React from 'react';
import './CartIcon.css'; // Ensure the CSS file is correctly linked

const CartIcon = ({ count }) => {
  return (
    <div className="cart-icon">
      <img src="/path-to-cart-icon.svg" alt="Cart" />
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  );
};

export default CartIcon;
