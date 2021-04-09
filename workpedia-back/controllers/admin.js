// Models
const User = require('../model/User')
const Applicant = require('../model/Applicant')
const Hire = require('../model/Hire')
const Tutors = require('../model/Tutor')
const Freelance = require('../model/Freelancer')

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
    const applicantId = req.params.applicantId
    const tutor = await Tutors.findById(applicantId).populate('userId', '-password')
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
    const { applicantId } = req.params
    const removedTutor = await Tutors.findByIdAndDelete(applicantId)
    res.status(200).json({ message: 'Tutor deleted' })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

// JOBS EXPORTS
exports.getAllApplicant = async (req, res, next) => {
  try {
    const applicants = await Applicant.find().populate('userId', '-password')
    if (!applicant) {
      const error = new Error('No applicants found')
    }
    res.status(200).json({ message: 'Applicants found', result: applicants })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.getSingleApplicant = async (req, res, next) => {
  try {
    const applicantId = req.params.applicantId
    const applicant = await Tutors.findById(applicantId).populate('userId', '-password')
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
    res.status(200).json({ message: 'Hires found', result: hires })
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
    next(err)
  }
}
