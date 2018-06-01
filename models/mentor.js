import mongoose from 'mongoose';

const mentorScheme = new mongoose.Schema({
	name: String,
	image: String,
	specialization: String,
	linkedIn: String,
	facebook: String,
	mobile: String
});

export default mongoose.model('Mentor', mentorScheme);