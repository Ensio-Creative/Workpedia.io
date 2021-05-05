const Applicant = require('../model/Applicant')
const User = require('../model/User')

const { validationResult } = require('express-validator')

exports.registerApplicant = async (req, res, next) => {
  // It checks the payment if successfull gets your id and create an appicant
  try {
    const { title, qualifications, institution, date, category, skills, state, city, description, userId } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    let error
    const user = await User.findById(userId).select('-password')
    if (!user) {
      error = new Error('User not found')
      error.statusCode = 401
      throw error
    }
    if (!user.isVerified) {
			error = new Error('Please verify your email')
			error.statusCode = 401
			throw error
		}
		if (user.isHire) {
			error = new Error('You can\'t be an eployee and an employer at once')
			error.statusCode = 400
			throw error
		}
		if (user.isApplicant) {
			error = new Error('You are already an applicant!')
			error.statusCode = 400
			throw error
		}
		if (user.isAdmin || user.isOperator) {
			error = new Error('You are already an admin')
			error.statusCode = 401
			throw error
		}
    // console.log(user)
    user.isApplicant = true
    const result = await user.save()
    if (!result) {
      const error = new Error('User not updated')
      error.statusCode = 401
      throw error
    }
    const applicant = new Applicant({
      title,
      qualifications,
      institution,
      date,
      category,
      skills,
      state,
      city,
      description,
      cvUrl: 'Please add Cv',
      userId
    })
    const savedApplicant = await applicant.save()
    if (!savedApplicant) {
      const error = new Error('Applicant Could not be saved')
      throw error
    }
    res.status(201).json({ message: 'Applicant saved', user, result: savedApplicant})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.updateApplicant = async (req, res, next) => {
  try {
    const { applicantId } = req.params
    const { title, qualifications, institution, date, category, skills, state, city, thumbnailUrl, cvUrl, description } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const applicant = await Applicant.findById(applicantId)
    if (!applicant) {
      const error = new Error('Applicant could no be found')
      error.statusCode = 401
      throw error
    }
    applicant.title = title,
    applicant.qualifications = qualifications,
    applicant.institution = institution,
    applicant.date = date,
    applicant.category = category,
    applicant.skills =  skills,
    applicant.state = state,
    applicant.city = city,
    applicant.cvUrl = cvUrl,
    applicant.description = description
    const UpdatedApplicant = await applicant.save()
    if (!UpdatedApplicant) {
      const error = new Error('Applicant/Handyman Could not be saved')
      throw error
    }
    res.status(201).json({ message: 'Applicant saved', result: UpdatedApplicant })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.getApplicant = async (req, res, next) => {
  try {
    const { applicantId } = req.params
    const ApplicantHandymen = await Applicant.findById(applicantId).populate('userId', '-password')
    if (!ApplicantHandymen) {
      const error = new Error('Applicant could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Found Applicant', result: ApplicantHandymen})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

exports.getApplicantInfo = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const ApplicantHandymen = await Applicant.findOne({ userId }).populate('userId', '-password')
    if (!ApplicantHandymen) {
      const error = new Error('Applicant could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Found Applicant', result: ApplicantHandymen})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.deleteApplicant = async (req, res, next) => {
  try {
    const { applicantId } = req.params
    const applicant = await Applicant.findByIdAndDelete(applicantId)
    if (!applicant) {
      const error = new Error('Applicant could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Applicant deleted'})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
