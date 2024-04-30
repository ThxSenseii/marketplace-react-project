import React from 'react';
import './Shop.css';
import { useCart } from '../../Components/Cart/CartContext.jsx';

const Shop = () => {
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce((total, producto) => total + producto.price, 0);

  return (
    <div className="shop-container">
      <h1>Carrito de Compras</h1>
      <div className="products-grid">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={`Product ${index}`} className="product-image" />
              <div className="product-details">
                <p>{product.product_name}</p>
                <p>Precio: {product.price} €</p>
              </div>
            </div>
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
      {cart.length > 0 && (
        <div>
          <p>Total Items: {cart.length}</p>
          <p>Total: {totalPrice} €</p>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Shop;
