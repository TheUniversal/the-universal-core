'use strict';

import sio from 'socket.io';
import PlayerEventDispatcher from './PlayerEventDispatcher';
import ModuleService from 'the-universal-modules/ModuleService';

const PORT = 3000;

let io = sio();
let dispatcher = new PlayerEventDispatcher(io);
let moduleService = new ModuleService(dispatcher);

io.on('connection', function(socket){
    console.log('Client connected', socket.id);
    socket.emit('player', moduleService.getModuleInfo());

    socket.on('disconnect', () => console.log('Client disconnected', socket.id));
    socket.on('playback', moduleService.updatePlaybackState);
    socket.on('volume', moduleService.updateVolumeLevel);
});

io.listen(PORT);
console.info('Socket.io server listening on port ' + PORT);
moduleService.loadModule('mockPlayer');

