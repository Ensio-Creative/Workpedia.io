// const { validationResult } = require('express-validator/check')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../model/User')

exports.signUp = (req, res, next) => {
  const request = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    state: req.body.state,
    city: req.body.city,
    address: req.body.address
  }
  bcrypt
    .hash(request.password, 12)
    .then(hashedPw => {
      const user = new User({
        firstName: request.firstName,
        lastName: request.lastName,
        phone: request.phone,
        email: request.email,
        password: hashedPw,
        state: request.state,
        city: request.city,
        address: request.address
      })
      return user.save()
    })
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
    const email = req.body.email
    const password = req.body.password
  let loadedUser
  User.findOne({ email })
    .then(user => {
      console.log(user)
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
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString()
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
      )
      // console.log(res)
      res.status(200).json({ token: token, loadedUser})
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
