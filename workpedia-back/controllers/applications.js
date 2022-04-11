
const Applications = require('../model/Applicantion')
const Jobs = require('../model/Jobs')
const Applicant = require('../model/Applicant')
const Hire = require('../model/Hire')
const User = require('../model/User')

const { validationResult } = require('express-validator')



exports.sendApplications = async  (req, res, next) => {
  const { applicantId, jobId, companyId, userId } = req.body
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    // Find the applicant with id
    const applicant = await Applicant.findById(applicantId)
    if (!applicant) {
      const error = new Error('No applicant will such id.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    // Find job with id
    const job = await Jobs.findById(jobId)
    if (!job) {
      const error = new Error('No job will such id.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    if (!companyId.length) {
      const user = await User.findById(userId)
      if(!user) {
        const error = new Error('No user posted a job as this!!.')
        error.statusCode = 422
        error.data = errors.array()
        throw error
      }
      // console.log(user)
      
    const application = new Applications ({
      applicantCvUrl: applicant.cvUrl,
      applicantId,
      jobId,
      userId
    })
    const result = await application.save()
    res.status(201).json({ message: 'Application sent', application: result })
    }
    if (!userId.length) {
      const hire = await Hire.findById(companyId)
      if(!hire) {
        const error = new Error('No user posted a job as this!!.')
        error.statusCode = 422
        error.data = errors.array()
        throw error
      }
      const application = new Applications ({
        applicantCvUrl: applicant.cvUrl,
        applicantId,
        jobId,
        companyId
      })
      const result = await application.save()
      res.status(201).json({ message: 'Application sent', application: result, applicant: updateApplicant })
    }
  } catch (err) {
    if (!err.statusCode) {
			err.statusCode = 500
		}
		console.log(err)
		next(err)
	}
}

exports.getAllApplications = async (req, res, next) => {
  try {
    const applications = await Applications.find().populate('jobId')
    if (!applications) {
      const error = new Error('No application found.')
      error.statusCode = 500
      error.data = errors.array()
      throw error
    }
    res.status(200).json({ message: 'Applications Found', results: applications })
  } catch (err) {
    if (!err.statusCode) {
			err.statusCode = 500
		}
		console.log(err)
		next(err)
  }
}

exports.getApplication = async (req, res, next) => {
  try {
    const { applicationId } = req.params
    const applications = await Applications.findById(applicationId).populate('jobId')
    if (!applications) {
      const error = new Error('No application found.')
      error.statusCode = 404
      error.data = errors.array()
      throw error
    }
    if (!applications.companyId) {
      const user = await User.findById(applications.userId).select('-password')
      const applicant = await Applicant.findById(applications.applicantId).populate('userId')
      res.status(200).json({ message: 'Application Found', user: user, applicant: applicant, application: applications })
    }
    if (!applications.userId) {
      const company = await Hire.findById(applications.companyId).populate('userId', '-password')
      const applicant = await Applicant.findById(applications.applicantId).populate('userId')
      res.status(200).json({ message: 'Application Found', hirer: company, applicant: applicant, application: applications })
    }
    if (!applications.userId && !applications.companyId) {
      const error = new Error('No user posted a job')
      error.statusCode = 422
      throw error
    }
  } catch (err) {
    if (!err.statusCode) {
			err.statusCode = 500
		}
		console.log(err)
		next(err)
  }
}

exports.adminApproveApplications = async (req, res, next) => {
  try {
    const { applicationId } = req.params
    const applications = await Applications.findById(applicationId)
    if (!applications) {
      const error = new Error('No application found.')
      error.statusCode = 404
      error.data = errors.array()
      throw error
    }
    if (!applications.companyId) {
      const user = await User.findById(applications.userId).select('-password')
      const applicant = await Applicant.findById(applications.applicantId).populate('userId')
      res.status(200).json({ message: 'Application Found', user: user, applicant: applicant, application: applications })
    }
    if (!applications.userId) {
      const company = await Hire.findById(applications.companyId).populate('userId', '-password')
      const applicant = await Applicant.findById(applications.applicantId).populate('userId')
      res.status(200).json({ message: 'Application Found', hirer: company, applicant: applicant, application: applications })
    }
    if (!applications.userId && !applications.companyId) {
      const error = new Error('No user posted a job')
      error.statusCode = 422
      throw error
    }
  } catch (err) {
    if (!err.statusCode) {
			err.statusCode = 500
		}
		console.log(err)
		next(err)
  }
}

exports.deleteApplication = async (req, res, next) => {
  try {
    const { applicationId } = req.params
    const applications = await Applications.findByIdAndDelete(applicationId)
    if (!applications) {
      const error = new Error('No application found.')
      error.statusCode = 404
      error.data = errors.array()
      throw error
    }
    res.status(200).json({ message: 'Applications deleted', result: applications })
  } catch (err) {
    if (!err.statusCode) {
			err.statusCode = 500
		}
		console.log(err)
		next(err)
  }
}
