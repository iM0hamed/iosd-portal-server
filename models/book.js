import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	name: String,
	author: String,
	year: String,
	description: String,
	image: String,
	link: String,
	category: String,
	color: String
});

module.exports = mongoose.model("Book", bookSchema);