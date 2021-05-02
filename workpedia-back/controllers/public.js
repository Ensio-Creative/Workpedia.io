const Jobs = require('../model/Jobs')
const Freelance = require('../model/Freelancer')
const NewsLetter = require('../model/NewsLetter')
const { validationResult } = require('express-validator')

exports.getData = async (req, res, next) => {
  try {
    // const currentPage = req.query.page || 1
    // const perPage = 3
    const jobs = await Jobs.find()
      .sort({ createdAt: -1 })
      // .skip((currentPage - 1) * perPage)
      // .limit(perPage)
    if (!jobs) {
      const error = new Error('Jobs could not be found')
      error.statusCode = 422
      throw error
    }
    const freelancers = await Freelance.find().populate('userId', '-password')
    if (!freelancers) {
      const error = new Error('Freelances could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Data found', jobs, freelancers })
    // res.send(jobs)
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err)
    console.log(err)
  }
}

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

exports.getAllFreelancers = async (req, res, next) => {
  try {
    const freelancers = await Freelance.find().populate('userId', '-password')
    if (!freelancers) {
      const error = new Error('Freelances could not be found')
      error.statusCode = 500
      throw error
    }
    res.status(200).json({ message: 'Freelancers found', results: freelancers })
  } catch (err) {
    if (!err) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.newsLetter = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Email already on our letters.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const email = req.body.email
    const newsLetter = new NewsLetter({
      email
    })
    await newsLetter.save()
    res.status(200).json({ message: 'You have Subscribed to our newsletters' })
  } catch (err) {
    if (!err) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}
