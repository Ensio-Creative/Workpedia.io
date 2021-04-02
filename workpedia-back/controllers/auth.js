const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { validationResult } = require('express-validator')

const { 
  auth: hashPassword,
  jwt: { generateToken }
} = require('../utils')

const User = require('../model/User')

exports.signUp = async (req, res, next) => {
  const { firstName, lastName, age, email, phone, password, state, city, address } = req.body
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
  return user.save()
  .then(result => {
    res.status(201).json({ message: 'User created!', result })
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  })
    
}

exports.login = (req, res, next) => {
  const { email, password } = req.body
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422)
  }
  let loadedUser
  User.findOne({ email })
    .then(user => {
      if (!user) {
        const error = new Error('A user with this email could not be found.')
        error.statusCode = 401
        throw error
      }
      loadedUser = user
      return bcrypt.compare(password, user.password)
    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error('Wrong password!')
        error.statusCode = 401
        throw error
      }
      const token = generateToken(loadedUser._id.toString(), loadedUser.isVerified, loadedUser.isAdmin)
      let payload = { ...loadedUser._doc, token }
      res.status(200).json(payload)
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
