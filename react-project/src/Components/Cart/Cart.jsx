import React from 'react'
import './Cart.css'

function Cart({ totalItems, totalPrice, onClearCart }) {
  const handleClearCart = () => {
    onClearCart();
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Cart</h2>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div >
    );
}

export default Cart;