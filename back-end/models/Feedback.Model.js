const mongoose = require('mongoose')
const feedBackSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
    
}, {timestamps: true})

const FeedBack = mongoose.model('FeedBack', feedBackSchema)
module.exports  = FeedBack