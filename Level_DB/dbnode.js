var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'root',  
  database : 'mydb'  
});  
connection.connect();  // activate connection
  
connection.query('SELECT * FROM  person', 
 function(err, rows, fields) {  
  if (err) throw err;  
  
  console.log(rows);  
}
);  
  
connection.end();