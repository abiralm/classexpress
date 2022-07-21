//necessary imports
const express = require("express");
const env = require("dotenv");

//configuring env for environment variables
env.config();



const app = express();
app.listen(process.env.PORT_NUMBER ,()=>{
    console.log(`Server started @PORT: ${process.env.PORT_NUMBER}`)
})