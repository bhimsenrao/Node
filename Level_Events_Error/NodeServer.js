var net = require('net');

var server = net.createServer(
   function(socket) {
	socket.write('Echo server\r\n');
	socket.on('data', function(data){
console.log(data);
var textChunk = data.toString('utf8');
console.log(textChunk);
});
});
server.listen(1337, '127.0.0.1');