const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const User = require("../models/userModel");
const { validateMongodbId } = require("../utils/validateMongodbId");
const { cloudinaryUploadImg, cloudinaryDeleteImg } = require("../utils/cloudinary");
const fs = require("fs")


const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete({ _id: id });
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        // Filtering
        const queryObj = { ...req.query }
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach(el => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        console.log(queryStr);
        let query = Product.find(JSON.parse(queryStr));

        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // Limiting fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        // Pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("This page dose not exist!!");
        }
        console.log(page, limit, skip);

        const product = await query;
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
});

const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { productId } = req.body;
    validateMongodbId(_id);
    validateMongodbId(productId);
    try {
        const user = await User.findById(_id);
        const alreadyAdded = user.wishlist.find((id) => id.toString() === productId);
        if (alreadyAdded) {
            let user = await User.findByIdAndUpdate(_id, {
                $pull: { wishlist: productId },
            }, {
                new: true,
            });
            res.json(user);
        } else {
            let user = await User.findByIdAndUpdate(_id, {
                $push: { wishlist: productId },
            }, {
                new: true,
            });
            res.json(user);
        }
    } catch (error) {
        throw new Error(error);
    }
});

const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, productId, comment } = req.body;
    try {
        const product = await Product.findById(productId);
        let alreadyRated = product.ratings.find((userId) => userId.postedBy.toString() === _id.toString());
        if (alreadyRated) {
            const updateRating = await Product.updateOne({
                ratings: { $elemMatch: alreadyRated },
            }, {
                $set: { "ratings.$.star": star, "ratings.$.comment": comment },
            }, {
                new: true,
            });
        } else {
            const rateProduct = await Product.findByIdAndUpdate(productId, {
                $push: {
                    ratings: {
                        star: star,
                        comment: comment,
                        postedBy: _id,
                    },
                },
            }, {
                new: true,
            });
        }
        const getAllRatings = await Product.findById(productId);
        let totalRating = getAllRatings.ratings.length;
        let ratingSum = getAllRatings.ratings.map((item) => item.star).reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingSum / totalRating);
        let finalProduct = await Product.findByIdAndUpdate(productId, {
            totalrating: actualRating,
        }, {
            new: true,
        });
        res.json(finalProduct);
    } catch (error) {
        throw new Error(error);
    }

});

const uploadImages = asyncHandler(async (req, res) => {
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

        const images = urls.map((file) => {
            return file
        });
        res.json(images);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = cloudinaryDeleteImg(id, "images");
        res.json({ message: "Deleted" });
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = {
    createProduct,
    getaProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages
};