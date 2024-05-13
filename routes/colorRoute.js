const express = require("express");
const { createColor, updateColor, deleteColor, getColor, getAllColors } = require("../controller/colorCtrl");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createColor);
router.put('/:id', authMiddleware, isAdmin, updateColor);
router.delete('/:id', authMiddleware, isAdmin, deleteColor);
router.get('/:id', getColor);
router.get('/', getAllColors);

module.exports = router;