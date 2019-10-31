const websocketGame = {};

$(function () {
    websocketGame.socket = io();

    websocketGame.socket.on('connect', () => {
        console.log("Client connected!");
    });
});