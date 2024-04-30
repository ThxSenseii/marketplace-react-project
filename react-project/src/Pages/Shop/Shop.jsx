import React from 'react';
import './Shop.css';
import { useCart } from '../../Components/Cart/CartContext.jsx';

const Shop = () => {

  

  const { cart, clearCart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const enviarDatos = () => {
    console.log(totalPrice)
  }

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
                <p>Precio: {product.price} €</p>
                <div className="product-actions">
                  <button onClick={() => removeFromCart(product)}>Eliminar</button>
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
          <div className='total-info'><p>Total Items: {cart.length}</p></div>
          <div className='total-info'><p>Total: {totalPrice} €</p></div>
          <button onClick={clearCart}>Vaciar Carrito</button>
          <button onClick={enviarDatos}>Enviar Carrito</button> 
        </div>
      )}
    </div>
  );
};

export default Shop;