const BCategory = require("../models/blogCategoryModel");
const asyncHandler = require("express-async-handler");
const { validateMongodbId } = require("../utils/validateMongodbId");


const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await BCategory.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodbId(id);
    try {
        const updatedCategory = await BCategory.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodbId(id);
    try {
        const deletedCategory = await BCategory.findByIdAndDelete(id);
        res.json(deletedCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongodbId(id);
    try {
        const getCategory = await BCategory.findById(id);
        res.json(getCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllCategories = asyncHandler(async (req, res) => {
    try {
        const getAllCategories = await BCategory.find();
        res.json(getAllCategories);
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = { createCategory, updateCategory, deleteCategory, getCategory, getAllCategories };