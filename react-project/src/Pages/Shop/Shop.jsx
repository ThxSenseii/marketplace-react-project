/* import './Shop.css'
import products from '..//assets/products.json'
import ProductList from '../../Components/ProductList/ProductList'
import Cart from '../../src/components/Cart/Cart'
import { useState } from 'react'
import { SearchProvider } from '../components/SearchBar/SearchContext'
import SearchBar from '../components/SearchBar/SearchBar'
function Shop() {
    
    const [cartItems, setCartItems] = useState([]);
  
    
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };
  
    
    const clearCart = () => {
      setCartItems([]);
    };
  
    
    const totalItems = cartItems.length;
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    console.log('Fetched Products:', products);
  
    return (
      <>
        <h1>Titulo</h1>
        <SearchProvider>
      <div className="app">
      <SearchBar />
        <ProductList productsList={products} onAddToCart={addToCart} />
        <Cart totalItems={totalItems} totalPrice={totalPrice} onClearCart={clearCart} />
        </div>
    </SearchProvider>
      
      </>
    );
  }
export default Shop */

/* import React, { useState } from 'react';
import './Shop.css'; */
/* import products from '../assets/products.json'; */
/* import ProductList from '../../Components/ProductList/ProductList.jsx';
import Cart from '../../Components/Cart/Cart.jsx'; */
/* import { SearchProvider } from '../components/SearchBar/SearchContext';
import SearchBar from '../components/SearchBar/SearchBar'; */

/* function Shop() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <h1>Titulo</h1>
      <SearchProvider>
        <div className="app">
          <SearchBar />
          <ProductList productsList={products} onAddToCart={addToCart} />
          <Cart cart={cartItems} onClearCart={clearCart} totalItems={totalItems} totalPrice={totalPrice} />
        </div>
      </SearchProvider>
    </>
  );
}

export default Shop; */

import React from 'react';
import Cart from '../../Components/Cart/Cart.jsx';

const Shop = ({ cart }) => {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <Cart cart={cart} />
      {/* Aquí puedes agregar más elementos para mostrar información adicional del carrito si es necesario */}
    </div>
  );
};

export default Shop;

