// The domain class of domain module is used to provide functionality 
//of routing errors and uncaught exceptions to the active Domain object.
var fs = require("fs");  
var domain=require("domain").create();

console.log("Trying.. to get file info!");  

domain.run(
  function(){
    fs.readFile("data.txt","utf8" ,function (error, data) {  
        if (error) {  
          throw error; 
        }  
        console.log(data);  
   });
});	

domain.on("error",function(error){
  console.log("FilenotFound");
});