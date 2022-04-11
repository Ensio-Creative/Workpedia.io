const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const paystackController = require('../controllers/paystack')

// router.get('/get-jobs', paystackController.getJobs)

// router.get('/apply-callback', paystackController.callBack_ApplySubcription)

router.get('/freelance-callback', paystackController.callBack_FreelanceSubcription)

// router.get('/get-pay', paystackController.fetchRefrence)

router.get('/apply-subscription', paystackController.applicationSubscription)

router.post('/webhook', paystackController.webHook)

router.post('/init-pay', 
[
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .notEmpty(),
    body('amount')
      .trim()
      .notEmpty(),
    body('callback_url')
      .trim()
      .notEmpty(),
    body('purpose')
      .trim()
      .notEmpty(),
    body('category')
      .trim()
      .notEmpty()
],
 paystackController.initPaystack)

 router.get('/get-transactions/:email', paystackController.getUserTransactions)

// router.delete('/delete-job/:jobId', paystackController.deleteJob)

module.exports = router