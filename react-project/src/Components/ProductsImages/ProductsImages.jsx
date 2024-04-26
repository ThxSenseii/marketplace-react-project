import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductImages = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        

        const response = await axios.get('http://localhost:3000/api/products');
        console.log('Response data:', response.data);
        setImageUrls(response.data);
      } catch (error) {
        console.error('Error fetching image URLs:', error);
      }
    };

    fetchImageUrls();
  }, []);
  console.log("probar",imageUrls);

  return (
    <div className="product-images-container">
      <h2>Product Images</h2>
      <div className="image-grid">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} className={`products ${index}`} src={imageUrl} alt={`Product Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
