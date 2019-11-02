const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const parentDir = path.normalize(__dirname + "/..");
var User = require('./game').User;
var Room = require('./game').Room;
var room1 = new Room('game');

app.get('/', function (req, res) {
    res.sendFile(parentDir + '/client/index.html');
});
app.get('/js/jquery-3.4.1.min.js', function (req, res) {
    res.sendFile(parentDir + '/client/js/jquery-3.4.1.min.js');
});
app.get('/js/html5games.websocket.js', function (req, res) {
    res.sendFile(parentDir + '/client/js/html5games.websocket.js');
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

io.on('connect', onConnect);

function onConnect(socket) {
    let user = new User(socket);
    socket.join(room1.name);
    /*  room1.addUser(user);*/
    console.log('a user connected');
    let message = "Welcome " + user.id + " joining the party. Total connection: " + room1.users.length;
    room1.sendAll(io,message,socket,'game');
    console.log(message);
}