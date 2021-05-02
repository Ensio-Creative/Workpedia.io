const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobsSettingSchema = new Schema({
  applyAmount: {
    type: Number,
    required: true
  },
  applyChance: {
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

JobsSettingSchema.methods.addCategory = function (category) {
  const categories = this.categories
  categories.push(category)
  return this.save()
}

JobsSettingSchema.methods.deleteCategory = function (categoryId) {
  const categories = this.categories.filter(item => {
    return item._id !== categoryId
  })
  return this.save()
}

const JobsSetting = mongoose.model('JobsSetting', JobsSettingSchema)
module.exports = JobsSetting