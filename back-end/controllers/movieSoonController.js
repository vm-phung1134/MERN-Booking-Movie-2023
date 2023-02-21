const MovieSoon = require('../models/MovieSoon.Model')

exports.getAllMovieSoons = async (req, res, next) => {
    const productsCount = await MovieSoon.countDocuments()
    try {
        const movieSoons = await MovieSoon.find({})
        res.status(200).json({movieSoons, productsCount})
    } catch (error) {
        res.json(error)
    }
}

exports.getOneMovieSoon = async (req, res, next) => {
    try {
        const {movieSoonId} = req.params;
        const movieSoon = await MovieSoon.findById(movieSoonId)
        res.status(200).json(movieSoon)
    } catch (error) {
        res.json(error)
    }
}

exports.createMovieSoon = async (req, res, next) => {
    try {
        const movieSoon = await MovieSoon.create({...req.body})
        res.status(200).json(movieSoon)
    } catch (error) {
        res.json(error)
    }
}

exports.updateMovieSoon = async (req, res, next) => {
    try {
        const {MovieSoonId} = req.params;
        const movieSoon = await MovieSoon.findByIdAndUpdate(MovieSoonId,{...req.body})
        res.status(200).json(movieSoon)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteMovieSoon = async (req, res, next) => {
    try {
        const {movieSoonId} = req.params;
        await MovieSoon.findByIdAndDelete(movieSoonId)
        res.status(200).json({
            status: 'success',
            message: 'MovieSoon has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}

exports.getDetailMovieSoon = async (req, res, next) => {
    try {
        MovieSoon.aggregate([{
            $lookup: {
                from: 'showtimes',
                localField: '_id',
                foreignField: 'movieSoonId',
                as: 'showtimes'
            }
        },
    ]).then(result => {
        res.json(result)
    })
    } catch (error) {
        res.json(error)
    }
}