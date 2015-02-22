'use strict';

var PlayerModule = require('../test/mock/MockPlayerModule');

module.exports = function Command(websocketServer) {
    var player = PlayerModule(websocketServer);

    return {


        updatePlaybackState: function (command) {
            console.log('Command: ', command);
            player.onPlaybackCommand(command);
        },

        updateClient: function () {

        }
    }
};
