const express = require("express")
const app = express();


app.listen(3000,()=>{
    console.log("Server is listening")
})



app.get("/",(req,res)=>{
   // res.status(200).send("Get Request Response")
    res.sendFile('./docs/index.html',{root: __dirname});
})

app.get("/home",(req,res)=>{
    res.sendFile('./docs/index.html',{root: __dirname});
})

app.get("/about",(req,res)=>{
    res.sendFile('./docs/about.html',{root: __dirname});
})

app.post("/",(req,res)=>{
    res.status(200).send("Post Requiest Response")
})

app.get('/joinus',(req,res)=>{
    res.redirect('/about')
})
app.use(
    (req,res)=>{
        res.sendFile('./docs/default.html',{root: __dirname});
    }
)

