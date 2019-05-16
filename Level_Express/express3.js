var express = require('express');
var app = express();
app.get('/index.html',function(req, res) {// this is used to load webpage
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/callMe',function(req, res) {// access parameters from query string
   res.writeHead(200,{'Content-Type':'text/html'});
   res.write(req.query.first_name+"<br>");
   response = {
      fname:req.query.first_name,
      lname:req.query.last_name
   };
   console.log(response);   // Prepare output in JSON format
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port)
})