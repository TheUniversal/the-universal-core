'use strict';

var commands = require('the-universal-common/command/Commands');

module.exports = function MockPlayerModule(websocketServer) {

    return {

        supportedCommands: [
            commands.PLAYBACK.PLAY,
            commands.PLAYBACK.PAUSE,
            commands.PLAYBACK.STOP
        ],

        onPlaybackCommand: function (command) {
            websocketServer.emit('playback', command)
        }

    }
};
