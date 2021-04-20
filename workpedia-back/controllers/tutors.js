const Tutor = require('../model/Tutor')
const User = require('../model/User')
const RequestTutor = require('../model/TutorRequest')

const { validationResult } = require('express-validator')

exports.startInfo = async (req, res, next) => {
	const { description, haveYouTutoredBefore, subject, userId } = req.body
	try {
		const user = await User.findById({ _id: userId })
		const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
		if (!user) {
			const error = new Error('User not found')
			error.statusCode = 404
			throw error
		}
		user.isTutor = true
		user.save()
		const tutor = new Tutor({
			tutorSubject: 'Add this Field',
			class: 'Add this Field',
			courseCategory: 'Add this Field',
			tutorCategory: 'Add this Field',
			description,
			haveYouTutoredBefore,
			subject,
			userId
		})
		const result = await tutor.save()
		res.status(201).json({ message: 'Tutor created!', user, result })
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500
		}
		console.log(err)
		next(err)
	}
	
}

exports.requestTutor = async (req, res, next) => {
	const userId = req.params.userId
	const { 
		studentClass,
		studentGoal,
		subject,
		address,
		moreAboutStudent,
		numberOfStudents,
		lessonType,
		lengthOfLesson,
		curriculum,
		days,
		hours,
		email,
		lastName,
		firstName,
		hearAbout,
		city,
		nearestBustop,
		nearestLandmark,
		phone,
		states,
		tutorGender
	} = req.body
	try {
		const user = await User.findById({ _id: userId })
		const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
		if (!user) {
			const error = new Error('User not found')
			error.statusCode = 404
			throw error
		}
		const request = new RequestTutor({
			studentClass,
			studentGoal,
			subject,
			address,
			moreAboutStudent,
			numberOfStudents,
			lessonType,
			lengthOfLesson,
			curriculum,
			days,
			hours,
			email,
			lastName,
			firstName,
			hearAbout,
			city,
			nearestBustop,
			nearestLandmark,
			phone,
			states,
			tutorGender,
			userId
		})
		const result = await request.save()
		res.status(201).json({ message: 'Request made!', user, result })
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500
		}
		console.log(err)
		next(err)
	}
	
}
exports.updateTutor = async (req, res) => {
	const { tutorSubject, tutoredClass, courseCategory, tutorCategory, description, userId } = req.body
	try {
		const user = await User.findById({ _id: userId })
		const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
		if (!user) {
			const error = new Error('User not found')
			error.statusCode = 404
			throw error
		}
		const tutor = await Tutor.findById(req.params._id)
		tutor.tutorSubject = tutorSubject
		tutor.tutoredClass = tutoredClass
		tutor.courseCategory = courseCategory
		tutor.tutorCategory = tutorCategory
		tutor.description = description
		const result = await tutor.save()
		res.status(201).json({ message: 'Tutor updated', result })
	} catch (err) {
		if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
		next(err)
	}
}

exports.getTutor = async (req, res) => {
	const userId = req.params.userId
	console.log(userId)
	try {
		const tutor = await Tutor.findOne({ userId })
		if (!tutor) {
			res.status(400).json({message: 'Tutor Not Found'})
		}
		res.status(200).json(tutor)
	} catch (error) {
		console.log(error)
		res.send(error)
	}
}
