//IMPORTS
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var express = require('express');
var app = express();
app.get('/show',function(req,res){
res.write('Hi...');
console.log(getRecords());

});
function getRecords(){
  var recs=null;
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydbs");
    dbo.collection("customers").find({}).limit(4).toArray(function(err, result) {
      recs=result;
      if (err) throw err;
        // for(i=0;i<result.length;i++)
         // console.log(result[i].name+"   "+result[i].address);
         console.log(result);
      db.close();
    });
  });
  return recs;
  }
  
// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.write('Hello GET');
   

  });
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://127.0.0.1:%s",port)
})
//HTTP RESPONSE
