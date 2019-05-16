var fs = require("fs");  
console.log("Trying.. to get file info!");  
fs.readFile('event123.js',"utf8" , function (err, data) {  
    if( err)
      throw err;
    console.log(data);  
   
  });
  	
process.on("uncaughtException",  function(err){
    console.log("FilenotFound");
    console.log(err.stack);
  });
