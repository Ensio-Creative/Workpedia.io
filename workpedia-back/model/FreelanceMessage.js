const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FreelanceMessageSchema = new Schema({
  message: {
    type: String,
		required: true
  },
  freelancerId: {
    type: Schema.Types.ObjectId,
    ref: 'freelance/handymen'
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  }
}, { timestamps: true })


const FreelanceMessages = mongoose.model('FreelanceMessages', FreelanceMessageSchema)
module.exports = FreelanceMessages