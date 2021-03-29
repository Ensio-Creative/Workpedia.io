const express = require('express')
// const { body } = require('express-validator/check')

const router = express.Router()

const hireController = require('../controllers/hire')

router.post('/register-hire', hireController.register)

module.exports = router