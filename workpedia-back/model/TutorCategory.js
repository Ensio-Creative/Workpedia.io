const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  subCategory: [
    {
      title: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ]
}, { timestamps: true })

const category = mongoose.model('tutorcategory', categorySchema)

module.exports = category
