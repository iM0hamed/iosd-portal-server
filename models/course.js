import mongoose, {Schema} from 'mongoose';

const CourseSchema = new Schema({
    title: String,
    sub_title: String,
    description: String,
    image : String,

    // review: [Review],

    prerequisites: [{
        type: String
    }],

    Instructor: {
        name: String,
        job : String,
        about: String,
        image: String
    } ,

    videos: [{
        id: Schema.Types.ObjectId,
        title: String,
        url: String,
        section : String,
        duration: Number
    }]
} , {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

CourseSchema
    .virtual('total_videos')
    .get(function () {
        return this.videos.length;
    });

CourseSchema
    .virtual('duration')
    .get(function () {
        let d = 0;
        this.videos.map(video => {
            d += video.duration
        });
        return d;
    });

module.exports = mongoose.model("Course", CourseSchema);
