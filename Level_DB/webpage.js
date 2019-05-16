var http = require('http');

//HTTP RESPONSE
http.createServer(function (req, res) {
res.write("<h1>hello</h1>");
res.write("<h2>Welcome</h2>");
console.log("Done");
}).listen(8089);
