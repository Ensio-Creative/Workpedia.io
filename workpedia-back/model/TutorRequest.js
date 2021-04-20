const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new mongoose.Schema({
  studentClass: {
    type: String,
    required: true
  },
  studentGoal: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  moreAboutStudent: {
    type: String,
    required: true
  },
  numberOfStudents: {
    type: String,
    required: true
  },
  lessonType: {
    type: String,
    required: true
  },
  lengthOfLesson: {
    type: String,
    required: true
  },
  curriculum: {
    type: String,
    required: true
  },
  days: {
    type: Array,
    required: true
  },
  hours: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  hearAbout:{
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  nearestBustop: {
    type: String,
    required: true
  },
  nearestLandmark: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  states: {
    type: String,
    required: true
  }, 
  tutorGender: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  }
}, { timestamps: true })

const request = mongoose.model('tutorrequest', requestSchema)

module.exports = request
