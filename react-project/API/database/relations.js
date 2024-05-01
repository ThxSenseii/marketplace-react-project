const Users = require('../api/models/users.model.js')
const Orders = require('../api/models/orders.model.js')
const OrderItems = require('../api/models/orderitems.model.js')
const Products = require('../api/models/products.model.js')

const initializeRelations = () => {
  try {
   
    Users.hasMany(Orders)
    Orders.belongsTo(Users)
    
    /* OrderItems.hasMany(Orders)
    Orders.belongsTo(OrderItems) */

    Orders.hasMany(OrderItems)
    OrderItems.belongsTo(Orders)

    
    Products.belongsToMany(OrderItems, { through: 'Products_OrderItems', foreignKey: 'productId' })
    OrderItems.belongsToMany(Products, { through: 'Products_OrderItems', foreignKey: 'orderId' })
    console.log('Relations added to models')
  } catch (error) {
    console.log(error)
  }
}

module.exports = initializeRelations
