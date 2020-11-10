var express = require('express');
var app = express();
//var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 
var PORT=3000;
var HOST = 'localhost';
var MYSQL_USER = 'root';
var MYSQL_PASS = 'root';
var DATABASE = 'mydb';
var TABLE = 'person'; 

var mysql = mysql.createConnection({
host:HOST,
user: MYSQL_USER,
password: MYSQL_PASS,
database:DATABASE });
app.get('/home',function(req,res,next){
res.sendfile('person.html');  
});

app.post('/myaction', function(req, res) {
  console.log('req.body');
  console.log(req.body);
    res.write('You sent the name "' + req.body.name+'".\n');
    res.write('You sent the ID "' + req.body.id+'".\n');
    res.end()
mysql.query(
"Insert into "+TABLE+" (pid,pname) VALUES ('"+req.body.id+"','"+req.body.name+"')",
function(err, result){                            
  if (err)
     throw err; });
});

function executeQuery(sql, cb) {
    mysql.query(sql, function (err, result, fields) {
        
        if (err) throw err;
        cb(result);
    });
}
//Prints data from table
app.get('/show',function(req,res){
        executeQuery("SELECT * FROM person", 
        function(result){
        res.write("<table border='1'>");
        res.write("<tr>");
        for(var column in result[0]){
            res.write("<th><label>" + column + "</label></th>");
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
app.listen(3000);
console.log('Example app listening at http://localhost:3000/home');