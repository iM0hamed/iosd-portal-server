import mongoose from 'mongoose';

const eventScheme = new mongoose.Schema({
    college : String ,
    title: String,
    description: String,
    date: String,
    image : String,
    link : String
});

export default mongoose.model('Event', eventScheme);