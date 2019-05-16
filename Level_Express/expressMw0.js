 var express=require("express");
 var app=express();
app.use(log)
app.use(hello) 
app.get("/",hello,(req,res)=>{
    res.end("Done")
 });

function log(req,res,next){
    console.log("Log called");
    next();
 }

function hello(req,res,next){
 console.log("Hello called");
 next();
}
app.listen(9981,function(){
console.log("connected");
});
