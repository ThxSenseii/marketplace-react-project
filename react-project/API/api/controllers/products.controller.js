const Product = require('../models/products.model');

async function getAllProducts (req, res)  {
  
  try {
   
    const products = await Product.findAll();

    const imageUrls = products.map(product => product.image);
    res.json(imageUrls);
    
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllProducts
}