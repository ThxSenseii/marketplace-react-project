import React, { useEffect, useState } from 'react';


import './Home.css';

/* import { useActionData } from 'react-router-dom';
 */
import { ImgIni } from '../../services/auth.js'




/* const Home = () => {
 return (
   <div>
    <h1>Bienvenido a nuestra tienda en línea</h1> 
      
      <div>
      <img src="https://www.clootbike.com/images/products/bicicleta-de-montana-29-xr-trail-900-24v-portada.jpg" alt="Image" className="image" />

     </div>
   </div>
 );
};

export default Home; */




const Home = () => {

  /* console.log(product) */


const [product, setProduct] = useState({});

const [numran, setNumran] = useState(null);


const getNumran = () => {
  const numran1 = Math.floor(Math.random()*8) + 1
  if (numran === null) {setNumran(numran1)}
}
console.log(numran)
const getProduct = async () => {
  const product = await ImgIni(numran)
  setProduct(product)
}

useEffect(() => {
  getNumran()
  getProduct()

}, [numran])

/* getProduct() */


/*   const mappedProduct = [product].map(item => ({
      id: item.id,
      productName: item.product_name,
      price: item.price,
      stock: item.stock,
      image: item.image
  })); */

  

  return (
    <div>
      <h1>Bienvenido a nuestra tienda en línea</h1>
      <div>
      <img src={product.image} alt="Image" className="image" />
   

      </div>
    </div>
  );
};

export default Home;

