try{

var fs =require('fs');
var net=require('net');
var filename=process.argv[2];
var server=net.createServer(
   function(connection){
     console.log('Connected...');
     connection.write(JSON.stringify({
       type:'watching',
       file:filename})+"\n");

   var watcher=fs.watch(filename,function(){
     connection.write(JSON.stringfy({
       type:'changed',
       file:filename})+"\n");
   });
   
   connection.on("close",function(){
      console.log("disconnected....");
      watcher.close();
     });
});
//if(!filename){
//    throw Error('No target filename was specified');
//  }
server.listen(1234,function(){
   console.log('Listner ready');
});
}
catch(err){
console.log(err);
}