const express = require("express")
const app = express();


app.listen(5000,()=>{
    console.log("Server is listening")
})

app.get("/",(req,res)=>{
    res.status(200).send("Get Requiest Response")
})

app.post("/",(req,res)=>{
    res.status(200).send("Post Requiest Response")
})

