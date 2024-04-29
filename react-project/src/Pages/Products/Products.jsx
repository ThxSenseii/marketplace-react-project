import React from 'react';
import './Products.css';
import ProductImages from '../../Components/ProductsImages/ProductsImages';

const Products = () => {
    return (
      <div className="home-container">
          <h1>Bienvenido a nuestra tienda en línea</h1>
         <p>Explora nuestra amplia selección de productos y encuentra lo que necesitas.</p>
         <ProductImages/>
      </div>
    );
  };
  
  export default Products;