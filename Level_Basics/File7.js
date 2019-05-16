var myName=new String();
myName="Aman";
var nameLen=myName.length
/*
while(nameLen>0){
console.log(myName.substr(0,nameLen))
nameLen--;
}
*/
for(var i=nameLen;i>0; i--){
    console.log(myName.substr(0,i))
}
