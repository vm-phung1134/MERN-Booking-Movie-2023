const Blog = require('../models/Blog.Model')

exports.getAllBlogs = async (req, res, next) => {
    const blogsCount = await Blog.countDocuments()
    try {
        const blogs = await Blog.find({})
        res.status(200).json({blogs, blogsCount})
    } catch (error) {
        res.json(error)
    }
}

exports.getOneBlog = async (req, res, next) => {
    try {
        const {blogId} = req.params;
        const blog = await Blog.findById(blogId)
        res.status(200).json(blog)
    } catch (error) {
        res.json(error)
    }
}

exports.createBlog = async (req, res, next) => {
    try {
        const blog = await Blog.create({...req.body,like:0})
        res.status(200).json(blog)
    } catch (error) {
        res.json(error)
    }
}

exports.updateBlog = async (req, res, next) => {
    try {
        const {blogId} = req.params;
        const blog = await Blog.findByIdAndUpdate(blogId,{...req.body})
        res.status(200).json(blog)
    } catch (error) {
        res.json(error)
    }
}

exports.deleteBlog = async (req, res, next) => {
    try {
        const {blogId} = req.params;
        await Blog.findByIdAndDelete(blogId)
        res.status(200).json({
            status: 'success',
            message: 'Blog has been deleted'
        })
    } catch (error) {
        res.json(error)
    }
}
