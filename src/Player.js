'use strict';

var player;

module.exports = function Player(playerEventDispatcher) {

    return {

        activate: function (playerModule) {
            console.log('Activated player module: ', playerModule.name);
            player = playerModule(playerEventDispatcher);
        },

        info: function () {
            return {
                name: player.name,
                supportedCommands: player.supportedCommands
            }
        },

        updatePlaybackState: function (command) {
            console.log('Playback: ', command);
            player.onPlaybackCommand(command);
        },

        updateVolumeLevel: function (command) {
            console.log('Volume change: ', command);
            player.onVolumeChange(command);
        }
    }
};

