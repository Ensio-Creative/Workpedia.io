const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobsSchema = new Schema({
  title: String,
  state: String,
  city: String,
  phone: String,
  duration: String,
  experience: String,
  category: String,
  description: String,
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  },
  companyId: {
    type: Schema.Types.ObjectId,
		ref: 'hire'
  }
})

const Jobs = mongoose.model('jobs', JobsSchema)
module.exports = Jobs
