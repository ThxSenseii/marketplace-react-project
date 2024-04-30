import React from 'react';
import './Shop.css';
import { useCart } from '../../Components/Cart/CartContext.jsx'; // Importa el hook useCart

const Shop = () => {
  const { cart, clearCart } = useCart(); // Usa el hook useCart para acceder al carrito

  return (
    <div className="shop-container">
      <h1>Carrito de Compras</h1>
      {/* Aquí puedes mostrar los detalles del carrito, como los productos y el total */}
      <div>
        <h2>Productos en el carrito:</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image} alt={`Product ${index}`} className="product-image" />
                <div className="product-details">
                  <p>{product.product_name}</p>
                  <p>Precio: {product.price} €</p>
                </div>
              </div>
            ))}
            <p>Total Items: {cart.length}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
          </div>
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;

