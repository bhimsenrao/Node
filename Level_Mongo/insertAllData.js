var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbNew");
  var myobj = [
    {empid:'E102', empname: 'Amar',job:'Executive', address: 'Hyderaguda'},
    {empid:'E103', empname: 'Prasanth',job:'Clerk',address: 'Mehdipatnam'},
    {empid:'E104', empname: 'Chaya',job:'Clerk', address: 'Gachibowli'}
  ];
  dbo.collection("employee").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});