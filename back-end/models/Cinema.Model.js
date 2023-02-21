const mongoose = require('mongoose')
const cinemaSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    city: {
        type: String
    },

}, {timestamps: true})

const Cinema = mongoose.model('Cinema', cinemaSchema)
module.exports  = Cinema