import React, { useEffect, useState } from 'react';
import './Productos.css';
import { ImgAll } from '../../services/auth';
import Cart from '../../Components/Cart/Cart'; // Importa el componente Cart
import { useCart } from '../../Components/Cart/CartContext'; // Importa el hook useCart

const Productos = () => {
  const { cart, addToCart, clearCart } = useCart(); // Usa el hook useCart para acceder al carrito
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
                <img src={producto.image} alt={`Image ${index}`} className="image" />
                <p>{producto.product_name}</p>
                <p>{producto.price} €</p>
                <button onClick={() => addToCart(producto)}>Añadir al carrito</button>
              </div>
            ))}
          </div>
          {/* Mueve el componente Cart aquí para que se muestre debajo de los productos */}
          <Cart cart={cart} onClearCart={clearCart} />
        </div>
      )}
    </div>
  );
};

export default Productos;







