import mongoose , {Schema} from 'mongoose';

const InstructorSchema = new Schema({
    name: String,
    job : String,
    about: String,
    image: String
    // reviews: [Review]
});


module.exports = mongoose.model("Instructor", InstructorSchema);
