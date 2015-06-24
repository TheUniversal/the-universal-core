'use strict';

var io = require('socket.io')();
var PlayerEventDispatcher = require('./PlayerEventDispatcher');
var PlayerModule = require('../test/mock/MockPlayerModule');
var Player = require('./Player');

var PORT = 3000;
var dispatcher = PlayerEventDispatcher(io);
var player = Player();

io.on('connection', function(socket){
    console.log('Client connected', socket.id);
    socket.emit('player', player.info());

    socket.on('disconnect', function(){
        console.log('Client disconnected', socket.id);
    });

    socket.on('playback', player.updatePlaybackState);
    socket.on('volume', player.updateVolumeLevel);
});

player.load(PlayerModule(dispatcher));
io.listen(PORT);
console.info('Socket.io server listening on port ' + PORT);
