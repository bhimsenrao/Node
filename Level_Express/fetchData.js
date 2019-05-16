var mysql = require('mysql');
var express = require('express');
var app = express();
app.use(express.static('public'));


//Database connection string
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});

//Connection to database
db.connect();

//Exectues queries on declared db (it can be extended if you want to use more than one db)
function executeQuery(sql, cb) {
    db.query(sql, function (err, result, fields) {
        
        if (err) throw err;
        cb(result);
    });
}
//Prints actors table
app.get('/',function(req,res){
        executeQuery("SELECT * FROM person", 
        function(result){
        res.write("<table border='1'>");
        res.write("<tr>");
        for(var column in result[0]){
            res.write("<td><label>" + column + "</label></td>");
        }
        res.write("</tr>");
        for(var row in result){
            res.write("<tr>");
            for(var column in result[row]){
            res.write("<td><label>" + 
            result[row][column] + "</label></td>");       
        
        }
            res.write("</tr>");         
        }
        res.write("</table>");
          
        console.log(JSON.stringify( result));
    });
});
//HTTP RESPONSE
var server = app.listen(8081, function (req,res) {
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port)
});
