const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const userController = require('../controllers/user')

router.put('/update/:userId',[
  body('firstName')
      .trim()
      .isLength({ min: 3 })
      .notEmpty(),
    body('lastName')
      .trim()
      .isLength({ min: 3 })
      .notEmpty(),
    body('age')
      .trim()
      .toInt()
      .notEmpty(),
    body('phone')
      .trim()
      .isLength({ min: 11 })
      .notEmpty(),
    body('email')
      .trim()
      .isEmail()
      .normalizeEmail()
      .notEmpty(),
    body('state')
      .trim()
      .notEmpty(),
    body('city')
      .trim()
      .notEmpty(),
    body('address')
      .trim()
      .notEmpty(),
], userController.updateUser)

router.post('/:id/update-password',[
  body('oldPassword')
    .trim()
    .isLength({ min: 6 })
    .notEmpty(),
  body('newPassword')
    .trim()
    .isLength({ min: 6 })
    .notEmpty()
], userController.updatePassword)

router.post('/resend-code/:userId', userController.resendCode)

module.exports = router
