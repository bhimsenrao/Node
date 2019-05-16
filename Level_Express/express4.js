var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.static('public'));
app.get('/index1.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index1.htm" );
})
app.post('/data', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   res.writeHead(200,{'Content-Type':'text/html'});
   res.write(req.body.first_name+"<br>");
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
   var port = server.address().port   
   console.log("Example app listening at http:%s/index1.htm",port)
})