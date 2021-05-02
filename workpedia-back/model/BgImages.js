const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BgImagesSchema = new Schema({
  landingBgUrl: {
    type: String,
    required: true
  },
  tutorBgUrl: {
    type: String,
    required: true
  },
  tutorCategoryBgUrl: {
    type: String,
    required: true
  },
  jobsBgUrl: {
    type: String,
    required: true
  },
  jobsCategoryBgUrl: {
    type: String,
    required: true
  },
  freelanceBgUrl: {
    type: String,
    required: true
  },
  freelanceCategoryBgUrl: {
    type: String,
    required: true
  }
}, { timestamps: true })

const BgUrlImages = mongoose.model('BgUrlImages', BgImagesSchema)
module.exports = BgUrlImages