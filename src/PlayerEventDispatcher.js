'use strict';

export default class PlayerEventDispatcher {

    constructor(websocketServer) {
        this.websocketServer = websocketServer;
    }

    onPlaybackEvent(playbackStatus) {
        this.websocketServer.emit('playback', playbackStatus);
    }

    onVolumeChangeEvent(volume) {
        this.websocketServer.emit('volume', volume);
    }

    onActivateModule(moduleInfo){
        this.websocketServer.emit('player', moduleInfo);
    }

    onError(error){
        console.log("Error in player module");
        this.websocketServer.emit('error', error);
    }
}
