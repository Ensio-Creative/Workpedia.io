const mongoose = require('mongoose')
const Schema = mongoose.Schema

const freelanceSettingSchema = new Schema({
  hireAmount: {
    type: Number,
    required: true
  },
  hireChance: {
    type: Number,
    default: 0
  },
  categories: [
    {
      title: {
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

freelanceSettingSchema.methods.addCategory = function (category) {
  const categories = this.categories
  categories.push(category)
  return this.save()
}

freelanceSettingSchema.methods.deleteCategory = function (categoryId) {
  const categories = this.categories.filter(item => {
    return item._id !== categoryId
  })
  return this.save()
}

const FreelancerSetting = mongoose.model('FreelanceSetting', freelanceSettingSchema)
module.exports = FreelancerSetting