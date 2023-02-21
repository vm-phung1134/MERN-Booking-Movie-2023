const express = require('express')
const Router = express.Router()
const {getAllMovieSoons, createMovieSoon, updateMovieSoon, deleteMovieSoon, getOneMovieSoon}
    = require('../controllers/movieSoonController')

Router.route('/').get(getAllMovieSoons).post(createMovieSoon)
Router.route('/:movieSoonId').put(updateMovieSoon).delete(deleteMovieSoon).get(getOneMovieSoon)
Router.route('/')

module.exports = Router