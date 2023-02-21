const express = require('express')
const Router = express.Router()
const {getAllEvents, createEvent, updateEvent, deleteEvent, getOneEvent, getDetailEvent}
    = require('../controllers/eventController')

Router.route('/').get(getAllEvents).post(createEvent)
Router.route('/:eventId').put(updateEvent).delete(deleteEvent).get(getOneEvent)

module.exports = Router