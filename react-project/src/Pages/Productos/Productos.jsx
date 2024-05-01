import React, { useEffect, useState } from 'react';
import './Productos.css';
import { ImgAll } from '../../services/auth';
import Cart from '../../Components/Cart/Cart';
import { useCart } from '../../Components/Cart/CartContext';

const Productos = () => {
  const { cart, addToCart, clearCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductos = async () => {
    try {
      const productosData = await ImgAll();
      setProductos(productosData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products. Please try again later.");
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <h1>Todas nuestras bicicletas</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div className="productos-container">
            {productos.map((producto, index) => (
              <div key={index} className="product-item">
                {producto.image ? <img src={producto.image} alt={`Image ${index}`} className="image" /> : <p>Image not found</p>}
                {producto.product_name ? <p>{producto.product_name}</p> : <p>Product name not found</p>}
                {producto.price ? <p>{producto.price} €</p> : <p>Price not found</p>}
                <button onClick={() => addToCart(producto)}>Añadir al carrito</button>
              </div>
            ))}
          </div>
          <Cart cart={cart} />
        </div>
      )}
    </div>
  );
};

export default Productos;







