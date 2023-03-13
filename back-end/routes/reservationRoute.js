const express = require('express')
const Router = express.Router()
const {getAllReservations, createReservation, updateReservation, deleteReservation, getOneReservation}
    = require('../controllers/reservationController')
const {verifyToken} = require('../middleware/verifyToken')

Router.route('/').get(getAllReservations).post(verifyToken, createReservation)
Router.route('/:reservationId').put(updateReservation).delete(deleteReservation).get(getOneReservation)

module.exports = Router