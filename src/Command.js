'use strict';

var PlayerModule = require('../test/mock/MockPlayerModule');

module.exports = function Command(websocketServer) {
    var player = PlayerModule(function (topic, message) {
        websocketServer.emit(topic, message);
    });

    return {

        updatePlaybackState: function (command) {
            console.log('Command: ', command);
            player.onPlaybackCommand(command);
        }
    }
};
