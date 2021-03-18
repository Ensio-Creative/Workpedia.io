// const { validationResult } = require('express-validator/check')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const hashPassword = require('../utils/auth')
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
  let loadedUser
  User.findOne({ email })
    .then(user => {
      console.log('Found user')
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
      const token = generateToken(loadedUser._id.toString(), loadedUser.email)
      let payload = {
        _id: loadedUser._id,
        firstName: loadedUser.firstName,
        lastName: loadedUser.lastName,
        email: loadedUser.email,
        age: loadedUser.age,
        phone: loadedUser.phone,
        state: loadedUser.state,
        city: loadedUser.city,
        address: loadedUser.address,
        country: loadedUser.country,
        Game: loadedUser.userGame,
        isAdmin: loadedUser.isAdmin,
        isTutor: loadedUser.isTutor,
        isHire: loadedUser.isHire,
        isApplicant: loadedUser.isApplicant,
        isFreelancer: loadedUser.isFreelancer,
        isVerified: loadedUser.isVerified,
        token
      }
      res.status(200).json(payload)
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
