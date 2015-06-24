'use strict';

var player;

module.exports = function Player() {

    return {

        load: function (playerModule) {
            console.log('Loaded player module: ', playerModule.name);
            player = playerModule;
            player.onActivateModule();
        },

        unload: function(){
            console.log('Deactivating player module: ', player.name);
            player.onDeactivateModule();
            player = null;
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

