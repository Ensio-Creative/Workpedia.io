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
      .not()
      .isEmpty(),
    body('lastName')
      .trim()
      .isLength({ min: 3 })
      .not()
      .isEmpty(),
    body('age')
      .trim()
      .toInt()
      .not()
      .isEmpty(),
    body('phone')
      .trim()
      .isLength({ min: 11 })
      .not()
      .isEmpty(),
    body('email')
      .trim()
      .custom((value, { req }) => {
        return User.findOne({email: value}).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-mail adress already exits')
          }
        })
      })
      .not()
      .isEmpty(),
    body('password')
      .trim()
      .isLength({ min: 6 })
      .not()
      .isEmpty(),
    body('state')
      .trim()
      .not()
      .isEmpty(),
    body('city')
      .trim()
      .not()
      .isEmpty(),
    body('address')
      .trim()
      .not()
      .isEmpty(),
  ],
    authController.signUp)

router.post('/login', 
[
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  body('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password cannot be empty!')
], 
  authController.login)

module.exports = router