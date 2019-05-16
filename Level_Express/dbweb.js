//IMPORTS
var express= require('express');
app=express();
var mysql = require('mysql');

//HTTP RESPONSE
app.get('/home',function(req,res) {
    fetchData(res);
});
app.listen(8089);

//Database connection string
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
//Connection to database
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database!");
});
//Exectues queries on declared db (it can be extended if you want to use more than one db)
function executeQuery(sql, cb) {
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        cb(result);
    });
}
//Prints person table
function fetchData(res){
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
               res.write("<td><label>" +result[row][column] + "</label></td>");               
            }
            res.write("</tr>");         
        }
        res.write("</table>");
    });
}