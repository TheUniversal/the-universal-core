module.exports = function Command(websocket) {
    return {
        send: function (command) {
            console.log('Command: ', command);
            websocket.emit('playback', command);
        }
    }
};
