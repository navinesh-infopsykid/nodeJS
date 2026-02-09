const filePath = __dirname+__filename;
 const path = require('path')
console.log(filePath)
 console.log(path.__dirname)
 console.log(path.basename(filePath))
 console.log(path.dirname(filePath))
console.log(path.extname(filePath))
 console.log(path.join(__dirname,__filename))