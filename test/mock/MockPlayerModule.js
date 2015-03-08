'use strict';

var commands = require('the-universal-common/command/Commands');

module.exports = function MockPlayerModule(playerEventDispatcher) {

    return {

        name: 'Mock player',

        supportedCommands: [
            commands.PLAYBACK.PLAY,
            commands.PLAYBACK.PAUSE,
            commands.PLAYBACK.STOP
        ],

        onPlaybackCommand: function (command) {
            playerEventDispatcher.onPlaybackEvent(command);
        },

        onVolumeChange: function (command) {
            playerEventDispatcher.onVolumeChange(command);
        }

    }
};
