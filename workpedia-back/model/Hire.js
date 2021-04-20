const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HireSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  companyWeb: String,
  companyEmail: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200,
    unique: true,
    match: /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  },
  companyPhone: {
    type: String,
    required: true
  },
  social: {
    facebook: String,
    twitter: String,
    linkedIn: String
  },
  companyDescription: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  }
})

const Hire = mongoose.model('hire', HireSchema)
module.exports = Hire