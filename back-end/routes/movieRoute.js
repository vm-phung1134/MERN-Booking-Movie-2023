const express = require('express')
const Router = express.Router()
const {getAllMovies, createMovie, updateMovie, deleteMovie, getOneMovie, getDetailMovie}
    = require('../controllers/movieController')

Router.route('/').get(getAllMovies).post(createMovie)
Router.route('/detail').get(getDetailMovie)
Router.route('/:movieId').put(updateMovie).delete(deleteMovie).get(getOneMovie)
Router.route('/')

module.exports = Router