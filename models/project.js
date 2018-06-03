import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
	name: String,
	image: String,
	caption : String,
	github: String,
	description: String,
	prerequisites: [String]
});

export default mongoose.model('Project', projectSchema);