const Freelance = require('../model/Freelancer')
const User = require('../model/User')

const { validationResult } = require('express-validator')

exports.registerFreelance = async (req, res, next) => {
  try {
    const { title, qualifications, institution, qualificationsDate, category, skills, state, city, description, userId } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const user = await User.findById(userId).select('-password')
    if (!user) {
      const error = new Error('User not found')
      error.statusCode = 401
      throw error
    }
    // console.log(user)
    user.isFreelancer = true
    const result = await user.save()
    if (!result) {
      const error = new Error('User not updated')
      error.statusCode = 401
      throw error
    }
    const freelanceHandymen = new Freelance({
      title,
      qualifications,
      institution,
      qualificationsDate,
      category,
      skills,
      state,
      city,
      description,
      thumbnailUrl: 'Add thumbnail',
      cvUrl: 'Add cv',
      userId
    })
    const savedFreelanceHandymen = await freelanceHandymen.save()
    if (!savedFreelanceHandymen) {
      const error = new Error('Freelancer/Handyman Could not be saved')
      throw error
    }
    res.status(201).json({ message: 'Freelance/Handymen saved', user, result: savedFreelanceHandymen})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.updateFreelancerHandymen = async (req, res, next) => {
  try {
    const { freelancerId } = req.params
    const { title, qualifications, institution, qualificationsDate, category, skills, state, city, thumbnailUrl, cvUrl, description } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const freelancer = await Freelance.findById(freelancerId)
    if (!freelancer) {
      const error = new Error('Freelancer/Handymen could no be found')
      error.statusCode = 401
      throw error
    }
    freelancer.title = title,
    freelancer.qualifications = qualifications,
    freelancer.institution = institution,
    freelancer.qualificationsDate = qualificationsDate,
    freelancer.category = category,
    freelancer.skills =  skills,
    freelancer.state = state,
    freelancer.city = city,
    freelancer.thumbnailUrl = thumbnailUrl,
    freelancer.cvUrl = cvUrl,
    freelancer.description = description
    const UpdatedFreelanceHandymen = await freelancer.save()
    if (!UpdatedFreelanceHandymen) {
      const error = new Error('Freelancer/Handyman Could not be saved')
      throw error
    }
    res.status(201).json({ message: 'Freelance/Handymen saved', result: UpdatedFreelanceHandymen})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.getFreelaner = async (req, res, next) => {
  try {
    const { freelancerId } = req.params
    const freelancerHandymen = await Freelance.findById(freelancerId).populate('userId', '-password')
    if (!freelancerHandymen) {
      const error = new Error('Freelancer/Handymen could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Found freelancer', result: freelancerHandymen})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

exports.getFreelanerInfo = async (req, res, next) => {
  try {
    const { userId } = req.params
    const freelancerHandymen = await Freelance.findOne({ userId }).populate('userId', '-password')
    if (!freelancerHandymen) {
      const error = new Error('Freelancer/Handymen could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Found freelancer', result: freelancerHandymen})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.deleteFreelaner = async (req, res, next) => {
  try {
    const { freelancerId } = req.params
    const freelancerHandymen = await Freelance.findByIdAndDelete(freelancerId)
    if (!freelancerHandymen) {
      const error = new Error('Freelancer/Handymen could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Freelancer deleted'})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}