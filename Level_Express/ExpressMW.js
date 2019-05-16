var express = require('express')
var app = express()
var x=10;
var myLogger = function (req, res, next) {
//res.write('Logger');
  console.log('LOGGED')
  x=x+1;
  console.log(x);
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.write('Hello World!')
    res.end();
})
app.listen(3011)