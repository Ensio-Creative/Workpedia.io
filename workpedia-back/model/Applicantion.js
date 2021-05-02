const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicationSchema = new Schema({
  applicantCvUrl:{
    type: String,
    required: true
  },
  applicantId: {
    type: Schema.Types.ObjectId,
		ref: 'applicants'
  },
  jobId: {
    type: Schema.Types.ObjectId,
		ref: 'jobs'
  },
  companyId: {
    type: Schema.Types.ObjectId,
		ref: 'hire'
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  }
}, { timestamps: true })


const Applications = mongoose.model('applications', ApplicationSchema)
module.exports = Applications