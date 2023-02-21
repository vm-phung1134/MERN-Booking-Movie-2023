const Food = require('../models/Food.Model')

exports.getAllFoods = async (req, res, next) => {
    const foodsCount = await Food.countDocuments()
    try {
        const foods = await Food.find({})
        res.status(200).json({foods,foodsCount})
    } catch (error) {
        res.json(error)
    }
}

exports.getOneFood = async (req, res, next) => {
    try {
        const {foodId} = req.params;
        const food = await Food.findById(foodId)
        res.status(200).json(food)
    } catch (error) {
        res.json(error)
    }
}

exports.createFood = async (req, res, next) => {
    try {
        const food = await Food.create({...req.body})
        res.status(200).json(food)
    } catch (error) {
        res.json(error)
    }
}

exports.updateFood = async (req, res, next) => {
    try {
        const {foodId} = req.params;
        const food = await Food.findByIdAndUpdate(foodId,{...req.body})
        res.status(200).json(food)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteFood = async (req, res, next) => {
    try {
        const {foodId} = req.params;
        await Food.findByIdAndDelete(foodId)
        res.status(200).json({
            status: 'success',
            message: 'Food has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}



