const express = require("express");
const { createProduct,
    getaProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages } = require("../controller/productCtrl");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");
const { uploadPhoto, productImgResize } = require("../middleware/uploadImages");

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:id", getaProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/upload", authMiddleware, isAdmin, uploadPhoto.array("images", 10), productImgResize, uploadImages);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);
router.get("/", getAllProducts);

module.exports = router;