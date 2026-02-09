const os = require('node:os')
console.log("Platform : ",os.platform());
console.log("Architecture : ",os.arch());
console.log("Total Memory : ",os.totalmem());
console.log("Total Memory in GB : ",Math.round(os.totalmem()/1024 ** 3),'GB');
console.log("Free memory in GB : ",Math.round(os.freemem()/1024 ** 3),'GB');
console.log("Home Direcctory : ",os.homedir());
console.log("CPU Cores : ",os.cpus().length);
console.log("OS UPtime : ",os.uptime());