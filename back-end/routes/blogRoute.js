const express = require('express')
const Router = express.Router()
const {getAllBlogs, createBlog, updateBlog, deleteBlog, getOneBlog}
    = require('../controllers/blogController')

Router.route('/').get(getAllBlogs).post(createBlog)
Router.route('/:blogId').put(updateBlog).delete(deleteBlog).get(getOneBlog)

module.exports = Router