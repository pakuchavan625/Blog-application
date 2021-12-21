const express = require("express");
const app= express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const authRouter=require("./routes/authentiaction")

dotenv.config();
app.use(express.json());



mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log("connected to backend")
}).catch((err)=>{
    console.log("not connected to backend")
})

app.use(express.json());
app.use('/api/auth',authRouter);

app.listen("5532",()=>{
    console.log("Backend server is running")
})


