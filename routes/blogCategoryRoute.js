const express = require("express");
const { createCategory, updateCategory, deleteCategory, getCategory, getAllCategories } = require("../controller/blogCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);
router.get('/:id', getCategory);
router.get('/', getAllCategories);

module.exports = router;