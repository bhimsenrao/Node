var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo
var dbs
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header( "Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
    next();
    });
// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
});
MongoClient.connect(url,{useNewUrlParser: true }  ,function(err, db) {
    if (err) throw err;
    dbo = db.db("mydbs");
    dbs=db;
  console.log('MongoDB is Ready to Access');    
  });
app.get('/show', function (req, res) {
   console.log("Reading data from MongoDB");
   //res.write('Customers Table');
   dbo.collection("customers").find().toArray(function(err, result) {
    if(err) 
       console.log(err);
    console.log(JSON.stringify( result));
      res.json(result);
      //res.send(JSON.stringify( result));
   });
})
app.listen(8900,()=>{console.log("service started")});


app.get('/addtoMongo.html',function(req,res){
  console.log( __dirname + "/" + "AddtoMongo.html")
   res.sendFile( __dirname + "/" + "AddtoMongo.html" );
})
app.get('/addRec',function(req,res){
   //res.writeHead(200,{'Content-Type':'text/html'});
     var pname=req.query.pname;
     var addr =req.query.addr;
     var myrec={name:pname,address:addr};
     dbo.collection("customers").insertOne(myrec,(err,result)=>{
        if(err)
          console.log(err);
         //console.log(result); 
     })
     console.log('record added')
     res.json(myrec);
});
app.get('/delRec',(req,res)=>{
   var myquery = { address: req.query.address };
   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
     if (err) throw err;     console.log(myquery)
     console.log("1 document deleted");
});
res.json(myquery);
});
 module.exports=app;
