const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SendTutorSchema = new Schema({
  tutorRequestId: {
    type: Schema.Types.ObjectId,
		ref: 'tutorrequest'
  },
  tutorId: {
    type: Schema.Types.ObjectId,
		ref: 'tutors'
  },
  pay: {
    type: Number,
		required: true
  },
  extraInfo: {
    type: String,
		required: true
  }
}, { timestamps: true })


const SendTutors = mongoose.model('SendTutor', SendTutorSchema)
module.exports = SendTutors