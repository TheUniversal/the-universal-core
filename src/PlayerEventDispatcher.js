'use strict';

module.exports = function PlayerEventDispatcher(websocketServer) {

    return {

        onPlaybackEvent: function (command) {
            websocketServer.emit('playback', command);
        },

        onVolumeChangeEvent: function (command) {
            websocketServer.emit('volume', command);
        }

    }
};
