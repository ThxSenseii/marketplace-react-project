import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomProductsImages.css';

const RandomProductImages = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [randomIndex, setRandomIndex] = useState(null);
  
    useEffect(() => {
      const fetchImageUrls = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/products');
          setImageUrls(response.data);
        } catch (error) {
          console.error('Error fetching image URLs:', error);
        }
      };
  
      fetchImageUrls();
    }, []);
  
    useEffect(() => {
      if (imageUrls.length > 0) {
        const randomIdx = Math.floor(Math.random() * imageUrls.length);
        setRandomIndex(randomIdx);
      }
    }, [imageUrls]);
  
    return (
      <div className="product-images-container">
        <h2>Product Images</h2>
        <div className="image-grid">
          {randomIndex !== null && (
            <img
              className="random-product"
              src={imageUrls[randomIndex]}
              alt={`Random Product Image`}
            />
          )}
        </div>
      </div>
    );
  };

  export default RandomProductImages