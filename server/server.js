var port = 8000;

var WebSocketServer = require('ws').Server;
var server = new WebSocketServer({port: port});

server.on('connection', function (socket) {
    console.log("A connection established.");
});

console.log("WebSocketServer is running.");
console.log("Listening to port: " + port);