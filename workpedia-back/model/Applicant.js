const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicantSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  description: {
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
