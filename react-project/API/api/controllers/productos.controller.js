/* const { Sequelize } = require('sequelize');
const express = require('express');
const app = express() */
/* import {connection} from '../../database/index.js'
 */
const Products = require('../models/products.model');


const geAllProducts = async (req,res) => {

    try {
      
        const img = await Products.findAll();
  
    return res.status(200).send(img);
  }
  catch{
    console.log("error")
  }
}
/* getProductImageById();
 */
/* let img;
try {
  img = getProductImageById();
} catch (error) {
  
}

console.log('Image URL:', img); 

app.get('src/Pages/Home/Home', (req, res) => {
  res.json(img);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
}); */

module.exports = { geAllProducts }