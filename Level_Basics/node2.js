//buf = new Buffer(40);  
buf=Buffer.alloc(4);
len = buf.write("welcomes");  
console.log("Content Length: "+  len); 
console.log(buf.toString()); 