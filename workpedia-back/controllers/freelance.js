const Freelance = require('../model/Freelancer')
const User = require('../model/User')
const FreelanceSettings = require('../model/FreelanceSettings')
const { validationResult } = require('express-validator')

exports.registerFreelance = async (req, res, next) => {
  try {
    const { title, serviceCharge, category, skills, state, city, description, userId } = req.body
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
    if (user.isFreelancer) {
			error = new Error('You are already a freelancer')
			error.statusCode = 401
			throw error
		}
		if (user.isAdmin || user.isOperator) {
			error = new Error('You are already an admin!!')
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
      serviceCharge,
      category,
      skills,
      state,
      city,
      description,
      thumbnailUrl: 'Add thumbnail',
      resume: 'Add resume',
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
    const { title, category, serviceCharge, skills, state, city, thumbnailUrl, resume, description } = req.body
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
    freelancer.serviceCharge = serviceCharge
    freelancer.category = category,
    freelancer.skills =  skills,
    freelancer.thumbnailUrl = thumbnailUrl,
    freelancer.resume = resume,
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

exports.createSettings = async (req, res, next) => {
  try {
    const setting = new FreelanceSettings({
      hireAmount: 5000
    })
     const result = await setting.save()
    res.status(201).json({ message: 'Setting created', result })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.getFreelanceSettingss = async (req, res, next) => {
  try {
    const result = await FreelanceSettings.find()
    res.status(200).json({ message: 'Setting found', result: result[0] })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    // console.log(erro)
    next(error)
  }
}

exports.categorySetting = async (req, res, next) => {
  try {
    const settingId = req.params.settingId
    const { title, url } = req.body
    const result = await FreelanceSettings.findById(settingId)
    const payload = {
      title,
      url
    }
    result.addCategory(payload)
    const responsCategory = result.categories.find(item => {
      return item.title === payload.title
    })
    res.status(200).json({ message: 'Category added', category: responsCategory})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.deleteCategory = async (req, res, next) => {
  try {
    const settingId = req.params.settingId
    const categoryId = req.body.id
    const result = await FreelanceSettings.findById(settingId)
    result.deleteCategory(categoryId)
    res.status(200).json({ message: 'Category removed'})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.amountFreelanceSettings = async (req, res, next) => {
  try {
    const settingId = req.params.settingId
    const result = await FreelanceSettings.findById(settingId)
    result.hireChance = req.body.hireChance
    result.hireAmount = req.body.hireAmount
    const saved = await result.save()
    // console.log(req.body.hireAmount + '00')
    res.status(200).json({ message: 'Amount and chances to hire updated', saved})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}
