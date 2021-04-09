const Jobs = require('../model/Jobs')

const { validationResult } = require('express-validator')
const { findById, findOneAndDelete } = require('../model/Jobs')


exports.getJobs = async (req, res, next) => {
  try {
    const jobs = Jobs.find().populate('companyId')
    if (!jobs) {
      const error = new Error('Jobs could not be found')
      error.statusCode = 422
      throw error
    }
    res.status(200).json({ message: 'Jobs found', result: jobs })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
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

exports.postJob = async (req, res, next) => {
  try {
    const { title, state, city, phone, duration, experience, category, description, companyId } = req.body
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
      duration,
      experience,
      category,
      description,
      companyId
    })
    const savedJob = await job.save()
    if (!savedJobs) {
      const error = new Error('Job not Saved')
      throw error
    }
    res.status(201).json({ message: 'Job saved', result: savedJob })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}

exports.deleteJob = async (req, res, next) => {
  try {
    const { companyId } = req.params
    const job = findOneAndDelete({ companyId })
    if (!job) {
      const error = new Error('Not authorized')
      error.statusCode = 401
      throw error
    }
    res.status(200).json({ message: 'Job deleted' })
  } catch (err) {
    if (err.statusCode) {
      err.statusCode = 500
    }
    next(err)
  }
}