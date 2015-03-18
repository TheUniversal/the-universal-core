'use strict';

var io = require('socket.io')();
var Command = require('./Command');
var PlayerModule = require('../test/mock/MockPlayerModule');
var PlayerEventDispatcher = require('./PlayerEventDispatcher');
var PORT = 3000;

var playerEventDispatcher = PlayerEventDispatcher(io);
var player = PlayerModule(playerEventDispatcher);
var command = Command(player);

io.on('connection', function(socket){
    console.log('Client connected', socket.id);

    socket.on('disconnect', function(){
        console.log('Client disconnected', socket.id);
    });

    socket.on('playback', command.updatePlaybackState);
    socket.emit('player', {
        name: player.name,
        supportedCommands: player.supportedCommands
    });
});

io.listen(PORT);
console.info('Socket.io server listening on port ' + PORT);