const Ticket = require('../models/Ticket.Model')

exports.getAllTickets = async (req, res, next) => {
    const ticketsCount = await Ticket.countDocuments()
    try {
        const tickets = await Ticket.find({})
        res.status(200).json({tickets,ticketsCount})
    } catch (error) {
        res.json(error)
    }
}

exports.getOneTicket = async (req, res, next) => {
    try {
        const {ticketId} = req.params;
        const ticket = await Ticket.findById(ticketId)
        res.status(200).json(ticket)
    } catch (error) {
        res.json(error)
    }
}

exports.createTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.create({...req.body})
        res.status(200).json(ticket)
    } catch (error) {
        res.json(error)
    }
}

exports.updateTicket = async (req, res, next) => {
    try {
        const {ticketId} = req.params;
        const ticket = await Ticket.findByIdAndUpdate(ticketId,{...req.body})
        res.status(200).json(ticket)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteTicket = async (req, res, next) => {
    try {
        const {ticketId} = req.params;
        await Ticket.findByIdAndDelete(ticketId)
        res.status(200).json({
            status: 'success',
            message: 'Ticket has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}



