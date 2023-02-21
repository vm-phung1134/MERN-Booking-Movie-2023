const express = require('express')
const Router = express.Router()
const {getAllFoods, createFood, updateFood, deleteFood}
    = require('../controllers/foodController')

Router.route('/').get(getAllFoods).post(createFood)
Router.route('/:foodId').put(updateFood).delete(deleteFood)

module.exports = Router