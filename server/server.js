const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const parentDir = path.normalize(__dirname+"/..");

app.get('/', function(req, res){
    res.sendFile(parentDir + '/client/index.html');
});
app.get('/js/jquery-3.4.1.min.js', function(req, res){
    res.sendFile(parentDir + '/client/js/jquery-3.4.1.min.js');
});
app.get('/js/html5games.websocket.js', function(req, res){
    res.sendFile(parentDir + '/client/js/html5games.websocket.js');
});

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});