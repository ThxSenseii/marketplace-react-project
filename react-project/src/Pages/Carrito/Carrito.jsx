import React from 'react';
import './Carrito.css';

function Carrito({ cart, onClearCart }) {
  console.log(cart); // Log cart to check its contents
  
  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, producto) => total + producto.price, 0);

  const handleClearCart = () => {
    onClearCart();
  };

  return (
    <div className="carrito-container">
      <div className="carrito">
        <h2>Carrito</h2>
        {totalItems === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <div>
            {cart.map((producto, index) => (
              <div key={index} className="carrito-item">
                <img src={producto.image} alt={`Image ${index}`} className="carrito-image" />
                <div className="carrito-info">
                  <p>{producto.product_name}</p>
                  <p>{producto.price} €</p>
                </div>
              </div>
            ))}
            <p>Productos Totales: {totalItems}</p>
            <p>Precio Total: {totalPrice.toFixed(2)} €</p>
            <button onClick={handleClearCart}>Vaciar Carrito</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrito;
