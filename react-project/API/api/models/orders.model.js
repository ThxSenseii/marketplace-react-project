const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')


const Orders = connection.define('orders', {
  order_date: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: false
  }
)

module.exports = Orders
