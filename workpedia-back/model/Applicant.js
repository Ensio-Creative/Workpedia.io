const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const ApplicantSchema = new Schema({
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
  }
})
const Applicant = mongoose.model('applicant', ApplicantSchema)
module.exports = Applicant
