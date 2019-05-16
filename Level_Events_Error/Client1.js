var net=require("net");
var client=net.connect({port:1234});
try{

client.on("data",function(data){
      console.log(data);
   var message=JSON.parse(data);
        console.log(message.type);
   if(message.type==="watching"){
      console.log("Now watching:", message.file);
   }
   else if(message.type==="changed"){
      console.log("File '"+message.file+
          "' changed");
   }
});
   }
    catch(err)
   {
       console.log(err);
    //throw Error("Unreqcognized message type:"+
//     message.type);
    }
