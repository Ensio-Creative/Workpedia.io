const Hire = require('../model/Hire')
const User = require('../model/User')

const { validationResult } = require('express-validator')

exports.register = async (req, res, next) => {
  let { companyName, companyWeb, companyEmail, companyPhone, social, companyDescription, userId } = req.body
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const user = await User.findById({ _id: userId }).select('-password')
    let error
		if (!user) {
			error = new Error('User not found')
			error.statusCode = 404
			throw error
    }
    if (!user.isVerified) {
			error = new Error('Please verify your email')
			error.statusCode = 401
			throw error
		}
    if (user.isHire) {
			error = new Error('Your already  hirer!')
			error.statusCode = 401
			throw error
		}
		if (user.isApplicant) {
			error = new Error('You can\'t be an employer and an employee at once')
			error.statusCode = 400
			throw error
		}
    if (user.isAdmin || user.isOperator) {
			error = new Error('You are already an admin!!')
			error.statusCode = 401
			throw error
		}
    user.isHire = true
    user.save()
    if (!companyWeb.length) {
      companyWeb = 'Please add a website'
    }
    if (!social.facebook.length) {
      social.facebook = 'Please add add your facebook url'
    }
    if (!social.twitter.length) {
      social.twitter = 'Please add twitter url'
    }
    if (!social.linkedIn.length) {
      social.linkedIn = 'Please your linkedIn url'
    }
    const newHire = new Hire({
      companyName,
      companyWeb,
      companyEmail,
      companyPhone,
      social,
      companyDescription,
      userId
    })
    const result = await newHire.save()
    // console.log(res)
    res.status(201).json({ message: 'Hire created!', user, result })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.updateHirer = async (req, res, next) => {
  try {
    const { hirerId } = req.params
    let { companyName, companyWeb, companyEmail, companyPhone, social, companyDescription } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const hirer = await Hire.findById(hirerId)
    if (!hirer) {
      const error = new Error('Hirer could no be found')
      error.statusCode = 401
      throw error
    }
    if (!companyWeb.length) {
      companyWeb = 'Please add a website'
    }
    if (!social.facebook.length) {
      social.facebook = 'Please add add your facebook url'
    }
    if (!social.twitter.length) {
      social.twitter = 'Please add twitter url'
    }
    if (!social.linkedIn.length) {
      social.linkedIn = 'Please your linkedIn url'
    }
    hirer.companyName = companyName,
    hirer.companyWeb = companyWeb,
    hirer.companyEmail = companyEmail,
    hirer.companyPhone = companyPhone,
    hirer.social = social,
    hirer.companyDescription =  companyDescription
    const UpdatedHire = await hirer.save()
    if (!UpdatedHire) {
      const error = new Error('Hirer Could not be saved')
      throw error
    }
    res.status(201).json({ message: 'Hire saved', result: UpdatedHire})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.getHirer = async (req, res, next) => {
  try {
    const { hirerId } = req.params
    const hirer = await Hire.findById(hirerId).populate('userId', '-password')
    if (!hirer) {
      const error = new Error('Hirer could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Found Hirer', result: hirer})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

exports.getHirerInfo = async (req, res, next) => {
  try {
    const { userId } = req.params
    const hirer = await Hire.findOne({ userId }).populate('userId', '-password')
    if (!hirer) {
      const error = new Error('Hirer could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Found Hirer', result: hirer})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.deleteHirer = async (req, res, next) => {
  try {
    const { hirerId } = req.params
    const hirer = await Hire.findByIdAndDelete(hirerId)
    if (!hirer) {
      const error = new Error('Hirer could not be found')
      error.statusCode  = 402
      throw error
    }
    res.status(200).json({mesage: 'Hirer deleted'})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
