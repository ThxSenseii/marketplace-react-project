/* const { Sequelize } = require('sequelize');
const express = require('express');
const app = express() */
/* import {connection} from '../../database/index.js'
 */
const Products = require('../models/products.model');


const getProductImageById = async (req, res) => {

    try {
      
        const img = await Products.findByPk(req.params.id);
  
    return res.status(200).send(img);
  }
  catch{
    console.log("error")
  }
}


module.exports = { getProductImageById }