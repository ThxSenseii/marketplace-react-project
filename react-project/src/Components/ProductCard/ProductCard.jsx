import React from 'react'
import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
    const handleAddToCart = () => {
     onAddToCart(product);
    };
  
    return (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={handleAddToCart}>Add Item</button>
      </div>
    );
  }
  

export default ProductCard