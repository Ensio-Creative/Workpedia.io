const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/isAuth')

const admin = require('./admin')
const auth = require('./auth')
const user = require('./user')
const tutor = require('./tutor')
const jobs = require('./jobs')
const applicant = require('./applicants');
const hire = require('./hire')
const freelance = require('./freelance')
const applications = require('./applications')
const paystack = require('./paystack')

// Public links
const public = require('./public')

router.use('/public', public)


router.use('/admin', admin)
router.use('/auth', auth)
router.use('/user', user)
router.use('/tutors', tutor)
router.use('/jobs', jobs)
router.use('/pay', paystack)
router.use('/applicant', applicant)
router.use('/application', applications)
router.use('/hire', hire)
router.use('/freelance', freelance)

module.exports = router