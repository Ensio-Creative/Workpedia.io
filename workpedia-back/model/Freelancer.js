const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FreelanceSchema = new Schema({
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
  qualificationsDate: {
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
  description: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String
  },
  cvUrl: String,
  applyChance: Number,
  ableToFreelance: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  }
})

const freelanceHandymen = mongoose.model('freelance/handymen', FreelanceSchema)
module.exports = freelanceHandymen
