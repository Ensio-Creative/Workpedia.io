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
    unique: true,
    required: true
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