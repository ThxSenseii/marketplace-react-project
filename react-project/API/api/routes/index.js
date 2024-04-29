// Importamos el módulo de enrutamiento de Express y creamos un enrutador.
const router = require('express').Router();

// Usamos el enrutador para manejar todas las peticiones dirigidas a '/user' usando el enrutador definido en 'user.router'.
router.use('/user', require('./user.router'))
router.use('/auth', require('./auth.router.js'))
router.use('/products', require('./products.router.js'))
router.use('/productos', require('./productos.router.js'))



// Exportamos el enrutador para que pueda ser utilizado por otros archivos en nuestra aplicación.
module.exports = router;
