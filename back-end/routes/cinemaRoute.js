const express = require('express')
const Router = express.Router()
const {getAllCinemas, createCinema, updateCinema, deleteCinema, getOneCinema, getDetailCinema}
    = require('../controllers/cinemaController')

Router.route('/').get(getAllCinemas).post(createCinema)
Router.route('/detail').get(getDetailCinema)
Router.route('/:cinemaId').put(updateCinema).delete(deleteCinema).get(getOneCinema)

module.exports = Router