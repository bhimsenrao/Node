var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydbNew");
  dbo.collection("employee").find().toArray(function(err, result) {
    recs=result;
    if (err) throw err;
       for(i=0;i<result.length;i++)
        console.log(result[i].empname+"   "+result[i].job);
       //console.log(result);
    db.close();
  });
});