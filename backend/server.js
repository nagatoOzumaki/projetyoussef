const dotenv = require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require('./models/userModel');
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const contactRoute = require("./routes/contactRoute");

const app = express();
const errorHandler = require("./maiddleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");
//Middlewares
app.use(express.json());                  //For server
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));             //for using URL
app.use(bodyParser.json());                 //for requestes from frontend to backend
app.use("/api/users" , userRoutes); 
app.use("/api/products" , productRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/contactUs" , contactRoute);
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true,
})
);

app.get("/", (req, res) => {
    res.send("My first project");
});

//Error Middleware
app.use(errorHandler);

//connect with mongoDB

const PORT = process.env.PORT || 6000;

// Connect to DB and start Server
mongoose
     .connect(process.env.MONGO_URI)
     .then(() => {
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        });
     })
     .catch((err) => console.log(err));