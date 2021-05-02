const express = require('express')
const { body } = require('express-validator')
// const { check } = require('express-validator');

const router = express.Router()
const User = require('../model/User')
const authController = require('../controllers/auth')



router.put('/signup', 
  [
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
      .custom((value, { req }) => {
        return User.findOne({email: value}).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-mail adress already exits')
          }
        })
      })
      .isEmail()
      .normalizeEmail()
      .notEmpty(),
    body('password')
      .trim()
      .isLength({ min: 6 })
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
  ],
    authController.signUp)

router.post('/login', 
[
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail()
    .notEmpty(),
  body('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password cannot be empty!')
], 
  authController.login)

router.post('/verify-user', 
[
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail()
    .notEmpty(),
  body('code')
    .trim()
    .notEmpty()
], 
  authController.verify)

router.post('/forgot-password', 
[
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail()
    .notEmpty()
], 
  authController.forgottenPassword)

router.post('/reset-password', 
[
  body('code')
    .trim()
    .notEmpty(),
  body('password')
    .trim()
    .notEmpty()
], 
  authController.resetPassword)

module.exports = router