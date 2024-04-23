const router = require('express').Router()
const { signUp, login } = require('../controllers/auth.controller.js')

router.post('/SignUp', signUp)
router.post('/LogIn', login)


module.exports = router
