const express = require('express')
// const { body } = require('express-validator/check')
const { check } = require('express-validator');

const router = express.Router()
// const User = require('../models/user')
const authController = require('../controllers/auth')



router.put('/signup', authController.signUp)

router.post('/login', check('email').isEmail(), authController.login)

module.exports = router