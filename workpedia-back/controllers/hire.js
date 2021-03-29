const Hire = require('../model/Hire')
const User = require('../model/User')

exports.register = async (req, res) => {
  const { companyName, companyWeb, companyEmail, companyPhone, social, companyDescription, userId } = req.body
  try {
    const user = await User.findById({ _id: userId })
		if (!user) {
			res.status(401).json({ message: 'User not found'})
    }
    user.isHire = true
    user.save()
    const newHire = new Hire({
      companyName,
      companyWeb,
      companyEmail,
      companyPhone,
      social,
      companyDescription,
      userId
    })
    const result = await newHire.save()
    // console.log(res)
    res.status(201).json({ message: 'Hire created!', user, result })
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
exports.getHire = async (req, res) => {
  const userId = req.userId
  const hireId = req.params.hireId
}
