const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicantSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  qualifications: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    requried: true
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  skills: String,
  description: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  cvUrl: String,
  applyChance: {
    type: Number,
    default: 0
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  }
}, { timestamps: true })
const Applicant = mongoose.model('applicants', ApplicantSchema)
module.exports = Applicant
