const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const jobsController = require('../controllers/jobs')

router.get('/get-jobs', jobsController.getJobs)

router.get('/get-job/:jobId', jobsController.getJob)

router.get('/get-company-job/:companyId', jobsController.getCompanyJobs)

router.post('/create-settings', jobsController.createSettings)

router.get('/get-settings', jobsController.getJobsSettings)

router.post('/amount-settings/:settingId', jobsController.amountJobsSettings)

router.post('/category-settings/:settingId', jobsController.categorySetting)

router.delete('/delete-category/:settingId', jobsController.deleteCategory)

router.put('/post-job', 
[
  body('title')
    .trim()
    .isLength({ min: 3 })
    .not()
    .isEmpty(),
    body('state')
      .trim()
      .notEmpty(),
    body('city')
      .trim()
      .notEmpty(),
    body('phone')
      .trim()
      .isLength({min: 11})
      .notEmpty(),
    body('amount')
      .trim()
      .notEmpty(),
    body('duration')
      .trim()
      .notEmpty(),
    body('experience')
      .trim()
      .notEmpty(),
    body('category')
      .trim()
      .notEmpty(),
    body('description')
      .trim()
      .notEmpty(),
    body('companyId')
      .trim()
      .notEmpty(),
],
 jobsController.postJob)

router.post('/update-job/:jobId', 
[
  body('title')
    .trim()
    .isLength({ min: 3 })
    .not()
    .isEmpty(),
    body('state')
      .trim()
      .notEmpty(),
    body('city')
      .trim()
      .notEmpty(),
    body('phone')
      .trim()
      .isLength({min: 11})
      .notEmpty(),
    body('amount')
      .trim()
      .toInt()
      .notEmpty(),
    body('duration')
      .trim()
      .notEmpty(),
    body('experience')
      .trim()
      .notEmpty(),
    body('category')
      .trim()
      .notEmpty(),
    body('description')
      .trim()
      .notEmpty()
],
 jobsController.updatePost)

router.delete('/delete-job/:jobId', jobsController.deleteJob)

module.exports = router