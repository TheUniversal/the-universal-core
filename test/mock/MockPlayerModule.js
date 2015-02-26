'use strict';

var commands = require('the-universal-common/command/Commands');

module.exports = function MockPlayerModule(response) {

    return {

        supportedCommands: [
            commands.PLAYBACK.PLAY,
            commands.PLAYBACK.PAUSE,
            commands.PLAYBACK.STOP
        ],

        onPlaybackCommand: function (command) {
            response('playback', command)
        }

    }
};
