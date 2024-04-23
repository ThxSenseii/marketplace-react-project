const router = require('express').Router()
const { signUp, login } = require('../controllers/auth.controller.js')

router.post('/SignUp', signUp)
router.post('/login', login)


module.exports = router
