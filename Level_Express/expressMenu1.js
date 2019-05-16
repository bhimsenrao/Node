var express = require('express');
var app = express();
// Menu Block
app.get('/home', function (req, res) {
   res.write("<a href='first'>first</a>||<a href='second'>Next</a>");
   res.end("<hr>");
})

//First Link
app.get('/first', function (req, res) {
 res.writeHeader(200, {"Content-Type": "text/html"});  
   res.write('First Webpage');
   res.end("<a href=home>back</a>");
})

// Next Link
app.get('/second', function (req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});  
   res.write('Welcome to ALL');
   res.end("<a href=home>back</a>");
})
// startup proxy with port
var server = app.listen(8081, function () {
   var host = server.address().host
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s/home",port)
})