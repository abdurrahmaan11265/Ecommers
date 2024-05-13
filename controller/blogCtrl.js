const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { validateMongodbId } = require("../utils/validateMongodbId");
const cloudinaryUploadImg = require("../utils/cloudinary")
const fs = require("fs");

const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json({
            status: "success",
            newBlog,
        })
    } catch (error) {
        throw new Error(error);
    }
});

const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const newBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true, });
        res.json({
            status: "success",
            newBlog,
        })
    } catch (error) {
        throw new Error(error);
    }
});

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const blog = await Blog.findByIdAndUpdate(id, {
            $inc: { numViews: 1 },
        }, {
            new: true,
        }).populate('likes').populate('disLikes');
        res.json(blog);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const getBlogs = await Blog.find();
        res.json(getBlogs)
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        res.json(deletedBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongodbId(blogId);

    const blog = await Blog.findById(blogId);
    const loginUserId = req.user._id.toString();

    const isLiked = blog.isLiked;
    const alreadyDisliked = blog.disLikes.find(
        (userId) => userId.toString() === loginUserId
    );

    if (alreadyDisliked) {
        await Blog.findByIdAndUpdate(blogId, {
            $pull: { disLikes: loginUserId },
            isDisliked: false,
        });
    }

    if (isLiked) {
        await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false,
        });
    } else {
        await Blog.findByIdAndUpdate(blogId, {
            $push: { likes: loginUserId },
            isLiked: true,
        });
    }

    const updatedBlog = await Blog.findById(blogId);
    res.json(updatedBlog);
});

const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongodbId(blogId);

    const blog = await Blog.findById(blogId);
    const loginUserId = req.user._id.toString();

    const isDisliked = blog.isDisliked;
    const alreadyLiked = blog.likes.find(
        (userId) => userId.toString() === loginUserId
    );

    if (alreadyLiked) {
        await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            isLiked: false,
        });
    }

    if (isDisliked) {
        await Blog.findByIdAndUpdate(blogId, {
            $pull: { disLikes: loginUserId },
            isDisliked: false,
        });
    } else {
        await Blog.findByIdAndUpdate(blogId, {
            $push: { disLikes: loginUserId },
            isDisliked: true,
        });
    }

    const updatedBlog = await Blog.findById(blogId);
    res.json(updatedBlog);
});

const uploadBlogImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        const findBlog = await Blog.findByIdAndUpdate(
            id,
            {
                $push: { images: { $each: urls } }, // Push each URL into the "images" field
            },
            {
                new: true,
            }
        );
        res.json(findBlog);
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadBlogImages };