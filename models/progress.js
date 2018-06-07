import mongoose , {Schema} from 'mongoose';

const ProgressSchema = new Schema({

    User : {
        type: Schema.Types.ObjectId,
        ref: 'User',
    } ,

    Course : {
        type: Schema.Types.ObjectId,
        ref: 'Course',
    } ,

    watched : {
        // watched[videoId] = true if video is watched
        // watched[videoId] = false or undefined if video is watched

    }

});

module.exports = mongoose.model('Progress' , ProgressSchema);