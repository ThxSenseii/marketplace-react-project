import React from 'react';
import './Cart.css';
import { useCart } from '../../Components/Cart/CartContext.jsx';

function Cart() {
  const { cart, clearCart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Carrito</h2>
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <p>{product.name} - {product.quantity} x {product.price}</p>
            <button onClick={() => removeFromCart(product)}>Eliminar</button>
          </div>
        ))}
        <p>Productos Totales: {cart.reduce((total, product) => total + product.quantity, 0)}</p>
        <p>Precio Total: {totalPrice.toFixed(2)}€</p>
        <button onClick={clearCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
}

export default Cart;









