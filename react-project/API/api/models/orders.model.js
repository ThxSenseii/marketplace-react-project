const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')


const Order = connection.define('order', {
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

module.exports = Order
