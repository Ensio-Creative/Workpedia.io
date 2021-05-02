const User = require('../model/User')

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
