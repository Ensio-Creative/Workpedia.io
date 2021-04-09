const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TutorSchema = new Schema({
	qualifications:  String,
  institution: String,
	tutorSubject:  String,
	tutoredClass: String,
	courseCategory: String,
	tutorCategory: String,
	description: String,
	haveYouTutoredBefore: Boolean,
	subjectTutorBefore: String,
	cvUrl: String,
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
})

const Tutor = mongoose.model('tutors', TutorSchema)
module.exports = Tutor
