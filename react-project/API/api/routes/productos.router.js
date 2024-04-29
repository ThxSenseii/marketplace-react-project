
const router = require('express').Router()
const { geAllProducts } = require('../controllers/productos.controller')

router.get('/allImages/', geAllProducts)



module.exports = router
