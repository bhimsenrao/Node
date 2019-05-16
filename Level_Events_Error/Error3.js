// Error handling with try catch block
var fs = require("fs");  
try { 
  fs.readFile("data1.txt","utf8" ,function (error, data) {  
    if (error) {  
      throw error
      //console.log(error) 
    }  
    console.log(data);  
    });
}
catch(error){
  console.error(error)
}
finally{
  console.log('Program ended')
}