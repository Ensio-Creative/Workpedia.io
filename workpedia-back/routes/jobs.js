const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const jobsController = require('../controllers/jobs')

router.get('/get-jobs', jobsController.getJobs)

router.get('/get-job/:jobId', jobsController.getJob)

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

router.delete('/delete-job/:companyId', jobsController.deleteJob)

module.exports = router