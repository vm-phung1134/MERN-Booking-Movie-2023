const Movie = require('../models/Movie.Model')

exports.getAllMovies = async (req, res, next) => {
    const productsCount = await Movie.countDocuments()
    try {
        const movies = await Movie.find({})
        res.status(200).json({movies, productsCount})
    } catch (error) {
        res.json(error)
    }
}

exports.getOneMovie = async (req, res, next) => {
    try {
        const {movieId} = req.params;
        const movie = await Movie.findById(movieId)
        res.status(200).json(movie)
    } catch (error) {
        res.json(error)
    }
}

exports.createMovie = async (req, res, next) => {
    try {
        const movie = await Movie.create({...req.body})
        res.status(200).json(movie)
    } catch (error) {
        res.json(error)
    }
}

exports.updateMovie = async (req, res, next) => {
    try {
        const {MovieId} = req.params;
        const movie = await Movie.findByIdAndUpdate(MovieId,{...req.body})
        res.status(200).json(movie)
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

exports.getDetailMovie = async (req, res, next) => {
    try {
        Movie.aggregate([{
            $lookup: {
                from: 'showtimes',
                localField: '_id',
                foreignField: 'movieId',
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