import mongoose , {Schema} from 'mongoose';

const InstructorSchema = new Schema({
    name: String,
    age: Date,
    about: String,
    // reviews: [Review]
});


module.exports = mongoose.model("Instructor", InstructorSchema);
