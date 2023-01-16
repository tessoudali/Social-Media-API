const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    createdById: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: ''
    },
    description: {
        required: [true, 'Description must be provided'],
        type: String,
        default : ""
    },
    postPicturePath: {
        type: String,
        default: ''
    },
    likes: {
        type : Array,
        default : []
    },
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)