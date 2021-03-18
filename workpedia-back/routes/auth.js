const express = require('express')
// const { body } = require('express-validator/check')

const router = express.Router()
// const User = require('../models/user')
const authController = require('../controllers/auth')



router.put('/signup', authController.signUp)

router.post('/login', authController.login)

module.exports = router