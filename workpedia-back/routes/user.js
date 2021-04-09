const express = require('express')
// const { body } = require('express-validator/check')

const router = express.Router()

const userController = require('../controllers/user')

router.put('/update/:userId', userController.updateUser)

router.post('/:id/update-password', userController.updatePassword)

module.exports = router
