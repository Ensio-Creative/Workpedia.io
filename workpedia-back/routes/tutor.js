const express = require('express')
// const { body } = require('express-validator/check')

const router = express.Router()

const tutorController = require('../controllers/tutors')

router.get('/get-tutor/:userId', tutorController.getTutor)

router.patch('/start', tutorController.startInfo)

router.put('/update-tutor/:_id', tutorController.updateTutor)

module.exports = router