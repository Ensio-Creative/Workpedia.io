// Models
const User = require('../model/User')
const Jobs = require('../model/Jobs')
const Applicant = require('../model/Applicant')
const Hire = require('../model/Hire')
const Tutors = require('../model/Tutor')
const RequestTutor = require('../model/TutorRequest')
const TutorCategory = require('../model/TutorCategory')
const Freelance = require('../model/Freelancer')

const { validationResult } = require('express-validator')

// CALCULATIONS OF USER IN DB
exports.calculate = async (req, res, next) => {
  try {
    const users = await (await User.find()).length
    const applicant = (await Applicant.find()).length
    const hire = (await Hire.find()).length
    const tutors = (await Tutors.find()).length
    const freelancers = (await Freelance.find()).length
    // console.log(users, applicant, hire, tutors, freelancers)
    res.status(200).json({ users: users, applicants: applicant, hires: hire, tutors: tutors, freelance: freelancers })
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

// USERS EXPORTS
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password')
    if (!users) {
      const error = new Error('Sorry We could not get users')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Found users', results: users })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.getSingleUser = async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId).select('-password')
    if (!user) {
      const error = new Error('User could not be Found')
      error.statusCode = 402
      throw error
    }
    res.status(200).json({ message: 'Found user', result: user})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await User.findByIdAndDelete(userId)
    // console.log(user)
    res.status(203).json({ message: 'User Deleted!!!'})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

// TUTORS EXPORTS
exports.getTutors = async (req, res, next) => {
  try {

    const tutors = await Tutors.find().populate('userId', '-password')

    if (!tutors) {
      const error = new Error('Sorry We could not get tutors')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Found tutors', tutors: tutors })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.getSingleTutor = async (req, res, next) => {
  try {
    const tutorId = req.params.tutorId
    const tutor = await Tutors.findById(tutorId).populate('userId', '-password')
    if (!tutor) {
      const error = new Error('Tutor could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Tutor found', tutor: tutor })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.deleteTutor = async (req, res, next) => {
  try {
    const { tutorId } = req.params
    const removedTutor = await Tutors.findByIdAndDelete(tutorId)
    res.status(200).json({ message: 'Tutor deleted' })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

// TUTOR REQUESTS

exports.getTutorsRequests = async (req, res, next) => {
  try {

    const requests = await RequestTutor.find().populate('userId', '-password')

    if (!requests) {
      const error = new Error('Sorry We could not get any request')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Found tutors', results: requests })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.getSingleTutorRequest = async (req, res, next) => {
  try {
    const requestId = req.params.requestId
    const request = await RequestTutor.findById(requestId).populate('userId', '-password')
    if (!request) {
      const error = new Error('Tutor could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Request found', result: request })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.deleteTutorRequest = async (req, res, next) => {
  try {
    const { requestId } = req.params
    const removedTutor = await RequestTutor.findByIdAndDelete(requestId)
    res.status(200).json({ message: 'Tutor deleted' })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

// TUTOR CATEGORY EXPORTS

exports.createTutorCategory = async (req, res, next) => {
  try {
    const { categoryName, title, thumbnail, url } = req.body
    const tutor = new TutorCategory({
      categoryName
    })
    const result = await tutor.save()
		res.status(201).json({ message: 'Tutor created!', result })
  } catch (err) {
    console.log(err)
  }
}

// JOBS EXPORTS

exports.postJob = async (req, res, next) => {
  try {
    const { title, state, city, phone, amount, duration, experience, category, description, userId } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const job = new Jobs({
      title,
      state,
      city,
      phone,
      amount,
      duration,
      experience,
      category,
      description,
      userId
    })
    const savedJob = await job.save()
    if (!savedJob) {
      const error = new Error('Job not Saved')
      throw error
    }
    res.status(201).json({ message: 'Job saved', result: savedJob })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.getAllApplicant = async (req, res, next) => {
  try {
    const applicants = await Applicant.find().populate('userId', '-password')
    if (!applicants) {
      const error = new Error('No applicants found')
    }
    res.status(200).json({ message: 'Applicants found', results: applicants })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.getSingleApplicant = async (req, res, next) => {
  try {
    const applicantId = req.params.applicantId
    const applicant = await Applicant.findById(applicantId).populate('userId', '-password')
    if (!applicant) {
      const error = new Error('Applicant could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Applicant found', applicant: applicant })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.deleteApplicant = async (req, res, next) => {
  try {
    const applicantId = req.params.applicantId
    const applicant = await Applicant.findByIdAndDelete(applicantId)
    res.status(200).json({ message: 'Applicant deleted' })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.getAllHires = async (req, res, next) => {
  try {
    const hires = await Hire.find().populate('userId', '-password')
    if (!hires) {
      const error = new Error('Hires could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Hires found', results: hires })
  } catch (err) {
    if (!err) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.getHire = async (req, res, next) => {
  try {
    const hireId = req.params.hireId
    const hire = await Hire.findById(hireId).populate('userId', '-password')
    if (!hire) {
      const error = new Error('Hirer could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Hirer found', result: hire })
  } catch (err) {
    if (!err) {
      err.statusCode = 500
    }
    next()
  }
}

exports.deleteHire = async (req, res, next) => {
  try {
    const hireId = req.params.hireId
    const hire = await Hire.findByIdAndDelete(hireId)
    res.status(200).json({message: 'Hire deleted'})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

// FREELANCE EXPORTS

exports.getAllFreelancers = async (req, res, next) => {
  try {
    const freelancers = await Freelance.find().populate('userId', '-password')
    if (!freelancers) {
      const error = new Error('Freelances could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Freelancers found', results: freelancers })
  } catch (err) {
    if (!err) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.getFreelance = async (req, res, next) => {
  try {
    const freelanceId = req.params.freelanceId
    const freelancer = await Freelance.findById(freelanceId).populate('userId', '-password')
    if (!freelancer) {
      const error = new Error('Freelancer could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Freelancer found', result: freelancer })
  } catch (err) {
    if (!err) {
      err.statusCode = 500
    }
    console.log(err)
    next()
  }
}

exports.deleteFreelancer = async (req, res, next) => {
  try {
    const { freelancerId } = req.params
    const freelancer = await Freelance.findByIdAndDelete(freelancerId)
    res.status(200).json({message: 'freelancer deleted'})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}
