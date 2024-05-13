const { default: mongoose } = require("mongoose")

const dbConnect = ()=> {

    try {
        // mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", { useNewUrlParser: true });
        const conn = mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch(error) {
        console.log(error);
    }
}

module.exports = dbConnect;