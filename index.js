//necessary imports
const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");

//configuring env for environment variables
env.config();

//settingup mongodb atlas connection
mongoose.connect(process.env.MONGO_URI, ()=>{
    console.log("Connected to mongoDB atlas")
})

const app = express();
app.listen(process.env.PORT_NUMBER ,()=>{
    console.log(`Server started @PORT: ${process.env.PORT_NUMBER}`)
})