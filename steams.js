//a stream is an abstract interface for handling a
//  continuous flow of data in chunks, while a buffer is a 
// temporary storage area for raw binary data, which streams 
// use internally to manage the data flow
const fs = require('node:fs')
const readStream = fs.createReadStream('./docs/HugeFile.txt');
readStream.on('data',(buffer)=>{
    console.log(buffer.toString);
})