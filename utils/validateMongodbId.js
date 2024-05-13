const mongoose = require("mongoose");
const validateMongodbId = (id) => {
    const isValied = mongoose.Types.ObjectId.isValid(id);
    if(!isValied) throw new Error("This id is not valied or not found");
}

module.exports = { validateMongodbId };