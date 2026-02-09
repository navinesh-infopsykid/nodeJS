const fs = require("node:fs");
// Write Sync
// fs.writeFileSync("text.txt", "Hello Navi");
// console.log("File Writted")

//Read Sync
const  data =fs.readFileSync("text.txt")
console.log(data)