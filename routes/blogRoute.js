const express = require("express");
const { isAdmin, authMiddleware } = require("../middleware/authMiddleware");
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadBlogImages } = require("../controller/blogCtrl");
const { blogImgResize, uploadPhoto } = require("../middleware/uploadImages");
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createBlog);

router.put('/dislikes', authMiddleware, dislikeBlog);
router.put('/likes', authMiddleware, likeBlog);
router.put('/:id', authMiddleware, isAdmin, updateBlog);
router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array("images", 2), blogImgResize, uploadBlogImages);

router.delete('/:id', authMiddleware, isAdmin, deleteBlog);

router.get('/:id', getBlog);
router.get('/', getAllBlogs);


module.exports = router;