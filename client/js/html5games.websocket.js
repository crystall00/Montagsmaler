const websocketGame = {};

$(function () {
    websocketGame.socket = io();

    websocketGame.socket.on('chat message', (msg) => {
        console.log(msg);
        console.log("Client received message!");
    });
    websocketGame.socket.on('disconnect', function(){
        websocketGame.socket.broadcast.emit('chat message', 'Im out!');
        //websocketGame.socket.broadcast.emit('chat message', 'I left');
    });
});
