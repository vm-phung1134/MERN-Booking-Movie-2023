const express = require('express')
const Router = express.Router()
const {getAllFeedBacks, createFeedBack, updateFeedBack, deleteFeedBack}
    = require('../controllers/feedBackController')

Router.route('/').get(getAllFeedBacks).post(createFeedBack)
Router.route('/:feedBackId').put(updateFeedBack).delete(deleteFeedBack)

module.exports = Router