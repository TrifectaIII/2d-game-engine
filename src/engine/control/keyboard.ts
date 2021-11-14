import {InputState} from '.';

// Control System for Keypad

export default class KeyboardControl {

    lastInput: number;

    constructor () {

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
