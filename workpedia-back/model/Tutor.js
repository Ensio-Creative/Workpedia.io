const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TutorSchema = new Schema({
	tutorSubject:  Array,
	tutoredClass: Array,
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
}, { timestamps: true })

const Tutor = mongoose.model('tutors', TutorSchema)
module.exports = Tutor
