var net =require("net");
var server=net.createServer(function(connection){
    console.log("connected");
    connection.write('["type":"changed","file":"da"'); 
    
    var timer=setTimeout(function(){
      connection.write('test.txt"]'+"\n");
      connection.end();
    },3000);    
    connection.on("end",function(){
       clearTimeout(timer);
       console.log("Disconnected");
     });
});
server.listen(1234,function(){
     console.log("Listening....");
});