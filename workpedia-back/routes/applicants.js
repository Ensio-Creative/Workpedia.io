const express = require('express')
// const { body } = require('express-validator/check')

const router = express.Router()

const applicantController = require('../controllers/applicant')

router.post('/subscribe', applicantController.confirmApplicantSubscription)

module.exports = router