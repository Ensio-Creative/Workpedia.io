const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const adminController = require('../controllers/admin')

router.put('/registerOperator', 
  [
    body('firstName')
      .trim()
      .isLength({ min: 3 })
      .notEmpty(),
    body('lastName')
      .trim()
      .isLength({ min: 3 })
      .notEmpty(),
    body('age')
      .trim()
      .toInt()
      .notEmpty(),
    body('phone')
      .trim()
      .isLength({ min: 11 })
      .notEmpty(),
    body('email')
      .trim()
      .custom((value, { req }) => {
        return User.findOne({email: value}).then(userDoc => {
          if (userDoc) {
            return Promise.reject('E-mail adress already exits')
          }
        })
      })
      .isEmail()
      .normalizeEmail()
      .notEmpty(),
    body('password')
      .trim()
      .isLength({ min: 6 })
      .notEmpty(),
    body('state')
      .trim()
      .notEmpty(),
    body('city')
      .trim()
      .notEmpty(),
    body('address')
      .trim()
      .notEmpty(),
  ],
    adminController.registerOPerator)


// COUNTS OF USERS, TUTORS, JOBS, HIRES, APPLICANTS FREELANCERS
router.get('/calculations-users', adminController.calculate)

// USERS ROUTES
router.get('/all-users', adminController.getAllUsers)

router.get('/get-user/:id', adminController.getSingleUser)

router.delete('/remove-user/:id', adminController.deleteUser)

// TUTOR ROUTES
router.get('/all-tutors', adminController.getTutors)

router.get('/get-tutor/:tutorId', adminController.getSingleTutor)

router.delete('/delete-tutor/:tutorId', adminController.deleteTutor)

// REQUEST TUTOR ROUTES
router.get('/all-tutor-request', adminController.getTutorsRequests)

router.get('/tutor-request/:requestId', adminController.getSingleTutorRequest)

router.delete('/delete-tutor-request/:requestId', adminController.deleteTutorRequest)

// TUTORS CATEGORY ROUTES
router.put('/create-category', adminController.createTutorCategory)

// JOBS ROUTES
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
    body('userId')
      .trim()
      .notEmpty(),
],
 adminController.postJob)

// APPLICANTS ROUTES
router.get('/all-applicants', adminController.getAllApplicant)

router.get('/get-applicant/:applicantId', adminController.getSingleApplicant)

router.delete('/delete-applicant/:applicantId', adminController.deleteApplicant)

// HIRES ROUTES
router.get('/all-hires', adminController.getAllHires)

router.get('/get-hire', adminController.getHire)

router.delete('/delete-hire/:hireId', adminController.deleteHire)

// FREELANCER/HANDYMEN ROUTES
router.get('/all-freelancers', adminController.getAllFreelancers)

router.get('/get-freelancer/:freelanceId', adminController.getFreelance)

router.delete('/delete-freelancer/:freelancerId', adminController.deleteFreelancer)

// FREELANCER/HANDYMEN ROUTES
router.get('/all-payments', adminController.getAllPayments)

// router.get('/get-freelancer/:freelanceId', adminController.getFreelance)
module.exports = router