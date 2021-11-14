import {InputState} from '.';

// Control System for Gamepads using HTML5 Gamepad API

export default class GamepadControl {

    connected: boolean;

    lastInput: number;

    constructor () {

        this.connected = false;
        this.lastInput = 0;

    }

    getInput (): InputState {

        return {
            move: {
                right: 1,
                left: 0,
                up: 1,
                down: 0,
            },
            primaryFire: true,
            alternateFire: false,
        };

    }

}
