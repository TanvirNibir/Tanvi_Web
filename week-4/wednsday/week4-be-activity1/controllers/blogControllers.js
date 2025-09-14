const Blog = require('../models/blogmodels');


const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({ created: -1 });
    res.status(200).json(blogs);
}

const createBlogs = async (req, res) => {
    const newBlog = await Blog.create({ ...req.body });
    res.status(201).json(newBlog);
}

const getBlogById = async (req, res) => {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId);
    if (blogId) {
        res.status(200).json(blog);
    } else {
        res.status(404).json({ message: "Blog not found" });
    }
}

const updateBlog = async (req, res) => {
    const { blogId } = req.params;

    const updatedBlog = await Blog.findOneAndUpdate(
        { _id: blogId },
        { ...req.body },
        { new: true }
    );
    if (updatedBlog) {
        res.status(200).json(updatedBlog);
    } else {
        res.status(404).json({ message: "Blog not found" });
    }
};


const deleteBlog = async (req, res) => {
    const { BlogId } = req.params;

    const deletedBlog = await Blog.findOneAndDelete({ _id: BlogId });
    if (deletedBlog) {
        res.status(200).json({ message: "Blog deleted successfully" });
    } else {
        res.status(404).json({ message: "Blog not found" });
    }
};


module.exports = {
    getAllBlogs, 
    getBlogById, 
    createBlogs, 
    updateBlog, 
    deleteBlog, 
};