const ShowTime = require('../models/Showtime.Model')

exports.getAllShowTimes = async (req, res, next) => {
    const showTimesCount = await ShowTime.countDocuments()
    try {
        const showTimes = await ShowTime.find({})
        res.status(200).json(showTimes)
    } catch (error) {
        res.json(error)
    }
}

exports.getOneShowTime = async (req, res, next) => {
    try {
        const {showTimeId} = req.params;
        const showTime = await ShowTime.findById(showTimeId)
        res.status(200).json(showTime)
    } catch (error) {
        res.json(error)
    }
}

exports.createShowTime = async (req, res, next) => {
    try {
        const {movieId} = req.params;
        const {cinemaId} = req.params;
        const showTime = await ShowTime.create({...req.body, movieId: movieId,cinemaId:cinemaId})
        res.status(200).json(showTime)
    } catch (error) {
        res.json(error)
    }
}

exports.updateShowTime = async (req, res, next) => {
    try {
        const {showTimeId} = req.params;
        const showTime = await ShowTime.findByIdAndUpdate(showTimeId,{...req.body})
        res.status(200).json(showTime)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteShowTime = async (req, res, next) => {
    try {
        const {showTimeId} = req.params;
        await ShowTime.findByIdAndDelete(showTimeId)
        res.status(200).json({
            status: 'success',
            message: 'ShowTime has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}



