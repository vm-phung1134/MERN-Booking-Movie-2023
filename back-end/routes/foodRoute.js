const express = require('express')
const Router = express.Router()
const {getAllFoods, createFood, updateFood, deleteFood, getOneFood}
    = require('../controllers/foodController')

Router.route('/').get(getAllFoods).post(createFood)
Router.route('/:foodId').put(updateFood).delete(deleteFood).get(getOneFood)

module.exports = Router