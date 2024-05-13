const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const Coupon = require("../models/couponModel");

const { validateMongodbId } = require("../utils/validatemongodbid");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refreshToken");
const sendMail = require("./emailCtrl");

const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const uniqid = require("uniqid");

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        // Create user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User Already Exists");
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    if (findUser && await findUser.isPasswordMatched(password)) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateUser = await User.findByIdAndUpdate(
            findUser._id,
            {
                refreshToken: refreshToken,
            },
            {
                new: true,
            }
        );
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        })
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("Invalied Credentials")
    }
});

// admin login
const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findAdmin = await User.findOne({ email: email });
    if (findAdmin.role !== "admin") throw new Error("Not Authorised");
    if (findAdmin && await findAdmin.isPasswordMatched(password)) {
        const refreshToken = await generateRefreshToken(findAdmin?._id);
        const updateUser = await User.findByIdAndUpdate(
            findAdmin._id,
            {
                refreshToken: refreshToken,
            },
            {
                new: true,
            }
        );
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        })
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            email: findAdmin?.email,
            mobile: findAdmin?.mobile,
            token: generateToken(findAdmin?._id),
        });
    } else {
        throw new Error("Invalied Credentials")
    }
});

// Handle refresh token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.refreshToken) throw new Error("No refresh token in cookie");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error("No refresh token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("There is something wrong with refresh token");
        }
        const accessToken = generateToken(user?._id);
        res.json({ accessToken });
    });
});

// Logout functionality
const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No refresh token in cookie");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken: refreshToken });
    if (!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,
        });
        res.sendStatus(204); // forbidden
    }
    await User.findOneAndUpdate({ refreshToken: refreshToken }, { refreshToken: "" });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204); // forbidden
});

// Update a user
const updateaUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },
            {
                new: true,
            });
        res.json(updatedUser);

    } catch (error) {
        throw new Error(error);
    }
});

// save user address
const saveAddress = asyncHandler(async (req, res, next) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    console.log(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                address: req.body.address, // Updated line without optional chaining
            },
            {
                new: true,
            }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
});


// Get all users
const getallUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});

// Get a single user
const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const getUser = await User.findById(id);
        res.json(getUser);
    } catch (error) {
        throw new Error(error);
    }
});

// Delete a single user
const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.json(deleteUser);
    } catch (error) {
        throw new Error(error);
    }
});

// Block a user
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const block = await User.findOneAndUpdate(
            { _id: id },
            {
                isblocked: true
            },
            {
                new: true
            }
        );
        res.json({
            message: "User blocked",
        });
    } catch (error) {
        throw new Error(error);
    }
});

// Unblock a user
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const unblock = await User.findOneAndUpdate(
            { _id: id },
            {
                isblocked: false
            },
            {
                new: true
            }
        );
        res.json({
            message: "User unblocked",
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    console.log(_id, password);
    validateMongodbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        res.json(user);
    }
});

const forgetPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found with this email!!");
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hi, Please follow this link to reset your password. This link is valied till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>click here<a/>`;
        const data = {
            to: email,
            text: "Hey user",
            subject: "Forget password link",
            html: resetURL
        }
        sendMail(data);
        res.json(token);
    } catch (error) {
        throw new Error(error);
    }
});

const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error("This token is expired, Please try again");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
});

const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const findUser = await User.findById(_id).populate("wishlist");
        res.json(findUser.wishlist);
    } catch (error) {
        throw new Error(error);
    }
});

const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        let products = [];
        const user = await User.findById(_id);
        // check if user already has product in cart
        const alreadyExistCart = await Cart.findOne({ orderBy: user._id });
        if (alreadyExistCart) {
            alreadyExistCart.remove();
        }
        for (let i = 0; i < cart.length; i++) {
            let object = {};
            object.product = cart[i]._id;
            object.count = cart[i].count;
            object.color = cart[i].color;
            let getPrice = await Product.findById(cart[i]._id).select("price").exec();
            object.price = getPrice.price;
            products.push(object);
        }
        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count;
        }
        const newCart = await new Cart({
            products,
            cartTotal,
            orderBy: user._id,
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error);
    }
});

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const cart = await Cart.findOne({ orderBy: _id }).populate("products.product");
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const user = await User.findOne({ _id });
        const cart = await Cart.findOneAndRemove({ orderBy: user._id });
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.user;
    validateMongodbId(_id);
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
        throw new Error(error);
    }
    const user = await User.findOne({ _id });
    let { cartTotal } = await Cart.findOne({ orderBy: user._id }).populate("products.product");
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);
    await Cart.findOneAndUpdate({ orderBy: user._id }, { totalAfterDiscount }, { new: true });
    res.json(totalAfterDiscount);
});

const createOrder = asyncHandler(async (req, res) => {
    const { COD, couponApplied } = req.body;
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        if (!COD) throw new Error("Create cash order failed");
        const user = await User.findById(_id);
        let userCart = await Cart.findOne({ orderBy: user._id });
        let finalAmount = 0;
        if (couponApplied && userCart.totalAfterDiscount) {
            finalAmount = userCart.totalAfterDiscount;
        } else {
            finalAmount = userCart.cartTotal;
        }
        let newOrder = await new Order({
            products: userCart.products,
            paymentIntent: {
                id: uniqid(),
                method: "COD",
                amount: finalAmount,
                status: "Cash on delivery",
                created: Date.now(),
                currency: "usd",
            },
            orderBy: user._id,
            orderStatus: "Cash on delivery",
        }).save();
        let update = userCart.products.map((item) => {
            return {
                updateOne: {
                    filter: { _id: item.product._id },
                    update: { $inc: { quantity: -item.count, sold: +item.count } },
                },
            };
        });
        const updated = await Product.bulkWrite(update, {});
        res.json({ message: "success" });
    } catch (error) {
        throw new Error(error);
    }
});

const getOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const userOrders = await Order.findOne({ orderBy: _id }).populate("products.product").exec();
        res.json(userOrders);
    } catch (error) {
        throw new Error(error);
    }
});

const updateOrderStatus = asyncHandler(async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    try {
        validateMongodbId(id);
        const updateOrderStatus = await Order.findByIdAndUpdate(
            id, {
            orderStatus: status,
            paymentIntent: {
                status: status,
            },
        },
            { new: true });
        res.json(updateOrderStatus);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
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
};