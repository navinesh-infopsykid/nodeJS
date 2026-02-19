const http = require('node:http');
const fs= require('node:fs')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/html"
    });
   // res.setHeader('Content-Type','text/html');
   console.log(req.url);
   let path ='../docs/';
   if(req.url=='/home'||req.url=='/'){
        path+= 'index.html';
   }else if(req.url=='/about'||req.url=='/no'){
        path+= 'about.html';
   }else{
    path+='default.html';
   }
    fs.readFile(path,(err, data)=>{
        if(err){
            console.log(err.message);
            res.end();
        }else{
            res.end(data);
        }
    })
    
})


server.listen(5000, ()=>{
    console.log("Server Listening")
})