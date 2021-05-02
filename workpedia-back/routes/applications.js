const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const applicationsController = require('../controllers/applications')

router.post('/send-application',
[
  body('applicantId')
    .trim()
    .notEmpty(),
  body('jobId')
    .trim()
    .notEmpty(),
  body('companyId')
    .trim(),
  body('userId')
    .trim(),
], applicationsController.sendApplications)

router.get('/get-applications', applicationsController.getAllApplications)

router.get('/get-application/:applicationId', applicationsController.getApplication)

router.delete('/delete-application/:applicationId', applicationsController.deleteApplication)

module.exports = router