const express = require('express')
const Router = express.Router()
const {getAllTickets, createTicket, updateTicket, deleteTicket}
    = require('../controllers/ticketController')
const {verifyToken} = require('../middleware/verifyToken')

Router.route('/').get(getAllTickets).post(createTicket)
Router.route('/:ticketId').put(updateTicket).delete(deleteTicket)

module.exports = Router