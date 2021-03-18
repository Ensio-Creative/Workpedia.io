const express = require('express')
const router = express.Router()

// const authMiddleware = require('../middleware/auth')

const auth = require('./auth')
const tutor = require('./tutor')


router.use('/auth', auth)
router.use('/tutors', tutor)

module.exports = router