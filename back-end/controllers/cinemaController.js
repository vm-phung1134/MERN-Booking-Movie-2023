const Cinema = require('../models/Cinema.Model')

exports.getAllCinemas = async (req, res, next) => {
    const cinemasCount = await Cinema.countDocuments()
    try {
        const cinemas = await Cinema.find({})
        res.status(200).json({cinemas, cinemasCount})
    } catch (error) {
        res.json(error)
    }
}

exports.getOneCinema = async (req, res, next) => {
    try {
        const {cinemaId} = req.params;
        const cinema = await Cinema.findById(cinemaId)
        res.status(200).json(cinema)
    } catch (error) {
        res.json(error)
    }
}

exports.createCinema = async (req, res, next) => {
    try {
        const cinema = await Cinema.create({...req.body})
        res.status(200).json(cinema)
    } catch (error) {
        res.json(error)
    }
}

exports.updateCinema = async (req, res, next) => {
    try {
        const cinema = await Cinema.findByIdAndUpdate(CinemaId,{...req.body})
        res.status(200).json(cinema)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteCinema = async (req, res, next) => {
    try {
        const {cinemaId} = req.params;
        await Cinema.findByIdAndDelete(cinemaId)
        res.status(200).json({
            status: 'success',
            message: 'Cinema has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}

exports.deleteMovie = async (req, res, next) => {
    try {
        const {movieId} = req.params;
        await Movie.findByIdAndDelete(movieId)
        res.status(200).json({
            status: 'success',
            message: 'Movie has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}

exports.getDetailCinema = async (req, res, next) => {
    try {
        Cinema.aggregate([{
            $lookup: {
                from: 'movies',
                localField: '_id',
                foreignField: 'cinemaId',
                as: 'movies'
            }
        },
    ]).then(result => {
        res.json(result)
    })
    } catch (error) {
        res.json(error)
    }
}