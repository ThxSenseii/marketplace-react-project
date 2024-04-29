import './shop.css'
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
        <Cart totalItems={totalItems} totalPrice={totalPrice} onClearCart={clearCart} /> {/* Pass clearCart as onClearCart prop */}
        </div>
    </SearchProvider>
      
      </>
    );
  }
export default Shop
