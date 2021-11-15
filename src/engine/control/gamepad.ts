import {InputState} from '.';

// Control System for Gamepads using HTML5 Gamepad API

export default class GamepadControl {

    connected: boolean;

    lastInput: number;

    gamepad: Gamepad | null;

    constructor () {

        this.connected = false;
        this.lastInput = 0;
        this.gamepad = null;

        window.addEventListener(
            'gamepadconnected',
            (event: GamepadEvent) => {

                this.gamepad = event.gamepad;
                this.connected = true;
                console.log(this);

            },
        );

        window.addEventListener(
            'gamepaddisconnected',
            (event: GamepadEvent) => {

                this.gamepad = event.gamepad;
                this.connected = false;
                console.log(this);

            },
        );

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
        } as InputState;

    }

}
