const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/database");
const morgan = require("morgan")
const userRouter = require("./routers/user");
const votingRouter = require("./routers/voting");
const contactUsrouter = require("./routers/contactUs");

const app = express();

// Database Connectivity
connectDB();

// Morgan console Logs
app.use(morgan("dev"));

// Cors - Allow access from anywhere
app.use(cors());

// Body Parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Api Routes
app.use("/api/user",userRouter);
app.use("/api/voting",votingRouter);
app.use("/api",contactUsrouter);

// PORT
const PORT =  process.env.PORT || 2800;

// Home Route
app.get("/", (req,res) => {
    res.send("Hello Shubham Jain || Welcome to D-Vote Backend !!");
})

// 404 Not Found
app.get("*", (req,res) => {
    res.status(404).send({
        error : `404 Error Occured || URL Not Found !!`
    });
});

// Server listning on that PORT
app.listen(PORT, ()=> {
    console.log(`Server is Running on PORT No ${PORT}`);
})