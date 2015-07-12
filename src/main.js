'use strict';

var io = require('socket.io')();
var PlayerEventDispatcher = require('./PlayerEventDispatcher');
var ModuleService = require('the-universal-modules/ModuleService');

var PORT = 3000;
var dispatcher = PlayerEventDispatcher(io);
var moduleService = ModuleService(dispatcher);

io.on('connection', function(socket){
    console.log('Client connected', socket.id);
    socket.emit('player', moduleService.getPlayerInfo());

    socket.on('disconnect', function(){
        console.log('Client disconnected', socket.id);
    });

    socket.on('playback', moduleService.updatePlaybackState);
    socket.on('volume', moduleService.updateVolumeLevel);
});

io.listen(PORT);
console.info('Socket.io server listening on port ' + PORT);
moduleService.loadModule('mockPlayer');

