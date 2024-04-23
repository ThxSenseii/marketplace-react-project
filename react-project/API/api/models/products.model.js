const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Products = connection.define('products', {
  product_name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER
  },
  stock: {
    type: DataTypes.INTEGER
  }
},
  {
    timestamps: false
  }
)

module.exports = Products
