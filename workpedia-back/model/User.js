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
  age: {
    type: Number,
    required: true,
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
    minLength: 10,
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
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  imageUrl: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  isOperator: {
    type: Boolean,
    default: false
  },
  isTutor: {
    type: Boolean,
    default: false
  },
  isHire: {
    type: Boolean,
    default: false
  },
  isApplicant: {
    type: Boolean,
    default: false
  },
  isFreelancer: {
    type: Boolean,
    default: false
  },
  applicantApply: {
    type: Number,
    default: 0
  },
  freelanceHire: {
    type: Number,
    default: 0
  },
  isVerified: {
    type: Boolean,
    default: false
  },
}, { timestamps: true })


const User = mongoose.model('users', UserSchema)
module.exports = User