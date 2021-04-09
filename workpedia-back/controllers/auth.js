const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { validationResult } = require('express-validator')

const { 
  auth: hashPassword,
  jwt: { generateToken }
} = require('../utils')

const User = require('../model/User')

exports.signUp = async (req, res, next) => {
  try {
    const { firstName, lastName, age, email, phone, password, state, city, address } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const hash = await hashPassword(password)
    const user = new User({
      firstName,
      lastName,
      age,
      phone,
      email,
      password: hash,
      state,
      city,
      address
    })
    const savedUser = await user.save()
    if (!savedUser) {
      const error = new Error('User could not be saved')
      error.statusCode = 500
      throw error
    }
    res.status(201).json({ message: 'User created!', result })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    let loadedUser = await User.findOne({ email })
    if (!loadedUser) {
      const error = new Error('A user with this email could not be found.')
      error.statusCode = 401
      throw error
    }
    const isEqual = await bcrypt.compare(password, loadedUser.password)
    if (!isEqual) {
      const error = new Error('Wrong password!')
      error.statusCode = 401
      throw error
    }
    const token = generateToken(loadedUser._id.toString(), loadedUser.isVerified, loadedUser.isAdmin)
    let payload = {
      firstName: loadedUser.firstName,
      lastName: loadedUser.lastName,
      age: loadedUser.age,
      phone: loadedUser.phone,
      email: loadedUser.email,
      state: loadedUser.state,
      city: loadedUser.city,
      address: loadedUser.address,
      isAdmin: loadedUser.isAdmin,
      isOperator: loadedUser.isOperator,
      isTutor: loadedUser.isTutor,
      isHire: loadedUser.isHire,
      isApplicant: loadedUser.isApplicant,
      isFreelancer: loadedUser.isFreelancer, 
      isVerified: loadedUser.isVerified,
      token
    }
    res.status(200).json(payload)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}
