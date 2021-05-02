const express = require('express')
const { body } = require('express-validator')
const NewsLetter = require('../model/NewsLetter')

const router = express.Router()

const publicController = require('../controllers/public')

router.get('/get-data', publicController.getData)

router.get('/get-jobs', publicController.getJobs)

router.get('/get-freelancer', publicController.getAllFreelancers)

router.post('/subcribe-newsletter',[
  body('email')
      .trim()
      .custom((value, { req }) => {
        return NewsLetter.findOne({email: value}).then(doc => {
          if (doc) {
            return Promise.reject('E-mail adress already exits')
          }
        })
      })
      .isEmail()
      .normalizeEmail()
      .notEmpty()
], publicController.newsLetter)

module.exports = router