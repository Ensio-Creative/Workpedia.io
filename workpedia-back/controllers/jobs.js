const Jobs = require('../model/Jobs')

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
    res.status(201).json({ message: 'Job saved', result: savedJob })
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
    res.status(200).json({ message: 'Job deleted' })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}