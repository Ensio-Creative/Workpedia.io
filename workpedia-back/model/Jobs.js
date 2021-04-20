const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobsSchema = new Schema({
  title: {
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
  phone: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  },
  companyId: {
    type: Schema.Types.ObjectId,
		ref: 'hire'
  }
}, { timestamps: true })

const Jobs = mongoose.model('jobs', JobsSchema)
module.exports = Jobs
