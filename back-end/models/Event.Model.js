const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    like: {
        type: String,
    },
    topContent: {
        type: String,
        required: true
    },
    mainContent: {
        type: String,
        required: true
    },
    mainContent2: {
        type: String,
        required: true
    },
    topImage:{
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    date: {
        required: true,
        type: String
    }

}, {timestamps: true})

const Event = mongoose.model('Event', eventSchema)
module.exports  = Event