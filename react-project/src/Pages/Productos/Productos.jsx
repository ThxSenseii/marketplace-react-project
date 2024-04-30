/* import React, { useEffect, useState } from 'react';
import './Productos.css';
import { ImgAll } from '../../services/auth';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

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
th.floor(Math.random
  const addToCart = (producto) => {
    setCart([...cart, producto]);
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      <h1>Todas nuestras bicicletas</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="productos-container">
          {productos.map((producto, index) => (
            <div key={index} className="product-item">
              <img src={producto.image} alt={`Image ${index}`} className="image" />
              <p>{producto.product_name}</p>
              <p>{producto.price} €</p>
              <button onClick={() => addToCart(producto)}>Añadir al carrito</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos; */

import React, { useEffect, useState } from 'react';
import './Productos.css';
import { ImgAll } from '../../services/auth';
import Cart from '../../Components/Cart/Cart'; // Importa el componente Cart

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

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

  const addToCart = (producto) => {
    setCart([...cart, producto]);
  }

  const clearCart = () => {
    setCart([]);
  }

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
                <img src={producto.image} alt={`Image ${index}`} className="image" />
                <p>{producto.product_name}</p>
                <p>{producto.price} €</p>
                <button onClick={() => addToCart(producto)}>Añadir al carrito</button>
              </div>
            ))}
          </div>
          <Cart cart={cart} onClearCart={clearCart} /> {/* Muestra el componente Cart con las propiedades adecuadas */}
        </div>
      )}
    </div>
  );
};

export default Productos;




