const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const hireController = require('../controllers/hire')

router.post('/register-hire',
[
  body('companyName')
    .trim()
    .notEmpty(),
  body('companyWeb')
    .trim(),
  body('companyEmail')
    .trim()
    .notEmpty(),
  body('companyPhone')
    .trim()
    .isLength({ min: 11 })
    .notEmpty(),
  body('social')
    .isObject(),
  body('companyDescription')
    .trim()
    .notEmpty(),
  body('userId')
    .trim()
    .notEmpty()
], hireController.register)

router.put('/update-hire/:hirerId',
[
  body('companyName')
    .trim()
    .notEmpty(),
  body('companyWeb')
    .trim(),
  body('companyEmail')
    .trim()
    .notEmpty(),
  body('companyPhone')
    .trim()
    .isLength({ min: 11 })
    .notEmpty(),
  body('social')
    .isObject(),
  body('companyDescription')
    .trim()
    .notEmpty()
], hireController.updateHirer)

router.get('/get-hirer/:hirerId', hireController.getHirer)

router.get('/get-hirer-info/:userId', hireController.getHirerInfo)

router.delete('/delete-hirer/:hirerId', hireController.deleteHirer)

module.exports = router