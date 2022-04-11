const express = require('express')
const router = express.Router()

// const= require('../middleware/isAuth')

const admin = require('./admin')
const user = require('./user')
const tutor = require('./tutor')
const jobs = require('./jobs')
const applicant = require('./applicants')
const hire = require('./hire')
const freelance = require('./freelance')
const applications = require('./applications')

// Public links
const auth = require('./auth')
const public = require('./public')
const paystack = require('./paystack')

router.use('/public', public)
router.use('/pay', paystack)
router.use('/auth', auth)

router.use('/admin', admin)
router.use('/user', user)
router.use('/tutors', tutor)
router.use('/jobs', jobs)
router.use('/applicant', applicant)
router.use('/application', applications)
router.use('/hire', hire)
router.use('/freelance', freelance)

module.exports = router
