const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new mongoose.Schema({
  studentClass: {
    type: Array,
    required: true
  },
  goals: {
    type: String,
    required: true
  },
  exam: {
    type: String,
    required: true
  },
  subjects: {
    type: Array,
    required: true
  },
  address: {
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
  whenToStart: {
    type: String,
    required: true
  },
  timeToStart: {
    type: String,
    required: true
  },
  budget: {
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
  tutorSent: {
    type: Boolean,
    default: false
  },
  userPayed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
		ref: 'users'
  }
}, { timestamps: true })

const request = mongoose.model('tutorrequest', requestSchema)

module.exports = request
