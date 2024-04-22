const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Product = connection.define('product', {
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

module.exports = Product
