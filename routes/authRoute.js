const express = require("express");
const router = express.Router();

const {
    createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updateaUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgetPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middleware/authMiddleWare");

// User routes
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.post("/forget-password-token", forgetPasswordToken);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/cash-order", authMiddleware, createOrder);

router.get("/wishlist", authMiddleware, getWishlist);
router.get("/getorders", authMiddleware, getOrders);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);

router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);
router.put("/edit-user", authMiddleware, updateaUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

router.get("/cart", authMiddleware, getUserCart);
router.get("/all-users", getallUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);

router.delete("/empty-cart",authMiddleware, emptyCart); 
router.delete("/:id", deleteaUser);

// Admin routes
router.post("/admin-login", loginAdmin);

module.exports = router;
