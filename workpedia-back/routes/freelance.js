const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const freelanceContorller = require('../controllers/freelance')

router.post('/register-freelancer', 
[
  body('title')
    .trim()
    .notEmpty(),
  body('serviceCharge')
    .trim()
    .notEmpty(),
  body('category')
    .notEmpty(),
  body('skills')
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
  body('serviceCharge')
    .trim()
    .notEmpty(),
  body('category')
    .notEmpty(),
  body('skills')
    .trim()
    .notEmpty(),
  body('description')
    .trim()
    .notEmpty()
], freelanceContorller.updateFreelancerHandymen)

router.get('/get-freelancer/:freelancerId', freelanceContorller.getFreelaner)

router.get('/get-freelancer-info/:userId', freelanceContorller.getFreelanerInfo)

router.delete('/delete-freelancer-handymen/:freelancerId', freelanceContorller.deleteFreelaner)

router.post('/create-settings', freelanceContorller.createSettings)

router.get('/get-settings', freelanceContorller.getFreelanceSettingss)

router.post('/amount-settings/:settingId', freelanceContorller.amountFreelanceSettings)

router.post('/category-settings/:settingId', freelanceContorller.categorySetting)

router.delete('/delete-category/:settingId', freelanceContorller.deleteCategory)

// FREELANCERS/HANDYMEN MESSAGES ROUTES

router.post('/send-message',
[
  body('message')
    .trim()
    .notEmpty(),
  body('freelancerId')
    .trim()
    .notEmpty(),
  body('userId')
    .trim()
    .notEmpty()
], freelanceContorller.sendMessage)

router.get('/get-freelancers-messages/:freelancerId', freelanceContorller.getFreelancersMessage)

router.delete('/delte-message/:messageId', freelanceContorller.deleteFreelancersMessage)

module.exports = router