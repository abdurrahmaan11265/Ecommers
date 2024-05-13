const express = require("express");
const dbConnect = require("./config/dbconnect");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/productCategoryRoute");
const blogCategoryRouter = require("./routes/blogCategoryRoute");
const brandRouter = require("./routes/brandRoute");
const colorRouter = require("./routes/colorRoute");
const enquiryRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");

const PORT = process.env.PORT || 4000;

dbConnect();


app.use(morgan('dev')); // To console.log the type of requests being requested to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enuiry", enquiryRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`)
})