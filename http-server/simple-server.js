const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/plain"
    });
    res.end("Hello Node js Server");
    
})


server.listen(5000, ()=>{
    console.log("Server Listening")
})