//Limit the result to only return 3 documents:

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbs");
  dbo.collection("customers").find({}).limit(3).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});