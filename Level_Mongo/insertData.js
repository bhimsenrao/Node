// inserting record to your table
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbNew");
  var myobj = { empid: "E101",empname:'Madhu',job:'Manager',address: "Madhapur" }; // column structure
  dbo.collection("employee").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});