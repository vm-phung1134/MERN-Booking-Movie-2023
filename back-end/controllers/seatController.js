const { set } = require('mongoose')
const Seat = require('../models/Seat.Model')

exports.getAllSeats = async (req, res, next) => {
    const productsCount = await Seat.countDocuments()
    try {
        const seats = await Seat.find({})
        res.status(200).json({seats, productsCount})
    } catch (error) {
        res.json(error)
    }
}

exports.getOneSeat = async (req, res, next) => {
    try {
        const {seatId} = req.params;
        const {nameId} = req.params;
        const seat = await Seat.findById(seatId)
        const item = seat.seats.find(x => x.id === nameId)
        res.status(200).json(item)
    } catch (error) {
        res.json(error)
    }
}


exports.updateStatusSeat = async (req, res, next) => {
    try {
        const {seatId} = req.params;
        const {name} = req.body;
        const seat = await Seat.findById(seatId)
        const item = seat.seats.find(x => x.name === name)
        item.status = false
        seat.save()
        res.status(200).json(item)
    } catch (error) {
        res.json(error)
    }
}



exports.createSeat = async (req, res, next) => {
    try {
        const {startTimeId} = req.params;
        const seat = await Seat.create({...req.body, startTimeId: startTimeId})
        res.status(200).json(seat)
    } catch (error) {
        res.json(error)
    }
}

exports.updateSeat = async (req, res, next) => {
    try {
        const {SeatId} = req.params;
        const seat = await Seat.findByIdAndUpdate(SeatId,{...req.body})
        res.status(200).json(seat)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteSeat = async (req, res, next) => {
    try {
        const {seatId} = req.params;
        await Seat.findByIdAndDelete(seatId)
        res.status(200).json({
            status: 'success',
            message: 'Seat has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}
