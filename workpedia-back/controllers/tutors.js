const Tutor = require('../model/Tutor')
const User = require('../model/User')

exports.startInfo = async (req, res) => {
	const { description, haveYouTutoredBefore, subject, userId } = req.body
	const user = await User.findById({ _id: userId })
	user.isTutor = true
	user.save()
	const tutor = new Tutor({
		tutorSubject: 'Add this Field',
		class: 'Add this Field',
		courseCategory: 'Add this Field',
		tutorCategory: 'Add this Field',
		description,
		haveYouTutoredBefore,
		subject,
		userId
	})
	return tutor.save()
  .then(result => {
    res.status(201).json({ message: 'Tutor created!', user, result })
  })
	.catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    console.log(err)
  })
}

exports.updateTutor = async (req, res) => {
	const { tutorSubject, tutoredClass, courseCategory, tutorCategory, description, userId } = req.body
	try {
		const user = await User.findById({ _id: userId })
		if (!user) {
			res.status(401).json({ message: 'User not found'})
		}
		const tutor = await Tutor.findById(req.params._id)
		tutor.tutorSubject = tutorSubject
		tutor.tutoredClass = tutoredClass
		tutor.courseCategory = courseCategory
		tutor.tutorCategory = tutorCategory
		tutor.description = description
		const result = await tutor.save()
		res.status(201).json({ message: 'Tutor updated', result })
	} catch (error) {
		console.log(error)
	}
}

exports.getTutor = async (req, res) => {
	const userId = req.params.userId
	console.log(userId)
	try {
		const tutor = await Tutor.findOne({ userId })
		if (!tutor) {
			res.status(400).json({message: 'Tutor Not Found'})
		}
		res.status(200).json(tutor)
	} catch (error) {
		console.log(error)
		res.send(error)
	}
}
