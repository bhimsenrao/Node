var fs=require("fs")
var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "root",  
database: "mydb"  
});  
con.connect(function(err) {  
if (err) throw err;  
con.query("SELECT * FROM person", function (err, result) {  
if (err) 
    throw err;  
for(var row in result){
    for(var column in result[row]){
       console.log(" " + result[row][column] + " ");       

}
  console.log("--------------")
}

console.log(JSON.stringify(result));  
});  
});  