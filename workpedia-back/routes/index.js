const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/isAuth')

const auth = require('./auth')
const tutor = require('./tutor')
const hire = require('./hire')


router.use('/auth', auth)
router.use('/tutors', authMiddleware, tutor)
router.use('/hire', authMiddleware, hire)

module.exports = router