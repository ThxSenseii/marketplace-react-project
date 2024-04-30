import React from 'react';
import './Cart.css';

function Cart({ cart, onClearCart }) {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, producto) => total + producto.price, 0);

  const handleClearCart = () => {
    onClearCart();
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Carrito</h2>
        <p>Productos Totales: {totalItems}</p>
        <p>Precio Total: {totalPrice.toFixed(2)} €</p>
        <button onClick={handleClearCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
}

export default Cart;
