const crypto = require('crypto')
const axios = require('axios')
const { validationResult } = require('express-validator')
const io = require('../utils/socket')
const client = process.env.SOCKET_ORIGIN
const Payments = require('../model/Payments')
const Applicant = require('../model/Applicant')
const JobsSettings = require('../model/JobsSettings')
const User = require('../model/User')
const FreelanceSettings = require('../model/FreelanceSettings')


const secret = process.env.PAYSTACK_SECRET_KEY
axios.defaults.headers.common.Authorization = `Bearer ${secret}`


exports.webHook = async (req, res, next) => {
  const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');

  if (hash == req.headers['x-paystack-signature']) {

    // Retrieve the request's body

    const event = req.body;

    // Do something with event  
    console.log(event)

  }
  const event = req.body;

    // Do something with event  
    console.log(event, 'Work please')
  res.status(200)
}

exports.applicationSubscription = async (req, res, next) => {
  // It checks the payment if successfull gets applicantId and update applychances
  try {
    let error
    const ref = req.query.reference
    const result = await axios.get(`https://api.paystack.co/transaction/verify/${ref}`)
    
    //now we check for internet connectivity issues
    if(!result.response && result.status!==200) {
      error =  new Error('No internet Connection')
      error.statusCode = 400
      throw error
    }

    const payment = await Payments.findOne({ reference: ref })
    if (!payment) {
      error = new Error('Payment not found')
      error.statusCode = 404
      throw error
    }
    payment.response = result.data.data.status
    await payment.save()

    const applicant = await Applicant.findById(payment.applicantId)
    if (!applicant) {
      error = new Error('Applicant Could not be Found')
      error.statusCode = 404
      throw error
    }
    const jobsSettings = await JobsSettings.find()
    if (result.data.data.status === 'success') {
      applicant.applyChance = jobsSettings[0].applyChance
      const result = await applicant.save()
      io.getIO().emit('applicatSubscription', { action: 'update', applicant: result })
      console.log(result, jobsSettings)
      res.status(201).redirect(`${client}/jobs/update-applicant`)
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.callBack_FreelanceSubcription = async (req, res, next) => {
  try {
    let error
    const ref = req.query.reference
    const result = await axios.get(`https://api.paystack.co/transaction/verify/${ref}`)
    
    //now we check for internet connectivity issues
    if(!result.response && result.status!==200) {
      error =  new Error('No internet Connection')
      error.statusCode = 400
      throw error
    }

    const payment = await Payments.findOne({ reference: ref })
    if (!payment) {
      error = new Error('Payment not found')
      error.statusCode = 404
      throw error
    }
    payment.response = result.data.data.status
    await payment.save()

    const user = await User.findById(payment.userId).select('-password')
    if (!user) {
      error = new Error('User Could not be Found')
      error.statusCode = 404
      throw error
    }
    const freelanceSettings = await FreelanceSettings.find()
    if (result.data.data.status === 'success') {
      user.freelanceHire = true
      const result = await user.save()
      io.getIO().emit('applicatSubscription', { action: 'update', freelancer: result })
      console.log(result, freelanceSettings)
      res.status(201).redirect(`${client}/freelancing/update-freelancer`)
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
    next(err)
  }
}

exports.initPaystack = async (req, res, next) => {
  try {
    const { email, amount, callback_url, purpose, category, userId, applicantId, freelancerId } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed.')
      error.statusCode = 422
      error.data = errors.array()
      throw error
    }
    const realAmount = amount
    const payload = {
      email,
      amount: amount * 100,
      callback_url
    }
    const { data } = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      payload
    )
    const reference = data.data.reference
    const payment = new Payments ({
      email,
      amount: realAmount,
      purpose,
      category,
      reference,
      response: 'Pending',
      userId,
      applicantId,
      freelancerId
    })
    const savedPay = await payment.save()
    console.log(savedPay)
    res.status(201).json({ message: 'Payment Created', url: data.data.authorization_url})
  } catch (error) {
    console.log(error)
    next(error)
  }
}

// exports.fetchRefrence = async(req,res) => {  
 
//   const ref = 'pe10i66bt4'
//  let result;
//  await axios.get(`https://api.paystack.co/transaction/verify/${ref}`)
//  .then((success)=>{
//  result=success;
//  }).catch((error)=>{
//  result=error;
//  });
//  //now we check for internet connectivity issues
//  if(!result.response && result.status!==200) throw new UserInputError("No internet Connection");
//  //next,we confirm that there was no error in verification.
//     if(result.response && !result.response.data.status) throw new       UserInputError( "Error verifying payment , 'unknown Transaction    Reference Id'");
   
//     //we return the result of the transaction
//        res.status(200).send("Payment was successfully verified");
// }

exports.getUserTransactions = async (req, res, next) => {
  try {
    const email = req.params.email
    const transaction = await Payments.find({ email: email })
      .sort({ createdAt: -1 })
    res.status(200).json({ message: 'Transctions found', transactions: transaction })
  } catch (err) {
    console.log(err)
    next(err)
  }
}
