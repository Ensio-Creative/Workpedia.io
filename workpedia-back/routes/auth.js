const express = require('express')
// const { body } = require('express-validator/check')

// const User = require('../models/user')
const authController = require('../controllers/auth')

const router = express.Router()


router.put('/signup', authController.signUp)

router.post('/login', authController.login)

module.exports = router