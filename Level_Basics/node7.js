function welcome () {  
  console.log("Welcome to All!");  
}  
console.log('Hiiii');
var id1 = setTimeout(welcome,3000);  

console.log('done');
clearInterval(id1);    
//clearTimeout(id1);  