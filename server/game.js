function User(socket) {
    this.socket = socket;

// assign a random number to User.
// Long enough to make duplication chance less.
    this.id = "1" + Math.floor(Math.random() * 1000000000);
}

function Room(name) {
    this.name = name;
    this.users = [];
}

Room.prototype.addUser = function (user) {
    this.users.push(user);
    let room = this;

    user.socket.on('disconnect', () => {
        console.log(user.id + ' left.');
        room.removeUser(user);
    })
};

Room.prototype.removeUser = function (user) {
    for (var i = this.users.length; i >= 0; i--) {
        if (this.users[i] === user) {
            this.users.splice(i, 1);
        }
    }
};

Room.prototype.sendAll = function(io,message,socket,room){
  //  io.in(room.name).emit('big-announcement', 'the game will start soon');
  //  io.to(room.name).emit('big-announcement',message);
    //io.to(room.name).emit('chat message', message);
    io.sockets.emit('chat message', "this is a test");
};

module.exports.User = User;
module.exports.Room = Room;