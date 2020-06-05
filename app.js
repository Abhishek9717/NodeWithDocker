const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello! Welcome to Docker Example")
})

app.listen(3000,(err)=>{
    if(!err){
        console.log("connected");
    }
})