const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentsSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200,
    match: /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  },
  amount: {
    type: Number,
    required: true,
    minLength: 4
  },
  reference: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    maxLength: 200
  },
  response: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  applicantId: {
    type: Schema.Types.ObjectId,
    ref: 'applicants'
  },
  tutorRequestId: {
    type: Schema.Types.ObjectId,
    ref: 'tutorrequest'
  },
  freelancerId: {
    type: Schema.Types.ObjectId,
    ref: 'freelance/handymen'
  }
}, { timestamps: true })


const Payments = mongoose.model('Payments', PaymentsSchema)
module.exports = Payments