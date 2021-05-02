const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsLetterSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200,
    unique: true,
    match: /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  }
}, { timestamps: true })

const NewsLetter = mongoose.model('NewsLetter', NewsLetterSchema)
module.exports = NewsLetter