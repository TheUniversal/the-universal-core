'use strict';

module.exports = function PlayerEventDispatcher(websocketServer) {

    return {

        onPlaybackEvent: function (command) {
            websocketServer.emit('playback', command);
        },

        onVolumeChangeEvent: function (command) {
            websocketServer.emit('volume', command);
        },

        onActivateModule: function(playerInfo){
            websocketServer.emit('player', playerInfo);
        },

        onError: function(error){
            console.log("Error in player module");
            websocketServer.emit('error', error);
        }

    }
};
