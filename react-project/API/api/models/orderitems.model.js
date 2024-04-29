const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')


const OrderItems = connection.define('orderItems', {
  quantity: {
    type: DataTypes.INTEGER
  }
},
  {
    timestamps: false
  }
)

module.exports = OrderItems
