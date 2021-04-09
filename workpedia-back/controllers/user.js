const User = require('../model/User')

const bcrypt = require('bcryptjs')
const hashPassword  = require('../utils/auth')

exports.updateUser = async (req, res) => {
  const _id = req.params.userId
  const { firstName, lastName, age, email, phone, state, city, address } = req.body
  try {
    const user = await User.findById(_id)
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    user.phone = phone
    user.state = state
    user.city = city
    user.address = address
    const updatedUser = await user.save()
    console.log(user)
    res.status(203).json({message: 'Update successful', result: updatedUser})
  } catch (error) {
    console.log(error)
    res.status(422)
  }

}

exports.updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body

    if (!newPassword.length >= 6) {
      res.status(400).json({message: 'Passwords should be at least 6 characters'})
    }
    
    const _id = req.params.id
    const user = await User.findById(_id)

    const isValid = await bcrypt.compare(oldPassword, user.password)
    if (!isValid) {
      res.status(400).send('Invalid Password')
    }

    user.password =  await hashPassword(newPassword)
    await user.save()
    res.status(203).json({message: 'Password updated'})
  } catch (error) {
    console.log(error)
    res.send(error)
  }

}
