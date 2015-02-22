'use strict';

var io = require('socket.io')();
var Command = require('./Command');
var command = Command(io);
var PORT = 3000;

io.on('connection', function(socket){
    console.log('Client connected', socket.id);

    socket.on('disconnect', function(){
        console.log('Client disconnected', socket.id);
    });

    socket.on('playback', command.updatePlaybackState);
});

io.listen(PORT);
console.info('Socket.io server listening on port ' + PORT);