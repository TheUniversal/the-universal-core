'use strict';

module.exports = function Command(player) {

    return {

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
