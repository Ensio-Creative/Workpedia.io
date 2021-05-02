const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const applicantController = require('../controllers/applicant')

router.post('/register-applicant', 
[
  body('title')
    .trim()
    .notEmpty(),
  body('qualifications')
    .trim()
    .notEmpty(),
  body('institution')
    .trim()
    .notEmpty(),
  body('date')
    .trim()
    .notEmpty(),
  body('category')
    .trim()
    .notEmpty(),
  body('skills')
    .trim()
    .notEmpty(),
  body('state')
    .trim()
    .notEmpty(),
  body('city')
    .trim()
    .notEmpty(),
  body('description')
    .trim()
    .notEmpty(),
  body('userId')
    .trim()
    .notEmpty()
], applicantController.registerApplicant)

router.put('/update-applicant/:applicantId',
[
  body('title')
    .trim()
    .notEmpty(),
  body('qualifications')
    .trim()
    .notEmpty(),
  body('institution')
    .trim()
    .notEmpty(),
  body('date')
    .trim()
    .notEmpty(),
  body('category')
    .trim()
    .notEmpty(),
  body('skills')
    .trim()
    .notEmpty(),
  body('state')
    .trim()
    .notEmpty(),
  body('city')
    .trim()
    .notEmpty(),
  body('description')
    .trim()
    .notEmpty(),
  body('cvUrl')
    .trim()
    .isURL()
    .notEmpty()
], applicantController.updateApplicant)

router.get('/get-applicant/:applicantId', applicantController.getApplicant)

router.get('/get-applicant-info/:userId', applicantController.getApplicantInfo)

router.delete('/delete-applicant/:applicantId', applicantController.deleteApplicant)

module.exports = router