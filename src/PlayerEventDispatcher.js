'use strict';

module.exports = function PlayerEventDispatcher(websocketServer) {

    return {

        onPlaybackEvent: function (playbackStatus) {
            websocketServer.emit('playback', playbackStatus);
        },

        onVolumeChangeEvent: function (volume) {
            websocketServer.emit('volume', volume);
        },

        onActivateModule: function(moduleInfo){
            websocketServer.emit('player', moduleInfo);
        },

        onError: function(error){
            console.log("Error in player module");
            websocketServer.emit('error', error);
        }

    }
};
