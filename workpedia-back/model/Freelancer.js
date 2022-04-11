const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FreelanceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: Array,
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
  serviceCharge: {
    type: String,
    required: true
  },
  ableToFreelance: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  }
}, { timestamps: true })

const freelanceHandymen = mongoose.model('freelance/handymen', FreelanceSchema)
module.exports = freelanceHandymen
