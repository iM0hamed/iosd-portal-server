import mongoose from 'mongoose';

const eventScheme = new mongoose.Schema({
    college : String ,
    title: String,
    description: String,
    class: String,
    start: Date,
    end: Date,
});

export default mongoose.model('Event', eventScheme);