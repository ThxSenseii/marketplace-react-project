import React from 'react';
import './Cart.css';

function Cart({ cart, onClearCart, mode }) {
  const handleClearCart = () => {
    onClearCart();
  };

  const handleRemoveFromCart = (product) => {
    onRemoveFromCart(product);
  };


  if (mode === 'shop') {
    return (
      <div className="cart-container">
      <div className="cart">
        <h2>Carrito</h2>
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img src={product.image} alt={`Product ${index}`} className="product-image" />
            <div className="product-details">
              <p>{product.name}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio Unitario: {product.price}€</p>
            </div>
            <button onClick={() => handleRemoveFromCart(product)}>Eliminar</button>
          </div>
        ))}
        <p>Total Items: {cart.length}</p>
        <button onClick={handleClearCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
} else {
    // Modo por defecto para la página Products
    const totalItems = cart.length;
    const totalPrice = cart.reduce((total, producto) => total + producto.price, 0);

    return (
      <div className="cart-container">
        <div className="cart">
          <h2>Carrito</h2>
          <p>Total Items: {totalItems}</p>
          <p>Precio Total: {totalPrice.toFixed(2)}€</p>
          <button onClick={handleClearCart}>Vaciar Carrito</button>
        </div>
      </div>
    );
  }
}

export default Cart;
