const express = require('express')
const { body } = require('express-validator')

const router = express.Router()

const tutorController = require('../controllers/tutors')

router.get('/get-tutor/:userId', tutorController.getTutor)

router.patch('/start',
[
  body('description')
    .trim()
    .notEmpty(),
  body('haveYouTutoredBefore')
    .trim()
    .notEmpty(),
  body('subject')
    .trim()
    .notEmpty(),
  body('userId')
    .trim()
    .notEmpty()
], tutorController.startInfo)

router.put('/update-tutor/:_id',
[
  body('tutorSubject')
    .trim()
    .notEmpty(),
  body('tutoredClass')
    .trim()
    .notEmpty(),
  body('courseCategory')
    .trim()
    .notEmpty(),
  body('tutorCategory')
    .trim()
    .notEmpty(),
  body('description')
    .trim()
    .notEmpty(),
], tutorController.updateTutor)

router.post('/request-tutor/:userId',
[
  body('studentClass')
    .trim()
    .notEmpty(),
  body('studentGoal')
    .trim()
    .notEmpty(),
  body('subject')
    .trim()
    .notEmpty(),
  body('address')
    .trim()
    .notEmpty(),
  body('moreAboutStudent')
    .trim()
    .notEmpty(),
  body('numberOfStudents')
    .trim()
    .notEmpty(),
  body('lessonType')
    .trim()
    .notEmpty(),
  body('lengthOfLesson')
    .trim()
    .notEmpty(),
  body('curriculum')
    .trim()
    .notEmpty(),
  body('days')
    .trim()
    .notEmpty(),
  body('hours')
    .trim()
    .notEmpty(),
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .notEmpty(),
  body('firstName')
    .trim()
    .notEmpty(),
  body('lastName')
    .trim()
    .notEmpty(),
  body('hearAbout')
    .trim()
    .notEmpty(),
  body('city')
    .trim()
    .notEmpty(),
  body('nearestBustop')
    .trim()
    .notEmpty(),
  body('nearestLandmark')
    .trim()
    .notEmpty(),
  body('phone')
    .trim()
    .notEmpty(),
  body('states')
    .trim()
    .notEmpty(),
  body('tutorGender')
    .trim()
    .notEmpty()
], tutorController.requestTutor)

module.exports = router