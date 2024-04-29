import React from 'react';
import './Home.css';
import RandomProductImages from '../../Components/ProductsImages/RandomProductsImages';

const Home = () => {
  return (
    <div className="home-container">
        <h1>Bienvenido a nuestra tienda en línea</h1>
       <p>Explora nuestra amplia selección de productos y encuentra lo que necesitas.</p>
       <RandomProductImages/>
    </div>
  );
};

export default Home;
