var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'root',  
  database : 'mydb'  
});  
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } 
console.log('connected as id ' + connection.threadId);
connection.query('SELECT * FROM person', 
function(err, rows, fields)  {  
  if (err) 
    throw err;  
    console.log(rows);  
});
});  
