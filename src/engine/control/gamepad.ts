import {InputState, defaultInputState} from '.';

// Control System for Gamepads using HTML5 Gamepad API

export default class GamepadControl {

    lastInput: number;

    inputState: InputState;

    gamepadCount: number;

    constructor () {

        this.lastInput = 0;
        this.inputState = defaultInputState();
        this.gamepadCount = 0;

        window.addEventListener(
            'gamepadconnected',
            (event: GamepadEvent) => { this.gamepadCount += 1; },
        );

        window.addEventListener(
            'gamepaddisconnected',
            (event: GamepadEvent) => { this.gamepadCount -= 1; },
        );

    }

    get connected (): boolean { return this.gamepadCount > 0; }

    getInputs (): InputState {

        // Retrieve first gamepad in array
        const [gamepad] = navigator.getGamepads().filter((pad) => pad !== null);

        // Return defaults if no active gamepads
        if (!gamepad) return defaultInputState();

        return this.inputState;

    }

}
