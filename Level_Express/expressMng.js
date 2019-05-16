var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo
var dbs
var results
app.listen(8999,() => {
  console.log('listening to http://localhost:8999/');
});
/*
MongoClient.connect(url,{
  server: {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000
}, useNewUrlParser: true }  ,function(err, db) {
  if (err) throw err;
  dbo = db.db("mydbs");
  dbs=db;
console.log('MongoDB is Ready to Access');
  
});

app.get('/showRecs',function(req,res){
  console.log('Waiting for records');
  dbo.collection("customers").find().limit(4).toArray(function(err, result) {
    if(err) 
       console.log(err);
    console.log(JSON.stringify( result));
    results=result;
    
  });
  //dbs.close();
  res.write(JSON.stringify(results));
 console.log('End of Record...')
});
*/
app.get('/',(req,res)=>{
console.log('default query...');
  res.write('Here');
});

/*
function getRecords(){
    var recs=null;
      MongoClient.connect(url,{ useNewUrlParser: true }  ,function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydbs");
      dbo.collection("customers").find({}).limit(4).toArray(function(err, result) {
        recs=result;
  //      console.log(recs)
        if (err) throw err;
          // for(i=0;i<result.length;i++)
           // console.log(result[i].name+"   "+result[i].address);
           //console.log(result);
        db.close();
      });
    });
    return recs;
    }
  */  
