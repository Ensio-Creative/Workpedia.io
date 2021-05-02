const Jobs = require('../model/Jobs')
const JobsSetting = require('../model/JobsSettings')
const Application = require('../model/Applicantion')
const { validationResult } = require('express-validator')

const io = require('../utils/socket')


exports.getJobs = async (req, res, next) => {
  try {
    // const currentPage = req.query.page || 1
    // const perPage = 3
    const totalItems = await Jobs.find().countDocuments()
    const jobs = await Jobs.find()
      .sort({ createdAt: -1 })
      // .skip((currentPage - 1) * perPage)
      // .limit(perPage)
    if (!jobs) {
      const error = new Error('Jobs could not be found')
      error.statusCode = 422
      throw error
    }
    res.status(200).json({ message: 'Jobs found', results: jobs, totalItems })
    // res.send(jobs)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
    console.log(err)
  }
}

exports.createSettings = async (req, res, next) => {
  try {
    const setting = new JobsSetting({
      applyAmount: 5000
    })
     const result = await setting.save()
    res.status(201).json({ message: 'Setting created', result })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(erro)
    next(error)
  }
}

exports.getJobsSettings = async (req, res, next) => {
  try {
    const result = await JobsSetting.find()
    res.status(200).json({ message: 'Setting found', result: result[0] })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    // console.log(erro)
    next(error)
  }
}

exports.categorySetting = async (req, res, next) => {
  try {
    const settingId = req.params.settingId
    const { title, url } = req.body
    const result = await JobsSetting.findById(settingId)
    const payload = {
      title,
      url
    }
    result.addCategory(payload)
    const responsCategory = result.categories.find(item => {
      return item.title === payload.title
    })
    res.status(200).json({ message: 'Category added', category: responsCategory})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.deleteCategory = async (req, res, next) => {
  try {
    const settingId = req.params.settingId
    const categoryId = req.body.id
    const result = await JobsSetting.findById(settingId)
    result.deleteCategory(categoryId)
    res.status(200).json({ message: 'Category removed'})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    console.log(error)
    next(error)
  }
}

exports.amountJobsSettings = async (req, res, next) => {
  try {
    const settingId = req.params.settingId
    const result = await JobsSetting.findById(settingId)
    result.applyChance = req.body.applyChance
    result.applyAmount = req.body.applyAmount
    const saved = await result.save()
    // console.log(req.body.applyAmount + '00')
    res.status(200).json({ message: 'Amount and chances to apply updated', saved})
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

exports.getJob = async (req, res, next) => {
  try {
    const { jobId } = req.params
    const job = Jobs.findById(jobId).populate('companyId')
    if (!job) {
      const error = new Error('Job not found')
      error.statusCode = 422
      throw error
    }
    res.status(200).json({ message: 'Found job', result: job })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.getCompanyJobs = async (req, res, next) => {
  try {
    const { companyId } = req.params
    const job = Jobs.find(companyId).populate('companyId')
    if (!job) {
      const error = new Error('Job not found')
      error.statusCode = 422
      throw error
    }
    res.status(200).json({ message: 'Found job', results: job })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.postJob = async (req, res, next) => {
  try {
    const { title, state, city, phone, amount, duration, experience, category, description, companyId } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const job = new Jobs({
      title,
      state,
      city,
      phone,
      amount,
      duration,
      experience,
      category,
      description,
      companyId
    })
    const savedJob = await job.save()
    if (!savedJob) {
      const error = new Error('Job not Saved')
      throw error
    }
    io.getIO().emit('jobs', { action: 'create', job: savedJob })
    res.status(201).json({ message: 'Job Posted', result: savedJob })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.updatePost = async (req, res, next) => {
  try {
    const { jobId } = req.params
    const { title, state, city, phone, duration, experience, category, description } = req.body
    const job = await Jobs.findById(jobId)
    if (!job) {
      const error = new Error('Job with id not found')
      error.statusCode = 404
      throw error
    }
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    job.title = title,
    job.state = state,
    job.city = city,
    job.phone = phone,
    job.duration = duration,
    job.experience = experience,
    job.category = category,
    job.description = description
    const savedJob = await job.save()
    if (!savedJob) {
      const error = new Error('Job not Saved')
      throw error
    }
    res.status(201).json({ message: 'Job Updated', result: savedJob })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.deleteJob = async (req, res, next) => {
  try {
    const { jobId } = req.params
    const job = await Jobs.findOneAndDelete(jobId)
    if (!job) {
      const error = new Error('Job not found')
      error.statusCode = 404
      throw error
    }
    const application = await Application.deleteMany({jobId})
    res.status(200).json({ message: 'Job deleted', application})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}