var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/Login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "Login.html" );
})
app.post('/login', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.writeHead(200,{'Content-Type':'text/html'});
   res.write(req.body.username+"<br>");
   response = { first_name:req.body.username   };
   if(req.body.username==="admin"){
     res.write("welcome admin");   }
   else{    res.write("Login Failed <br>" +
   "<a href='http://localhost:8081/Login.html'>retry</a>");   }
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
   var port = server.address().port
  console.log("Example app listening at http://localhost:%s", port)})