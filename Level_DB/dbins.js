var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'root',  
  database : 'mydb'  
});  
connection.connect();  

var post  = {id: 106, pname: 'Hareesh'};
var query = 
connection.query('INSERT INTO person SET ?', 
 post, function(err, result) {
if(err)
  console.log(err.stack);
else{
console.log(query.sql);  //query.sql will insert into table
}
});
connection.end();