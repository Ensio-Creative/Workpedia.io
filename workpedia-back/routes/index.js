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


router.use('/admin', admin)
router.use('/auth', auth)
router.use('/user', user)
router.use('/tutors', tutor)
router.use('/jobs', jobs)
router.use('/applicant', applicant)
router.use('/hire', hire)

module.exports = router