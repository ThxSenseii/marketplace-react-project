import React, { useEffect, useState } from 'react';
import './Productos.css';
import { ImgAll } from '../../services/auth';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const productosData = await ImgAll();
      setProductos(productosData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
     <h1>Todas nuestras bicicletas</h1>
      <div className="productos-container">
        {productos.map((producto, index) => (
          <img key={index} src={producto.image} alt={`Image ${index}`} className="image" />
        ))}
      </div>
    </div>
  );
};

export default Productos;
