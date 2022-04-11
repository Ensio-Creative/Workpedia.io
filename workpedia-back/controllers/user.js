const User = require('../model/User')
const Verification = require('../model/Verification')
const Jobs = require('../model/Jobs')
const TutorRequest = require('../model/TutorRequest')
const FreelanceMessage = require('../model/FreelanceMessage')
const { 
  mailgun: { sendEmail }
} = require('../utils')

const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const hashPassword  = require('../utils/auth')

exports.updateUser = async (req, res, next) => {
  const _id = req.params.userId
  const { firstName, lastName, age, email, phone, state, city, address } = req.body
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const user = await User.findById(_id)
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.phone = phone
    user.state = state
    user.city = city
    user.address = address
    const updatedUser = await user.save()
    // console.log(user)
    res.status(203).json({ message: 'Update successful', result: updatedUser })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }

}

exports.updatePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body
    let error
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    
    const _id = req.params.id
    const user = await User.findById(_id)

    const isValid = await bcrypt.compare(oldPassword, user.password)
    if (!isValid) {
      error = new Error('Wrong password')
      error.statusCode = 400
      throw error
    }

    user.password =  await hashPassword(newPassword)
    await user.save()
    res.status(203).json({message: 'Password updated'})
  } catch (error) {
    console.log(error)
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }

}

exports.resendCode = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const verify = await Verification.findOne({ userId })
    if (!verify) {
      const error = new Error('User doesn\'t exist and code can\'t be sent')
      error.statusCode = 400
      throw error
    }
    const code = Math.floor(Math.random() * (999999 - 100000) + 100000)
    verify.code = code
    await verify.save()
    const payload = {
      code: verify.code
    }
    console.log(payload)
    // await sendEmail(payload)
    res.status(203).json({ message: 'Code sent to user\'s email' })
  } catch (err) {
    next(err)
  }
}

// exports.userActivities = async (req, res, next) => {
//   try {
//     const userId = req.params.userId
//     const 
//   } catch (err) {
    
//   }
// }
