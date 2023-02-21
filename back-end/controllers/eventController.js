const Event = require('../models/Event.Model')

exports.getAllEvents = async (req, res, next) => {
    const eventsCount = await Event.countDocuments()
    try {
        const events = await Event.find({})
        res.status(200).json({events, eventsCount})
    } catch (error) {
        res.json(error)
    }
}

exports.getOneEvent = async (req, res, next) => {
    try {
        const {eventId} = req.params;
        const event = await Event.findById(eventId)
        res.status(200).json(event)
    } catch (error) {
        res.json(error)
    }
}

exports.createEvent = async (req, res, next) => {
    try {
        const event = await Event.create({...req.body})
        res.status(200).json(event)
    } catch (error) {
        res.json(error)
    }
}

exports.updateEvent = async (req, res, next) => {
    try {
        const event = await Event.findByIdAndUpdate(EventId,{...req.body})
        res.status(200).json(event)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteEvent = async (req, res, next) => {
    try {
        const {eventId} = req.params;
        await Event.findByIdAndDelete(eventId)
        res.status(200).json({
            status: 'success',
            message: 'Event has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}
