const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const freelanceContorller = require('../controllers/freelance')

router.post('/register-freelancer', 
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
  body('qualificationsDate')
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
    .notEmpty(),
], freelanceContorller.registerFreelance)

router.put('/update-freelancer/:freelancerId',
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
  body('qualificationsDate')
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
  body('thumbnailUrl')
    .trim()
    .isURL()
    .notEmpty(),
  body('cvUrl')
    .trim()
    .isURL()
    .notEmpty()
], freelanceContorller.updateFreelancerHandymen)

router.get('/get-freelancer/:freelancerId', freelanceContorller.getFreelaner)

router.get('/get-freelancer-info/:userId', freelanceContorller.getFreelanerInfo)

router.delete('/delete-freelancer-handymen/:freelancerId', freelanceContorller.deleteFreelaner)

module.exports = router