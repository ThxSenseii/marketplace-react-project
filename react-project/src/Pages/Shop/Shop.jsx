import React from 'react';
import './Shop.css';
import { useCart } from '../../Components/Cart/CartContext.jsx';
import Checkout from '../../Components/CheckOut/CheckOut.jsx';

const Shop = () => {
  const { cart, clearCart, removeFromCart, addToCart } = useCart();
  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  const handleIncrementQuantity = (product) => {
    addToCart(product); // Agrega el mismo producto al carrito
  };

  // Calcular el número total de productos en el carrito sumando las cantidades
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
  
  return (
    <div className="shop-container">
      <h1 className="cart-title">Carrito de Compras</h1>
      <div className="products-grid">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={`Product ${index}`} className="product-image" />
              <div className="product-details">
                <p>{product.product_name}</p>
                {/* Actualiza la visualización de la cantidad */}
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price} €</p>
                <div className="product-actions">
                  {/* Botón para decrementar la cantidad */}
                  <button onClick={() => removeFromCart(product)}>-</button>
                  {/* Botón para incrementar la cantidad */}
                  <button onClick={() => handleIncrementQuantity(product)}>+</button>
                  {/* Botón para eliminar el producto */}
                  <button onClick={() => removeFromCart(product, true)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart-message"><p>El carrito está vacío.</p></div>
        )}
      </div>
      {cart.length > 0 && (
        <div>
          <div className='total-info'><p>Productos Totales: {totalItems}</p></div> {/* Mostrar el número total de productos */}
          <div className='total-info'><p>Precio Total: {totalPrice} €</p></div>
          <button onClick={clearCart}>Vaciar Carrito</button>
          {/* <button onClick={Checkout}>Procesar Pago</button> */}
          
        </div>
      )}
    </div>
  );
};

export default Shop;


