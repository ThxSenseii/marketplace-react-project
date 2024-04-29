
const router = require('express').Router()
const { getProductImageById } = require('../controllers/products.controller')

router.get('/initialImage/:id', getProductImageById)



module.exports = router
