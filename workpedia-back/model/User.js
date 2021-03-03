const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName:{
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200
  },
  lastName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200
  },
  email: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200,
    unique: true,
    match: /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  },
  phone: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1200
  },
  state: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200
  },
  city: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200
  },
  address: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isOperator: {
    type: Boolean,
    default: false
  },
  isVerified: {
    type: Boolean,
    default: false
  },
}, { timestamps: true })


const User = mongoose.model('users', UserSchema)
module.exports = User