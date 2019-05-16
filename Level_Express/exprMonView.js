var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbo
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello ready to use'); });
MongoClient.connect(url,{useNewUrlParser: true }  ,function(err, db) {
   if (err) throw err;
    dbo = db.db("mydbNew");
    dbs=db;
   console.log('MongoDB is Ready to Access');      });
app.get('/show', function (req, res) {
   console.log("Reading data from MongoDB");
   //res.write('Customers Table');
   dbo.collection("employee").find().toArray(function(err, result) {
    if(err) 
       console.log(err);
    console.log(JSON.stringify( result));
      res.json(result);
   }); })
   app.get('/addtoMongo.html',function(req,res){
      con sole.log( __dirname + "/" + "AddtoMongo.html")
       res.sendFile( __dirname + "/" + "AddtoMongo.html" );
    })
    app.get('/addRec',function(req,res){
       //res.writeHead(200,{'Content-Type':'text/html'});
         var pid=req.query.empid; 
         var pname=req.query.empname;
         var pjob=req.query.job;
         var addr =req.query.addr;
         var myrec={empid:pid,empname:pname,job:pjob,address:addr};
         dbo.collection("employee").insertOne(myrec,(err,result)=>{
            if(err)
              console.log(err);
             //console.log(result); 
         })
         console.log('record added')
         res.redirect('./show')
    });
    
app.listen(8900,()=>{console.log("service started")});