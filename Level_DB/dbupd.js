var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'root',  
  database : 'mydb'  
});  
connection.connect();  
var query = connection.query("UPDATE person SET name = ? where id=?", 
['Vardhan',101] );
console.log("Updated");
 connection.end();