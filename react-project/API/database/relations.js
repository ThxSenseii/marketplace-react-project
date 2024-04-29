const Users = require('../api/models/users.model.js')
const Orders = require('../api/models/orders.model.js')
const OrderItems = require('../api/models/orderitems.model.js')
const Products = require('../api/models/products.model.js')

const initializeRelations = () => {
  try {
   
    Users.hasMany(Orders)
    Orders.belongsTo(Users)
    
    OrderItems.hasMany(Orders)
    Orders.belongsTo(OrderItems)

    
    Products.belongsToMany(OrderItems, { through: 'Products_OrderItems' })
    OrderItems.belongsToMany(Products, { through: 'Products_OrderItems' })
    console.log('Relations added to models')
  } catch (error) {
    console.log(error)
  }
}

module.exports = initializeRelations
