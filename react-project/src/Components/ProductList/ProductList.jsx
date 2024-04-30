import React from 'react'
import './ProductList.css'
/* import { useSearch } from '../components/SearchBar/SearchContext.jsx'

import ProductCard from '../components/ProductCard/ProductCard.jsx' */


function ProductList({ productsList, onAddToCart }) {
    const { searchText } = useSearch();
    
    console.log('obtained Products:', productsList);

    const filteredProducts = productsList.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    return (
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    );
  }


export default ProductList