const express = require('express')
// const { check } = require('express-validator')

const router = express.Router()

const adminController = require('../controllers/admin')

// USERS ROUTES
router.get('/all-users', adminController.getAllUsers)

router.get('/get-user/:id', adminController.getSingleUser)

router.delete('/remove-user/:id', adminController.deleteUser)

// TUTOR ROUTES
router.get('/all-tutors', adminController.getTutors)

router.get('/get-tutor/:tutorId', adminController.getSingleTutor)

router.delete('/delete-tutor/:tutorId', adminController.deleteTutor)

// JOBS ROUTES
// APPLICANTS ROUTES
router.get('/all-apllicants', adminController.getAllApplicant)

router.get('/get-applicant', adminController.getSingleApplicant)

router.delete('/delete-applicant', adminController.deleteApplicant)

// HIRES ROUTES
router.get('/all-hires', adminController.getAllHires)

router.get('/get-hire', adminController.getHire)

router.delete('/delete-hire', adminController.deleteHire)

module.exports = router