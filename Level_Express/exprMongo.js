	var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// Create application/x-www-form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.static('public'));

app.get('/InputForm.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "InputForm.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
res.writeHeader(200, {"Content-Type": "text/html"});  

  MongoClient.connect(url, function(err, db) {
             console.log("Ready to Use");   
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name:req.body.name, address: req.body.address };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
   response = {
      fname:req.body.name,
      addr:req.body.address
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})