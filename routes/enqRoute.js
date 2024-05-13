const express = require("express");
const { createEnquiry, updateEnquiry, deleteEnquiry, getEnquiry, getAllEnquirys } = require("../controller/enqCtrl");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");
const router = express.Router();

router.post('/', createEnquiry);
router.put('/:id', authMiddleware, isAdmin, updateEnquiry);
router.delete('/:id', authMiddleware, isAdmin, deleteEnquiry);
router.get('/:id', getEnquiry);
router.get('/', getAllEnquirys);

module.exports = router;